let heartIcons = document.querySelectorAll(".heart-icon");
for (let icon of heartIcons) {
    icon.addEventListener("click", handleHeartIconClick);
}

function handleHeartIconClick(e) {
    let icon = e.currentTarget;
    if (icon.classList.contains("fa-heart-o")) {
        icon.classList.remove("fa-heart-o");
        icon.classList.add("fa-heart");
    }
    else {
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-heart-o");
    }
}

let addParagraphIcons = document.querySelectorAll(".add-paragraph-icon");
for (let icon of addParagraphIcons) {
    icon.addEventListener("click", handleAddParagraphClick);
}

function handleAddParagraphClick(e) {
    let icon = e.currentTarget;
    let text = prompt("Unesi tekst:", "Novi tekst");
    if (text) {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = text;

        let card = icon.parentElement;
        card.appendChild(newParagraph);
    }
}

/*

 * () => {}

 let fun = () => {};
 fun();

*/


let deleteButtons = document.querySelectorAll(".delete-button");
for (let btn of deleteButtons) {
    btn.addEventListener("click", (e) => {
        let clickedButton = e.currentTarget;
        let card = clickedButton.parentElement;

        let titleElement = card.querySelector("h3");
        let title = titleElement.textContent;

        let shouldDeleteCard = confirm(`Zelite li izbrisati karticu ${title}?`);
        // confirm("Zelite li izbrisati karticu " + title + "?")
        if (shouldDeleteCard) {
            card.remove();
        }
    });
}
