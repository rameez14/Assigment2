//javascript clock
setInterval(displayclock, 500);
function displayclock(){
	var time = new Date();
	var hrs = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	
	
	
	if (hrs ==0) {
		hrs = 12;
	}
	
	document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
	
}

//contact form validation 

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

