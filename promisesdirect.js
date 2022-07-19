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
const afficherPrenom = () => {
    console.log("ton prénom est" + prenom);
}



// démarer une fonction pour le nom 
const demanderNom = () => {
    return new Promise (resolve => {
        rl.question("quel est ton nom ?", resolve );
        
    })
    }
    const afficherNom = () => {
        console.log("ton nom est" + nom);
    }




    // démarer une fonction pour le Age 
    const demanderAge = () => {
        return new Promise (resolve => {
            rl.question("quel est ton age?", resolve );
 })
 }
 const afficherAge = () => {
    console.log("ton age est" + age);
}


const demarrerProgramme = () => {
demanderPrenom()
.then(prenom => afficherPrenom(prenom))
.then(() => demanderNom())
.then(nom => afficherNom(nom))
.then(() => demanderAge())
.then(age => afficherAge(age))
.then(() => rl.close())
 }

demarrerProgramme();


