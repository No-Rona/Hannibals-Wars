<!DOCTYPE HTML>
<html>
<head>
	<title>Hannibal's Wars- EXEC</title>
	<link rel='stylesheet' type='text/css' href='css/example.css'/>
	<link rel='stylesheet' type='text/css' href='css/style1.css'/>
	<link rel="stylesheet" type="text/css" href="css/jquery.fullPage.css" />
	<link rel="icon" type="shortcut icon" href="img/Rome.png">
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>	
	<script src="js/script.js"></script>

	<script type="text/javascript" src="js/jquery.fullPage.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$.fn.fullpage({
				slidesColor: ['#000', '#000', '#000', '#000', '#000'],
				anchors: ['fullmap', 'north', 'spain', 'italy','south']
			});
		});
	</script>



</head>
<body class ='body'>
<div id='navbar'>
	<div id='cssmenu'>
<ul>
   <li class='has-sub'><a><span>Navigate</span></a>
      <ul>
		 <li><a href='#fullmap'><span>View All</span></a>
         </li>
         <li><a href='#north'><span>Provincia</span></a>
         </li>
         <li><a href='#spain'><span>Iberia</span></a>
         </li>
         <li><a href='#italy'><span>Italy</span></a>
         </li>
         <li><a href='#south'><span>Africa</span></a>
         </li>
      </ul>
   </li>
   <li class='has-sub'><a><span>Actions</span></a>
      <ul>
         <li class='has-sub'><a><span>Create</span></a>
            <ul>
               <li  id='createarmy'><a><span>Army</span></a></li>
               <li id='createnavy' class='last'><a><span>Navy</span></a></li>
            </ul>
         </li>
		 <li class='has-sub'><a><span>Change</span></a>
		 <ul>
               <li id='changearmy'><a><span>Army</span></a></li>
			   <li id='changenavy'><a><span>Navy</span></a></li>
               <li id='changecity' class='last'><a><span>City</span></a></li>
            </ul>
		</li>
         <li id='showcity'><a><span>Toggle Cities</span></a></li>
         <li id='showroute'><a><span>Toggle Routes</span></a></li>
		 <li id='showroute'><a><span>Toggle Routes</span></a></li>
		 <li id='showroute'><a href='battlesim.html' target='_blank'><span>Sim Battle</span></a></li>
      </ul>
    </li>  
		<li class='active' id='placearmy'><a><span>Drop-Box</span></a></li>
   <li><a><span>Information</span></a>
   <ul>
         <li id='factioninfo' class='has-sub'><a><span>Faction</span></a>
		 <ul>
               <li id='romaninfo'><a><span>Roman</span></a></li>
               <li id='carthageinfo' class='last'><a><span>Carthage</span></a></li>
            </ul>
		 <li class='has-sub'><a><span>City</span></a>
		 <ul width=200 height=50><li><select id='cityname'><option value='Massalia'>Massalia</option><option value='Emporion'>Emporion</option><option value='Barcino'>Barcino</option><option value='Taracco'>Taracco</option><option value='Valentia'>Valentia</option><option value='Carthago Nova'>Carthago Nova</option><option value='Gades'>Gades</option><option value='Olisipo'>Olisipo</option><option value='Toletum'>Toletum</option><option value='Kartuba'>Kartuba</option><option value='Arretium'>Arretium</option><option value='Ariminum'>Ariminum</option><option value='Firmum Picenum'>Firmum Picenum</option><option value='Rome'>Rome</option><option value='Capua'>Capua</option><option value='Venusia'>Venusia</option><option value='Tarentum'>Tarentum</option><option value='Heraclea'>Heraclea</option><option value='Croton'>Croton</option><option value='Messana'>Messana</option><option value='Lilybaeum'>Lilybaeum</option><option value='Karalis'>Karalis</option><option value='Tingis'>Tingis</option><option value='Russadir'>Russadir</option><option value='Icosium'>Icosium</option><option value='Hippo Regius'>Hippo Regius</option><option value='Bizerte'>Bizerte</option><option value='Utica'>Utica</option><option value='Carthage'>Carthage</option><option value='Dougga'>Dougga</option><option value='Hadrumentum'>Hadrumentum</option><option value='Ruspina'>Ruspina</option><option value='Thapsus'>Thapsus</option></select><br>
		 </li><li><a  id='getcityinfo'><span>Get Info</span></a></li></ul>
		 </li></ul>
   </li>
   <li class='last'  id ='nextturn'><a><span>Next Turn</span></a></li>
   <li><a><span>Period :</span></a>
   <li><a><span id='timeperiod'>218 B.C.</span></a>
</ul>
</div>
	<!--div id='placearmy'></div-->
</div>
<div id='sidebar'>
<div id='troll'></div>
<button id = 'donothing'>INACTIVE</button><br>
<button id = 'move'>MOVE</button><br>
<button id = 'kill'>KILL</button>
</div>

<div class="section active" id="section0">

	<img class='cities' src='img/citiesfull.png'/>
	<img class='routes' src='img/routesfull.png'/>
	<img class='maps' src='img/full.jpg'/>



</div>


<div class="section" id="section1">
	<img class='cities' src='img/citiesprovincia.png'/>
	<img class='cities' src='img/citiesprovincia2.png'/>
	<img class='maps' src='img/provincia.jpg'/>
	<!--img class='routes' src='img/routesprovincia.png'/-->

</div>

<div class="section" id="section2">
	<img class='cities' src='img/citiesiberia.png'/>
	<img class='cities' src='img/citiesiberia2.png'/>
	<img class='maps' src='img/iberia.jpg'/>
	<!--img class='routes' src='img/routesprovincia.png'/-->

</div>

<div class="section" id="section3">
	<img class='cities' src='img/citiesitaly.png'/>
	<img class='cities' src='img/citiesitaly2.png'/>
	<!--img class='routes' src='img/routesitaly.png'/-->
	<img class='maps' src='img/italy.jpg'/>

</div>
<!--div class="section" id="section2">
    <div class="slide active">
		<div class="wrap">
			<h1>Iberia</h1>
		</div>
	</div>
	
    <div class="slide active">
		<img class='cities' src='img/citiesitaly.png'/>
		<!--img class='routes' src='img/routesitaly.png'/>
		<img class='maps' src='img/italy.jpg'/>

	</div>
	
</div-->



<div class="section" id="section4">
	<img class='cities' src='img/citiesafrica.png'/>
	<img class='cities' src='img/citiesafrica2.png'/>
	<!--img class='routes' src='img/routesafrica.png'/-->
	<img class='maps' src='img/africa.jpg'/>
</div>


</body>
</html>