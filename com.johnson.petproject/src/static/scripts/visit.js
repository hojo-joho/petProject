/**
 * 
 */

 const nameBtn = document.getElementById("namebtn");
 const visitH2 = document.getElementById("visitH2");

 
 //nameBtn.addEventListener('click', helloMyNameIs());
 nameBtn.addEventListener('click', visitPet());
 
 function helloMyNameIs() {
	 var header = "Hello I'm you pet ";
	 visitH2.innerHTML = header;
 }
 
  function getPetType() {
	 var index = document.URL.indexOf('?');
	 if (index != -1) {
		 var values = document.URL.substring(index+1, document.URL.length).split('&');
		 
		 for (var i=0; i<values.length; i++) {
			 var value = values[i].split("=");
			 values[value[0]] = value[1];
			 console.log(values);
		 }
		 return values;
	 }
 }
 
 	function visitPet() {
	  
	var petTypes = getPetType();
	var petType = decodeURI(petTypes["pets"]);
	//var petName = decodeURI(petTypes["petName"]);
	console.log(petType);
	
	helloMyNameIs();
	
	if (petType !="") {
		switch(petType) {
			case("Dog"):
			 const newDog = document.createElement('div')
 				newDog.innerHTML = "I am a dog";
 				newDog.setAttribute("style", "text-align: center")
 				newDog.style.backgroundColor= 'red';
 				newDog.style.color= 'white';
   				newDog.style.height = '200px';
   			 	newDog.style.width = '200px';
   				newDog.style.borderRadius='30px';
				document.getElementById("myPet").appendChild(newDog);
				break;
			case("Fish"):
			  const newFish = document.createElement('div')
 					newFish.innerHTML = "I am a fish";
 					newFish.setAttribute("style", "text-align: center")
 					newFish.style.backgroundColor= 'orange';
 					newFish.style.color= 'white';
   					newFish.style.height = '100px';
  				    newFish.style.width = '300px';
  				    newFish.style.borderRadius='20px';
				document.getElementById("myPet").appendChild(newFish);
				break;
			case("Plant"):
			  const newPlant = document.createElement('div')
 					newPlant.innerHTML = "I am a plant";
 					newPlant.setAttribute("style", "text-align: center")
 					newPlant.style.backgroundColor= 'green';
 					newPlant.style.color= 'white';
   					newPlant.style.height = '300px';
   					newPlant.style.width = '100px';
   					newPlant.style.borderRadius='10px';
				document.getElementById("myPet").appendChild(newPlant);
				break;
			}
	}
	
	}
	
	
  

      