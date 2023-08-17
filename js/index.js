(function($){
  $(function(){
    // Funkce pro ovládání reakce na velikost okna
    function checkWindowSize() {
      var windowWidth = $(window).width();
      var isMobileMenuOpen = $(".mobilni_menu").is(":visible");

      if (windowWidth > 1025) {
          $(".mobilni_menu").hide();
      } 

      else if (windowWidth <= 390) {
          $(".logo").hide();
      } 

      }

      // Zavolání funkce při načtení stránky a při změně velikosti okna
      checkWindowSize();
      $(window).resize(checkWindowSize);

      // Scroll menu a mobilní navigace
      $(".jq--scroll-sluzby").click(function(){
        $("html, body").animate({scrollTop: $(".sluzby_div").offset().top}, 600); 
        closeMobileMenu(); 
      });

      $(".jq--scroll-kontakt").click(function(){
        $("html, body").animate({scrollTop: $(".kontakt_div").offset().top}, 600);
        closeMobileMenu(); 
      });

      $(".jq--scroll-reference").click(function(){
        $("html, body").animate({scrollTop: $(".reference_div").offset().top}, 600);
        closeMobileMenu(); 
      });

      $(".jq--scroll-metoda_tig").click(function(){
        $("html, body").animate({scrollTop: $(".metoda_tig").offset().top}, 600); 
      });

      $(".jq--scroll-metoda_mma").click(function(){
        $("html, body").animate({scrollTop: $(".metoda_mma").offset().top}, 600);
      });

      $(".jq--scroll-metoda_mig_mag").click(function(){
        $("html, body").animate({scrollTop: $(".metoda_mig_mag").offset().top}, 600);
      });

      // Mobilní navigace
      $(".jq--mobil_ikona").click(function(){
        $(".mobilni_menu").fadeToggle();

        toggleMobileIcon();
    });

    // Funkce pro zavření mobilního menu
    function closeMobileMenu() {
        $(".mobilni_menu").fadeOut();
        $(".logo").fadeIn();
        toggleMobileIcon(); 
    }

    // Funkce pro změnu obrázku ikony
    function toggleMobileIcon() {
        var imgSrc = $(".jq--mobil_ikona img").attr("src");
        if (imgSrc == "img/hamburger_icon.png") {
            $(".jq--mobil_ikona img").attr("src", "img/cross_icon.png");
        } else {
            $(".jq--mobil_ikona img").attr("src", "img/hamburger_icon.png");
        }
    }

  });
})(jQuery);

