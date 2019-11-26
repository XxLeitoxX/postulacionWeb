$(function () {
   
  
    //SHOW/HIDE PASSPORT FIELD
    //Variables
    let nacionalidad = document.querySelector(".datos-personales__input-nacionalidad");
    let pasaporteLabel = document.querySelector(".datos-personales__pasaporte-label");
    let pasaporteInput = document.querySelector(".datos-personales__pasaporte-input");
  
    //Functions
    function showPassport() {
      if (nacionalidad.value.length == 0 || nacionalidad.value == "Chilena") {
        pasaporteLabel.classList.add("invisible");
        pasaporteInput.classList.add("invisible");
      } else if (nacionalidad.value != "Chilena") {
        pasaporteLabel.classList.remove("invisible");
        pasaporteInput.classList.remove("invisible");
      }
    }
  
    //Event
    nacionalidad.addEventListener("blur", showPassport);
  
    //SHOW/HIDE FIELDS TO ADD DATA ON PERSONA-JURIDICA FORM 4
    //Variables
    let carouselRepcchc = document.getElementById('carousel-repcchc');
    let carouselContCobranza = document.getElementById('carousel-contCobranza');
    let agregarDatosRepCchc = document.getElementById('agregarDatosRepCchc');
    let agregarDatosContCobranza = document.getElementById('agregarDatosContCobranza');
    let agregarRepCchc = document.getElementById('agregarRepCchc');
    let agregarContCobranza = document.getElementById('agregarContCobranza');
  
    //Functions
    function agregarDatosRepCchcFunction(e) {
      e.preventDefault();
      carouselRepcchc.classList.remove('d-none');
    }
    function agregarDatosContCobranzaFunction(e) {
      e.preventDefault();
      carouselContCobranza.classList.remove('d-none');
    }
    function agregarRepCchcFunction(e) {
      e.preventDefault();
      carouselRepcchc.classList.add('d-none');
      $('#carousel-repcchc').carousel(0);
    }
    function agregarContCobranzaFunction(e) {
      e.preventDefault();
      carouselContCobranza.classList.add('d-none');
      $('#carousel-contCobranza').carousel(0);
    }
  
    //Events
    agregarDatosRepCchc.addEventListener('click', agregarDatosRepCchcFunction);
    agregarDatosContCobranza.addEventListener('click', agregarDatosContCobranzaFunction);
    agregarRepCchc.addEventListener('click', agregarRepCchcFunction);
    agregarContCobranza.addEventListener('click', agregarContCobranzaFunction);
  
  
    //SHOW/HIDE PREV/NEXT BUTTONS ON CAROUSEL
    let carouselLength1 = $('#carousel-repcchc .carousel-item').length - 1;
    let carouselLength2 = $('#carousel-contCobranza .carousel-item').length - 1;
    $('#carousel-repcchc').on('slide.bs.carousel', function (e) {
      // First one
      if (e.to == 0) {
        $('#carousel-repcchc .carousel-prev').addClass('d-none');
        $('#carousel-repcchc .carousel-add').addClass('d-none');
        $('#carousel-repcchc .carousel-next').removeClass('d-none');
      } // Last one
      else if (e.to == carouselLength1) {
        $('#carousel-repcchc .carousel-prev').removeClass('d-none');
        $('#carousel-repcchc .carousel-add').removeClass('d-none');
        $('#carousel-repcchc .carousel-next').addClass('d-none');
      } // The rest
      else {
        $('#carousel-repcchc .carousel-prev').removeClass('d-none');
        $('#carousel-repcchc .carousel-next').removeClass('d-none');
        $('#carousel-repcchc .carousel-add').addClass('d-none');
      }
    });
    $('#carousel-contCobranza').on('slide.bs.carousel', function (e) {
      // First one
      if (e.to == 0) {
        $('#carousel-contCobranza .carousel-prev').addClass('d-none');
        $('#carousel-contCobranza .carousel-add').addClass('d-none');
        $('#carousel-contCobranza .carousel-next').removeClass('d-none');
      } // Last one
      else if (e.to == carouselLength2) {
        $('#carousel-contCobranza .carousel-prev').removeClass('d-none');
        $('#carousel-contCobranza .carousel-add').removeClass('d-none');
        $('#carousel-contCobranza .carousel-next').addClass('d-none');
      } // The rest
      else {
        $('#carousel-contCobranza .carousel-prev').removeClass('d-none');
        $('#carousel-contCobranza .carousel-next').removeClass('d-none');
        $('#carousel-contCobranza .carousel-add').addClass('d-none');
      }
    });
  
  
  });
  