// Rad samo sa znakovima opasnosti koji su u folderu images/znakovi/opasnosti
// Radim po pravilniku o saobracajnoj signalizaciji
//OVI ZNAKOVI NAREDBI SE DELE NA NEKE PODGRUPE PA PROUČI TO

// Problem: kada sam npr. na trecoj stranici stranice saobr. znakovi i odem
// na neku drugu stranicu na sajtu pa uradim back
// ne ucita trecu stranicu stranice saobr. znakovi nego prvu
// jer tako mi zapocinje rad stranice znakovi.html
// ne postoji vise html stranica za saobr. znakove, sve se vrti u toj jednoj
// pomocu java scripta

// Ako se klikne back u browseru ne ide na page od saobr znakova
// koji je prethodno gledao nego na prethodnu html strnaicu
// jer su mi saob znac sve jedna stranica

// Buttoni za navigaciju po stranicama saob. znakova:
// ako ih ima vise prelaze u novi red u slucaju malog ekrana
// nit njih ima previse, a  i jako su mali tako da ce se ovo
// retko desavati


// podrazumeva da su id-vi buttona iz ovog opsega
// btn1, btn2, ... btn9 - za stranice
// btnn - za prelazak na next page 

//  itemsOnPage - odredjuje broj znakova na strani
//  broj stranice mora biti jednocifren, onda je max broj znakova (itemsTotal)= 9 * itemsOnPage

//  displayedPages - ukupan broj stranica koje cu morati da imam da prikazem sve znakove

//  page - da mi kaze koje dugme je aktivno i koju stranicu treba da prikazujem

//  itemsTotal - ukupan broj saob. znakova za prikazivanje = duzini niza opisiSlika

//  opisiSlika - niz nizova, svaki podniz sadrzi kratak opis slike i dugacak opis slike
//  trenutno opisi slika nisu upareni sa saob. zn.

//  counter - vodi racuna koje slike trenutno prikazujemo
//  krece se izmedju cfirst i clast koje izracunavam na osnovu ukupnog broja slika koje 
//  treba da se prikazu (itemsTotal) i zeljenog broja slika (itemsOnPage) na jednoj 
//  datoj stranici (page)


function placeImages(page) {

var opisiSlika = [
["ustupanje prvenstva prolaza", "na raskrsnici na kojoj je postavljen označava naredbu vozaču da mora da ustupi prvenstvo prolaza vozilima koja se kreću putem na koji nailazi"],
["obavezno zaustavljanje", "na raskrsnici na kojoj je postavljen označava naredbu vozaču da mora da zaustavi vozilo i ustupi prvenstvo prolaza vozilima koja se kreću putem na koji on nailazi"],
["zabrana saobraćaja u oba smera", "označava put odnosno deo puta na kome je zabranjen saobraćaj svim vozilima u oba smera"],
["zabrana saobraćaja u jednom smeru", "označava put odnosno deo puta na kome je zabranjen saobraćaj vozila iz smera prema kome je okrenut znak"],
["zabrana saobraćaja za motorna vozila", "označava put odnosno deo puta na kome je zabranjen saobraćaj za sva motorna vozila, osim za motocikle bez prikolice i mopeda"],
["zabrana saobraćaja za autobuse", "označava put odnosno deo puta na kome je zabranjen saobraćaj za autobuse"],
["zabrana saobraćaja za teretna vozila", "označava put odnosno deo puta na kome je zabranjen saobraćaj za teretna vozila. Ako se uz ovaj znak" +
"doda dopunska tabla na kojoj je označena najveća dozvoljena masa vozila, zabrana važi samo za ona teretna vozila čija najveća dozvoljena" +
"masa prelazi označenu masu"],
["zabrana saobraćaja za vozila koja prevoze materije koje mogu da izazovu zagađenje vode", "označava put odnosno deo puta na kome je zabranjen saobraćaj vozilima koja prevoze materije koje mogu da izazovu zagađivanje vode"],
["zabrana saobraćaja vozilima koja prevoze eksploziv ili lako zapaljive materije", ""],
["zabrana saobraćaja za motorna vozila koja vuku priključno vozilo osim poluprikolice i zabrana saobraćaja za motorna vozila koja vuku priključno vozilo", ""],
["zabrana saobraćaja za traktore", ""],
["zabrana saobraćaja za motocikle", ""],
["zabrana saobraćaja za mopede", ""],
["zabrana saobraćaja za bicikle", ""],
["zabrana saobraćaja za zaprežna vozila", ""],
["zabrana saobraćaja za ručna kolica", ""],
["zabrana saobraćaja za pešake", ""],
["zabrana saobraćaja za sva motorna vozila", ""],
["zabrana saobraćaja za sva motorna vozila i zaprežna vozila i zabrana saobraćaja za vozila označena simbolom", ""],
["zabrana saobraćaja vozila čija širina prelazi određenu širinu", ""],
["zabrana saobraćaja vozila čija ukupna visina prelazi određenu visinu", ""],
["zabrana saobraćaja za vozila čija ukupna masa prelazi određenu masu", ""],
["zabrana saobraćaja za vozila koja prekoračuju određeno osovinsko opterećenje", ""],
["zabrana saobraćaja za sva vozila koja prekoračuju određenu dužinu", ""],
["najmanje odstojanje između vozila", ""],
["zabrana skretanja ulevo i zabrana skretanja udesno", ""],
["zabrana polukružnog okretanja", ""],
["zabrana preticanja za motorna vozila", ""],
["zabrana preticanja za teretna vozila", ""],
["ograničenje brzine", ""],
["zabrana davanja zvučnih znakova", ""],
["zabrana prolaza bez zaustavljanja", ""],
["prvenstvo prolaza za vozila iz suprotnog smera", ""],
["zabrana zaustavljanja i parkiranja", ""],
["zabrana parkiranja", ""],
["naizmenično parkiranje", "označava stranu puta na kojem je zabranjeno parkiranje neparnim danima"],
["naizmenično parkiranje", "označava stranu puta na kojem je zabranjeno parkiranje parnim danima"],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""]


];

	
var itemsTotal = opisiSlika.length; 
var itemsOnPage = 7; 
var displayedPages = Math.ceil(itemsTotal/itemsOnPage); // broj stranica za prikazivanje
	
