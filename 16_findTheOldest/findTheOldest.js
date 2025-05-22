const findTheOldest = function(peopleList) {
    const currentYear = new Date().getFullYear();
    ages= [];
    for (let i = 0; i < peopleList.length; i++) {
        if (peopleList[i].yearOfDeath== undefined) {
            ages.push(10000);
        }
        else ages.push(currentYear-peopleList[i].yearOfBirth)

    }
    console.log(ages);
    oldestPersonIndex=ages.indexOf(Math.min(...ages));
    return peopleList[oldestPersonIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
