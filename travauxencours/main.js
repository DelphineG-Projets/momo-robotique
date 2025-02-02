/* SWIPER SECTION MEMBRE*/
var swiper = new Swiper(".mySwiperMembre", {
  slidesPerView: "auto",
  grabCursor: true,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

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

/* NAVBAR : SOURCE DE https://codepen.io/munjewar/pen/jQrNWw*/ 
(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); 