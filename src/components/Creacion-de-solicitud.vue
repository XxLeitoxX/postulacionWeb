<template>
     <main class="creacion-solicitud" v-if="mostrarCreacionSolicitud == true">
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

      <h3 class="text-primary text-uppercase py-4">Seleccione que tipo de postulación realiza</h3>
      <div class="creacion-solicitud__radios">
          <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="natural" value="#/persona-natural">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="natural">Persona Natural</label>
          </div>
          <div
            class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container creacion-solicitud__select-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="juridica" value="#/persona-juridica">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="juridica">Persona jurídica</label>
            <select name="" id="" class="creacion-solicitud__select">
              <option value="" selected disabled>Tipo de sociedad</option>
              <option>S.A</option>
              <option>SPA</option>
            </select>
          </div>
          <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="empresario"
              value="#/persona-empresario-formulario-1">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="empresario">Empresario Individual</label>
          </div>
        </div>
    
      <form class="creacion-solicitud__form pt-3" id="datosPersonales">
        <h3 class="text-center text-uppercase text-primary mt-5">Para comenzar el proceso, por favor ingrese RUT del
        postulante, y cámara regional para crear un número de solicitud</h3>
          <div v-if="!rutNoValido" class="alert alert-danger" role="alert">
          <strong>Error!</strong> RUT no válido.
          </div>
        <div class="creacion-solicitud__form-left">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="rut">RUT*</label>
          <input type="text" v-on:keyup.enter="updateRutNum()" v-model="rut" id="rut" class="creacion-solicitud__form-input" required>
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="mail">Correo Electrónico*</label>
          <input type="email" v-model="correo" id="mail" class="creacion-solicitud__form-input" required>
        </div>
        <div class="creacion-solicitud__form-right">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="telefono">Teléfono*</label>
          <input type="tel" v-model="telefono" id="telefono" class="creacion-solicitud__form-input" required>
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="camara">Cámara Regional</label>
          <select id="camara" class="creacion-solicitud__form-input" v-model="camaraSeleccionada">
            <option value="" disabled>Ubicación</option>
            <option v-for="(camara, key) in camaras" :value="camara.camRegId" :key="key">{{ camara.camRegGls }}</option>
          </select>
        </div>
         <!--<span>Selected: {{ camaraSeleccionada }}</span>-->
      </form>
      <div class="creacion-solicitud__buttons py-5">
        <router-link to="/" class="btn btn-danger text-uppercase btn--big m-2">Cancelar</router-link>
        <a :href="valorCheck" class="btn btn-primary text-uppercase btn--big m-2" id="crear">Crear</a>
        <!-- <button class="btn btn-primary" @click="agregarSolicitud()">Guardar</button> -->
      </div>
    </div>

    <personaNaturalFormulario1 v-if="mostrarForm1 == true"></personaNaturalFormulario1>
    <personaNaturalFormulario2 v-if="mostrarForm2 == true"></personaNaturalFormulario2>
  </main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapState } from 'vuex'
import personaNaturalFormulario1 from '@/components/formulario-persona-natural/Persona-Natural-Formulario-1'
import personaNaturalFormulario2 from '@/components/formulario-persona-natural/Persona-Natural-Formulario-2'
Vue.use(VueAxios, axios)

export default {
  name: 'creacionSolicitud',

  components: {
    personaNaturalFormulario1,
    personaNaturalFormulario2
  },

  data () {
    return {
      valorCheck: '',
      camaras: [],
      camaraSeleccionada: '',
      rut: '',
      telefono: '',
      correo: '',
      rutNoValido: true,
      nuevaSolicitud: [],
      mostrarForm1: false,
      mostrarForm2: false,
      mostrarCreacionSolicitud: true
    }
  },

  methods: {
    agregarSolicitud: function () {
      this.nuevaSolicitud.push({
        telefono: this.telefono,
        correo: this.correo,
        camara: this.camaraSeleccionada
      })
      console.log(this.nuevaSolicitud)
    },

    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      rutCompleto = rutCompleto.replace('‐', '-')

      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)){
        return false
      }

      var tmp = rutCompleto.split('-')
      var digv = tmp[1]
      var rut = tmp[0]
      
    if ( digv === 'K' ){
      digv = 'k'
    } 

    return (this.dv(rut) == digv );
},

dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
},
updateRutNum: function(){
  console.log(this.$store.state.rutGlobal);
  let estadoRut = this.validaRut(this.rut);
  this.rutNoValido = estadoRut;


}


  },
  created: function(){
    Vue.axios.get('http://postulacion.isc.cl/listarCamaras').then((response) => {
        this.camaras = response.data;
        console.log(this.camaras);
        
    })
  },
  computed:{
    ...mapState(['rutGlobal'])
  }
}
</script>