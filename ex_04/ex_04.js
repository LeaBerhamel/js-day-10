function initializeMachine(machineName, timeRequired) {
    return new Promise(function(message) {
        setTimeout(function() {
            message(machineName + " initialized");
        }, timeRequired * 1000);
    });
}