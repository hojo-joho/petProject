/**
 * 
 */
 //email from index.html
 const email = document.getElementsByName("email");
 
 //name from visit.html
 const petName = document.getElementsByName("petName");
 
 const nameBtn = document.getElementById("namebtn");
 nameBtn.addEventListener('click', helloMyNameIs());

 
 function validateEmail() {
	 
	 var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	 
	 if (email.value.match(emailRegex)) {
		 console.log("Email is valid");
		 localStorage.clear;
		 return true;
	 } else if (!email.value.match(emailRegex)) {
		 alert("Something is not quite right. Please enter a valid email.");
		 return false;
	 }
 }
 
 
 
  function validateName() {
	 
	 var nameRegex = /[A-Za-z]*/;
	 
	 if (petName.value.match(nameRegex)) {
		 console.log("Name is now" + petName);
		 return true;
	 } else if (!petName.value.match(nameRegex)) {
		 alert("Something is not quite right. Please enter a different name");
		 return false;
	 }
 }
 
/*  function saveName() {
	 let nameTextstring = JSON.stringify(nameText);
	 localStorage.setItem("petName", nameTextstring);
	 console.log(localStorage.getItem("petName"));
 }
 
 
 function saveType() {
	 let petTypestring = JSON.stringify(select);
	 localStorage.setItem("petType", petTypestring);
	 console.log(localStorage.getItem("petType"));
 }
 */
 
 function getPetType() {
	 var index = document.URL.indexOf('?');
	 if (index != -1) {
		 
		 var values = document.URL.substring(index+1, document.URL.length).split('&');
		 
		 for (var i=0; i<values.length; i++) {
			 var value = values[i].split("=");
			 values[value[0]] = value[1];
			 console.log(values);
		 }
	 }
 }
 
 /*function visitPet() {
	  
	var petTypes = getPetType();
	petType = decodeURI(petTypes["dog"]);
	
	 
	 helloMyNameIs(petName);
	 
	 if (petType == 'Plant') {
	 	document.getElementById("myPet").appendChild(newPlant);
	 } else if (petType == 'Dog') {
		document.getElementById("myPet").appendChild(newDog);
	 } else if (petType == 'Fish') {
		  document.getElementById("myPet").appendChild(newFish);
	 }
 } */

 
 /*
var select = document.querySelector("petsDropDown")
if (select) {
	select.addEventListener('focusout', saveType());
}

var nameText = document.querySelector("petName")
if (nameText) {
	nameText.addEventListener('focusout', saveName());
}

 
 var newDog = document.createElement('div')
 	newDog.innerHTML = "I am a dog";
 	newDog.setAttribute("style", "text-align: center")
 	newDog.style.backgroundColor= 'red';
 	newDog.style.color= 'white';
    newDog.style.height = '200px';
    newDog.style.width = '200px';
 	
  var newFish = document.createElement('div')
 	newFish.innerHTML = "I am a fish";
 	newFish.setAttribute("style", "text-align: center")
 	newFish.style.backgroundColor= 'orange';
 	newFish.style.color= 'white';
    newFish.style.height = '100px';
    newFish.style.width = '300px';
    
  	
  var newPlant = document.createElement('div')
 	newPlant.innerHTML = "I am a fish";
 	newPlant.setAttribute("style", "text-align: center")
 	newPlant.style.backgroundColor= 'green';
 	newPlant.style.color= 'white';
    newPlant.style.height = '300px';
    newPlant.style.width = '100px';
      
      
 /* function quit() {
	 window.close();
 } */
 
 
