// On déclare la fonction initializeMachine avec comme paramètres machineName et timeRequired
function initializeMachine(machineName, timeRequired) {
    // On retourne une nouvelle Promise qui prend une fonction de callback avec message (resolve)
        return new Promise(function(resolve) {
    // On utilise setTimeout pour attendre timeRequired secondes (multiplié par 1000 pour convertir en millisecondes)
            setTimeout(function() {
    // On appelle message pour résoudre la promesse avec le machineName initialized après le timeRequired en secondes
                resolve(machineName.trim() + " initialized");
            }, timeRequired * 1000);
        });
    }