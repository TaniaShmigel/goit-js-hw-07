import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

const murkupGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
  )
  .join("");

listGallery.insertAdjacentHTML("beforeend", murkupGallery);
// list.innerHTML = murkupGallery;
// console.log(listGallery)

listGallery.addEventListener("click", onOpenImageClick);

function onOpenImageClick(e) {
  e.preventDefault();
  //  window.addEventListener('keydown', onEscKeypress);

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `<img src="${originalImage}" width="800" height="600">`
  );

  instance.show();
}



// onShow: (instance) => {
// 	// Close when hitting escape.
// 	document.onkeydown = function(evt) {
// 		evt = evt || window.event;
// 		var isEscape = false;
// 		if ( "key" in evt ) {
// 			isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
// 		} else {
// 			isEscape = ( evt.keyCode === 27 );
// 		}
// 		if ( isEscape ) {
// 			instance.close();
// 		}
// 	};
// }

// function onCloseImage() {
//   window.removeEventListener('keydown', onEscKeypress)
//   instance.close()
// }

// //   }

// // onShow: (instance) => {
// //   window.addEventListener('keydown', onEscKeypress);
// // }

// function onEscKeypress(e) {
//   if(e.code === 'Escape') {
//     instance.close();
//   }

// }

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
