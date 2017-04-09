/*
*    This is the test file to be tested through jasmine
*
*/

function fizzBuzz(number){
    if (number === undefined){
        return 'undefined';
    }
    else if(number % 3 === 0 && number % 5 !== 0){
        return "Fizz";
    }
    else if(number % 5 === 0 && number % 3 !== 0){
        return "Buzz";
    }
    else if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz";
    }
    else
    if(typeof number == 'string'){
        return "Error! String provided, intergers Expected";
    }
    return number;
}