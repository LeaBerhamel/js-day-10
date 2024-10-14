// On déclare la fonction assignID avec comme paramètres : machineName et newSeed
function assignID(machineName, newSeed) {
    // On réinitialise la valeur de seed à newSeed (ce qui permettra de générer un nouvel ID)
        seed = newSeed;
    // On appelle la fonction getID() qui génère un nouvel ID
    // .then() est utilisé pour récupérer l'ID une fois généré
        return getID().then(function(id) {
    // On retourne un message contenant le nom de la machine (sans espaces inutiles grâce à .trim()) suivi de l'ID généré, séparés par deux points : 
            return `${machineName.trim()} : ${id}`;
        });
    }
     
    // On appelle la fonction assignID avec "Oxygen filter" comme nom de machine et 1 comme seed
    assignID("Oxygen filter", 1).then(function(value) {
    // On affiche le message final dans la console une fois la promesse résolue
        console.log(value);
    });