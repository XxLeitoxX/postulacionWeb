<template>
     <main class="pn-formulario-5">
         
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-sm-12 col-md-9 col-lg-7">
          <h3 class="text-primary text-uppercase">Patrocinantes</h3>
          <p class="text-muted text-small">Ambos socios deben tener sus cuotas al día</p>

          <form class="d-grid patrocinante__form pt-3">
            <label class="patrocinante__label text-small font-weight-bold" for="rut1">RUT*</label>
            <input id="rut1" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinante1">Patrocinante 1*</label>
            <input id="patrocinante1" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinador1">Patrocinador*</label>
            <select id="patrocinador1" class="patrocinante__input form-control" required></select>
            <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <input type="file" class="d-none" id="respaldo" required>
              <label for="respaldo" class="d-flex patrocinante__attachment-label">
                <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                  <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                </div>
                <div class="btn--hover-right">
                  <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                  <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                    gremio</p>
                </div>
              </label>
            </div>
          </form>

          <form class="d-grid patrocinante__form pt-5">
            <label class="patrocinante__label text-small font-weight-bold" for="rut2">RUT*</label>
            <input id="rut2" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinante2">Patrocinante 2*</label>
            <input id="patrocinante2" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinador2">Patrocinador*</label>
            <select id="patrocinador2" class="patrocinante__input form-control" required></select>
            <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <input type="file" class="d-none" id="respaldo" required>
              <label for="respaldo" class="d-flex patrocinante__attachment-label">
                <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                  <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                </div>
                <div class="btn--hover-right">
                  <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                  <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                    gremio</p>
                </div>
              </label>
            </div>
          </form>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-sm-3 col-md-3 col-lg-5">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <router-link to="/persona-natural-formulario-4" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
        
        <router-link to="/persona-natural-formulario-6" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
      </div> <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </main> <!-- formulario-2 -->
</template>

<script>
  import cabecera from '@/components/formulario-persona-natural/Cabecera';

  export default{
  name: 'personaNaturalFormulario5',
  components: {
        cabecera
    },
  data () {
    return {
     
    }
  }
}
</script>