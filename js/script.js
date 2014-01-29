var turncount=0;
var year= 218;
var ifkill= false, ifmove=false, ifdonothing=true;
var Army= function(infolist){			//Army Class and its Components

this.type= infolist[0];
this.infno= Number(infolist[1]);
this.cavno= Number(infolist[2]);
this.skirno= Number(infolist[3]);
this.time= infolist[4];
this.name= infolist[5];
this.alive= true;

}

Army.prototype.displayInfo= function(){		//Displays in the side Div
if(this.alive)
	return "<b>Type of Army:</b> " + this.type + "<br><b>Infantry:</b> " + this.infno + "<br><b>Cavalry: </b>" + this.cavno + "<br><b>Skirmishers:</b> " + this.skirno;
else
	return "Destroyed";
};

Army.prototype.killArmy= function(){
this.infno= 0;
this.cavno= 0;
this.skirno= 0;
this.time= -1;
this.alive= false;

};

var Navy= function(infolist){		//Class Navy

this.faction = infolist[0];
this.heavy=Number(infolist[1]);
this.light= Number(infolist[2]);
this.trireme= Number(infolist[3]);
this.time =Number(infolist[4]);
this.alive= true;

}

Navy.prototype.displayInfo= function(){
if(this.alive)
	return "<b>Faction : </b>" + this.faction + "<br><b>Heavy Ships : </b>" + this.heavy + "<br><b>Light Ships : </b>" + this.light + "<br><b>Triremes : </b>" + this.trireme;
else
	return "Destroyed";
};

Navy.prototype.killNavy= function(){
this.alive=false;
this.heavy =0;
this.light=0;
this.trireme= 0;
this.time=-1;
};

Army.prototype.killArmy= function(){
this.time= -1;
this.infno=0;
this.cavno=0;
this.skirno=0;
this.alive= false;
};

var City= function(name, allegiance, talents){ //Class City

this.name=name;
this.allegiance= allegiance;
this.talents= talents;

}

City.prototype.displayInfo= function(){

return "<b>City : </b>" + this.name + "<br><b>Allegiance : </b>" + this.allegiance + "<br><b>Talents : </b>" + this.talents;

};


var Faction= function(name){		//Class Faction
this.name=name;
this.talents= 0;
}

Faction.prototype.displayInfo= function(){
return "<b>Faction Name: </b>" + this.name + "<br><b>Total Talents: </b>" +Math.round(this.talents);
};


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

var getInfoN = function(faction){
var info=  new Array();
info[0]= faction;
info[1]= Number(prompt("Number of Heavy Ships"));
info[2]= Number(prompt("Number of Light Ships"));
info[3]= Number(prompt("Number of Triremes"));
info[4] =0;

var nigger= new Navy(info);
return nigger;
};
var initialize = function(idnumber){		//Certain initializing variables
$('.armymove').draggable();
var post = $('#placearmy').offset();
$('#' + idnumber).offset({ top: post.top, left: post.left });
$('.armyimage').click(function(){
$('#troll').html("<p>" + (armyList[this.id]).displayInfo() + "</p>");
var affir= prompt("1==Yes OR 2==No OR 3==KILL MOTHERFUCKERS");
if(affir==1){
armyList[this.id].time= prompt("Enter the time for travel then");
this.style.display= 'none';
}
if(affir==3){
this.style.display= 'none';
armyList[this.id].killArmy();
}
});
};

var navyinitialize = function(idnumber){		//Navy Initialize
$('.armymove').draggable();
var post = $('#placearmy').offset();
$('#' + idnumber).offset({ top: post.top, left: post.left });
$('.armyimage').click(function(){
$('#troll').html("<p>" + (navyList[Math.abs(this.id)]).displayInfo() + "</p>");//Create
var affir= prompt("1==Yes OR 2==No OR 3==KILL MOTHERFUCKERS");
if(affir==1){
navyList[Math.abs(this.id)].time= prompt("Enter the time for travel then");
this.style.display= 'none';
}
else if(affir==3){
this.style.display= 'none';
navyList[Math.abs(this.id)].killNavy();//Create
}
});
};

