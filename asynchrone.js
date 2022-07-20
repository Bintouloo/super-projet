// pour charger un module , on met la fonction qui s'appelle ("require")

const readline = require('readline');
// on va initialiser le module / et on créé une interface qui va nous dire l'entrée et la sortie/
// et on va lui dire que l'entrée c'est le clavier et la sortie le standards
 const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
} );

// on va faire une fonction qui s'appelle démarerProgramme
const demarrerProgramme = () => {
// elle pose une question/et une fois l'utilisateur aura saisi quelque chose, il va nous le retourner
rl.question("quel est ton prénom ?", reponse => {
    // le callback hell
    console.log("ton prénom est" + reponse);
    // aprés avoir saisi la réponse de la 1ére question, on pose une autre question différente vue que c'est interdit de poser la meme question 
    rl.question("quel est ton nom de famille?", reponse => {
        console.log("Mon nom de famille est" + reponse);
        // une fois repondr aux questions , on va cloturer le texte 
        rl.question("quel est ton age?", reponse => {
            console.log("ton age est" + reponse);
      rl.close();
    });
   });
});
// on affiche quelque chose aprés la question /on fait

}

// une fois déclarer la fonction , on va l'exécutée
demarrerProgramme(); 



