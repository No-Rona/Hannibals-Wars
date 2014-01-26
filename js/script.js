var Army= function(infolist){			//Army Class and its Components

this.type= infolist[0];
this.infno= infolist[1];
this.cavno= infolist[2];
this.skirno= infolist[3];
this.time= infolist[4];
this.name= infolist[5];
this.alive= true;

}

Army.prototype.displayInfo= function(){		//Display using Alert----will be changed later
if(this.alive)
	alert("Type of Army: " + this.type + "\nInfantry: " + this.infno + "\nCavalry: " + this.cavno + "\nSkirmishers: " + this.skirno);
};

var getInfo = function(type, name){			//Enter Information
var info = new Array();
info[0]= type;
info[1]= prompt("Enter Infantry");
info[2]= prompt("Enter Cavalry");
info[3]= prompt("Enter Skirmishers");
info[4]= prompt("Enter time for recruitment");
info[5]= name;
var nigger= new Army(info);
return nigger;
};

var initialize = function(idnumber){		//Certain initializing variables
$('.armymove').draggable();
var fuck = $('#placearmy').offset();
$('#' + idnumber).offset({ top: fuck.top, left: fuck.left });
};

var armyList= new Array();					//Global Variables ...to be taken from the files
var count=0, romanno=0, carthageno=0, greekno=0, macedoniano=0, gaelicno=0, iberianno=0;

$(document).ready(function(){

var showing=true;

$( ".armymove" ).draggable();

	
	$('#showcity').click(function(){		//Showing Cities
	
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
	
	$('#showroute').click(function(){			//Show Routes
	
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
	
	$('#createarmy').click(function(){ 							//Creating Armies
		$('#placearmy').html("<p>"+ count + "<p>");
		
		var type=prompt("Which is the type?\n1.Roman\n2.Carthage\n3.Greek\n4.Gaelic\n5.Iberian\n6.Macedonia");
		
			if (type=='Roman')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/romans.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Roman', 'R'+ romanno++);
				count++;

				}
			if (type=='Carthage')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/carthage.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Carthage', 'C'+ carthageno++);
				count++;
				}

			if (type=='Greek')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/greek.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Greek', 'G'+ greekno++);
				count++;
				}
			if (type=='Macedonia')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/macedonia.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Macedonia', 'M'+ macedoniano++);
				count++;
				}
				
			if (type=='Gaelic')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/gaelic.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Gaelic', 'S'+ gaelicno++);
				count++;
				}
				
			if (type=='Iberian')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/slave.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Iberian', 'I'+ iberianno++);
				count++;
				}	


	});
	
	$('.armymove').draggable();
	

	
});

