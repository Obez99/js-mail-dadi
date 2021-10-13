alert("Benvenuto nel gioco dei dadi. Per iniziare a giocare premi 'OK'");
//Assegnare un numero casuale da 1 a 6 al giocatore
const userDice = Math.floor(Math.random()*6 + 1);
alert(`Il tuo dado è : ${userDice}`);
//Assegnare un numero casuale da 1 a 6 al computer
const botDice = Math.floor(Math.random()*6 + 1);
alert(`Il dado dell'avversario è : ${botDice}`)
//Confrontare i due numeri
if (userDice === botDice){
  alert("Pareggio!")
}else if(userDice > botDice)
{
  alert("Complimenti! Hai vinto.")
}else{
  alert("Mi dispiace, hai perso.")
}
