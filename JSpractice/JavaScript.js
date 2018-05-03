$("#caps").click(function () {
    //alert("hello")
    var input = prompt("Enter a phrase");
    var inputArray = input.split(" ");
   
    var output = "";

    for (var i = 0; i < inputArray.length; i++) {
        var innerArray = inputArray[i].split("");
        var word = innerArray[0].toUpperCase();
      
        for (var ii = 1; ii < innerArray.length; ii++) {
              //alert(innerArray[ii]);
              word += innerArray[ii];
        }
        output += word + " ";
    }
    alert(output);

});