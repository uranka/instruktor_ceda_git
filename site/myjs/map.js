function myMap() {
	console.log("inside myMap function");
	var myCenter = new google.maps.LatLng(45.3818, 20.3698);
    var mapOptions = {
        center: myCenter,		
        zoom: 17,	   
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);	
	var marker = new google.maps.Marker({position: myCenter,
									animation: google.maps.Animation.BOUNCE});
	marker.setMap(map);
	
	var infowindow = new google.maps.InfoWindow({
			content: "AŠ Bagljaš"
		});
	infowindow.open(map,marker);
}