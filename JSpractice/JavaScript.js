//problem one
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

//example one solution
function uppercase() {
    str = prompt("input a string");
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));