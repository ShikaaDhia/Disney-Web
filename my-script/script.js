const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(this.window.scrollY);
    if(window.scrollY) {
        navbar.classList.replace('bg-transparent','nav-color')
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color','bg-transparent')
    }
});

var swiper = new Swiper(".card-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });