// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTspxZp3aRgxtDeDyoHCAwMa-dCBGwjew",
  authDomain: "expresso-emporium.firebaseapp.com",
  projectId: "expresso-emporium",
  storageBucket: "expresso-emporium.appspot.com",
  messagingSenderId: "973791341669",
  appId: "1:973791341669:web:7054e957657e47148b6a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;