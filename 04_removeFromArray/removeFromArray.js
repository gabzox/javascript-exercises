const removeFromArray = function(list, toRemove) 
{
    let indexToRemove;
    for (let i=1; i<arguments.length; i++)
    {
        indexToRemove = list.indexOf(arguments[i]);
        while(indexToRemove >=0)
            {
                list.splice(list.indexOf(arguments[i]),1);
                indexToRemove = list.indexOf(arguments[i]);
            }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
