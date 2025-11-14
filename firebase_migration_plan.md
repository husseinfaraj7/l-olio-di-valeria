# Firebase Hosting Preparation Plan

The goal of this plan is to bring the existing static website to a clean, organized structure that can be deployed to Firebase Hosting with minimal Firebase services enabled. After these steps the site will be ready for deeper e-commerce and automation work that you can continue separately.

## 1. Organize the Project Structure
- Group assets inside clear folders (e.g., keep images in `assets/`, scripts in `js/`, and styles in `styles/`).
- Create a top-level `public/` directory and move deployable static files there (`index.html`, `shop.html`, `assets/`, etc.).
- Keep source or working files (design references, drafts) outside of `public/` to avoid deploying them by accident.
- Add a basic `README.md` with project purpose, folder layout, and how to run Firebase emulators/hosting.

## 2. Initialize Firebase in the Project
- Install the Firebase CLI locally and run `firebase login` with your Google account.
- From the project root, run `firebase init` and enable only **Hosting** (and optionally **Functions** if you want placeholders).
- When prompted, set `public/` as the hosting directory and choose single-page app routing only if the site needs it.
- Commit the generated `firebase.json`, `.firebaserc`, and placeholder files.

## 3. Prepare Placeholder Backend Hooks
- If you expect to add dynamic features later, create stub files:
  - `functions/index.js` (or `functions/src/index.ts`) exporting empty Cloud Functions for future order/contact handling.
  - A simple `/js/firebase-config.js` that loads environment variables but keeps values empty or commented.
- Document where Firebase SDK initialization will happen in the frontend once credentials are added.

## 4. Basic Contact and Storefront Forms
- Review existing forms (contact, newsletter, checkout). Keep their HTML structure but route submissions to placeholder JavaScript functions.
- In `js/`, add minimal modules (`contact.js`, `cart.js`) that currently log data to the console. Later you can replace the console logs with Firebase calls.
- Ensure all forms show friendly placeholder success/error messages so the UI behaves well even before real backend logic exists.

## 5. Deployment Checklist
- Run `firebase emulators:start --only hosting` to preview the static site locally and verify asset paths.
- Execute `firebase deploy --only hosting` to publish the organized static site to Firebase Hosting.
- Confirm that the live site serves the reorganized structure and that console placeholders do not break navigation or forms.

## 6. Next Steps (For Future Work)
- Replace placeholder Firebase configuration with real project credentials stored securely.
- Implement Firestore/Realtime Database reads for product data and Cloud Functions for order processing when ready.
- Connect an SMTP provider from Cloud Functions to send notifications to admins and customers.
- Expand e-commerce capabilities (cart persistence, payment gateway) incrementally after the basic deployment is stable.

By completing the steps above, the project will have a clean static foundation ready to deploy to Firebase Hosting, giving you a solid base for the more advanced features you plan to add later.
