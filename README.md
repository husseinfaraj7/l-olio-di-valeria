# L'Olio di Valeria Static Site

This repository contains the static marketing and e-commerce pages for l'Olio di Valeria. The codebase is being prepared for deployment to Firebase Hosting following the migration plan in `firebase_migration_plan.md`.

## Project Structure

```
public/
  assets/      # Images and other static assets used by the pages
  js/          # Front-end scripts and placeholder logic for forms
  styles/      # Stylesheets shared by the site
  *.html       # Static pages served by Firebase Hosting
firebase_migration_plan.md
README.md
```

All files inside `public/` are deployable to Firebase Hosting. Keep any design references or working documents outside of this directory so they are not published by accident.

## Local Development

Any static HTTP server can be used to preview the site locally. For example, with Python installed:

```bash
cd public
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Firebase Hosting Workflow

1. Install the Firebase CLI: `npm install -g firebase-tools`.
2. Authenticate: `firebase login`.
3. Initialize the project (already configured for Hosting only):
   ```bash
   firebase init
   ```
4. Run the local emulator to preview the site: `firebase emulators:start --only hosting`.
5. Deploy once satisfied: `firebase deploy --only hosting`.

The Firebase configuration files generated in this repository assume `public/` is the hosting directory.

## Placeholder Back-end Hooks

Placeholder scripts in `public/js/` (e.g., `contact.js`, `cart.js`, `firebase-config.js`) currently log submission data and display mock success/error messages. Replace these stubs with real Firebase integrations when backend services are ready.

