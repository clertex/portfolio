var logoHover = document.getElementById("logoHover");

var nav = document.getElementById("navigation-icons");


var toTopBtn = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		toTopBtn.style.display = "block";
		toTopBtn.style.transform = "translateY(-80px)";
	} else {
		toTopBtn.style.display = "block";
		toTopBtn.style.transform = "translateY(80px)";
	}
}

function backToChoices(){
	nav.scrollIntoView();
}

function downloadResume(){
	var win = window.open('resume_gideonlinggaban.pdf', '_blank');
	if (win) {
	    win.focus();
	} else {
	    alert('Please allow popups for this website');
	}
}

function changeLabel(text){
	var labelHover = document.getElementsByClassName("labelHover");
	labelHover[0].innerText = text;
	labelHover[1].innerText = text;
	labelHover[2].innerText = text;
	labelHover[3].innerText = text;
	labelHover[4].innerText = text;
	labelHover[5].innerText = text;
}

function resetLabel(){
	var labelHover = document.getElementsByClassName("labelHover");
	labelHover[0].innerText = "";
	labelHover[1].innerText = "";
	labelHover[2].innerText = "";
	labelHover[3].innerText = "";
	labelHover[4].innerText = "";
	labelHover[5].innerText = "";
}

function changeFooter(text){
	var labelFooter = document.getElementById("footerLabel");
	labelFooter.innerText = text;
}

function resetFooter(){
	var labelFooter = document.getElementById("footerLabel");
	labelFooter.innerText = "";
}

var originBlock = document.getElementById("initialChoices-container");
var skillsBlock = document.getElementById("skills");
var credentialsBlock = document.getElementById("credentials");
var worksBlock = document.getElementById("works");
var hobbiesBlock = document.getElementById("hobbies");
var contactsBlock = document.getElementById("contacts");
var personalInfoBlock = document.getElementById("personalInfo");

var footerCircle = document.getElementById("footerCircle");
var footerIcon1 = document.getElementById("footerSkills");
var footerIcon2 = document.getElementById("footerCredentials");
var footerIcon3 = document.getElementById("footerWorks");
var footerIcon4 = document.getElementById("footerHobbies");
var footerIcon5 = document.getElementById("footerContacts");
var footerIcon6 = document.getElementById("footerPersonalInfo");
var footerLabelContainer = document.getElementById("footerLabelContainer");

function skillsOpen(){
	backToChoices();
	originBlock.style.display = "none";
	footerLabelContainer.style.display = "block";

	skillsBlock.style.height = "auto";
	skillsBlock.style.opacity = 1;

	credentialsBlock.style.height = 0;
	credentialsBlock.style.opacity = 0;
	worksBlock.style.height = 0;
	worksBlock.style.opacity = 0;
	hobbiesBlock.style.height = 0;
	hobbiesBlock.style.opacity = 0;
	contactsBlock.style.height = 0;
	contactsBlock.style.opacity = 0;
	personalInfoBlock.style.height = 0;
	personalInfoBlock.style.opacity = 0;

	footerCircle.style.opacity = 0;
	footerIcon1.style.width = "40px";
	footerIcon1.style.height = "40px";
	footerIcon1.style.marginTop = "-25px";
	footerIcon1.style.display = "block";

	footerIcon2.style.display = "block";
	footerIcon3.style.display = "block";
	footerIcon4.style.display = "block";
	footerIcon5.style.display = "block";
	footerIcon6.style.display = "block";
	
	footerIcon1.src="img/footerCircle1.png";
	footerIcon2.src="img/credentials.png";
	footerIcon3.src="img/work.png";
	footerIcon4.src="img/hobby.png";
	footerIcon5.src="img/contacts.png";
	footerIcon6.src="img/personalInfo.png";

	handleTabletChange(mediaQuery);
	logoHover.innerText = "";
}

function credentialsOpen(){
	backToChoices()
	originBlock.style.display = "none";
	footerLabelContainer.style.display = "block";
	skillsBlock.style.height = 0;
	skillsBlock.style.opacity = 0;

	credentialsBlock.style.height = "auto";
	credentialsBlock.style.opacity = 1;

	worksBlock.style.height = 0;
	worksBlock.style.opacity = 0;
	hobbiesBlock.style.height = 0;
	hobbiesBlock.style.opacity = 0;
	contactsBlock.style.height = 0;
	contactsBlock.style.opacity = 0;
	personalInfoBlock.style.height = 0;
	personalInfoBlock.style.opacity = 0;

	footerCircle.style.opacity = 0;
	footerIcon1.style.display = "block";
	footerIcon2.style.width = "40px";
	footerIcon2.style.height = "40px";
	footerIcon2.style.marginTop = "-25px";
	footerIcon2.style.display = "block";
	footerIcon3.style.display = "block";
	footerIcon4.style.display = "block";
	footerIcon5.style.display = "block";
	footerIcon6.style.display = "block";
	footerIcon1.src="img/skills.png";
	footerIcon2.src="img/footerCircle2.png";
	footerIcon3.src="img/work.png";
	footerIcon4.src="img/hobby.png";
	footerIcon5.src="img/contacts.png";
	footerIcon6.src="img/personalInfo.png";

	handleTabletChange(mediaQuery);
	logoHover.innerText = "";
}

