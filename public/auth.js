console.log('hola a todos')

var btnGoogle = document.getElementById("btnGoogle")

//Controlando el estado de la sesion
firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if (user) {
      console.log("Tienes una sesion activa");
      window.location.href = "home.html";
    }else{
      //window.location.href = "home.php";
      console.log("No se detecta ninguna sesion");
   
    }
  });


//Auth Google
btnGoogle.addEventListener("click", function(){
    //event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //defino en que leguaje le va a salir el Popup de autenticacion
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithPopup(provider).then(function(datosUsuario){
     
    window.location.href = "home.html";
    }).catch(function(err){
        console.log(err);
        window.location.href = "home.html";
    })    
});



  