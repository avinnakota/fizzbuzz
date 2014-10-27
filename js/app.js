$(document).ready(function() {
    var l = prompt("Please enter a number: ", "0");
    input(l);
});
    
var input = function(l) {
        for (var i = 1; i <= parseInt(l); i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                $("#game").append("<p>fizzbuzz</p>");
            } else if (i % 3 == 0) {
                $("#game").append("<p>fizz</p>");
            } else if (i % 5 == 0) {
                $("#game").append("<p>fizz</p>");
            } else {
                $("#game").append("<p>" + i + "</p>");
            }
        }
    };