function worksOpen(){
	backToChoices()
	originBlock.style.display = "none";
	footerLabelContainer.style.display = "block";
	skillsBlock.style.height = 0;
	skillsBlock.style.opacity = 0;
	credentialsBlock.style.height = 0;
	credentialsBlock.style.opacity = 0;

	worksBlock.style.height = "auto";
	worksBlock.style.opacity = 1;

	hobbiesBlock.style.height = 0;
	hobbiesBlock.style.opacity = 0;
	contactsBlock.style.height = 0;
	contactsBlock.style.opacity = 0;
	personalInfoBlock.style.height = 0;
	personalInfoBlock.style.opacity = 0;

	footerCircle.style.opacity = 0;
	footerIcon1.style.display = "block";
	footerIcon2.style.display = "block";
	footerIcon3.style.width = "40px";
	footerIcon3.style.height = "40px";
	footerIcon3.style.marginTop = "-25px";
	footerIcon3.style.display = "block";
	footerIcon4.style.display = "block";
	footerIcon5.style.display = "block";
	footerIcon6.style.display = "block";
	footerIcon1.src="img/skills.png";
	footerIcon2.src="img/credentials.png";
	footerIcon3.src="img/footerCircle3.png";
	footerIcon4.src="img/hobby.png";
	footerIcon5.src="img/contacts.png";
	footerIcon6.src="img/personalInfo.png";

	handleTabletChange(mediaQuery);
	logoHover.innerText = "";
}

function hobbiesOpen(){
	backToChoices()
	originBlock.style.display = "none";
	footerLabelContainer.style.display = "block";
	skillsBlock.style.height = 0;
	skillsBlock.style.opacity = 0;
	credentialsBlock.style.height = 0;
	credentialsBlock.style.opacity = 0;
	worksBlock.style.height = 0;
	worksBlock.style.opacity = 0;

	hobbiesBlock.style.height = "auto";
	hobbiesBlock.style.opacity = 1;

	contactsBlock.style.height = 0;
	contactsBlock.style.opacity = 0;
	personalInfoBlock.style.height = 0;
	personalInfoBlock.style.opacity = 0;

	footerCircle.style.opacity = 0;
	footerIcon1.style.display = "block";
	footerIcon2.style.display = "block";
	footerIcon3.style.display = "block";
	footerIcon4.style.width = "40px";
	footerIcon4.style.height = "40px";
	footerIcon4.style.marginTop = "-25px";
	footerIcon4.style.display = "block";
	footerIcon5.style.display = "block";
	footerIcon6.style.display = "block";
	footerIcon1.src="img/skills.png";
	footerIcon2.src="img/credentials.png";
	footerIcon3.src="img/work.png";
	footerIcon4.src="img/footerCircle4.png";
	footerIcon5.src="img/contacts.png";
	footerIcon6.src="img/personalInfo.png";

	handleTabletChange(mediaQuery);
	logoHover.innerText = "";
}

function contactsOpen(){
	backToChoices()
	originBlock.style.display = "none";
	footerLabelContainer.style.display = "block";
	skillsBlock.style.height = 0;
	skillsBlock.style.opacity = 0;
	credentialsBlock.style.height = 0;
	credentialsBlock.style.opacity = 0;
	worksBlock.style.height = 0;
	worksBlock.style.opacity = 0;
	hobbiesBlock.style.height = 0;
	hobbiesBlock.style.opacity = 0;

	contactsBlock.style.height = "auto";
	contactsBlock.style.opacity = 1;

	personalInfoBlock.style.height = 0;
	personalInfoBlock.style.opacity = 0;

	footerCircle.style.opacity = 0;
	footerIcon1.style.display = "block";
	footerIcon2.style.display = "block";
	footerIcon3.style.display = "block";
	footerIcon4.style.display = "block";
	footerIcon5.style.width = "40px";
	footerIcon5.style.height = "40px";
	footerIcon5.style.marginTop = "-25px";
	footerIcon5.style.display = "block";
	footerIcon6.style.display = "block";
	footerIcon1.src="img/skills.png";
	footerIcon2.src="img/credentials.png";
	footerIcon3.src="img/work.png";
	footerIcon4.src="img/hobby.png";
	footerIcon5.src="img/footerCircle5.png";
	footerIcon6.src="img/personalInfo.png";

	handleTabletChange(mediaQuery);
	logoHover.innerText = "";
}


