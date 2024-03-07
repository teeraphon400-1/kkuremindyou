import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  var files = [];
  var reader = new FileReader();

  var namebox = document.getElementById('namebox');
  var extlab = document.getElementById('extlab');
  var myimg = document.getElementById('myimg');
  var proglab = document.getElementById('upprogress');
  var SelBtn = document.getElementById('selbtn');
  var UpBtn = document.getElementById('upbtn');

  //----------------------Select image----------------------------
  var input = document.createElement('input');
  input.type = 'file' ;
  
  input.onchange = e =>{
        files = e.target.files ;

        var extention = GetFileExt(files[0]);
        var name = GetFileName(files[0]);

        namebox.value=name;
        extlab.innerHTML = extention;

        reader.readAsDataURL(files[0]);
  }

  reader.onload = function(){
    myimg.src = reader.result;
  }

  SelBtn.onclick = function(){
    input.click();
  }

  function GetFileExt(file){
    var temp = file.name.split('.');
    var ext = temp.slice((temp.length-1),(temp.length));
    return '.' + ext[0];
  }
  function GetFileName(file){
    var temp = file.name.split('.');
    var fname = temp.slice(0,-1).join('.');
    return fname;
  }

//--------------------------------Upload Process-------------------------------

  async function UploadProcess (){
      var ImgToUpload = files[0];
      var ImgName = namebox.value + extlab.innerHTML;

      const metaData = {
        contentType : ImgToUpload.type
      }

      const storage = getStorage();
      const storageRef = sRef(storage, "images/" + ImgName)
      const UploadTask = uploadBytesResumable(storageRef,ImgToUpload,metaData);

      UploadTask.on('state-changed', (snapshot) =>{
          var progess = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
          proglab.innerHTML = "Upload " + progess + "%";
      },
      (error) => {
        alert("error : Image not Uploaded! ");
      },
      ()=> {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) =>{
          console.log(downloadURL);
        });
      }
      );
  }

  UpBtn.onclick = UploadProcess;
