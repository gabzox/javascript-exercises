const sumAll = function(num1, num2) 
{
    let sum=0;
    let start=0;
    let end=0;
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2))
    {
        if (num1 <= num2)
        {
            start = num1;
            end = num2;
        }
        else
        {
            start = num2;
            end = num1;
        }
        
        
    for(let i=start; i <= end; i++)
        {
            sum += i;
        }
        return sum;
    }
    else
    {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
