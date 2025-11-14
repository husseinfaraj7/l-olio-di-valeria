/**
 * Placeholder Firebase configuration.
 * Replace the values below with your Firebase project settings and
 * ensure sensitive keys are stored securely (e.g. via environment configs).
 */
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

/**
 * Initializes Firebase in the frontend.
 * Call this from other modules when real credentials are available.
 */
export function initializeFirebase(applyInit = true) {
  if (!applyInit) {
    console.info('[Firebase] Initialization skipped (placeholder mode).');
    return null;
  }

  console.warn('[Firebase] SDK not loaded yet. Add Firebase scripts before calling initializeFirebase.');
  return null;
}
