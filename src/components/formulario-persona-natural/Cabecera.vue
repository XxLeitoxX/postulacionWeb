<template>
    <header class="header mt-5 mb-3">
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
      <div class="header__bottom-left">
        <h3 class="header__bottom-text text-uppercase text-primary">Persona natural</h3>
        <h3 class="header__bottom-text text-primary">N° Solicitud: {{ rutGlobal }}</h3>
      </div>
      <div class="header__bottom-right">
        <span class="header__progress-line header__progress-line--pnatural"></span>
        <div class="header__progress-number-container">
          <span class="header__progress-number" :class="done1">1</span>
          <p class="header__progress-text px-1">Datos principales</p>
        </div>
        <div class="header__progress-number-container">
          <span class="header__progress-number" :class="done2">2</span>
          <p class="header__progress-text px-1">Direcciones</p>
        </div>
        <div class="header__progress-number-container">
          <span class="header__progress-number" :class="done3">3</span>
          <p class="header__progress-text px-1">Información comercial</p>
        </div>
        <div class="header__progress-number-container">
          <span class="header__progress-number" :class="done4">4</span>
          <p class="header__progress-text px-1">Participación CCHC</p>
        </div>
        <div class="header__progress-number-container">
          <span class="header__progress-number" :class="done5">5</span>
          <p class="header__progress-text px-1">Patrocinantes</p>
        </div>
        <div class="header__progress-number-container">
          <span class="header__progress-number" :class="done6">6</span>
          <p class="header__progress-text px-1">Compromisos</p>
        </div>
      </div>
    </div>

<formularioPersonaNatural></formularioPersonaNatural>
 
  </header>  
</template>

<script>
import formularioPersonaNatural from '@/components/formulario-persona-natural/formulario-persona-natural'
import { mapState, mapMutations } from 'vuex'

export default{
  name: 'cabecera',
  components:{
    formularioPersonaNatural
  },
  data () {
    return {
     
    }
  },

  computed:{
    ...mapState(['done1', 'done2', 'done3', 'done4', 'done5', 'done6', 'rutGlobal'])
  }
}
</script>