﻿


//example one solution
document.getElementById("caps1").addEventListener("click", uppercase);
function uppercase() {
    str = prompt("input a string");
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    alert(newarray1.join(' '));
}
