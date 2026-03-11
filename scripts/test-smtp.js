
const nodemailer = require('nodemailer');

// INSTRUCTIONS: Update these values to test your SMTP settings
// Run with: node scripts/test-smtp.js
const smtpConfig = {
    host: 'smtp.gmail.com', // e.g., smtp.gmail.com
    port: 587,              // e.g., 587 or 465
    user: 'info@idealpower.com.au',
    pass: 'PASTE_YOUR_PASSWORD_OR_APP_PASSWORD_HERE' 
};

async function testSMTP() {
    console.log("--- SMTP DIAGNOSTIC START ---");
    console.log(`Testing connection to ${smtpConfig.host}:${smtpConfig.port}...`);
    
    const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.port === 465,
        auth: {
            user: smtpConfig.user,
            pass: smtpConfig.pass,
        },
    });

    try {
        await transporter.verify();
        console.log("SUCCESS: SMTP credentials are valid and connection is successful!");
        
        console.log("Sending test email...");
        await transporter.sendMail({
            from: smtpConfig.user,
            to: smtpConfig.user,
            subject: "SMTP Test from Ideal Power Diagnostic",
            text: "If you are reading this, your SMTP settings are 100% correct."
        });
        console.log("SUCCESS: Test email sent successfully.");
    } catch (error) {
        console.error("FAILURE: SMTP verification failed.");
        console.error("ERROR CODE:", error.code);
        console.error("ERROR MESSAGE:", error.message);
        
        if (error.message.includes('535-5.7.8')) {
            console.log("\nTIP: This error usually means the Username/Password is wrong.");
            console.log("If using GMAIL, ensure you are using an 'APP PASSWORD' (16 characters) and NOT your main account password.");
        }
    }
    console.log("--- SMTP DIAGNOSTIC END ---");
}

testSMTP();
