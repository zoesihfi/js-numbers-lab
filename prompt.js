//Prompt a user twice to input a number. Store their response in variables.
    //Remember, their responses will be in the form of a string.

    var num1 = prompt("Enter a number")
    var num2 = prompt("Enter another number")

    //Declare another variable to store the total of each statement
    var sum = num1 + num2

    //Code a series of JS statements that use the user input to preform math operations.
        //Must use math operations:
            //addition
            //subtraction
            //multiplication
            //division
            //exponent
            //modulus

    var difference = num1 - num2
    var multiply = num1 * num2
    var division = num1 / num2
    var exponent = num1 ** num2
    var modulus = num1 % num2

    console.log(`Sum: ${sum}, Difference: ${difference}, Multiply: ${multiply}, Division: ${division}, Exponent: ${exponent}, Modulus: ${modulus}`)

    //Code a statement that would return a random number between 1 and 35.

    var randomNumber = Math.floor(Math.random() * 35) + 1;

    console.log(`Random number between 1 to 35: ${randomNumber}`)

    //Prompt a user twice to input a number. 
    //Store their response in variables.Using Math.pow return the value of the one variable to the power of the other.
    // Display the result.

    var num3 = prompt("Enter a number")
    var num4 = prompt("Enter another number")

    var mathPow = Math.pow(num3, num4)
    
    console.log(`Math Pow: ${mathPow}`)

    



