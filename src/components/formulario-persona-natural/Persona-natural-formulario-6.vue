<template>
    <main class="pn-formulario-6">
       
    <div class="container">
      <form>
        <div class="row">

          <!-- LEFT COLUMN -->
          <div class="col-md-6">
            <h3 class="text-primary text-uppercase">Compromisos</h3>
            <div class="compromisos">
              <div class="compromisos__header bg-primary p-3">
                <h3 class="text-uppercase text-white text-center m-0 font-weight-normal">Por favor leer compromisos ante
                  la CCHC antes de
                  enviar la postulación</h3>
              </div>
              <div class="compromisos__body p-3">
                <div class="compromisos__text-container">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header d-flex align-items-center" id="headingOne">
                        <h3 class="mb-0">Lorem Ipsum</h3>
                        <button class="btn btn-link ml-auto" type="button" data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                          haven't heard of them accusamus labore sustainable VHS.
                          <div class="compromisos__input pt-5">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="leido1" required>
                              <label class="custom-control-label font-weight-bold pt-1" for="leido1">He leído las
                                condiciones y
                                términos de la CCHC</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex align-items-center" id="headingTwo">
                        <h3 class="mb-0">Lorem Ipsum</h3>
                        <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                        data-parent="#accordionExample">
                        <div class="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                          haven't heard of them accusamus labore sustainable VHS.
                          <div class="compromisos__input pt-5">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="leido2" required>
                              <label class="custom-control-label font-weight-bold pt-1" for="leido2">He leído las
                                condiciones y
                                términos de la CCHC</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex align-items-center" id="headingThree">
                        <h3 class="mb-0">Lorem Ipsum</h3>
                        <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                        data-parent="#accordionExample">
                        <div class="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                          haven't heard of them accusamus labore sustainable VHS.
                          <div class="compromisos__input pt-5">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="leido3" required>
                              <label class="custom-control-label font-weight-bold pt-1" for="leido3">He leído las
                                condiciones y
                                términos de la CCHC</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-md-6">
            <h3 class="text-primary text-uppercase compromisos__confirmacion-title">Confirmación</h3>
            <p class="text-muted text-small font-weight-bold">Antes de enviar su postulación revise toda la información
              adjunta en los formularios.</p>

            <div class="card mt-3">
              <div class="card-header text-white text-uppercase bg-primary py-3 px-5">Datos del solicitante</div>
              <div class="card-body pt-4 pb-5 px-5 card__form">
                <p class="card__form-label">Nombre: <span class="card__form-data">Carlos Vandal</span></p>
                <p class="card__form-label">Teléfono: <span class="card__form-data">+569 9999 9999</span></p>
                <p class="card__form-label">Email: <span class="card__form-data">carlos.vandal@bri.cl</span></p>
                <p class="card__form-label">Empresa: <span class="card__form-data">Colibrí</span></p>
                <p class="card__form-label">Dirección: <span class="card__form-data">Eliodoro Yañez 1163, Providencia,
                    Santiago</span></p>
              </div>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="enviar-copia">
              <label class="custom-control-label font-weight-bold text-muted pt-1" for="enviar-copia">Enviar una copia
                de los datos entregados en la solicitud a mi correo electrónico</label>
            </div>
          </div> <!-- col-md-6 -->
        </div> <!-- row -->
        <div class="d-flex justify-content-center pt-5">
          <button class="btn btn--big btn--submit text-white text-uppercase">Enviar postulación</button>
        </div>
      </form>

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <router-link to="/persona-natural-formulario-5" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
        
        <router-link to="/" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
      </div> <!-- creacion-solicitud__buttons -->

     

    </div> <!-- container -->
  </main> <!-- formulario-2 -->
</template>

<script>
  import cabecera from '@/components/formulario-persona-natural/Cabecera';

  export default{
  name: 'personaNaturalFormulario6',
  components: {
        cabecera
    },
  data () {
    return {
     
    }
  }
}
</script>