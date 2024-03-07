// Import the functions from the SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore , collection, getDocs,addDoc,doc,updateDoc, setDoc} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
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
const db = getFirestore(app)
const table = document.getElementById("table")
const form = document.getElementById("addForm")

//collection ref
const colRef = collection(db,'admin')

//get collection data
getDocs(colRef)
    .then((snapshot) =>{
        let admins = []
        snapshot.docs.forEach((doc)=>{
            admins.push({...doc.data(), id: doc.id})
        })
        console.log(admins)
    }).catch(err =>{
        console.log(err.message)
    })

//ดึงข้อมูล
/*async function getAdmin(db){
    const adminCol = collection(db,'admin')
    const adminSnapshot = await getDocs(adminCol)
    return adminSnapshot
}
*/
/*ดึงกลุ่ม document เก็บลงในตัวแปร data
const data = await getAdmin(db)

data.forEach(admin =>{
    showData(admin)
})*/


//ดึงข้อมูลจากแบบฟอร์ม
/*form.addEventListener('submit',(e)=>{
    e.preventDefault()

    // 'addDoc' คือฟังก์ชันเพิ่ม document อ้างอิงตัวแปร db โดยเรียกไปที่ collection 'admin'
    addDoc(collection(db,'admin'),{  
        //ดึงข้อมูลจากแบบฟอร์ม
        email:form.email.value,                 
        password:form.password.value,
        account_name : form.account_name.value 
    })
    //เมื่อกรอกเสร็จให้ reset = null
    form.email.value=""
    form.password.value=""
    form.account_name.value=""
    alert("บันทึกข้อมูลเรียบร้อย")


})*/

/*function showData(admin){
    const row = table.insertRow(-1)
    const emailCol = row.insertCell(0)
    const passwordCol = row.insertCell(1)
    const account_nameCol = row.insertCell(2)
    emailCol.innerHTML = admin.data().email
    passwordCol.innerHTML = admin.data().password
    account_nameCol.innerHTML = admin.data().account_name
}*/