const repeatString = function(originalString, num) 
{
    let repeatedString = "";
    if (num>=0)
    {
        for (let i = 0;i<num;i++)
        {
            repeatedString += originalString;
        }

        return repeatedString;
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
