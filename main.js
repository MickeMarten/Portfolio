const aboutButton = document.querySelector("button");
const buttonDiv = document.querySelector(".navBarOnClick")

aboutButton.addEventListener("click", function() {
const aboutMeInfo = document.createElement('p');
const removeButton = document.createElement('Button');
buttonDiv.appendChild(removeButton);
buttonDiv.appendChild(aboutMeInfo);
removeButton.className="removeButton";
removeButton.innerText="x";
aboutMeInfo.innerText = "Hej jag heter Mikael Mårtensson och jag bor i NOrrköping. Jag vill gärna jobba hos er så länge som det går. Jag jobbar jättebra och jag är snäll mot andra kollegor. Alla kollegor är lika värda för mig och jag lägger ingen vikt i att vi är Hej jag heter Mikael Mårtensson och jag bor i NOrrköping. Jag vill gärna jobba hos er så länge som det går. Jag jobbar jättebra och jag är snäll mot andra kollegor. Alla kollegor äHej jag heter Mikael Mårtensson och jag bor i NOrrköping. Jag vill gärna jobba hos er så länge som det går. Jag jobbar jättebra och jag är snäll mot andra kollegor. Alla kollegor äolika";



removeButton.addEventListener("click", function() {

aboutMeInfo.remove();
removeButton.remove();

})



})
 
