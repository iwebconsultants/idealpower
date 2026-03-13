import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as Mailjet from "node-mailjet";

admin.initializeApp();

export const onContactFormSubmit = functions.firestore
  .document("contact_submissions/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    
    try {
      // 1. Configuration
      const apiKey = "34209e84ac2f429ee03e1ccbb0621275";
      const apiSecret = "f2ed0a2836989dd20bb201d4e3a03c01";
      const recaptchaSecret = "6LeDiYcsAAAAAFbQk8FGRgi27BxXJfZDfTcB-uS0";
      const contactEmail = "info@idealpower.com.au";

      // 2. Verify reCAPTCHA
      if (data.recaptchaToken) {
        console.log("Verifying reCAPTCHA token...");
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${data.recaptchaToken}`, {
          method: 'POST'
        });
        const recaptchaResult: any = await response.json();
        
        const score = recaptchaResult.score ?? 0;
        if (!recaptchaResult.success || score < 0.5) {
          console.error("reCAPTCHA verification failed or low score:", recaptchaResult);
          return snap.ref.update({ 
            status: "spam", 
            recaptchaScore: score,
            recaptchaError: recaptchaResult['error-codes']?.join(', ') || 'unknown'
          });
        }
        console.log("reCAPTCHA verified with score:", score);
      } else {
        console.warn("No reCAPTCHA token provided in submission.");
      }

      // 3. Initialize Mailjet
      const mailjet = (Mailjet as any).apiConnect(apiKey, apiSecret);

      // 4. Send Emails via Mailjet
      const result = await mailjet
        .post("send", { version: 'v3.1' })
        .request({
          Messages: [
            // Admin Notification
            {
              From: {
                Email: "info@idealpower.com.au",
                Name: "Ideal Power Website"
              },
              To: [
                {
                  Email: contactEmail,
                  Name: "Ideal Power Admin"
                }
              ],
              ReplyTo: {
                Email: data.email,
                Name: `${data.firstName} ${data.lastName}`
              },
              Subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
              TextPart: `
                Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Phone: ${data.phone || 'N/A'}
                
                Message:
                ${data.message}
              `,
              HTMLPart: `
                <h3>New Website Inquiry</h3>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
              `
            },
            // User Confirmation
            {
              From: {
                Email: "info@idealpower.com.au",
                Name: "Ideal Power"
              },
              To: [
                {
                  Email: data.email,
                  Name: `${data.firstName} ${data.lastName}`
                }
              ],
              Subject: `Inquiry Received - Ideal Power`,
              TextPart: `Hi ${data.firstName}, thank you for contacting Ideal Power. We have received your message and will get back to you soon.\n\nYour message:\n${data.message}`,
              HTMLPart: `
                <p>Hi ${data.firstName},</p>
                <p>Thank you for contacting Ideal Power. We have received your message and will get back to you soon.</p>
                <hr/>
                <p><strong>Your Message:</strong></p>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
              `
            }
          ]
        });

      console.log(`Email sent successfully via Mailjet for submission ${context.params.docId}`, result.body);
      
      // 4. Update status
      return snap.ref.update({ status: "sent", sentAt: admin.firestore.FieldValue.serverTimestamp() });

    } catch (error: any) {
      console.error("Error processing contact form with Mailjet:", error);
      return snap.ref.update({ status: "error", error: error.message });
    }
  });
