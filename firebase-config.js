// ---------------------------------------------------------------------------
// Firebase config for Recitation Ledger's Google sign-in + cross-device sync.
//
// This is a ONE-TIME setup done by the app owner (not by individual teachers).
// Once this file has real values, "Sign in with Google" works for everyone
// automatically -- no setup required on the teacher's end.
//
// SETUP (about 5 minutes):
//   1. Go to https://console.firebase.google.com and create a project
//      (any name -- e.g. "Recitation Ledger")
//   2. Build > Authentication > Get started > Sign-in method > enable "Google"
//   3. Authentication > Settings > Authorized domains > add your GitHub Pages
//      domain, e.g.  codebreaklibrary.github.io
//   4. Build > Firestore Database > Create database > start in
//      "production mode" (any region is fine)
//   5. In Firestore > Rules, replace the rules with the block below this
//      comment, then click Publish:
//
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /users/{userId} {
//              allow read, write: if request.auth != null && request.auth.uid == userId;
//            }
//          }
//        }
//
//   6. Project settings (gear icon) > General > scroll to "Your apps" >
//      click the </> (Web) icon > register an app (any nickname) >
//      it will show you a firebaseConfig object -- copy those values into
//      the object below, replacing the placeholders.
// ---------------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyDRwYoF68vEy37onHOzEREZ0aZPOSmKL9s",
  authDomain: "recitation-ledger.firebaseapp.com",
  projectId: "recitation-ledger",
  storageBucket: "recitation-ledger.firebasestorage.app",
  messagingSenderId: "981877748354",
  appId: "1:981877748354:web:bc0f2d5ba857a0cedd3a9b"
};

let firebaseReady = false;
try {
  if (firebaseConfig.apiKey && firebaseConfig.apiKey.indexOf('YOUR_') !== 0) {
    firebase.initializeApp(firebaseConfig);
    firebaseReady = true;
  }
} catch (e) {
  firebaseReady = false;
}
