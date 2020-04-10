var alphanumeric;
var numberConf;
var symbolsConf;
var upperConf;
var lowerConf;
 

symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


var generator;


var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {

    alphanumeric = parseInt(prompt("Choose password between 8 and 128."));
    
    if (!alphanumeric) {
        alert("Needs a criteria!!!");
    } else if (alphanumeric < 8 || alphanumeric > 128) {
    
        alphanumeric = parseInt(prompt("Choose between 8 and 128!!!"));

    } else {
        
        numberConf = confirm("Do you want numbers?");
        symbolsConf = confirm("Do you want symbols?");
        upperConf = confirm("Do you want Uppercase?");
        lowerConf = confirm("Do you want Lowercase?");
    };

    //Negative answer
    if (!symbolsConf && !numberConf && !upperConf && !lowerConf) {
        generator = alert("You should choose a value!!!");

    }
    
    //four options
    else if (symbolsConf && numberConf && upperConf && lowerConf) {

        generator = symbols.concat(numbers, lower, upper);
    }
    
    //three options
    else if (symbolsConf && numberConf && upperConf) {
        generator = symbols.concat(numbers, upper);
    }
    else if (symbolsConf && numberConf && lowerConf) {
        generator = symbols.concat(numbers, lower);
    }
    else if (symbolsConf && lowerConf && upperConf) {
        generator = symbols.concat(lower, upper);
    }
    else if (numberConf && lowerConf && upperConf) {
        generator = numbers.concat(lower, upper);
    }
    
    //two options
    else if (symbolsConf && numberConf) {
        generator = symbols.concat(numbers);

    } else if (symbolsConf && lowerConf) {
        generator = symbols.concat(lower);

    } else if (symbolsConf && upperConf) {
        generator = symbols.concat(upper);
    }
    else if (lowerConf && numberConf) {
        generator = lower.concat(numbers);

    } else if (lowerConf && upperConf) {
        generator = lower.concat(upper);

    } else if (numberConf && upperConf) {
        generator = numbers.concat(upper);
    }

    // One option
    else if (symbolsConf) {
        generator = symbols;
    }
    else if (numberConf) {
        generator = numbers;
    }
    else if (lowerConf) {
        generator = lower;
    }
    
    else if (upperConf) {
        generator = space.concat(upper);
    };

    
    var password = [];

    //Looping
    for (var i = 0; i < alphanumeric; i++) {
        var pickChoices = generator[Math.floor(Math.random() * generator.length)];
        password.push(pickChoices);
    }
  
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}