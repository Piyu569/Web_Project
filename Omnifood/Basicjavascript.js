
/*$(document).ready(function(){
    $('.main-nav').waypoint(
        function(){
            alert("waypoint reached")
        }
    )
    
});

$(function()
{
    var nav_container= $(".Sticky");
    var nav = $("nav");
    nav_container.waypoint({
        handler: function( event , direction){
            nav.toggleClass('Sticky', direction == 'down');
           
        }
    });
     
});*/


window.onscroll = function()
{
 myFunction();
}


var navbarConst = document.getElementById("navbar");
var StickyConst = navbarConst.offsetTop;
var navbarOther = document.getElementById("section-features");
var StickyOther = navbarOther.offsetTop;
function myFunction()
{
    if(window.pageYOffset >= StickyOther)
    {
        navbarConst.classList.remove('Sticky');
    }
    else
    {
        navbarConst.classList.add('Sticky');
    }
  
};

/* 

var sticky = new waypoint.Sticky({
    element: $('.Sticky')[0]
})
$('.destroy-sticky').on('click', function(){
    sticky.destroy()
})
//directions
var waypoint = new Waypoint({
    element:
    document.getElementById('.section-features'),
    handler: function(direction){
        notify('Direction: '+ direction)
    }
}
*/
     