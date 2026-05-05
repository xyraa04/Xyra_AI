import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Debug: Log the private key format (remove in production!)
console.log('Private key exists:', !!process.env.FIREBASE_PRIVATE_KEY);
console.log('Project ID:', process.env.FIREBASE_PROJECT_ID);
console.log('Client Email:', process.env.FIREBASE_CLIENT_EMAIL);

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Initialize Firebase Admin
let adminApp;
try {
  if (getApps().length === 0) {
    adminApp = initializeApp({
      credential: cert(serviceAccount as any),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
    console.log('Firebase Admin initialized successfully');
  } else {
    adminApp = getApps()[0];
    console.log('Using existing Firebase Admin app');
  }
} catch (error) {
  console.error('Firebase Admin initialization error:', error);
  throw error;
}

const adminAuth = getAuth(adminApp);
const adminDb = getFirestore(adminApp);

// Test Firestore connection
adminDb.listCollections()
  .then(() => console.log('Firestore connected successfully'))
  .catch((err) => console.error('Firestore connection error:', err));

export { adminAuth, adminDb };