var armyList= new Array();	
var navyList= new Array();				//Global Variables ...to be taken from the files
var count=0, romanno=0, carthageno=0, greekno=0, macedoniano=0, gaelicno=0, iberianno=0, hannibalno=0, africanno=0, navycount=-1;
var cities = new Array();
var romanfaction= new Faction('Roman');
var carthagefaction= new Faction('Carthage');

cities[0]= new City('Massalia', 'Roman', '5000');			//Creating the new Cities \m/...too many of them
cities[1]= new City('Emporion', 'Carthage', '3800');
cities[2]= new City('Barcino', 'Carthage', '3800');
cities[3]= new City('Taracco', 'Carthage', '3800');
cities[4]= new City('Valentia', 'Carthage', '3800');
cities[5]= new City('Carthago Nova', 'Carthage', '7600');
cities[6]= new City('Gades', 'Carthege', '5700');
cities[7]= new City('Olisipo', 'Carthage', '1900');
cities[8]= new City('Toletum', 'Carthage', '3800');
cities[9]= new City('Kartuba', 'Carthage', '3800');
cities[10]= new City('Arretium', 'Roman', '3600');
cities[11]= new City('Ariminum', 'Roman', '5400');
cities[12]= new City('Firmum Picenum', 'Roman', '5400');
cities[13]= new City('Rome', 'Roman', '8000');
cities[14]= new City('Capua', 'Roman', '5400');
cities[15]= new City('Venusia', 'Roman', '3600');
cities[16]= new City('Tarentum', 'Roman', '5400');
cities[17]= new City('Heraclea', 'Roman', '5400');
cities[18]= new City('Croton', 'Roman', '5400');
cities[19]= new City('Messana', 'Roman', '5400');
cities[20]= new City('Lilybaeum', 'Roman', '5400');
cities[21]= new City('Karalis', 'Roman', '5400');
cities[22]= new City('Tingis', 'Carthage', '4000');
cities[23]= new City('Russadir', 'Carthage', '4000');
cities[24]= new City('Icosium', 'Carthage', '4000');
cities[25]= new City('Hippo Regius', 'Carthage', '4000');
cities[26]= new City('Bizerte', 'Carthage', '4000');
cities[27]= new City('Utica', 'Carthage', '4000');
cities[28]= new City('Carthage', 'Carthage', '9500');
cities[29]= new City('Dougga', 'Carthage', '2000');
cities[30]= new City('Hadrumentum', 'Carthage', '4000');
cities[31]= new City('Ruspina', 'Carthage', '4000');
cities[32]= new City('Thapsus', 'Carthage', '4000');

var updateRomanTalents= function(){		//General Updating functions
var i;
for(i=0; i<cities.length; i++){
if(cities[i].allegiance=='Roman'){
romanfaction.talents = Number(romanfaction.talents) + Number(cities[i].talents);}
}
};

var updateCarthageTalents= function(){
var i;
for(i=0; i<cities.length; i++){
if(cities[i].allegiance=='Carthage'){
carthagefaction.talents = Number(carthagefaction.talents) + Number(cities[i].talents);}
}
};

var updateArmyTimes= function(){  
var i;
for(i=0;i<armyList.length; i++){
if(armyList[i].time)
	armyList[i].time= (armyList[i].time) -1 ;
}
};		

var updateNavyTimes= function(){
var i=0;
for(i=1; i<=navyList.length-1; i++){
if(navyList[i].time){
	navyList[i].time= (navyList[i].time) -1 ;}
}
};

var updateDisplay= function(){
var i;
for(i=0;i<armyList.length; i++){
if(armyList[i].time==0){
document.getElementById(i).style.display= 'block';
}
}
for(i=1;i<=navyList.length-1; i++){
if(navyList[i].time==0){
document.getElementById(i*(-1)).style.display= 'block';
}
}
};

