var turncount=0;
var year= 320;
var Army= function(infolist){			//Army Class and its Components

this.type= infolist[0];
this.infno= infolist[1];
this.cavno= infolist[2];
this.skirno= infolist[3];
this.time= infolist[4];
this.name= infolist[5];
this.alive= true;

}

Army.prototype.displayInfo= function(){		//Displays in the side Div
if(this.alive)
	return "<b>Type of Army:</b> " + this.type + "<br><b>Infantry:</b> " + this.infno + "<br><b>Cavalry: </b>" + this.cavno + "<br><b>Skirmishers:</b> " + this.skirno;
};


var City= function(name, allegiance, talents){

this.name=name;
this.allegiance= allegiance;
this.talents= talents;

}

City.prototype.displayInfo= function(){

return "<b>City : </b>" + this.name + "<br><b>Allegiance : </b>" + this.allegiance + "<br><b>Talents : </b>" + this.talents;

};

City.prototype.updateTalents= function(amount){
this.talents = this.talents
}


var getInfo = function(type, name){			//Enter Information
var info = new Array();
info[0]= type;
info[1]= prompt("Enter Infantry");
info[2]= prompt("Enter Cavalry");
info[3]= prompt("Enter Skirmishers");
info[4]= 0;
info[5]= name;
var nigger= new Army(info);
return nigger;
};


var initialize = function(idnumber){		//Certain initializing variables
$('.armymove').draggable();
var post = $('#placearmy').offset();
$('#' + idnumber).offset({ top: post.top, left: post.left });
$('.armyimage').click(function(){
$('#troll').html("<p>" + armyList[this.id].displayInfo() + "</p>");
var affir= prompt("1==Yes OR 2==No");
if(affir==1){
armyList[this.id].time= prompt("Enter the time for travel then");
this.style.display= 'none';
}
});
};

var armyList= new Array();					//Global Variables ...to be taken from the files
var count=0, romanno=0, carthageno=0, greekno=0, macedoniano=0, gaelicno=0, iberianno=0;
var cities = new Array();

cities[0]= new City('Massalia', 'Roman', '5000');			//Creating the new Cities \m/...too many of them
cities[1]= new City('Emporion', 'Carthage', '5000');
cities[2]= new City('Barcino', 'Carthage', '5000');
cities[3]= new City('Taracco', 'Carthage', '5000');
cities[4]= new City('Valentia', 'Carthage', '5000');
cities[5]= new City('Carthago Nova', 'Carthage', '5000');
cities[6]= new City('Gades', 'Carthege', '5000');
cities[7]= new City('Olisipo', 'Carthage', '5000');
cities[8]= new City('Toletum', 'Carthage', '5000');
cities[9]= new City('Kartuba', 'Carthage', '5000');
cities[10]= new City('Arretium', 'Roman', '5000');
cities[11]= new City('Ariminum', 'Roman', '5000');
cities[12]= new City('Firmum Picenum', 'Roman', '5000');
cities[13]= new City('Rome', 'Roman', '5000');
cities[14]= new City('Capua', 'Roman', '5000');
cities[15]= new City('Venusia', 'Roman', '5000');
cities[16]= new City('Tarentum', 'Roman', '5000');
cities[17]= new City('Heraclea', 'Roman', '5000');
cities[18]= new City('Croton', 'Roman', '5000');
cities[19]= new City('Messana', 'Roman', '5000');
cities[20]= new City('Lilybaeum', 'Roman', '5000');
cities[21]= new City('Karalis', 'Roman', '5000');
cities[22]= new City('Tingis', 'Carthage', '5000');
cities[23]= new City('Russadir', 'Carthage', '5000');
cities[24]= new City('Icosium', 'Carthage', '5000');
cities[25]= new City('Hippo Regius', 'Carthage', '5000');
cities[26]= new City('Bizerte', 'Carthage', '5000');
cities[27]= new City('Utica', 'Carthage', '5000');
cities[28]= new City('Carthage', 'Carthage', '5000');
cities[29]= new City('Dougga', 'Carthage', '5000');
cities[30]= new City('Hadrumentum', 'Carthage', '5000');
cities[31]= new City('Ruspina', 'Carthage', '5000');
cities[32]= new City('Thapsus', 'Carthage', '5000');

var updateArmyTimes= function(){  //General Updating functions
var i;
for(i=0;i<armyList.length; i++){
if(armyList[i].time)
	armyList[i].time= (armyList[i].time) -1 ;
}
};		

var updateDisplay= function(){
var i;
for(i=0;i<armyList.length; i++){
if(armyList[i].time==0){
document.getElementById(i).style.display= 'block';
}
}
}


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
		$('#troll').html("<p>"+ count + "<p>");
		
		var type=prompt("Which is the type?\n1.Roman\n2.Carthage\n3.Greek\n4.Gaelic\n5.Iberian\n6.Macedonia");
		
			if (type=='Roman')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/romans.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Roman', count);
				romanno++;
				count++;

				}
			if (type=='Carthage')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/carthage.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Carthage', count);
				count++;
				carthageno++;
				}

			if (type=='Greek')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/greek.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Greek', count);
				count++;
				greekno++
				}
			if (type=='Macedonia')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/macedonia.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Macedonia', count);
				count++;
				macedoniano++
				}
				
			if (type=='Gaelic')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/gaelic.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Gaelic', count);
				count++;
				gaelicno++
				}
				
			if (type=='Iberian')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/slave.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Iberian', count);
				count++;
				iberianno++
				}	


	});
	
	$('#getcityinfo').click(function(){
		var i=0;
		var cityname = $('#cityname').find('option:selected').text();
		for(i=0; i<cities.length; i++){
			if (cities[i].name == cityname){
			$('#troll').html("<p>" + cities[i].displayInfo() + "</p>");
			}
		}
	});
	
	
	
	$('.armymove').draggable();
	
	$('#nextturn').click(function(){
	turncount++;
	if(turncount%4==0){
	$('#timeperiod').html( --year + " B.C.");
	}
	
	updateArmyTimes();
	updateDisplay();
	
	
	});
	

	
});

