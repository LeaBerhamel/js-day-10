function promiseMe(promise) {
    return new Promise (function(message) {
        message("I promise to " + promise);
    });

}