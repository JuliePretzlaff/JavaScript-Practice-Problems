//problem one: capitalize first letters of words
$("#caps").click(function () {
    //alert("hello")
    var input = prompt("Enter a phrase");
    var inputArray = input.split(" ");

    var output = "";

    for (var i = 0; i < inputArray.length; i++) {
        var innerArray = inputArray[i].split("");
        var word = innerArray[0].toUpperCase();

        for (var ii = 1; ii < innerArray.length; ii++) {
            word += innerArray[ii];
        }
        output += word + " ";
    }
    alert(output);

});


//problem 2: count vowels
$("#vowels").click(function () {
    var string = prompt("Enter a phrase.").toLowerCase();
    var charArray = string.split("");
    var count = 0;

    for (var i = 0; i < charArray.length; i++) {
        if (charArray[i] == "a" || charArray[i] == "e" || charArray[i] == "i" || charArray[i] == "o" || charArray[i] == "u") {
            count++;
        }
    }
    alert(count);
});


//problem 3: exponents
$("#exp").click(function () {
    var num = prompt("Enter a base number.")
    var ex = prompt("Enter a power.")
    answer = Math.pow(num, ex);
    alert("The answer is " + answer);
});


//problem 4: countries.  accept a list of countries and find the longest name
$("#countries").click(function () {

    var userArray = new Array();
    var length = 0;
    var longest = "";
    var userResponse = confirm('Would you like us to tell you which country has the longest name?');
    while (userResponse) {
        var country = prompt('Please enter the name of a country');
        userArray.push(country);
        userResponse = confirm('Would you like to add another country?');
    }

    for (var i = 0; i < userArray.length; i++) {
        newLength = userArray[i].length;
        if (newLength > length) {
            length = newLength;
            longest = userArray[i];
        }
    }

    alert("The longest country name is " + longest);
});


//fizz buzz
$("#fizzbuzz").click(function () {

    var num = prompt("Please enter a number.")
    if (num % 15 === 0) {
        alert("fizbuzz");
    }
    else if (num % 3 === 0) {
        alert("fizz");
    }
    else if (num % 5 === 0) {
        alert("buzz");
    }


});

//problem 5: concatinate an array to a string
$("#array").click(function () {
    var userArray = new Array();
    var string = "";
    var userResponse = confirm('Would you like to enter a color?');
    while (userResponse) {
        var country = prompt('Please enter a color');
        userArray.push(country);
        userResponse = confirm('Would you like to add another color?');
    }

    for (var i = 0; i < userArray.length; i++) {
        string += userArray[i] + ", "
    }

    alert(string);
});


//problem 6: find largest number
$("#largeNum").click(function () {
    var userArray = new Array();

    var userResponse = confirm('Would you like to enter a number?');
    while (userResponse) {
        var country = prompt('Please enter a number');
        userArray.push(country);
        userResponse = confirm('Would you like to add another number?');
    }
    var largest = userArray[0];
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i] > largest) {
            largest = userArray[i];
        }
    }

    alert("The largest number is " + largest);
});

//problem 7: iterated thru 0-15 and print if it's odd or even
$("#oddEven").click(function () {
    for (var i = 0; i < 16; i++) {
        if (i % 2 === 0) {
            alert(i + " is even");
        }
        else {
            alert(i + " is odd");
        }
    }

});

//problem 8: star triangle using nested loop:
$("#stars").click(function () {
    var star = "";
    for (var i = 0; i < 6; i++) {
        for (var k = 0; k < i; k++) {
            star += "*";
            console.log(star);
        }
    }

});