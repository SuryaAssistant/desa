// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBXnmmzJCnVp65ddd7dcmB_-WmCz-uemJM",
authDomain: "jetislordatabase.firebaseapp.com",
databaseURL: "https://jetislordatabase-default-rtdb.firebaseio.com",
projectId: "jetislordatabase",
storageBucket: "jetislordatabase.appspot.com",
messagingSenderId: "70907439081",
appId: "1:70907439081:web:773c9b97342c7c5b0d0d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
var dbRef = ref(db, "info_penting");

// Get Database
onValue(dbRef, (snapshot) => {
    info_penting = snapshot.val();
    updateInfoPenting();
});

function updateInfoPenting(){
    if(info_penting != "" && info_penting != undefined){
        document.getElementById("info_penting").innerHTML = `
        <div class="alert alert-primary" role="alert" style="font-size:12px">
            <Strong>INFO PENTING</Strong>
            <br>
            ${info_penting}
        </div>
        `;
    };
}