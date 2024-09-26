import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
        clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL as string,
        privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') as string,
    }),
   
  });
}

export const db = admin.firestore(); 
export default admin;