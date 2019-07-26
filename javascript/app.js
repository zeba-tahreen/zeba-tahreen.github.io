$(document).ready(function () {
  // toggel bar
  $(".menu-toggle").click(function(){
    $("nav").toggleClass("active")
});

  // // firebase config
  // var firebaseConfig = {
  //   apiKey: "AIzaSyCjrHc8zxlez0t131bdrM0KDSuzvXo0EyE",
  //   authDomain: "myportfolio-a2b11.firebaseapp.com",
  //   databaseURL: "https://myportfolio-a2b11.firebaseio.com",
  //   projectId: "myportfolio-a2b11",
  //   storageBucket: "myportfolio-a2b11.appspot.com",
  //   messagingSenderId: "40633890264",
  //   appId: "1:40633890264:web:75439df33e8ec750"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);


  // $("#btnSignup").on("click", CreateUser)
  // $("#btnLogin").on("click", SignInUser)
  // $("#btnLogout").on("click", LogoutUser)

  // function CreateUser() {
  //   var email = $("#textEmail").val();
  //   var password= $("#txtPassword").val();
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
  //     if (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorCode, errorMessage)
  //     } else {
  //       console.log("User created: " + email)
  //     }
  //   });
  //   var email = $("#textEmail").val("");
  //   var password= $("#txtPassword").val("");
  // }

  // function SignInUser() {
  //   var email = $("#textEmail").val();
  //   var password= $("#txtPassword").val();
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  //     var email = $("#textEmail").val("");
  //   var password= $("#txtPassword").val("");
  // }
  
  // function LogoutUser() {
  //   firebase.auth().signOut().then(function () {
  //     console.log("Sign-out successful.")
  //   }).catch(function (error) {
  //     console.log("An error happened.")
  //   });
  // }

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     console.log("User signed in: ", user)
  //     $("#btnLogin").hide();
  //     $("#btnLogout").show();
  //     $("#btnSignup").hide();
  //   } else {
  //     console.log("No one signed in!");
  //     $("#btnLogin").show();
  //     $("#btnLogout").hide();
  //     $("#btnSignup").show();
  //   }
  // });

  var slideIndex = 0;


function showSlides() {
  var i;
  var slides = $(".mySlides");   
  var dots =   $(".dot");              

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();



})