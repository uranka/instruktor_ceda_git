// slike se smenjuju na n milisekundi
function makeSlideShow(n) {
	var imgNumber = 1; 	
	var numberOfImages = 3; 
	setInterval( function() {
		imgNumber++;
		if (imgNumber > numberOfImages){
			imgNumber = 1;
		}
		var imgName = "images/ceda/slika" + imgNumber + ".jpg";
		var image = document.getElementById("slika");
		image.setAttribute("src", imgName );		
	}, n);
}


function init() {			
	makeSlideShow(1800);
}

window.onload = init;