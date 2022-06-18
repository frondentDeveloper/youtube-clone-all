// import firebase from "firebase/app";
import firebase from "firebase/app";


import "firebase/auth"

// const firebaseConfig = {
//     // AIzaSyAhf6IjX3FMXfpHRyY1YvxWuwKwIKOCFAA
//     apiKey: "AIzaSyC5trwX4ebcChuagFnlz47z_i0NzFu7dYY",
//     authDomain: "youtub-e-clone-samandar.firebaseapp.com",
//     projectId: "youtub-e-clone-samandar",
//     storageBucket: "youtub-e-clone-samandar.appspot.com",
//     messagingSenderId: "432873216357",
//     appId: "1:432873216357:web:d01abd75d94325f55de98c"
//     // 432873216357-ri6kddg0ef28gi9hg9qqkvqetptipru5.apps.googleusercontent.com
//
// };

const firebaseConfig = {
    apiKey: "AIzaSyAhf6IjX3FMXfpHRyY1YvxWuwKwIKOCFAA",
    authDomain: "youtub-e-clone-samandar.firebaseapp.com",
    projectId: "youtub-e-clone-samandar",
    storageBucket: "youtub-e-clone-samandar.appspot.com",
    messagingSenderId: "432873216357",
    appId: "1:432873216357:web:d01abd75d94325f55de98c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth()
