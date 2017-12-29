//This function will check for a blank form and will raise an alert
function checkforblank(){
	//If the fname id is blank the form will not be submitted
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
//This and above will check if all the fields are filled out and if this is not the case it will raise an alert and will not let you submit the form
else if (document.getElementById('sname').value=="") {
		alert('Please enter your message');
		return false;
}
}
//Google map API which displays the location of London and Big Ben
function initMap() {
  let london = {lat:51.5074 , lng: -0.1278};
  let bb = {lat: 51.5007, lng: -0.1246};
  let mapDemo = document.getElementById("map");
  // this sets the location for the map is when displayed on my website
    let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: london
  });
  // This sets the marker for Bign Ben when the map is loaded on my website
    let markerbb = new google.maps.Marker({
    position: bb,
    map: map,
    
  });
  
}
  // This displays the live time on my website
setInterval(dispalyclock, 500);
function dispalyclock(){
	let time = new Date();
	let hrs = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	  // This displays the live time in the form of a twenty-four hour clock
        if (hrs ==0){
		hrs =12;
}
	
	document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
}
  // This displays a quiz and gets the element by id
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
  // This displays the questions
var questions = [
    [ "What town was I born in?", "Leicester", "Bedford", "London", "B" ],
	[ "What university am I currently studying in?", "University of Leicester", "Brunel university", "De Montfort university", "C" ],
	[ "What degree am I currently studying?", "Computer Science", "Computer Security", "Software Engineering", "A" ],
	[ "What secondary school did I attend?", "Kingsbury High School ", "Beaumont Leys School", "Biddenham Upper School", "C" ]
];
function _(y){
	return document.getElementById(y);
}
  // This displays the length of the questions and displays how many questions you got correct and tells you when you have completed the quiz 
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions right</h2>";
		_("test_status").innerHTML = "You have compleated the quiz";
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
  // This checks the answers to see if you got them correct or not
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

  // This is for the responsive navigation bar
function myFunction () {
	var x =document.getElementById("myTopnav");
	if(x.className ==="topnav") {
	x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


