import Masonry from 'masonry-layout';

const gallery = document.querySelector('.Gallery');

const masonry = new Masonry(gallery, {
  gutter: 24,
  initLayout: false,
  percentPosition: true,
  transitionDuration: 0,
});

window.addEventListener('load', () => {
  masonry.once('layoutComplete', () => {
    gallery.dataset.masonryLayoutComplete = true;
  });
  masonry.layout();
});
