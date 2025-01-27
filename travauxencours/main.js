/* SWIPER SECTION MEMBRE*/
let swiperMembre = new Swiper(".mySwiperMembre", {
    effect: "cards",
    grabCursor: true,
  });
  
/* EFFET PARRALAX HERO ACCUEIL*/
document.addEventListener("mousemove", function(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let titlesHero = document.querySelectorAll(".accueil-hero-title span");
  titlesHero.forEach(function(title, i) {
    let speed = (i + 1) * 0.5;
    let offsetX = (mouseX - window.innerWidth / 2) * speed / 20;
    let offsetY = (mouseY - window.innerHeight / 2) * speed / 20;
    title.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

});