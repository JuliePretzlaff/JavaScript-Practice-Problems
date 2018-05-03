$("#caps").click(function () {
    //alert("hello")
    var input = prompt("Enter a phrase");
    var inputArray = input.split(" ");

    alert(inputArray[0]);

    for (var i = 0; i < inputArray.length; i++) {
        var innerArray = inputArray[i].split("");
        innerArray[0].toUpperCase();
        alert(innerArray[0].toUpperCase);
    }

});