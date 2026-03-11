import fs from 'fs';
import path from 'path';

// Using fetch to get data from Firestore REST API avoids needing the heavy firebase-admin SDK
// Project ID: 1062273457899
const PROJECT_ID = "1062273457899";
const URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/site_settings/main`;

console.log(`[Build] Fetching latest CMS content from Firestore...`);

fetch(URL)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      console.error("[Build] Error fetching from Firestore:", data.error.message);
      process.exit(0); // Don't break the build if it's just missing
    }

    // Convert Firestore Document format to standard JSON 
    // e.g., { fields: { heroHeadline: { stringValue: "..." } } } -> { heroHeadline: "..." }
    const content = {};
    if (data.fields) {
        for (const [key, valueObj] of Object.entries(data.fields)) {
            // Firestore stores values under their type name e.g. stringValue, integerValue
            const val = Object.values(valueObj)[0];
            content[key] = val;
        }
    }

    // Only write if we actually got data
    if (Object.keys(content).length > 0) {
        const destPath = path.join(process.cwd(), 'src', 'content.json');
        fs.writeFileSync(destPath, JSON.stringify(content, null, 2));
        console.log(`[Build] Successfully updated src/content.json with latest database values.`);
    } else {
        console.log(`[Build] No fields found in Firestore document. Using existing content.json fallback.`);
    }
  })
  .catch(err => {
    console.error("[Build] Failed to fetch content from Firestore. Using local content.json instead.", err);
    // We intentionally don't exit(1) because we want the build to succeed 
    // using the local fallback json if the database is unreachable
  });
