<template>
    <main class="pn-formulario-2">
     

    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-lg-7">
          <h3 class="text-uppercase text-primary">Dirección comercial</h3>
          <form class="direccion1__form">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="calle1">Calle*</label>
            <input type="text" id="calle1" class="direccion1__input direccion1__input--left-big form-control" required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small1"
              for="numero1">Número*</label>
            <input type="number" id="numero1" class="direccion1__input direccion1__input--right-small1 form-control"
              required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small2"
              for="oficina1">Oficina</label>
            <input type="text" id="oficina1" class="direccion1__input direccion1__input--right-small2 form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="continuacion1">Continuación</label>
            <input type="text" id="continuacion1" class="direccion1__input direccion1__input--left form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="pais1">País*</label>
            <input type="text" id="pais1" class="direccion1__input direccion1__input--left form-control"
              placeholder="Chile" value="Chile" disabled>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="provincia1">Provincia*</label>
            <select type="text" id="provincia1" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="region1">Región*</label>
            <select type="text" id="region1" class="direccion1__input direccion1__input--left form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="comuna1">Comuna*</label>
            <select type="text" id="comuna1" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="telefono1">Teléfono*</label>
            <input type="tel" id="telefono1"
              class="direccion1__input direccion1__input--left direccion1__input--tel form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="mail1">Email*</label>
            <input type="email" id="mail1"
              class="direccion1__input direccion1__input--right direccion1__input--mail form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--left">
              <input type="checkbox" class="custom-control-input" id="dir-correspondencia2">
              <label class="custom-control-label text-small pt-1" for="dir-correspondencia2">Usar dirección para
                correspondencia</label>
            </div>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--right">
              <input type="checkbox" class="custom-control-input" id="dir-cobranza2">
              <label class="custom-control-label text-small pt-1" for="dir-cobranza2">Usar dirección para
                cobranzas</label>
            </div>
          </form>

          <h3 class="text-uppercase text-primary pt-5">Dirección particular</h3>
          <form class="direccion1__form">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="calle2">Calle*</label>
            <input type="text" id="calle2" class="direccion1__input direccion1__input--left-big form-control" required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small1"
              for="numero2">Número*</label>
            <input type="number" id="numero2" class="direccion1__input direccion1__input--right-small1 form-control"
              required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small2"
              for="oficina2">Oficina</label>
            <input type="text" id="oficina2" class="direccion1__input direccion1__input--right-small2 form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="continuacion2">Continuación</label>
            <input type="text" id="continuacion2" class="direccion1__input direccion1__input--left form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="pais2">País*</label>
            <input type="text" id="pais2" class="direccion1__input direccion1__input--left form-control"
              placeholder="Chile" value="Chile" disabled>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="provincia2">Provincia*</label>
            <select type="text" id="provincia2" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="region2">Región*</label>
            <select type="text" id="region2" class="direccion1__input direccion1__input--left form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="comuna2">Comuna*</label>
            <select type="text" id="comuna2" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="telefono2">Teléfono*</label>
            <input type="tel" id="telefono2"
              class="direccion1__input direccion1__input--left direccion1__input--tel form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="mail2">Email*</label>
            <input type="email" id="mail2"
              class="direccion1__input direccion1__input--right direccion1__input--mail form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--left">
              <input type="checkbox" class="custom-control-input" id="dir-correspondencia2">
              <label class="custom-control-label text-small pt-1" for="dir-correspondencia2">Usar dirección para
                correspondencia</label>
            </div>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--right">
              <input type="checkbox" class="custom-control-input" id="dir-cobranza2">
              <label class="custom-control-label text-small pt-1" for="dir-cobranza2">Usar dirección para
                cobranzas</label>
            </div>
          </form>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-lg-5">
        </div> <!-- col-md-6 -->

      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <router-link to="/persona-natural-formulario-1" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
        
        <router-link to="/persona-natural-formulario-3" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
      </div> <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </main> <!-- formulario-2 -->
</template>

<script>
  

  export default{
  name: 'personaNaturalFormulario2',
  components: {
        
    },
  data () {
    return {
     
    }
  }
}
</script>