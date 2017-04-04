// Rad samo sa znakovima opasnosti koji su u folderu images/znakovi/opasnosti
// Radim po pravilniku o saobracajnoj signalizaciji

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
["krivina nalevo i krivina nadesno", "približavanje opasnoj krivini na levo, odnosno na desno zbog fizičkih karakteristika ili nedovoljne preglednosti"],
["dvostruka krivina ili više uzastopnih krivina od kojih je prva nalevo i dvostruka krivina ili više uzastopnih krivina od kojih je prva nadesno", "približavanje delu puta sa više uzastopnih krivina zbog fizičkih karakteristika ili nedovoljne preglednosti, od kojih je prva na levo, odnosno na desno"],
["opasna krivina", "više uzastopnih krivina koje su opasne zbog svojih fizičkih karakteristika ili zbog nedovoljne preglednosti"],
["opasan uspon i opasna nizbrdica","približavanje opasnom usponu, odnosno opasnoj nizbrdici zbog veličine nagiba i dužine dela puta koji je pod nagibom"],
["suženje puta, suženje puta sa desne strane i suženje puta sa leve strane", "približavanje delu puta na kome suženje kolovoza može da predstavlja opasnost"],
["pokretni most", "blizina mesta na kome se na putu nalazi pokretni most"],
["blizina obale", "blizina mesta na kome put nailazi na obalu"],
["neravan kolovoz","blizina dela puta na kome je kolovoz neravan zbog postojanja opasnih izbočina i ulegnuća ili zbog opasne izbočine na kolovozu" ],
["klizav kolovoz", "blizina dela puta na kome kolovoz pod određenim atmosferskim uslovima ili sličnim okolnostima ima klizavu površinu"],
["kamenje pršti","blizina dela puta na kome se nalazi nevaljani tucanik ili koji je posut sitnim kamenjem na tvrdoj podlozi i na kome za učesnike u saobraćaju postoji opasnost od prskanja kamena"],
["odronjavanje kamena", "blizina dela puta na kojem postoji opasnost od odronjavanja kamena sa desne strane puta, odnosno sa leve strane puta"],
["blizina pešačkog prelaza", "blizina mesta na putu na kome se nalazi obeleženi pešački  prelaz"],
["deca na putu", "blizina dela puta na kome se deca kreću češće i u većem broju (blizina škole, obdaništa, igrališta"],
["biciklisti na putu", "blizina mesta na kome se biciklisti često kreću po putu ili ga prelaze"],
["životinje na putu","blizina dela puta na kome domaće životinje pod nadzorom prelaze preko puta ili se kreću duž puta"],
["divljač na putu","blizina dela puta koji je opasan zbog prelaska divljači preko puta"],
["radovi na putu","mesto na kome se izvode radovi na putu"],
["nailaženje na semafore", "blizina raskrsnice ili obeleženog pešačkog prelaza na kome je saobraćaj regulisan pomoću semafora"],
["blizina avionske piste", "deo puta preko koga avioni preleću u niskom letu prilikom sletanja odnostno poletanja"],
["bočni vetar", "blizina dela puta na kome često duva jak bočni vetar"],
["saobraćaj u oba smera", "označava mesto na kome se prelazi sa dela puta na kome se saobraćaj odvija samo u jednom smeru na deo tog puta na kome se saobraćaj odvija u oba smera"],
["tunel", "blizina tunela na putu"],
["opasnost na putu", "blizina dela puta ili mesta na putu na kome učesnicima u saobraćaju preti opasnost za koju nije predviđen poseban znak opasnosti"],
["ukrštanje puteva iste važnosti", "blizina raskrsnice na kojoj se ukrštaju putevi iste važnosti"],
["ukrštanje sa sporednim putem pod pravim uglom", ""],
["ukrštanje trt", "mrt"],
["raskrsnica sa kružnim tokom saobraćaja", "blizina raskrsnice na kojoj se saobraćaj odvija u kružnom toku"],
["tramvajska pruga", "blizina mesta na kome put prelazi preko tramvajske pruge u nivou"],
["prelaz puta preko železničke pruge sa branicima ili polubranicima", "blizina prelaza puta preko železničke pruge u nivou, koji je obezbeđen branicima ili polubranicima"],
["prelaz puta preko železničke pruge bez branika ili polubranika", "blizina prelaza puta preko železničke pruge u nivou, koji nije obezbeđen branicima ili polubranicima"],
["Andrejin krst", "gggg"],
["približavanje prelazu puta preko železničke pruge", ""],
["približavanje prelazu puta preko železničke pruge", ""],
["pešaci na putu", "blizina mesta na kome se pešaci često kreću po putu ili ga prelaze"],
["neučvršćena bankina", "blizina dela puta na kome je uz kolovoz neučvršćena bankina"],
["kolona zaustavljenih vozila", "blizina dela puta na kome postoji opasnost od stvaranja kolone zaustavljenih vozila"],
["opasnost od požara", "deo puta koji prolazi kroz područje u kome postoji povećana oapsnost od nastanka požara"]
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
        imagem.src = "images/znakovi/opasnosti/" + counter + ".png"; 
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