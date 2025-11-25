import {initializeApp} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBE3H35RZc71hMDvOvQB6AugemFvHxmnJ8",
  authDomain: "coffee-management-7fe65.firebaseapp.com",
  projectId: "coffee-management-7fe65",
  storageBucket: "coffee-management-7fe65.firebasestorage.app",
  messagingSenderId: "787025729632",
  appId: "1:787025729632:web:db3765feae5187950b0b05",
  measurementId: "G-2SSDG1YFFS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
