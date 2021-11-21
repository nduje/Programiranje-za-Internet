/**
 * let i const
 * 
 * let imeVarijable = 3
 * const imeVarijable = 4
 * 
 * var imeVarijable = 3
 */

 let thumbanils = document.querySelectorAll("#slider .thumbnail");
 
 for (let i = 0; i < thumbanils.length; i++) {
     thumbanils[i].addEventListener("click", handleThumbnailClick);
 }

 function handleThumbnailClick(e) {
    let thumbnail = e.currentTarget;
    selectThumbnail(thumbnail);
 }

 function selectThumbnail(thumbnail) {
    let currentSelectedThumbnail =
        document.querySelector("#slider .thumbnail.selected");
    currentSelectedThumbnail.classList.remove("selected");

    thumbnail.classList.add("selected");

    let clickedThumbnailLargeImagePath =
        thumbnail.getAttribute("data-large-img-url");
    let mainImage =
        document.querySelector("#slider-main-picture-container img");
    mainImage.src = clickedThumbnailLargeImagePath;
 }

 let sliderLeftArrow = document.querySelector("#slider .slider-arrow-left");
 sliderLeftArrow.addEventListener("click", handleLeftArrowClick);

 function handleLeftArrowClick() {
     let thumbnails = document.querySelectorAll("#slider .thumbnail");
     let currentSelectedThumbnail =
        document.querySelector("#slider .thumbnail.selected");

    let currentIndex = 0;
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i] == currentSelectedThumbnail) {
            currentIndex = i;
        }
    }

    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
        nextIndex = thumbnails.length - 1;
    }

    selectThumbnail(thumbnails[nextIndex]);
 }

 let sliderRightArrow = document.querySelector("#slider .slider-arrow-right");
 sliderRightArrow.addEventListener("click", handleRightArrowClick);

 function handleRightArrowClick() {
     let thumbnails = document.querySelectorAll("#slider .thumbnail");
     let currentSelectedThumbnail =
        document.querySelector("#slider .thumbnail.selected");

    let currentIndex = 0;
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i] == currentSelectedThumbnail) {
            currentIndex = i;
        }
    }

    let nextIndex = currentIndex + 1;
    if (nextIndex > thumbnails.length - 1) {
        nextIndex = 0;
    }

    selectThumbnail(thumbnails[nextIndex]);
 }

 let deleteButtons = document.querySelectorAll(".delete-button");

 for (let btn of deleteButtons) {
     btn.addEventListener("click", deleteCard);
 }
 
 function deleteCard(e) {
     let deleteButton = e.currentTarget;
     let card = deleteButton.parentElement;
     card.remove();
 }