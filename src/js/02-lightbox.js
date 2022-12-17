import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector(".gallery");


const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join("");

listGallery.insertAdjacentHTML("beforeend", markupGallery);

listGallery.addEventListener('click', onOpenImageClick);

function onOpenImageClick(e) {
  e.preventDefault()
};



const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
// console.log(lightbox)