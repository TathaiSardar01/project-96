//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD6bjiV1aee8njffjI19uSUs7_eptVMQ1g",
      authDomain: "kwitter-7eccf.firebaseapp.com",
      databaseURL: "https://kwitter-7eccf-default-rtdb.firebaseio.com",
      projectId: "kwitter-7eccf",
      storageBucket: "kwitter-7eccf.appspot.com",
      messagingSenderId: "652765040062",
      appId: "1:652765040062:web:6233482e34ac1816bfbdef"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
         })
//End code
      } });  }); }
getData();

function send (){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,
      });

      document.getElementById("msg").value = "";
}