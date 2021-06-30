
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {    apiKey: "AIzaSyBAWNgbcu_3XdqiKRZkM6RITr3uJalRYdU",
      authDomain: "kwitter-84952.firebaseapp.com",
      databaseURL: "https://kwitter-84952-default-rtdb.firebaseio.com",
      projectId: "kwitter-84952",
      storageBucket: "kwitter-84952.appspot.com",
      messagingSenderId: "915814714355",
      appId: "1:915814714355:web:dd0c7a7f9c89573aa6a086"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="welcome "+user_name;
    function add_room(){
          Room_names=document.getElementById("room_name").value
          firebase.database().ref("/").child(Room_names).update({
                purpose:"adding roomname"
          });
          localStorage.setItem("room_name",Room_names)
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class'room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirecttoroomname(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"

}
function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
