/*Zadatak 1: Toggle srce on/off */
//a) Dohvati sve srca u karticama
let heartIcons = document.querySelectorAll(".card .heart-icon");
for(let i = 0; i < heartIcons.length; i++){
    let heartIcon = heartIcons[i];
    //b) Za svako srce registiraj funkciju koja će se pokrenuti na klik
    heartIcon.addEventListener("click", handleHeartIconClick);
}

function handleHeartIconClick(e){
    //c) Promini klase fa-heart fa-heart-o za efekt punog/praznog srca
    let heartIcon = e.currentTarget; //Srce na koje smo sad klikli
    if(heartIcon.classList.contains("fa-heart-o")){ //"prazno" srce
        heartIcon.classList.remove("fa-heart-o");
        heartIcon.classList.add("fa-heart");
    }
    else {
        heartIcon.classList.remove("fa-heart");
        heartIcon.classList.add("fa-heart-o");
    }
}

/*2. zadatak: Dodavanje paragrafa kad se klikne na + */
let addParagraphIcons = document.querySelectorAll(".card .add-paragraph-icon");
for(let i = 0; i < addParagraphIcons.length; i++){
    let addParagraphIcon = addParagraphIcons[i];
    addParagraphIcon.addEventListener("click", handleAddParagraphClick);
}

function handleAddParagraphClick(e){
    let addParagraphIcon = e.currentTarget;
    let text = prompt("Unesi tekst novog paragrafa");

    if(text){
        let newParagraph = document.createElement("p");
        newParagraph.textContent = text;

        let card = addParagraphIcon.parentElement;
        card.appendChild(newParagraph);
    }
}

/*3. zadatak: Brisanje */
let deleteCardIcons = document.querySelectorAll(".card .delete-button");
for(let i = 0; i < deleteCardIcons.length; i++){
    let deleteCardIcon = deleteCardIcons[i];
    deleteCardIcon.addEventListener("click", handleDeleteCardClick);
}

function handleDeleteCardClick(e){
    let deleteCardIcon = e.currentTarget;
    let card = deleteCardIcon.parentElement;
    let cardTitle = card.querySelector("h3");

    if(confirm("Izbrisati karticu: " + cardTitle.textContent + "?")){
        card.remove();
    }
}
//ODAVDE DANAS ->
//Dinamično kreiranje kartica
let addCardButton = document.querySelector("#add-card-button");
//Arrow funkcija, izvršit će se kad korisnik klikne na addCardButton
addCardButton.addEventListener("click", async function(e) {
    let title = prompt("Unesi naslov kartice", "naslov");
    if(!title) { return; }

    let imageUrl = prompt("Unesi url slike", "images/newsHeadings/cetina.jpg");
    if(!imageUrl) { return; }

    let description = prompt("Unesi opis", "opis");
    if(!description) { return; }

    let response = await fetch(
        `API.php?action=addCard&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imageUrl)}`
    );
    let responseData = await response.json();
    if (!responseData.success) {
        alert(`Invaild action: ${responseData.reason}`);
        return;
    }

    let cardTemplate = document.querySelector("#card-template");
    //na osnovu templetea kreira element
    let cardElement = document.importNode(cardTemplate.content, true);

    //Prominit stvari koje su posebne za ovu karticu
    cardElement.querySelector(".card-title-label").textContent = title;
    cardElement.querySelector("img").src = imageUrl;
    cardElement.querySelector("p").textContent = description;

    cardElement.querySelector(".heart-icon").addEventListener("click", handleHeartIconClick);
    cardElement.querySelector(".delete-button").addEventListener("click", handleDeleteCardClick);
    cardElement.querySelector(".add-paragraph-icon").addEventListener("click", handleAddParagraphClick);

    const starElements = cardElement.querySelectorAll(".star-icon");
    for(let i = 0; i < starElements.length; i++){
        const starElement = starElements[i];
        starElement.addEventListener("click", handleStarClick);
    }

    //Ubaciti novi element zajedno s drugim karticama
    let cardsContainer = document.querySelector("#cards-container");
	
	cardsContainer.appendChild(cardElement);
});

//1. Reagirati na keyup event u search inputu
document.querySelector("#search-box").addEventListener("keyup", e => {
    //2. Pročitati koja se trenutno vrijednost nalazi u search input (e.currentTarget.value)
    let query = e.currentTarget.value;
    
    //3. Dohvatiti sve kartice i za svaku karticu
    let cards = document.querySelectorAll(".card");
    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        if(card.textContent.indexOf(query) >= 0){ //sadrži -> kartica ne smi biti skrivena
            card.classList.remove("hidden");
        }
        else {//ne sadrži -> kartica treba biti skrivena
            card.classList.add("hidden");
        }
    }
    //Dohvatiti tekst te kartice (card.textContent)
    
    //Korisiti indexOf metodu za provjeriti da li se search text nalazi u kartici
        //(.textContent.indexOf(query) >= 0) -> sadrži query u sebi
    //Ako kartica sadrži tekst makni joj klasu hidden (classList.remove..)
    //Ako kartica NE sadrži tekst, dodaj joj klasu hidden (classList.add)
});

/* Zvjezdice */
const starElements = document.querySelectorAll(".card .star-icon");
for(let i = 0; i < starElements.length; i++){
    const starElement = starElements[i];
    starElement.addEventListener("click", handleStarClick);
}

function handleStarClick(e){
    const star = e.currentTarget;
    const starContainer = star.parentElement;
    const starSiblings = starContainer.children;

    let clickedStarPassed = false;
    for(let i = 0; i < starSiblings.length; i++){
        const currentStar = starSiblings[i];
        
        if(!clickedStarPassed){
            currentStar.classList.remove("fa-star-o");
            currentStar.classList.add("fa-star");
        }
        else {
            currentStar.classList.remove("fa-star");
            currentStar.classList.add("fa-star-o");
        }

        if(currentStar == star){
            clickedStarPassed = true;
        }
    }
}