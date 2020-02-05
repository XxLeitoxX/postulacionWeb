<template>
     <main class="creacion-solicitud" v-if="mostrarCreacionSolicitud == true">
     <header class="header my-5 pb-2">
    <div class="header__container-top">
      <div class="header__logo-container">
        <img src="@/assets/images/logo-CCHC.png" alt="Logo CCHC" class="header__logo img-fluid">
      </div>
      <h3 class="text-uppercase text-primary header__title-top">Solicitud de postulación socios</h3>
      <div class="header__text-container d-flex">
  <h3 class="header__text text-primary mt-1">Contacto Área de Socios</h3>
  <div class="ml-3">
    <p class="header__text">areasocios@cchc.cl</p>
    <p class="header__text">+56225887500</p>
  </div>
</div>

      <!--<div class="header__text-container">
        <p class="header__text">Por favor llene todos los campos solicitados en el formulario de postulación</p>
        <p class="header__text">Puede llenar los datos de cualquiera de los pasos, los datos se guardarán
          automáticamente.</p>
      </div>-->
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
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="natural" value="persona-natural">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="natural">Persona Natural</label>
          </div>
          <div
            class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container creacion-solicitud__select-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="juridica" value="persona-juridica">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="juridica">Persona jurídica</label>
            <select name="tipoSociedadSelect" id="tipoSociedad" v-model="tipoSociedadSelect" class="creacion-solicitud__select">
              <option value="" selected disabled>Tipo de sociedad</option>
              <option value="S.A">S.A</option>
              <option value="SPA">SPA</option>
            </select>
          </div>
          <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="empresario"
              value="persona-empresario-formulario-1">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="empresario">Empresario Individual</label>
          </div>
        </div>
    
      <form class="creacion-solicitud__form pt-3" id="datosPersonales">
        <h3 class="text-center text-uppercase text-primary mt-5">Para comenzar el proceso, por favor ingrese RUT del
        postulante, y cámara regional para crear un número de solicitud</h3>
          <!--<div v-if="!rutNoValido" class="alert alert-danger" role="alert">
          <strong>Error!</strong> RUT no válido.
          </div>-->
        <div class="creacion-solicitud__form-left">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="rut">RUT*</label>
          <input name="RUT" :class="(formatoRut ? 'is-invalid' : '')" type="text" @keyup="checkForm" placeholder="Ej. 11111111-1" v-model="rut" id="rut" class="creacion-solicitud__form-input">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="mail">Correo Electrónico*</label>
          <input name="Correo" @keyup="checkForm" placeholder="Ej. example@gmail.com" type="email" :class="(formatoCorreo ? 'is-invalid' : '')" v-model="correo" id="correo" class="creacion-solicitud__form-input">
        </div>

        <!--<div v-if="formatoRut" class="creacion-solicitud__form-left">
          <span style="color:red; margin-right: 35%;">RUT no válido</span> 
        </div>

        <div v-if="formatoCorreo" class="creacion-solicitud__form-left">
          <span style="color:red; margin-right: 45%;">Correo no válido</span> 
        </div>-->
        <div class="creacion-solicitud__form-right">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="telefono">Teléfono*</label>
          <input type="tel" name="telefono"  v-model="telefono" id="telefono" placeholder="Ej. 9 12345678"  @keyup="checkForm" class="creacion-solicitud__form-input" :class="(formatoTelefono ? 'is-invalid' : '')">
          
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="camara">Cámara Regional</label>
          <select id="camara" class="creacion-solicitud__form-input" v-model="camaraSeleccionada">
            <option value="" disabled>Ubicación</option>
            <option v-for="(camara, key) in camaras" :value="camara.camRegId" :key="key">{{ camara.camRegGls }}</option>
          </select>
        </div>
        <!--<span style="color:red;font-size:14px; margin-left: 28%;" v-if="formatoTelefono">Formato incorrecto</span>-->
         <!--<span>Selected: {{ camaraSeleccionada }}</span>-->
      </form>
      
      <!--<div v-if="errores.length" class="alert alert-danger alert-dismissible fade show" role="alert">
          <ul>
            <li v-for="error in errores">{{ error }}</li>
          </ul>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>-->
      <!--<div v-show="errors.all().length" class="alert alert-danger posicion-mensaje">

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <ul class="ul-decorater">
                <li v-for="(error, i) in errors.all()">{{error}}</li>
            </ul>

          </div>-->

          <!--<p v-if="errores.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="error in errores">{{ error }}</li>
    </ul>
  </p>-->
      <div class="creacion-solicitud__buttons py-5">
        <router-link to="/" class="btn btn-danger text-uppercase btn--big m-2">Cancelar</router-link>
        <!--<a  :href="valorCheck" @click="rutEnNumeroSolicitud" class="btn btn-primary text-uppercase btn--big m-2" id="crear">Crear</a>-->
        <button  @click="rutEnNumeroSolicitud" class="btn btn-primary text-uppercase btn--big m-2" id="crear">Crear</button>
      
        <!-- <button class="btn btn-primary" @click="agregarSolicitud()">Guardar</button> -->
      </div>
    </div>

    <!--<personaNaturalFormulario1 v-if="mostrarForm1 == true"></personaNaturalFormulario1>
    <personaNaturalFormulario2 v-if="mostrarForm2 == true"></personaNaturalFormulario2>-->
  </main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapState, mapMutations } from 'vuex'