// postavlja znakove za odredjenu stranicu paginacije
// postavlja buttone za navigaciju po stranicama 

	var cfirst = page * itemsOnPage - itemsOnPage + 1;
	var clast = itemsTotal < itemsOnPage * page ? itemsTotal : itemsOnPage * page;
	
	console.log("page = " + page);
	console.log("cfirst = " + cfirst);
	console.log("clast = " + clast);	
			
					
	var divContainer = document.getElementById("znakovi");
	divContainer.innerHTML = "";
	
	var counter;		
	
	for (counter = cfirst; counter <= clast; counter++) {
		var div = document.createElement("div");
		div.setAttribute("class", "row");
		
		var divSlike = document.createElement("div");
		divSlike.setAttribute("class", "col-xs-12 col-sm-3 col-md-3 col-lg-3");
		
		var imagem = document.createElement("img");
        imagem.src = "images/znakovi/naredbi/" + counter + ".png"; 
		imagem.setAttribute("class", "img-responsive");  			
		divSlike.appendChild(imagem);
		
				
		var divOpisa = document.createElement("div");
		divOpisa.setAttribute("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");		
		var divPanelBody = document.createElement("div");
		divPanelBody.setAttribute("class", "panel-body");
		//divPanelBody.innerHTML = opisiSlika[counter-1];
		divPanelBody.innerHTML = "<b>"+opisiSlika[counter-1][0]+"</b>" + " - " + opisiSlika[counter-1][1];
		divOpisa.appendChild(divPanelBody);
		
		div.appendChild(divSlike);
		div.appendChild(divOpisa);
			
		divContainer.appendChild(div);
	}
	
	if (itemsOnPage < itemsTotal) {		
		placeBtnNav(displayedPages, page);	
	}		
}
/***************************************************************************/



/***************************************************************************/
//NAPOMENA OGRANICENJE ZA ID BUTTONA U PAGINACIJI JE DA JE JEDNOSCIFREN
// podrazumeva da su id-vi buttona iz ovog opsega
// btn1, btn2, ... btn9 - za stranice
// btnn - za prelazak na next page 

//  itemsOnPage - odredjuje broj znakova na strani
//  ako je broj stranice jednocifren, onda max broj znakova (itemsTotal)= 9 * itemsOnPage
//  displayedPages - broj stranica za prikazivanje
//  page da mi kaze koje dugme je aktivno
function placeBtnNav(displayedPages, page) {

		var previousPage = page;
		
		function generateMyHandler (x) {			
			return function() { 
				page = x; // ovde se postavlja vrednost za page, prvi put postavlja se u placeImages(1), pa ta fja pozove placeBtnNav i prosledio joj page
				console.log("page unutar generateMyHandler = " + page);
					if (page == 'n') { // ako je page next odredi koji je to broj za page											
						// kontrolisi da li je previousPage broj jer ako nije nalepice 1 a ne dodati je
						// ako je na poslednjoj stranici next ga salje na prvu, mozda je bolje resenje da dugme next nestane	
						// ili ga disablovati
						page = previousPage === displayedPages ? 1 : previousPage + 1;
						console.log("~~~page u if n = " + page);						
					}
					previousPage = page;
					console.log("~~~previousPage = " + previousPage );
					console.log("page poslat fji placeImages = " + page);					
					placeImages(page);							
			};
		}
		
	//var previousPage = page;	
	var divContainerBtnNav = document.getElementById("paginacija");
	divContainerBtnNav.innerHTML = "";
	
	var i;
	var btn;
	
	for (i = 1; i<= displayedPages; i++) {
		console.log("for i="+i);
		btn = document.createElement("button");
		btn.setAttribute("id", "btn" +  i);		
		// postavi klasu btn-pag-active na btn ciji id je page		
		if (i === page) {
			btn.setAttribute("class", "btn-pag-active");
			console.log("     i=" + i + " , page=" + page + " (aktivno dugme)"); // kontrola
		}
		else {
			btn.setAttribute("class", "btn-pag");
		}
		
		btn.innerHTML = i;		
	
		console.log("About to generate my handler");
		btn.onclick = generateMyHandler(i);				
		divContainerBtnNav.appendChild(btn);
	}

// postavi button za next
	btn = document.createElement("button");
	btn.setAttribute("id", "btnn");	
	btn.setAttribute("class", "btn-pag");
	btn.innerHTML = ">>";	
	btn.onclick = generateMyHandler('n');
	divContainerBtnNav.appendChild(btn);	
}
/***************************************************************************/


/***************************************************************************/
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
/***************************************************************************/

window.onload = function() {   
	makeSlideShow(1800); 
	placeImages(1);	
};

// ucitava inicijalno prvu stranicu page = 1
// i sva dugma za navigaciju ima ih koliko i stranica displayedPages + next (>>)
// svako dugme ima onclick fju ispis odgovarajuce stranice, za >> dugme ispisuje se sledecea stranica
// posle poslednje stranice skace se na prvu