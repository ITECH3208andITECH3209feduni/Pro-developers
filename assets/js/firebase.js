var firebaseConfig = {
    apiKey: "AIzaSyB9xJTQPeuNGLXpRUUP1UJ9Uvsn0SaYXts",
    authDomain: "to-do-99308.firebaseapp.com",
    projectId: "to-do-99308",
    storageBucket: "to-do-99308.appspot.com",
    messagingSenderId: "155862218990",
    appId: "1:155862218990:web:7e933cd518a56b86d61bff"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();