Vue.use(VueAxios, axios)


export default {
  name: 'creacionSolicitud',

  components: {
   
  },

  
  data () {
    return {
      url: this.$store.state.URL,
      formatoTelefono: false,
      formatoCorreo:false,
      formatoRut:false,
      camposCorrectos: false,
      valorCheck: '',
      camaras: [],
      camaraSeleccionada: '',
      tipoSociedadSelect:'',
      rut: '',
      telefono: '',
      correo: '',
      rutNoValido: true,
      nuevaSolicitud: [],
      mostrarForm1: false,
      mostrarForm2: false,
      mostrarCreacionSolicitud: true,
      campoNoValido: 'rut-invalido',
      campoValido: 'rut-valido',
      errores:[]
    }
  },

  methods: {

      ...mapMutations(['rutEnNumeroSolicitud']),


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
  
  let estadoRut = this.validaRut(this.rut);
  this.rutNoValido = estadoRut;


},


validarTelefono(telefono) {
 
  //let telefono = telefono;
  let expreg = /^(\+?56)?(\s?)(0?9)(\s?)[987654]\d{7}$/;
  
  if(expreg.test(telefono)){
    this.formatoTelefono = false;
    return true;
  }
	
  else {
    this.formatoTelefono = true;
    return false;
  }

    
},

validarEmail: function (correo) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(correo);
},


checkForm(){
    
    
      if (!this.rut) {
        this.errores.push("El rut es obligatorio.");
        this.formatoRut = true;
        this.camposCorrectos = false;
      }else if (!this.validaRut(this.rut)) {
        this.errores.push('El rut no es válido.');
        this.formatoRut = true;
        this.camposCorrectos = false;
      }else{
        this.formatoRut = false;
        this.camposCorrectos = true;
      }

      if (!this.correo) {
        
        this.errores.push('El correo electrónico es obligatorio.');
        this.formatoCorreo = true;
        this.camposCorrectos = false;
      } else if (!this.validarEmail(this.correo)) {
        
        this.errores.push('El correo electrónico debe ser válido.');
        this.formatoCorreo = true;
        this.camposCorrectos = false;
      }else{
        this.formatoCorreo = false;
       //this.camposCorrectos = true;
      }

      if (!this.telefono) {
        
        this.errores.push("El telefono es obligatorio.");
        this.formatoTelefono = true;
        this.camposCorrectos = false;
      } else if (!this.validarTelefono(this.telefono)) {
       
        this.errores.push('El teléfono debe ser válido.');
        this.formatoTelefono = true;
        this.camposCorrectos = false;
      }else{
        this.formatoTelefono = false;
        //this.camposCorrectos = true;
      }

     

      if (!this.errores.length) {
        return true;
      }

      
},

rutEnNumeroSolicitud: function() {

          this.checkForm();

          if(this.valorCheck != ''){
              if(this.camposCorrectos == true){
                 this.$router.push(this.valorCheck);
    
                  this.$store.commit({
                  type: 'rutEnNumeroSolicitud', 
                  rut: this.rut,
                  correo: this.correo,
                  telefono: this.telefono,
                  camara: this.camaraSeleccionada,
                  tipoSociedad: this.tipoSociedadSelect
              });
              }else{
                 alert("Debe llenar los campos requeridos");
              } 
          }else{
              alert("Debe selecionar un tipo de postulación");
          }
         
  
}


  },
  created: function(){
    Vue.axios.get(this.url+'listarCamaras').then((response) => {
        this.camaras = response.data;
        console.log(this.camaras);
        
    })
  },
  computed:{
    ...mapState(['rutGlobal', 'emailGlobal'])
  }
}
</script>

<style>

.rut-invalido{
  border-color: #f14d31;
    padding-right: calc(1.5em + 0.75rem);
    background-repeat: no-repeat;
    background-position: center right calc(0.375em + 0.1875rem);
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}




</style>