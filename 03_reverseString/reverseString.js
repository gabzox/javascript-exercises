const reverseString = function(string) {

    const letterInString = string.split("");
    let newString = "";
    
    for (let a = (letterInString.length - 1); a >=0; a--)
    {
        newString += letterInString[a];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
