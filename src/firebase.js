import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import "firebase/firestore";
// import { auth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDSNsIgTtNNRD-sIpqUC-_wA5QkcHRRoTo",
  authDomain: "whatsapp-clone-3c19e.firebaseapp.com",
  projectId: "whatsapp-clone-3c19e",
  storageBucket: "whatsapp-clone-3c19e.appspot.com",
  messagingSenderId: "860014091548",
  appId: "1:860014091548:web:6062190de81e3a04382ed9",
  measurementId: "G-G3MHFG9TRX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// // // const authenticator = auth();
// const provider = new authenticator.GoogleAuthProvider();

// // export { authenticator, provider };
export default db;
