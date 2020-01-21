import Vue from 'vue'
import Router from 'vue-router'
import ingresoConsulta from '@/components/ingreso-y-consulta'
import creacionSolicitud from '@/components/Creacion-de-solicitud'
import cabecera from '@/components/formulario-persona-natural/Cabecera'
//import formularioPersonaNatural from '@/components/formulario-persona-natural/formulario-persona-natural'
import cabeceraJuridica from '@/components/formulario-persona-juridica/header'
//import personaJuridicaForm from '@/components/formulario-persona-juridica/formulario-persona-juridica'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ingresoConsulta',
      component: ingresoConsulta
    },
    {
      path: '/creacion-de-solicitud',
      name: 'creacionSolicitud',
      component: creacionSolicitud
    },
    {
      path: '/persona-natural',
      name: 'cabecera',
      component: cabecera
    },
    /*{
      path: '/formulario-persona-natural',
      name: 'formularioPersonaNatural',
      component: formularioPersonaNatural
    },
    {
      path: '/formulario-persona-juridica',
      name: 'personaJuridicaForm',
      component: personaJuridicaForm
    },*/
    {
      path:'/persona-juridica',
      name:'cabeceraJuridica',
      component: cabeceraJuridica

    }
  ]
})
