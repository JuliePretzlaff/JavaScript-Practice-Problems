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