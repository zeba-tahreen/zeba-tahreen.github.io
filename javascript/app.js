$(document).ready(function(){
// toggel bar
    $(".menu-toggle").click(function(){
        $("nav").toggleClass("active")
    });

// manage user  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $("#btnLogin").style.display="block";
      $("#btnLogout").style.display="none";

    } else {
      // No user is signed in.
      $("#btnLogin").style.display="none";
      $("#btnLogout").style.display="block";
    }
  }); 

// on click function
  $("#btnLogin").click(function(){

      var txtEmail = $("#textEmail").val();
      var txtPassword= $("#txtPassword").val();
      var btnLogin = $("#btnLogin");
      var btnSignup = $("#btnSignup");
      var btnLogout = $("#btnLogout");

    //   alert(txtEmail + " " + txtPassword );

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });


    });

    //   // add login event
    //   btnLogin.click(e =>{
    //       var email = txtEmail.val();
    //       var pass = txtPassword.val();
    //       var auth = firebase.auth();
    //       // Sign in

    //       var promise = auth.signInWithEmailAndpassword(email,pass);
    //       promise.catch(e => console.log(e.message));
    //   // add signin event
    //   btnLogin.click(e =>{
    //     var email = txtEmail.val();
    //     var pass = txtPassword.val();
    //     var auth = firebase.auth();
    //     // Sign in

    //     var promise = auth.signInWithEmailAndpassword(email,pass);
    //     promise.catch(e => console.log(e.message));
    // // add signin event
          

    //   })
    // })



      




})