//1 Creare una whitelist di email
const emailWhitelist = ["giuliogulizia@gmail.com", "florianleica@gmail.com", "cleliafradella@gmail.com", "flaviocordari@gmail.com"];
console.log(emailWhitelist);
//2 Chiedere all'utente di inserire la propria mail;
const userEmail = prompt("Inserisci la tua email");
  //2.1 Verificare che l'email inserita non sia un numero;
if (!isNaN(userEmail)){
  alert("Inserisci un'email valida.")
}
//3 Controllare che l'email inserita corrisponda ad almeno una delle
//   email presenti nella whitelist