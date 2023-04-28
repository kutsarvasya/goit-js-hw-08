import SimpleLightbox from "simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGallery = (pictures) => {
  return pictures
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`;
    })
    .join("");
};

galleryEl.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


// console.log(galleryItems);
