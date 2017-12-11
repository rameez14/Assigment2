
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

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: london
  });

  // these set different markers you want to show on your map
  let markerbb = new google.maps.Marker({
    position: bb,
    map: map,
    
  });
  
}

