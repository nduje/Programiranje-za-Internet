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

let addCardButton = document.querySelector("#add-card-button");
addCardButton.addEventListener("click", handleAddCardClick)

function handleAddCardClick(e) {
    let title = prompt("Unesi naslov:", "Naslov");
    if (!title) { return; }

    let imageUrl = prompt("Unesi putanju do slike:", "images/newsHeadings/cetina.jpg");
    if (!imageUrl) { return; }

    let description = prompt("Unesi opis:", "Opis");
    if (!description) { return; }

    let cardTemplate = document.querySelector("#card-template");
    let cardElement = document.importNode(cardTemplate.content, true);

    cardElement.querySelector(".card-title-label").textContent = title;
    cardElement.querySelector("img").src = imageUrl;
    cardElement.querySelector("p").textContent = description;

    cardElement.querySelector(".heart-icon").addEventListener("click", handleHeartIconClick);
    cardElement.querySelector(".delete-button").addEventListener("click", handleDeleteCardClick);
    cardElement.querySelector(".add-paragraph-icon").addEventListener("click", handleAddParagraphClick);

    let cardsContainer = document.querySelector("#cards-container");
    cardsContainer.appendChild(cardElement);
}

document.querySelector("#search-box").addEventListener("keyup", (e) => {
    let query = e.currentTarget.value;

    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        if (card.textContent.indexOf(query) >= 0) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    }
});

let starIcons = document.querySelectorAll(".star-icon");
for (let s of starIcons) {
    s.addEventListener("click", handleStarClick)
}

function handleStarClick(e) {
    let star = e.currentTarget;
    let stars = star.parentElement.children;

    let clickedStarPassed = false;
    for (let s of stars) {
        if (clickedStarPassed) {
            s.classList.remove("fa-star");
            s.classList.add("fa-star-o");
        } else {
            s.classList.remove("fa-star-o");
            s.classList.add("fa-star");
        }

        if (s == star) {
            clickedStarPassed = true;
        }
    }
}