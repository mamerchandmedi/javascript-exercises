const removeFromArray = function(inputarray,...args) {
    console.log("inputarray:", inputarray);
    console.log("args:", args);

    for (let i = 0; i < args.length; i++) {
        index= inputarray.indexOf(args[i]);
        const howmanytimes = inputarray.filter((item) => item== args[i]).length;
        console.log("index:", index); 
        if (index > -1) {
            inputarray.splice(index, howmanytimes);
            console.log("splice inputarray:", inputarray);
        }
        else {
            continue;
        }   
    
    }
    console.log("inputarray:", inputarray);
    return inputarray;    
    
};

// Do not edit below this line
module.exports = removeFromArray;
