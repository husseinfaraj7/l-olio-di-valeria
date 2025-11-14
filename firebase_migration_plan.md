# Firebase Hosting Preparation Plan

The goal of this plan is to bring the existing static website to a clean, organized structure that can be deployed to Firebase Hosting with minimal Firebase services enabled. After these steps the site will be ready for deeper e-commerce and automation work that you can continue separately.

## 1. Organize the Project Structure
- Group assets inside clear folders (e.g., keep images in `assets/`, scripts in `js/`, and styles in `styles/`).
- Create a top-level `public/` directory and move deployable static files there (`index.html`, `shop.html`, `assets/`, etc.).
- Keep source or working files (design references, drafts) outside of `public/` to avoid deploying them by accident.
- Add a basic `README.md` with project purpose, folder layout, and how to run Firebase emulators/hosting.

## 2. Initialize Firebase in the Project
- Install the Firebase CLI locally and run `firebase login` with your Google account.
- From the project root, run `firebase init` and enable only **Hosting**. Decline every other Firebase product so the project remains simple.
- When prompted, set `public/` as the hosting directory and choose single-page app routing only if the site needs it.
- Commit the generated `firebase.json` and `.firebaserc` files.

## 3. Prepare Placeholder Front-end Hooks
- If you expect to add dynamic features later, create stub files in the front end (inside `public/js/`) that simply log or simulate the intended behavior.
- Keep Firebase SDK initialization out of the project until real credentials are available. If you want to document future setup, use comments in `firebase-config.js` without importing any Firebase libraries.
- Describe where backend automation would live (e.g., external services or future Firebase Extensions) in project documentation rather than adding unused Firebase features now.

## 4. Basic Contact and Storefront Forms
- Review existing forms (contact, newsletter, checkout). Keep their HTML structure but route submissions to placeholder JavaScript functions.
- In `js/`, add minimal modules (`contact.js`, `cart.js`) that currently log data to the console. Later you can replace the console logs with Firebase calls.
- Ensure all forms show friendly placeholder success/error messages so the UI behaves well even before real backend logic exists.

## 5. Deployment Checklist
- Run `firebase emulators:start --only hosting` to preview the static site locally and verify asset paths.
- Execute `firebase deploy --only hosting` to publish the organized static site to Firebase Hosting.
- Confirm that the live site serves the reorganized structure and that console placeholders do not break navigation or forms.

## 6. Next Steps (For Future Work)
- Replace placeholder configuration with real project credentials stored securely once you are ready to opt into additional services.
- Evaluate whether Firebase products such as Firestore or Cloud Functions are necessary; keep them disabled until there is a concrete requirement.
- Connect external automations (SMTP provider, payment gateway, inventory tools) separately from the Hosting project so the core deployment stays static.
- Expand e-commerce capabilities (cart persistence, payment gateway) incrementally after the basic deployment is stable.

By completing the steps above, the project will have a clean static foundation ready to deploy to Firebase Hosting, giving you a solid base for the more advanced features you plan to add later.
