var Army= function(name, type, infantry, cavalry, skir, time){

this.name= name;
this.type= type;
this.infno=infantry;
this.cavno= cavalry;
this.skirno= skir;
this.time=time;

}

var firstarmy= Army('Army1','Roman',500,500,500,20);

$(document).ready(function(){
var showing=true;
var count=0;

$( ".armymove" ).draggable();

	
	$('#showcity').click(function(){
	
		if(showing){
			$('.cities').css('display','block');
			showing=false;
		}
		
		else{
			$('.cities').css('display','none');
			$('.routes').css('display','none');
			showing=true;
		}
	});
	
	$('#showroute').click(function(){
	
		if(showing){
			$('.routes').css('display','block');
			showing=false;
		}
		
		else{
			$('.routes').css('display','none');
			$('.cities').css('display','none');
			showing=true;
		}
	});
	
	$('#createarmy').click(function(){
		$('#placearmy').html("<p>"+ count + "<p>");
		count++;
		
		var type=prompt("Which is the type?\n1.Roman\n2.Carthage\n3.Greek\n4.Gaelic\n5.Iberian\n6.Macedonia");
		
			if (type=='Roman')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' src='img/romans.ico'/></div>");
				$('.armymove').draggable();
				}
			if (type=='Carthage')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' src='img/carthage.ico'/></div>");
				$('.armymove').draggable();
				}

			if (type=='Greek')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' src='img/greek.ico'/></div>");
				$('.armymove').draggable();
				}
			if (type=='Macedonia')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' src='img/macedonia.ico'/></div>");
				$('.armymove').draggable();
				}
				
			if (type=='Gaelic')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' src='img/gaelic.ico'/></div>");
				$('.armymove').draggable();
				}
				
			if (type=='Iberian')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' src='img/slave.ico'/></div>");
				$('.armymove').draggable();
				}	

				
	});
	
	$('.armymove').draggable();
	

	
});

