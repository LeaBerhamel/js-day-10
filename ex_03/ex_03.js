function checkStatus(machine) {
    machine 
        .then(function(message) {
            console.log(message);
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(function() {
            console.log("Checking status over");
        })
}

function promiseMe(promise) {
    return new Promise (function(message) {
        message("I promise to " + promise);
    });
}

checkStatus(promiseMe("fly to the moon"));