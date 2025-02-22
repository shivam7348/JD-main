import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDPP5skzoVGTC5GM_QrKXmisElH_mqxWRk",
  authDomain: "jd-2-68341.firebaseapp.com",
  projectId: "jd-2-68341",
  storageBucket: "jd-2-68341.firebasestorage.app",
  messagingSenderId: "442791914498",
  appId: "1:442791914498:web:8982704b6bebc8d6180b1b",
  measurementId: "G-95H0ESDD9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default app

export {storage, analytics}