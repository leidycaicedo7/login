import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    let usuario=document.getElementById("usuario")
        usuario.textContent="bienvenido "+user.email
    
    // ...
  } else {
    let usuario=document.getElementById("usuario")
        usuario.textContent=""
  }
});