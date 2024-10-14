function assignID(machineName, newSeed) {
    seed = newSeed;
    return getID().then(function(id)  {
        return `${machineName.trim()} : ${id}`;
    });
}