function checkforblank(){
	if(document.getElementById('fname').value=="") {
		alert('Please enter your first name');
		return false;
}
else if (document.getElementById('lname').value=="") {
		alert('Please enter your last name');
		return false;
}
else if (document.getElementById('ename').value=="") {
		alert('Please enter your email address');
		return false;
}

else if (document.getElementById('sname').value=="") {
		alert('Please enter your message');
		return false;
}
}


function initMap() {
  let london = {lat:51.5074 , lng: -0.1278};
  let bb = {lat: 51.5007, lng: -0.1246};
  let mapDemo = document.getElementById("map");

  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: london
  });

  let markerbb = new google.maps.Marker({
    position: bb,
    map: map,
    
  });
  
}
setInterval(dispalyclock, 500);
function dispalyclock(){
	let time = new Date();
	let hrs = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	

	
	if (hrs ==0){
		hrs =12;
	}
	
	
	
	document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
	
	
	}

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What town was I born in?", "Leicester", "Bedford", "London", "B" ],
	[ "What university am I currently studying in?", "University of Leicester", "Brunel university", "De Montfort university", "C" ],
	[ "What degree am I currently studying?", "Computer Science", "Computer Security", "Software Engineering", "A" ],
	[ "What secondary school did I attend?", "Kingsbury High School ", "Beaumont Leys School", "Biddenham Upper School", "C" ]
];
function _(y){
	return document.getElementById(y);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions right</h2>";
		_("test_status").innerHTML = "You have now compleated your test";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Go to next question</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

function myFunction () {
	var x =document.getElementById("myTopnav");
	if(x.className ==="topnav") {
	x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


