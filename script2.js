let nombre = prompt("De quel nombre veut tu calculer la factorielle ?")
let resultat = 1
for(let i = 0; i <nombre ; i++){
  resultat = resultat * (nombre - i);
}

console.log(nombre + '! = ' + resultat);
