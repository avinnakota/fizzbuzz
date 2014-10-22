$(document).ready(function(){

    for (i = 1; i <= 100; i++)
{
    if (i % 5 == 0 && i % 3 == 0)
    {
        var name = $("<p>fizzbuzz</p>");
        $("#game").append(name);
    }
    
    else if (i % 3 == 0)
    { 
         var name = $("<p>fizz</p>");
         $("#game").append(name);
    }
    
    else if (i % 5 == 0)
    {
        var name = $("<p>fizz</p>");
         $("#game").append(name);
    }
    
    else
    {
        $("#game").append("<p>" + i + "</p>");
    }
}
});
