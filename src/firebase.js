import firebase from 'firebase';


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
    
    apiKey: "AIzaSyDOBfiwx8D7fk8uFpnTakE_-1RKOvZilks",
    authDomain: "todo-app-react-5dc51.firebaseapp.com",
    projectId: "todo-app-react-5dc51",
    storageBucket: "todo-app-react-5dc51.appspot.com",
    messagingSenderId: "45435421766",
    appId: "1:45435421766:web:1679ee3f7255022c75f647",
    measurementId: "G-QLKSXDH579"
    

});


const db = firebaseApp.firestore();


export default db ;