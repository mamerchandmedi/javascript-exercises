const leapYears = function() {
    let condition1= arguments[0]%4;
    let condition2= arguments[0]%100;
    let condition3= arguments[0]%400;
    if( condition1==0 && condition2!=0 || condition3==0){    
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