Faction.prototype.chargeTalents = function(){		//Charge the Stuff Man
var i;
var talentsCharged=0;
if(this.name == 'Roman'){
for(i=0; i<armyList.length; i++){
if(armyList[i].type == 'Roman' && armyList[i].alive ==true){
talentsCharged= 0.75*(Number(armyList[i].infno) + Number(armyList[i].skirno));
talentsCharged= talentsCharged + 0.85*(Number(armyList[i].cavno));
}
}
for(i=1;i<=navyList.length-1;i++){
	if(navyList[i].faction == 'Roman' && navyList[i].alive== true){
	talentsCharged= talentsCharged + ((60*(navyList[i].heavy))+(40*(navyList[i].light))+(50*(navyList[i].trireme)));
	}

}
}
else{
for(i=0; i<armyList.length; i++){
if(armyList[i].type == 'Carthage' && armyList[i].alive== true){
talentsCharged= 0.8*(armyList[i].infno + armyList[i].skirno);
talentsCharged= talentsCharged + 0.9*(armyList[i].cavno);
}
}
for(i=1;i<=navyList.length-1;i++){
	if(navyList[i].faction == 'Carthage' && navyList[i].alive== true){
	talentsCharged= talentsCharged + ((60*(navyList[i].heavy))+(40*(navyList[i].light))+(50*(navyList[i].trireme)));
	}

}}
this.talents= Number(this.talents) - Number(talentsCharged);
};

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
		
		var type=prompt("Which is the type?\n1.Roman\n2.Carthage\n3.Greek\n4.Gaelic\n5.Iberian\n6.Hannibal\n7.Macedonia\n6.African");
		
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
			if (type=='Hannibal')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/hannibal.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('Hannibal', count);
				count++;
				hannibalno++
				}
			if (type=='African')
				{	
				$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + count + "' src='img/african.ico'/></div>");
				initialize(count);
				armyList[count]= getInfo('African', count);
				count++;
				africanno++
				}


	});
	
	$('#createnavy').click(function(){
		var belong=prompt("Which is the type?\n1.Roman\n2.Carthage");
		
		if(belong=='Roman'){
		$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + navycount + "' width='80px' src='img/romannavy.png'/></div>");
		navyinitialize(navycount);		
		navyList[Math.abs(navycount)] = getInfoN('Roman');
		navycount--;
		}
		else if(belong == 'Carthage'){
		$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + navycount + "' width='80px' src='img/carthagenavy.png'/></div>");
		navyinitialize(navycount);		
		navyList[Math.abs(navycount)] = getInfoN('Carthage');
		navycount--;
		}
		else if(belong == 'Macedonia'){
		$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + navycount + "' width='80px' src='img/macedonianavy.png'/></div>");
		navyinitialize(navycount);		
		navyList[Math.abs(navycount)] = getInfoN('Macedonia');
		navycount--;
		}
		else{ 
		$('#superContainer').append("<div class='armymove'><img class='armyimage' id='" + navycount + "' width='80px' src='img/greeknavy.png'/></div>");
		navyinitialize(navycount);		
		navyList[Math.abs(navycount)] = getInfoN('Greek');
		navycount--;
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
	
	$('#changecity').click(function(){
	
		var i=0;
		var cityname = $('#cityname').find('option:selected').text();
		for(i=0; i<cities.length; i++){
			if (cities[i].name == cityname){
			var alle=prompt("change allegance to 'Roman' or 'Carthage'");
			cities[i].allegiance=alle;
			alle=prompt("Change income?");
			if(alle == 1)
				cities[i].talents= prompt("Change income to : (Earlier income " + cities[i].talents);
			break;
			}
		}
	});
	
	
	
	$('.armymove').draggable();
	
	$('#nextturn').click(function(){
	turncount++;
	if(turncount%4==0){
	$('#timeperiod').html( --year + " B.C.");
	}
	

	updateRomanTalents();
	updateCarthageTalents();
	romanfaction.chargeTalents();
	carthagefaction.chargeTalents();
	updateArmyTimes();
	updateNavyTimes();
	updateDisplay();

	
	
	});
	
	$('#romaninfo').click(function(){
	$('#troll').html(romanfaction.displayInfo());
	});
	
	$('#carthageinfo').click(function(){
	$('#troll').html(carthagefaction.displayInfo());
	});

	
});

