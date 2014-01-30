var counter=0;


var initialize= function(count){
var post = $('#placearmy').offset();
$('#' + count).offset({ top: post.top, left: Number((post.left) + 60) });
$('.armies').draggable();
$('.armies').click(function(){
$(this).rotate({event: "mouseover", speed: 0.5});
});
};

$(document).ready(function(){

$('#ri').click(function(){
$('body').append("<div class='armies' id='" + counter + "'><img class='armyimage' src='img/infantry2.png'/></div>");
initialize(counter);
counter++;
});

$('#rc').click(function(){
$('body').append("<div class='armies' id='" + counter + "'><img class='armyimage' src='img/cavalry2.png'/></div>");
initialize(counter);
counter++;
});

$('#rs').click(function(){
$('body').append("<div class='armies' id='" + counter + "'><img class='armyimage' src='img/skirmishers2.png'/></div>");
initialize(counter);
counter++;
});

$('#bi').click(function(){
$('body').append("<div class='armies' id='" + counter + "'><img class='armyimage' src='img/infantry.png'/></div>");
initialize(counter);
counter++;
});

$('#bc').click(function(){
$('body').append("<div class='armies' id='" + counter + "'><img class='armyimage' src='img/cavalry.png'/></div>");
initialize(counter);
counter++;
});

$('#bs').click(function(){
$('body').append("<div class='armies' id='" + counter + "'><img class='armyimage' src='img/skirmishers.png'/></div>");
initialize(counter);
counter++;
});

});