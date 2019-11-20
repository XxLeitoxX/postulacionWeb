    <template>
    <main class="creacion-solicitud">
    
    <header class="header my-5 pb-2">
    <div class="header__container-top">
    <div class="header__logo-container">
    <img src="@/assets/images/logo-CCHC.png" alt="Logo CCHC" class="header__logo img-fluid">
    </div>
    <h3 class="text-uppercase text-primary header__title-top">Solicitud de postulación socios</h3>
    <div class="header__text-container">
    <p class="header__text">Por favor llene todos los campos solicitados en el formulario de postulación</p>
    <p class="header__text">Puede llenar los datos de cualquiera de los pasos, los datos se guardarán
    automáticamente.</p>
    </div>
    </div>
    <div class="header__container-bottom">
    <div class="header__bottom-left d-none">
    <h3 class="header__bottom-text text-uppercase text-primary">Persona jurídica</h3>
    <h3 class="header__bottom-text text-primary">N° Solicitud:</h3>
    </div>
    <div class="header__bottom-right d-none">
    <span class="header__progress-line"></span>
    <div class="header__progress-number-container">
    <span class="header__progress-number header__progress-number-active">1</span>
    <p class="header__progress-text px-1">Datos de la empresa</p>
    </div>
    <div class="header__progress-number-container">
    <span class="header__progress-number">2</span>
    <p class="header__progress-text px-1">Personas asociadas</p>
    </div>
    <div class="header__progress-number-container">
    <span class="header__progress-number">3</span>
    <p class="header__progress-text px-1">Información comercial</p>
    </div>
    <div class="header__progress-number-container">
    <span class="header__progress-number">4</span>
    <p class="header__progress-text px-1">Patrocinantes y documentación</p>
    </div>
    <div class="header__progress-number-container">
    <span class="header__progress-number">5</span>
    <p class="header__progress-text px-1">Confirmación</p>
    </div>
    </div>
    </div>
    </header>
    <div class="container">

    <h3 class="text-center text-uppercase text-primary">Para comenzar el proceso, por favor ingrese RUT del
    postulante, y cámara regional para crear un número de solicitud</h3>
    <form class="creacion-solicitud__form pt-3" id="datosPersonales">
    <div class="creacion-solicitud__form-left">
    <label class="creacion-solicitud__form-label text-small font-weight-bold" for="rut">RUT*</label>
    <input type="number" id="rut" class="creacion-solicitud__form-input" required>
    <label class="creacion-solicitud__form-label text-small font-weight-bold" for="mail">Correo Electrónico*</label>
    <input type="email" id="mail" class="creacion-solicitud__form-input" required>
    </div>
    <div class="creacion-solicitud__form-right">
    <label class="creacion-solicitud__form-label text-small font-weight-bold" for="telefono">Teléfono*</label>
    <input type="tel" id="telefono" class="creacion-solicitud__form-input" required>
    <label class="creacion-solicitud__form-label text-small font-weight-bold" for="camara">Cámara Regional</label>
    <select id="camara" class="creacion-solicitud__form-input">
    </select>
    </div>

    <h3 class="text-primary text-uppercase py-4">Seleccione que tipo de postulación realiza</h3>
    <div class="creacion-solicitud__radios">
    <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
    <input class="custom-control-input" type="radio" name="tipo-postulacion" id="natural" value="option1">
    <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="natural">Persona Natural</label>
    </div>
    <div
    class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container creacion-solicitud__select-container py-1">
    <input class="custom-control-input" type="radio" name="tipo-postulacion" id="juridica" value="option2">
    <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="juridica">Persona jurídica</label>
    <select name="" id="" class="creacion-solicitud__select">
    <option value="" disabled selected>Tipo de sociedad</option>
    </select>
    </div>
    <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
    <input class="custom-control-input" type="radio" name="tipo-postulacion" id="empresario"
    value="option3">
    <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="empresario">Empresario Individual</label>
    </div>
    </div>
    </form>

    <div class="creacion-solicitud__buttons py-5">
    <a href="ingreso-y-consulta.html" class="btn btn-danger text-uppercase btn--big m-2">Cancelar</a>
    <a href="" class="btn btn-primary text-uppercase btn--big m-2" id="crear">Crear</a>
    </div>

    </div>
    </main>
    </template>

    <script>
    

    export default {
    name: 'creacionSolicitud',
    data () {
    return {
    
    }
    }
    }
    </script>