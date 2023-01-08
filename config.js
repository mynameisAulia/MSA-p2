import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkqq5zLNlKqkpNoosGIrXD26BNMGRFDlg",
  authDomain: "msa-auth-18e18.firebaseapp.com",
  projectId: "msa-auth-18e18",
  storageBucket: "msa-auth-18e18.appspot.com",
  messagingSenderId: "1061298002510",
  appId: "1:1061298002510:web:2e7d421745630b716bc11f",
  measurementId: "G-LKNSMS4XV5"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
