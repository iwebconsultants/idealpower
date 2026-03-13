
import admin from 'firebase-admin';

// Initialize admin on the machine - it will try to use application default credentials
admin.initializeApp({
  projectId: "idealpower-sydney"
});

const db = admin.firestore();

async function updateSettings() {
  const settingsRef = db.doc('site_settings/main');
  
  const data = {
    mailjetApiKey: "34209e84ac2f429ee03e1ccbb0621275",
    mailjetSecretKey: "f2ed0a2836989dd20bb201d4e3a03c01",
    contactEmail: "info@idealpower.com.au",
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };

  try {
    await settingsRef.set(data, { merge: true });
    console.log("Successfully updated Mailjet credentials in Firestore!");
  } catch (error) {
    console.error("Error updating Firestore:", error);
    process.exit(1);
  }
}

updateSettings();
