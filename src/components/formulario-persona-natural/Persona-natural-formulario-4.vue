<template>
     <main class="pn-formulario-4">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-md-6">
          <h3 class="text-primary text-uppercase font-weight-bold">Selección de comités</h3>
          <p class="text-small text-primary font-weight-bold pt-2 pb-2">Seleccione el o los comités en que desea
            inscribirse:</p>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-5 col-md-12 col-xl-5">
                <p class="text-uppercase">Infraestructura</p>
                <form>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="contratistas-gen">
                    <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                      Generales</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="infraest-publica">
                    <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras Infraestructura
                      Pública</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="concesiones">
                    <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-4 col-md-12 col-xl-4">
                <p class="text-uppercase">Vivienda</p>
                <form>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="inmobiliario">
                    <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="vivienda">
                    <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-3 col-md-12 col-xl-3">
                <p class="text-uppercase">Suministros</p>
                <form>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="proveedores">
                    <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="industriales">
                    <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="especialidades">
                    <label class="custom-control-label text-small pt-1" for="especialidades">Especialidades</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-6">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <router-link to="/persona-natural-formulario-3" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
        
        <router-link to="/persona-natural-formulario-5" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
      </div> <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </main> <!-- formulario-2 -->
</template>

<script>
  import cabecera from '@/components/formulario-persona-natural/Cabecera';

  export default{
  name: 'personaNaturalFormulario4',
  components: {
        cabecera
    },
  data () {
    return {
     
    }
  }
}
</script>