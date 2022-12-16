import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector(".gallery");


const murkupGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join("");

listGallery.insertAdjacentHTML("beforeend", murkupGallery);

// listGallery.addEventListener('click', onOpenImageClick);



console.log(simpleLightbox);