var provider = new firebase.auth.GoogleAuthProvider();

function signIn(){
  // firebase.auth().signInWithPopup(provider).then(function(result) {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   document.location.href = "main.html";
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });
  // Using a redirect.
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    var token = result.credential.accessToken;
    document.location.href = "main.html";
  }
  var user = result.user;
});

// Start a sign in process for an unauthenticated user.

provider.addScope('profile');
provider.addScope('email');
firebase.auth().signInWithRedirect(provider);
}
function signOut() {
  firebase.auth().signOut().then(function() {
    document.location.href = "index.html";
  }).catch(function(error) {
  // An error happened.
  });
}
