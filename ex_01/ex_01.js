// On déclare la fonction promiseMe avec pour paramètre promise
function promiseMe(promise) {
    // On retourne une nouvelle promesse avec une fonction de rappel prenant un argument 'message'
        return new Promise(function(resolve) {
    // On affiche le message "I promise you to" + promise (fly to the moon)
            resolve("I promise you to" + promise);
        });
    }