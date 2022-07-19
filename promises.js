const readline = require('readline');
 const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
} );
// les promises
const demanderPrenom= () => {
    // fonction resolve => c'est l'opération qui doit etre excutée lorsque l'opération asynchrone est fini
return new Promise (resolve => {
    rl.question("quel est ton prénom ?", resolve );
})
}

// démarer une fonction pour le nom 
const demanderNom = () => {
    return new Promise (resolve => {
        rl.question("quel est ton nom ?", resolve );
        
    })
    }
    // démarer une fonction pour le Age 
    const demanderAge = () => {
        return new Promise (resolve => {
            rl.question("quel est ton age?", resolve );

 })
 }
const demarrerProgramme = () => {
// on exécute la promise
demanderPrenom()
.then(prenom =>{
    console.log("ton prénom est" + prenom);
    // retour de la fonction nom 
    return demanderNom();
})
// promise du nom 
.then(nom =>{
    console.log("ton nom est" + nom); 
    return demanderAge() ; 
   
})
.then(age => {
    console.log("ton age est" + age);
    rl.close();
})
}

demarrerProgramme(); 