function personalInfoOpen(){
	backToChoices()
	originBlock.style.display = "none";
	footerLabelContainer.style.display = "block";
	skillsBlock.style.height = 0;
	skillsBlock.style.opacity = 0;
	credentialsBlock.style.height = 0;
	credentialsBlock.style.opacity = 0;
	worksBlock.style.height = 0;
	worksBlock.style.opacity = 0;
	hobbiesBlock.style.height = 0;
	hobbiesBlock.style.opacity = 0;
	contactsBlock.style.height = 0;
	contactsBlock.style.opacity = 0;

	personalInfoBlock.style.height = "auto";
	personalInfoBlock.style.opacity = 1;

	footerCircle.style.opacity = 0;
	footerIcon1.style.display = "block";
	footerIcon2.style.display = "block";
	footerIcon3.style.display = "block";
	footerIcon4.style.display = "block";
	footerIcon5.style.display = "block";	
	footerIcon6.style.width = "40px";
	footerIcon6.style.height = "40px";
	footerIcon6.style.marginTop = "-25px";
	footerIcon6.style.display = "block";
	footerIcon1.src="img/skills.png";
	footerIcon2.src="img/credentials.png";
	footerIcon3.src="img/work.png";
	footerIcon4.src="img/hobby.png";
	footerIcon5.src="img/contacts.png";
	footerIcon6.src="img/footerCircle6.png";

	handleTabletChange(mediaQuery);
	logoHover.innerText = "";
}


