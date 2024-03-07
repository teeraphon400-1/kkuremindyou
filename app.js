import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  
const firebaseConfig = {
    apiKey: "AIzaSyCpUOWJ6Y5AI3QQakEwUqVsh2_7A4BfJHY",
    authDomain: "trydatabase-2a1ed.firebaseapp.com",
    projectId: "trydatabase-2a1ed",
    storageBucket: "trydatabase-2a1ed.appspot.com",
    messagingSenderId: "317818965160",
    appId: "1:317818965160:web:5647bd2e4f292786e7c69d",
    measurementId: "G-90E9MBNQRR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  
  const form = document.getElementById("registerForm")
  const formarea = document.getElementById("form-area")
  const profile = document.getElementById("profile")
  const welcome = document.getElementById("welcome")
  const loginForm = document.getElementById("loginForm")
  
  
  //login
  onAuthStateChanged(auth,(user)=>{
    if(user){
        profile.style.display="block"
        formarea.style.display="none"
        welcome.innerText=`ยินดีต้อนรับ ${user.email}`
    }else{
        profile.style.display="none"
        formarea.style.display="block"
    }
})
  

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        window.location.href = "home/home.html";
    }).catch((error)=>{
        alert("กรุณาใส่ email และ password ให้ถูกต้อง")
    })
})
