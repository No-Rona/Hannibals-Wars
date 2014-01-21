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
	
	
	$('createarmy').click(function(){
	
		$('#placearmy').html('<p>'+ count + '</p>');
		count++;
	});
	
	$( ".armymove" ).draggable();
	
});

var troll= new function(){
document.getElementByID('placearmy').innerHTML("<p>this is cunt</p>");
};