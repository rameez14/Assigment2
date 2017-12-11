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
	var time = new Date();
	var hrs = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	

	
	if (hrs ==0){
		hrs =12;
	}
	
	
	
	document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
	
	
	}


