var buttonEen = document.getElementById("buttonEen");
var buttonTwee = document.getElementById("buttonTwee");
var buttonDrie = document.getElementById("buttonDrie");
var achtergrond = document.getElementById("gamecontainer");
var inventoryitem = document.getElementById("inventoryItem")

inventoryitem = 0;

start();




function start(){
document.getElementById("title").innerHTML = "Welkom bij de adventure Game";
document.getElementById("description").innerHTML = "Je krijgt straks verschillende keuzes. <br> Neem kies dan 1 van deze keuzes. <br> Je kunt ook dingen vinden. Op deze dingen kun je klikken. Ze kunnen je helpen tijdens je avontuur"
document.getElementById('buttonEen').innerHTML = "start";
buttonTwee.style.display = "none"
buttonDrie.style.display = "none"
buttonEen.onclick = beginnen;
bgstart();

}


function beginnen(){
	document.getElementById("title").innerHTML = "bos  ";
	document.getElementById("description").innerHTML = " <br> Je bent verdwaalt in een groot bos. Het wordt al wat later en je begint honger te krijgen <br> je telefoon is leeg en er zak een gat in je rugzak waardoor alles eruit gevallen is."
	buttonEen.style.display = "none"
	buttonTwee.style.display = "unset"
	buttonDrie.style.display = "unset"
	document.getElementById('buttonTwee').innerHTML = "links";
	buttonTwee.onclick = links;
	document.getElementById('buttonDrie').innerHTML = "rechts";
	buttonDrie.onclick = rechts;
	bgstart();
}


function links(){
	document.getElementById('title').innerHTML = "Linkerpad"
	document.getElementById("description").innerHTML = "Het wordt al wat donkerder ga maar niet deze kant op"
	document.getElementById("buttonEen").innerHTML = "Terug";
	buttonEen.style.display = "unset"
	buttonTwee.style.display = "none"
	buttonDrie.style.display = "none"

	bglinks();

}



function rechts(){
	if (inventoryitem > 0) {
		document.getElementById('title').innerHTML = "Nacht"
		document.getElementById("description").innerHTML = "Het begint donker te worden"
		document.getElementById("buttonEen").innerHTML = "opnieuw";
		bgtrommel();
		buttonEen.onclick = start
		buttonEen.style.display = "none"
		buttonTwee.style.display = "unset"
		buttonDrie.style.display = "unset"
	}
	document.getElementById('title').innerHTML = "Helaas"
	document.getElementById("description").innerHTML = "Je had erge honger en bent omgekomen van de honger."
	document.getElementById("buttonEen").innerHTML = "opnieuw";
	bgtrommel();
	buttonEen.onclick = start
	buttonEen.style.display = "unset"
	buttonTwee.style.display = "none"
	buttonDrie.style.display = "none"

}

function bgtrommel(){
	document.body.style.backgroundImage = "url('images/bostrommel.jpg')"
}

function bgstart(){
	document.body.style.backgroundImage = "url('images/bos.jpg')"
}

function bglinks(){
	document.body.style.backgroundImage = "url('images/bosachtuur.jpg')"
}



function broodtrommel(){
	document.inventoryitem.src = "images/otrommel"
}


