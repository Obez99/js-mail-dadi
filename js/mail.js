//1 Creare una whitelist di email
const emailWhitelist = ["giuliogulizia@gmail.com", "florianleica@gmail.com", "cleliafradella@gmail.com", "flaviocordari@gmail.com"];
console.log(emailWhitelist);
//2 Chiedere all'utente di inserire la propria mail;
//const userEmail = prompt("Inserisci la tua email").toLowerCase();
const emailElement = document.getElementById("inputEmail");
//3 Controllare che l'email inserita corrisponda ad almeno una delle
//   email presenti nella whitelist
let emailCheck = false;

const formButton = document.getElementById("formButton");
formButton.addEventListener("click", function () {
  const userEmail = emailElement.value.toLowerCase();
  for (let i = 0; i < emailWhitelist.length; i++) {
    if (userEmail === emailWhitelist[i]) {
      emailCheck = true;
    }
  }
  if (emailCheck === true) {
    alert("Complimenti! La tua email è presente nella whitelist.");
    emailCheck = false;
  } else {
    alert("Inserisci un'email valida.");
    emailCheck = false;
  }
})



