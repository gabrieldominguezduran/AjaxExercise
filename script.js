$('#getTheJoke').click(function(){

    
    

    $.getJSON('http://api.icndb.com/jokes/random', function(data){
        var output = '<p class="theJoke">'; 
            output += data.value.joke + '</p>';
         
        $('#showJoke').html(output);
        $('#showJoke').append('<p class="moreJokes text-muted">For more jokes click again the button</p>');
        
    
});

});
