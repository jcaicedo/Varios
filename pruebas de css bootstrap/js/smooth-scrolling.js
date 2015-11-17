$(document).ready(function(){

//Add scrollspy to <body>
    $('body').scrollspy({target:".navbar", offset:50});
    
// Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click',function(event){
    
        //Prevent default anchor click behavior
        event.preventDefault();
        
        //Store hash
        
        var hash= this.hash;
        
        //Using JQuery's animate() method to add smooth page scroll
        //The optional number 800 sprcifies the number of milliseconds it take to scroll to the specified area
        $('html, body').animate({
            scrollTop:$(hash).offset().top}, 800, function(){
        
            //Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash=hash;
        
        });
    
    
    });
                       
                       
                       
                       
                       

});