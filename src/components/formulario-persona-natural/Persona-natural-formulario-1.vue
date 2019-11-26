
<template>
  <main class="pn-formulario-1">
    <div class="container">
      <div class="row">
        <!-- LEFT COLUMN -->
        <div class="col-md-6">
          <h3 class="text-uppercase text-primary">Datos Personales</h3>
         
          <form class="datos-personales">
            <label class="datos-personales__label" for="RUT">RUT*</label>
            <input type="number" id="rut" class="datos-personales__input" :value="rut" required>
            <label class="datos-personales__label" for="vocativo">Vocativo*</label>
            <select type="text" id="vocativo" class="datos-personales__input" required></select>
            <label class="datos-personales__label" for="nombres">Nombres*</label>
            <input type="text" id="nombres" class="datos-personales__input" required>
            <label class="datos-personales__label" for="apellido-pat">Apellido Paterno*</label>
            <input type="text" id="apellido-pat" class="datos-personales__input" required>
            <label class="datos-personales__label" for="apellido-mat">Apellido Materno*</label>
            <input type="text" id="apellido-mat" class="datos-personales__input" required>
            <label class="datos-personales__label" for="fecha-nac">Fecha nacimiento*</label>
            <input type="date" id="fecha-nac" class="datos-personales__input datos-personales__input--date" required>
            <label class="datos-personales__label" for="nacionalidad">Nacionalidad</label>
            <input type="text" id="nacionalidad" class="datos-personales__input datos-personales__input-nacionalidad">
            <label class="datos-personales__label datos-personales__pasaporte-label invisible"
              for="pasaporte">Pasaporte*</label>
            <input type="text" id="pasaporte"
              class="datos-personales__input datos-personales__pasaporte-input invisible" required>
            <label class="datos-personales__label" for="sexo">Sexo*</label>
            <select id="sexo" class="datos-personales__input" required>
              <option value="1">Femenino</option>
              <option value="2">Masculino</option>
            </select>
            <label class="datos-personales__label" for="edoCivil">Estado civil*</label>
            <select id="edoCivil" class="datos-personales__input" required>
              <option value="1">Soltero/a</option>
              <option value="2">Casado/a</option>
              <option value="3">Viudo/a</option>
              <option value="4">Divorciado/a</option>
              <option value="4">Separado/a</option>
            </select>
            <label class="datos-personales__label" for="nivelDeEstudios">Nivel de
              estudios</label>
            <input type="text" id="nivelDeEstudios" class="datos-personales__input">
            <label class="datos-personales__label" for="centroDeEstudios">Centro de
              estudios*</label>
            <input type="text" id="centroDeEstudios" class="datos-personales__input" required>
            <label class="datos-personales__label" for="profesion">Profesión*</label>
            <input type="text" id="profesion" class="datos-personales__input" required>
            <div class="pt-2 w-100 datos-personales--cv">
              <input type="file" class="d-none" id="cv"
                accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                required>
              <label for="cv" class="d-flex additional-docs__label">
                <div class="datos-personales__icon-container btn--sibling-hover-right mr-2">
                  <img src="@/assets/images/mas.png" alt="Añadir curriculum empresa" class="img-fluid">
                </div>
                <div class="btn--hover-right d-flex align-items-center">
                  <p class="text-small font-weight-bold">Curriculum vitae*</p>
                </div>
              </label>
            </div>
            <label class="datos-personales__label" for="especialidad">Especialidad</label>
            <input type="text" id="especialidad" class="datos-personales__input">
            <label class="datos-personales__label" for="hobbies">Interés/Hobbies</label>
            <input type="text" id="hobbies" class="datos-personales__input">
            <label class="datos-personales__label" for="empresa">Empresa</label>
            <input type="text" id="empresa" class="datos-personales__input">
            <label class="datos-personales__label" for="cargoEmpresa">Cargo en la empresa</label>
            <input type="text" id="cargoEmpresa" class="datos-personales__input">
          </form>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-6 formulario-2__right-column">
          <h3 class="text-uppercase text-primary redes-digitales__title">Información adicional</h3>
          <form class="redes-digitales__form">
            <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
            <input type="url" id="sitio-web" class="form-control">
          </form>

          <h3 class="text-uppercase text-primary font-weight-bold pt-5">Acompañante</h3>
          <form class="acompanante__form">
            <label for="rut1" class="text-small font-weight-bold">RUT*</label>
            <input type="number" id="rut1" class="form-control" required>
            <label for="acompanante-name1" class="text-small font-weight-bold">Nombres*</label>
            <input type="text" id="acompanante-name1" class="form-control" required>
            <label for="acompanante-apellido-pat1" class="text-small font-weight-bold">Apellido Paterno*</label>
            <input type="text" id="acompanante-apellido-pat1" class="form-control" required>
            <label for="acompanante-apellido-mat1" class="text-small font-weight-bold">Apellido Materno*</label>
            <input type="text" id="acompanante-apellido-mat1" class="form-control" required>
            <label for="email1" class="text-small font-weight-bold">Email*</label>
            <input type="email" id="email1" class="form-control" required>
          </form>

        </div> <!-- col-md-6 -->
      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <router-link to="/creacion-de-solicitud" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
             <router-link to="/persona-natural-formulario-2" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
       
      </div> <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </main> <!-- formulario-2 -->
</template>

<script>

  
  import { mapState } from 'vuex'  

  export default{
  name: 'personaNaturalFormulario1',
  components: {
        
    },
  data () {
    return {
     rut:''
    }
  },
  computed:{
    ...mapState(['rutGlobal'])
  }
}
</script>