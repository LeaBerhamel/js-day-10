// On déclare la fonction checkStatus avec comme paramètre machine (une promesse)
function checkStatus(machine) {
    // On utilise la promesse machine pour enchaîner les méthodes then, catch et finally
        machine
            .then(function(message) {
    // On affiche le message de résolution
                console.log(message);
            })
            .catch(function(error) {
    // On afficher un message d'erreur en cas de rejet
                console.log(error);
            })
            .finally(function() {
    // On indique que la vérification du statut est terminée, que la promesse soit résolue ou rejetée
                console.log("Checking status over");
            });
    }
     
    // On déclare la fonction promiseMe avec pour paramètre promise
    function promiseMe(promise) {
    // On retourne une nouvelle promesse résolue avec un message combiné "I promise to " et le paramètre promise
        return new Promise(function(resolve) {
    // On utilise .trim() pour enlever les espaces en trop
            resolve("I promise to " + promise.trim());
        });
    }