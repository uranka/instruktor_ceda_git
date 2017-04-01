// slike se smenjuju na n milisekundi
function makeSlideShow(n) {
	var imgNumber = 1; 	
	var numberOfImages = 3; 
	setInterval( function() {
		imgNumber++;
		if (imgNumber > numberOfImages) {
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




// When the collapsible element is shown, change the button's text to 'less'
$('#divc1').on('show.bs.collapse', function () {
$('#btn1').text('manje');
});
// When the collapsible element is collpased, change the button's text to 'more...'
$('#divc1').on('hide.bs.collapse', function () {
$('#btn1').text('više...');
});


// When the collapsible element is shown, change the button's text to 'less'
$('#divc2').on('show.bs.collapse', function () {
$('#btn2').text('manje');
});
// When the collapsible element is collpased, change the button's text to 'more...'
$('#divc2').on('hide.bs.collapse', function () {
$('#btn2').text('više...');
});


// When the collapsible element is shown, change the button's text to 'less'
$('#divc3').on('show.bs.collapse', function () {
$('#btn3').text('manje');
});
// When the collapsible element is collpased, change the button's text to 'more...'
$('#divc3').on('hide.bs.collapse', function () {
$('#btn3').text('više...');
});