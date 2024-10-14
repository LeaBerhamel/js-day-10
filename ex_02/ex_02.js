// On déclare la fonction checkFuel avec pour paramètre fuel
function checkFuel(fuel) {
    // On retourne une nouvelle Promise avec comme paramètres resolve et reject
    return new Promise(function(resolve, reject) {
        if (fuel >= 9) {
    // Si la quantité de carburant est supérieure ou égale à 9, on appelle resolve avec le message "Ready to launch"
            resolve("Ready to launch");
        } else {
    // Sinon, on appelle reject avec le message d'erreur : "Please refill fuel"
            reject("Please refill fuel");
        }
    });
}
checkFuel(10)
    // On utiliser .then() pour afficher "Ready to launch" si la promesse est résolue
    .then(function(message) {
        console.log(message);
    })
    // On utiliser .catch() pour afficher "Please refill fuel" si elle est rejetée
    .catch(function(message) {
        console.log(message);
    });