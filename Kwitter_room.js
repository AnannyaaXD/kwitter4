// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyARk_liJ4NgoNa3sKr3J5ge1Tt_dcjLoi4",
    authDomain: "kwitter-4d021.firebaseapp.com",
    projectId: "kwitter-4d021",
    storageBucket: "kwitter-4d021.appspot.com",
    messagingSenderId: "9502702622",
    appId: "1:9502702622:web:12504051a4ba3ec013c20f",
    measurementId: "G-TLKF2HS8NP"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("roomname");
username = localStorage.getItem("username");

console.log("room name "+room_name);
console.log("username"+username);

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(room_name){
    console.log(room_name);
    localStorage.setItem("roomname" , room_name);
    window.location("kwitter_room.html")
}

function logOut(){
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location("index.html");
}

function Send(){
    message = document.getElementById("message").value;
    console.log("message"+message);
    firebase.database().ref(room_name).push({
        username: username,
        message: message,
        like: 0,
    })
    document.getElementById("message").value = "";

}