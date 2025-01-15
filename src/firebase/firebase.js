import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBL1S2-t56suhjMzzaTrMiL3KOQpreFsu8",
  authDomain: "insta-clone-918c0.firebaseapp.com",
  projectId: "insta-clone-918c0",
  storageBucket: "insta-clone-918c0.appspot.com",
  messagingSenderId: "448425323252",
  appId: "1:448425323252:web:2a47e66fc8df8db35ccca1",
  measurementId: "G-5MHNBRDC3R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
