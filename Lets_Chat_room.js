var firebaseConfig = {
    apiKey: "AIzaSyDeEAJCZrEVcHtF0nRUvWUaLMqa-5Ej3hM",
    authDomain: "lets-chat-web-app-24821.firebaseapp.com",
    projectId: "lets-chat-web-app-24821",
    storageBucket: "lets-chat-web-app-24821.appspot.com",
    messagingSenderId: "242470398526",
    appId: "1:242470398526:web:661e80ad1a126309bfbf6f",
    measurementId: "G-77MBC9GGFC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser() {

    user_name = document.getElementById("user_name").value;
    //localStorage.setItem("username", user_name);
    //console.log("user_name");
    firebase.database().ref("/").child(user_name).update(
      {
      purpose:"adding user"
    }
    );
  }