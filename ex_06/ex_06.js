// On déclare une fonction worker avec pour paramètres task et timeRequired
function worker(task, timeRequired) {
    // On retourne une nouvelle Promise qui prend une fonction de callback avec message
    return new Promise(function(message) {
    // On utilise setTimeout pour attendre timeRequired millisecondes
        setTimeout(function() {
    // On appelle message pour résoudre la promesse avec le message "<task> done" (sans espaces supplémentaires avec trim())
             message(`${task.trim()} done`);
        }, timeRequired);
    });
}
     
// On déclare une fonction asynchrone factory qui prend tasks comme argument (un objet contenant la liste des tâches)
async function factory(tasks) {
// On récupère la liste des tâches dans l'objet tasks sous forme d'un tableau
    const taskList = tasks['tasks'];
    // On déclare un tableau promises qui stockera toutes les promesses des tâches
    const promises = [];
    
    // On répète sur chaque tâche, on extrait task et timeRequired, puis on crée une promesse à l'aide de la fonction worker() et l'ajoute au tableau promises
    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i]['task'];
        const timeRequired = parseInt(taskList[i]['timeRequired']);
        promises.push(worker(task, timeRequired));
    }
     
    // On répète sur chaque promesse dans promises, puis utilise .then() pour afficher le message lorsqu'une tâche est terminée
    for (const taskPromise of promises) {
        taskPromise.then(function(message) {
            console.log(message);
        });
    }
}