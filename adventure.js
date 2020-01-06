var buttonEen = document.getElementById("buttonEen");
var buttonTwee = document.getElementById("buttonTwee");
var buttonDrie = document.getElementById("buttonDrie");
var achtergrond = document.getElementById("gamecontainer");
var item = document.getElementById("inventoryItem")
var inventory = 0;

var inventoryitem = 0;

start();




function start(){
	document.getElementById("title").innerHTML = "Welkom bij de adventure Game";
	document.getElementById("description").innerHTML = "Je krijgt straks verschillende keuzes. <br> Neem kies dan 1 van deze keuzes. <br> Je kunt ook dingen vinden. Op deze dingen kun je klikken. Ze kunnen je helpen tijdens je avontuur"
	document.getElementById('buttonEen').innerHTML = "start";
	buttonTwee.style.display = "none"
	buttonDrie.style.display = "none"
	buttonEen.onclick = beginnen;
	bgstart();
	item.style.display="none"
	


}


function beginnen(){
	document.getElementById("title").innerHTML = "bos";
	document.getElementById("description").innerHTML = " <br> Je bent verdwaalt in een groot bos. Het wordt al wat later en je begint honger te krijgen <br> je telefoon is leeg en er zak een gat in je rugzak waardoor alles eruit gevallen is."
	buttonEen.style.display = "none"
	buttonTwee.style.display = "unset"
	buttonDrie.style.display = "unset"
	document.getElementById('buttonTwee').innerHTML = "links";
	buttonTwee.onclick = links;
	document.getElementById('buttonDrie').innerHTML = "rechts";
	buttonDrie.onclick = rechts;
	inventoryItem.style.display = "none"
	bgstart();
}


function links(){
	item.src = "images/otrommel.png"
	document.getElementById('title').innerHTML = "Linkerpad"
	document.getElementById("description").innerHTML = "Het wordt al wat donkerder ga maar niet deze kant op"
	document.getElementById("buttonEen").innerHTML = "Terug";
	buttonEen.style.display = "unset"
	buttonTwee.style.display = "none"
	buttonDrie.style.display = "none"
	inventoryItem.style.display = "unset"
	bglinks();
	inventoryItem.onclick = function(){broodtrommel()};
	
	

}



function rechts(){
	if (inventoryitem == "a") {
		document.getElementById('title').innerHTML = "Nacht"
		document.getElementById("description").innerHTML = "Het begint donker te worden, je ziet een plekje met mos. Je kan gaan slapen of verder op zoek gaan."
		document.getElementById("buttonDrie").innerHTML = "Verdergaan";
		document.getElementById('buttonTwee').innerHTML = "Slapen";
		buttonEen.style.display = "none"
		buttonTwee.style.display = "unset"
		buttonDrie.style.display = "unset"
		buttonTwee.onclick = slapen;
		buttonDrie.onclick = verder;
		bgnacht();
	}
	else {
		document.getElementById('title').innerHTML = "Helaas"
		document.getElementById("description").innerHTML = "Je had erge honger en bent omgekomen van de honger."
		document.getElementById("buttonEen").innerHTML = "opnieuw";
		bgtrommel();
		inventoryItem.style.display = "none"
		buttonEen.onclick = start
		buttonEen.style.display = "unset"
		buttonTwee.style.display = "none"
		buttonDrie.style.display = "none"
	}

}

function slapen(){
	document.getElementById("title").innerHTML = "Goeie morgen"
	document.getElementById("description").innerHTML = "Je wordt wakker van de langskomende wandelaars. Ze bellen de politie voor je en je wordt door de politie thuisgebracht."
	buttonEen.style.display = "none"
	buttonTwee.style.display = "none"
	buttonDrie.style.display = "none"
	ochtend();
	inventoryItem.style.display = "none"
}

function verder(){
	document.getElementById("title").innerHTML = "bosjes"
	document.getElementById("description").innerHTML = "Je ziet de bosjes bewegen. Wat doe je?"
	buttonEen.style.display = "unset"
	buttonTwee.style.display = "unset"
	buttonDrie.style.display = "none"
	inventoryItem.style.display = "none"
	buttonEen.onclick = dood
	buttonTwee.onclick = einde
	nachtbos();
	document.getElementById("buttonEen").innerHTML = "wegrennen";
	document.getElementById('buttonTwee').innerHTML = "kijken";
	document.getElementById("buttonTwee").style.marginLeft = "350px"
}

function wegrennen(){
	document.getElementById("title").innerHTML = "Dood"
	document.getElementById("description").innerHTML = "d"
	
}

function einde(){
	document.getElementById("title").innerHTML = "Einde"
	document.getElementById("description").innerHTML = "Je kijkt in de bosjes en ziet dat het je telefoon was. Je wordt gebelt door je moeder en kan de weg weer naar huis vinden."
	telefoon();
	buttonEen.style.display = "none"
	buttonTwee.style.display = "none"
}

function dood(){
	document.getElementById("title").innerHTML = "Dood"
	document.getElementById("description").innerHTML = "Je voelt een steek in je rug, als je achteromkijkt zie je een oude man glimlachen. Dan wordt alles zwart."
	zwart();
	buttonEen.style.display = "none"
	buttonTwee.style.display = "none"
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

function bgnacht(){
	document.body.style.backgroundImage = "url('images/bosdonker.png')"
}

function broodtrommel(){
	inventoryItem.style.display = "none"
	inventoryitem = "a";
}

function ochtend(){
	document.body.style.backgroundImage = "url('images/ochtendbos.jpg'"
}

function nachtbos(){
	document.body.style.backgroundImage = "url('images/bosbos.png')"
}

function telefoon(){
	document.body.style.backgroundImage = "url('images/telefoon.jpg')"
}

function zwart(){
	document.body.style.backgroundImage = "url('images/zwart.png')"
}










