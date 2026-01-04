// config.js
const firebaseConfig = {
  apiKey: "AIzaSyDnz8j8PGmcDLgnBTud7WjdifjLuqtWJp8",
  authDomain: "detect-37b15.firebaseapp.com",
  databaseURL: "https://detect-37b15-default-rtdb.firebaseio.com",
  projectId: "detect-37b15",
  storageBucket: "detect-37b15.firebasestorage.app", // Saya koreksi sedikit URL bucketnya agar standar
  messagingSenderId: "957745441114",
  appId: "1:957745441114:web:aee86cc3c1926db287eb63",
  measurementId: "G-8KFP6VMVDD"
};

// Initialize Firebase (Mencegah error double init)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();