const mediaQuery = window.matchMedia('(max-width: 700px)')
function handleTabletChange(e) {
  if (e.matches) {
    // alert('Media Query Matched!');
    resetLabel();
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

let switchesCredential = ['off','off','off','off'];
let switchesWorks = ['off','off','off','off','off','off','off'];
let switchesHobbies = ['off','off','off','off','off'];

function hideShow(vision, className, content, switchNumber, count){
	var element = document.getElementsByClassName(className)[0];

	if (content == "credentials"){
		if (switchesCredential[switchNumber] == 'off'){
			switchesCredential[switchNumber] = 'on';
			element.style.height = "auto";
			element.style.opacity = 1;
			element.style.display = "block";
			vision.src = "img/show.png";
		} else if (switchesCredential[switchNumber] == 'on'){
			switchesCredential[switchNumber] = 'off';
			element.style.height = 0;
			element.style.opacity = 0;
			element.style.display = "none";
			vision.src = "img/hide.png";
		}
	}
	else if (content == "works"){
		if (switchesWorks[switchNumber] == 'off'){
			switchesWorks[switchNumber] = 'on';
			element.style.height = "auto";
			element.style.opacity = 1;
			element.style.display = "block";
			vision.src = "img/show.png";
		} else if (switchesWorks[switchNumber] == 'on'){
			switchesWorks[switchNumber] = 'off';
			element.style.height = 0;
			element.style.opacity = 0;
			element.style.display = "none";
			vision.src = "img/hide.png";
		}
	}
	else if (content == "hobbies"){
		if (switchesHobbies[switchNumber] == 'off'){
			switchesHobbies[switchNumber] = 'on';
			element.style.height = "auto";
			element.style.opacity = 1;
			if (className == "fanArtContent" ){
				element.style.display = "flex";
			} else{
				element.style.display = "block";
			}
			vision.src = "img/show.png";
		} else if (switchesHobbies[switchNumber] == 'on'){
			switchesHobbies[switchNumber] = 'off';
			element.style.height = 0;
			element.style.opacity = 0;
			element.style.display = "none";
			vision.src = "img/hide.png";
		}
	}
}

function toggleEye(element){
	element.src = "img/hide.png";
}

var projector = document.getElementById("imageProjector");
var projectorSpace = document.getElementById("imgDisplayer");

function displayLogo(source){
	projector.src=source;	
	projector.style.opacity = 1;
	projectorSpace.style.height = "100%";
	projectorSpace.style.opacity = 1;
	projector.style.marginRight = "auto";

	if (source == "img/pw/logoG.png"){
		projector.style.marginTop = "15%";
	}
	if (source == "img/pw/logoJ1.png"){
		projector.style.marginTop = "13%";
	}
}

function displayReset(){
	projector.style.opacity = 0;
	projector.style.marginRight = "-100%";
	projector.style.marginTop = "5%";
	projector.style.display = "none";
	projectorSpace.style.height = 0;
	projectorSpace.style.opacity = 0;
	projectorSpace.style.display = "none";
}

function displayInitiate(text){
	projector.style.display = "block";
	projectorSpace.style.display = "block";
	
	logoHover.innerText = text;
}

var projectorExit = document.getElementById("projectorExit");
function projectorHoverIn(){
	projectorExit.src="img/exit2.png";
}
function projectorHoverOut(){
	projectorExit.src="img/exit1.png";
}

function displayDeeds(source){
	projector.src=source;	
	projector.style.opacity = 1;
	projector.style.marginRight = "auto";
	projector.style.marginTop = "3%";
	projector.style.width = "400px";

	projectorSpace.style.height = "100%";
	projectorSpace.style.opacity = 1;
}
function displayCards(source){
	projector.src=source;	
	projector.style.opacity = 1;
	projector.style.marginRight = "auto";
	projector.style.marginTop = "7%";
	projector.style.width = "430px";

	projectorSpace.style.height = "100%";
	projectorSpace.style.opacity = 1;
}
function displayCardsW(source, color){
	projector.src=source;	
	projector.style.opacity = 1;
	projector.style.marginRight = "auto";
	projector.style.marginTop = "7%";
	projector.style.width = "430px";
	projector.style.backgroundColor = color;

	projectorSpace.style.height = "100%";
	projectorSpace.style.opacity = 1;
}
var imageProjectorV2 = document.getElementById("projectorIMG");
var x = document.getElementById("ex");

function displayReload(){
	projector.style.display = "block";
	projector.style.backgroundColor = "transparent";
	projectorSpace.style.display = "block";
}

var bdayFrame = document.getElementById("frameProjector");
function displayBdayFrame(source){
	bdayFrame.src=source;	
}

function headerSpaces660(e) {
	var headPaladins = document.getElementById("headerPaladins");
  if (e.matches) {
    headPaladins.src = "img/headPaladins2.png";
  } 
  else {
  	headPaladins.src = "img/headPaladins.png";
  }
}
var mediaQuery660 = window.matchMedia("(max-width: 660px)")
headerSpaces660(mediaQuery660)
mediaQuery660.addListener(headerSpaces660)

function headerSpaces600(e) {
	var headSeminars = document.getElementById("headerSeminars");
  if (e.matches) {
    headSeminars.src = "img/headSeminars2.png";
  } 
  else {
  	headSeminars.src = "img/headSeminars.png";
  }
}
var mediaQuery600 = window.matchMedia("(max-width: 600px)")
headerSpaces600(mediaQuery600)
mediaQuery600.addListener(headerSpaces600)

function headerSpaces530(e) {
	var headApplication = document.getElementById("headerApplication");
	var headOtherGraphics = document.getElementById("headerOtherGraphics");
  if (e.matches) {
  	headApplication.src = "img/headApplicationDesign2.png";
    headOtherGraphics.src = "img/headOtherGraphics2.png";
  } 
  else {
  	headApplication.src = "img/headApplicationDesign.png";
  	headOtherGraphics.src = "img/headOtherGraphics.png";
  }
}
var mediaQuery530 = window.matchMedia("(max-width: 531px)")
headerSpaces530(mediaQuery530)
mediaQuery530.addListener(headerSpaces530)

function headerSpaces465(e) {
	var headWorldBuilding = document.getElementById("headerWorldBuilding");
	var headCharacterSheets = document.getElementById("headerCharacterSheets");
	var headMusic = document.getElementById("headerMusic");
  if (e.matches) {
  	headWorldBuilding.src = "img/headWorldBuilding2.png";
    headCharacterSheets.src = "img/headCharacterSheets2.png";
    headMusic.src = "img/headMusic2.png";
  } 
  else {
  	headWorldBuilding.src = "img/headWorldBuilding.png";
  	headCharacterSheets.src = "img/headCharacterSheets.png";
  	headMusic.src = "img/headMusic.png";
  }
}
var mediaQuery465 = window.matchMedia("(max-width: 465px)")
headerSpaces465(mediaQuery465)
mediaQuery465.addListener(headerSpaces465)

function headerSpaces435(e) {
	var headEducation = document.getElementById("headerEducation");
	var headCharacterReferences = document.getElementById("headerCharacterReferences");
  if (e.matches) {
  	headEducation.src = "img/headEducation2.png";
    headCharacterReferences.src = "img/headCharacterReferences2.png";
  } 
  else {
  	headEducation.src = "img/headEducation.png";
  	headCharacterReferences.src = "img/headCharacterReferences.png";
  }
}
var mediaQuery435 = window.matchMedia("(max-width: 435px)")
headerSpaces435(mediaQuery435)
mediaQuery435.addListener(headerSpaces435)

var monopoly = document.getElementById("monopolyBoard");
var monopolyDeg = 0;
function rotate(){
	monopolyDeg = monopolyDeg - 90;
	monopoly.style.transform = "rotate(" + monopolyDeg + "deg)";
}