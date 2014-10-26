$(document).ready(function(){
function input = function(limit)
{
    limit = prompt("Please enter a number: ","0");

    for (var i = 1; i <= parseInt(limit); i++)
    {
        if (i % 5 == 0 && i % 3 == 0)
        {
            $("#game").append("<p>fizzbuzz</p>");
         }
    
         else if (i % 3 == 0)
        { 
            $("#game").append("<p>fizz</p>");
        }   
    
        else if (i % 5 == 0)
        {
             $("#game").append("<p>fizz</p>");
        }
    
        else
        {
            $("#game").append("<p>" + i + "</p>");
        }   
    }
}
 input();
});
