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
		
		var type=prompt("Which is the type?\n1.Roman\n2.Carthage\n3.Greek");
		
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

				
	});
	
	$('.armymove').draggable();
	

	
});

