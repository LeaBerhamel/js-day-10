function checkFuel(fuel) {
    return new Promise (function(message1, message2) {
        if (fuel >= 9) {
            message1("Ready to launch");
        } else {
            message2("Please refill fuel");
        }
    })
}
checkFuel(9) 
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });