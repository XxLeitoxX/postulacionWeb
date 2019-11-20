<template>
    <main class="ingreso my-5">
    <div class="container ingreso__container">
      <div class="ingreso__img-container">
        <img src="@/assets/images/logo-CCHC.png" alt="Logo CCHC" class="ingreso__img img-fluid">
      </div>
      <h3 class="text-uppercase ingreso__title text-primary text-center pt-5">Seleccione la opción que desea realizar dentro de
        nuestro portal</h3>
      <div class="row">
        <div class="col-lg-4 ingreso__item ingreso__border mt-5">
          <p class="text-center ingreso__text text-small px-3">Para poder comenzar una solicitud de postulación seleccione la
            siguiente opción:</p>
          <div class="text-center">
            <a href="creacion-solicitud.html" class="btn btn-primary text-uppercase mt-3">Postulación socios nuevos</a>
          </div>
        </div>
        <div class="col-lg-4 ingreso__item ingreso__border mt-5">
          <p class="text-center ingreso__text text-small px-3">Si desea retomar una postulación incompleta</p>
          <form class="ingreso__form">
            <input type="number" class="ingreso__form-input text-center" placeholder="Ingrese el número de RUT">
          </form>
          <div class="text-center">
            <a href="" class="btn btn-primary text-uppercase">Continuar proceso de solicitud</a>
          </div>
        </div>
        <div class="col-lg-4 ingreso__item mt-5">
          <p class="text-center ingreso__text text-small px-3">Si ya posee un número de solicitud de postulación</p>
          <form class="ingreso__form">
            <input type="number" class="ingreso__form-input text-center"
              placeholder="Ingrese el número de RUT">
          </form>
          <div class="text-center">
            <a href="resultado-consulta.html" class="btn btn-primary text-uppercase">Revisar estado de solicitud</a>
          </div>
        </div>
      </div>
      <div class="text-center pt-3">
        <a href="" class="btn btn-primary text-uppercase">Volver al sitio de CCHC</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ingresoConsulta',
  data () {
    return {
      algo:''
    }
  }
}
</script>