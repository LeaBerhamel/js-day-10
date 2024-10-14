// On déclare la fonction worker avec comme paramètres task et timeRequired
function worker(task, timeRequired) {
    // On retourne une nouvelle promesse qui résout une tâche après un délai
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(`${task} done`);
            }, timeRequired);
        });
    }
     
    // On déclare la fonction asynchrone factory avec comme paramètre tasks, qui distribue les tâches aux travailleurs
    async function factory(tasks) {
        const taskList = tasks['tasks'];
     
    // On traite chaque tâche indépendamment et les unes après les autres, grâce à la boucle for, jusqu'à ce qu'elles se terminent
        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i]['task'];
            const timeRequired = parseInt(taskList[i]['timeRequired']);
    // On attend la résolution de chaque travailleur et on affiche le résultat dans la console
            worker(task, timeRequired).then(function(message) {
                console.log(message);
            });
        }
    }