import Vue from 'vue'
import Router from 'vue-router'
import ingresoConsulta from '@/components/ingreso-y-consulta'
import creacionSolicitud from '@/components/Creacion-de-solicitud'
import personaNaturalFormulario1 from '@/components/formulario-persona-natural/Persona-natural-formulario-1'
import personaNaturalFormulario2 from '@/components/formulario-persona-natural/Persona-natural-formulario-2'
import personaNaturalFormulario3 from '@/components/formulario-persona-natural/Persona-natural-formulario-3'
import personaNaturalFormulario4 from '@/components/formulario-persona-natural/Persona-natural-formulario-4'
import personaNaturalFormulario5 from '@/components/formulario-persona-natural/Persona-natural-formulario-5'
import personaNaturalFormulario6 from '@/components/formulario-persona-natural/Persona-natural-formulario-6'
import cabecera from '@/components/formulario-persona-natural/Cabecera'
import formularioPersonaNatural from '@/components/formulario-persona-natural/formulario-persona-natural'
import cabeceraJuridica from '@/components/formulario-persona-juridica/header'
import personaJuridicaForm from '@/components/formulario-persona-juridica/formulario-persona-juridica'


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
      path: '/persona-natural-formulario-1',
      name: 'personaNaturalFormulario1',
      component: personaNaturalFormulario1
    },
    {
      path: '/persona-natural-formulario-2',
      name: 'personaNaturalFormulario2',
      component: personaNaturalFormulario2
    },
    {
      path: '/persona-natural-formulario-3',
      name: 'personaNaturalFormulario3',
      component: personaNaturalFormulario3
    },
    {
      path: '/persona-natural-formulario-4',
      name: 'personaNaturalFormulario4',
      component: personaNaturalFormulario4
    },
    {
      path: '/persona-natural-formulario-5',
      name: 'personaNaturalFormulario5',
      component: personaNaturalFormulario5
    },
    {
      path: '/persona-natural-formulario-6',
      name: 'personaNaturalFormulario6',
      component: personaNaturalFormulario6
    },
    {
      path: '/persona-natural',
      name: 'cabecera',
      component: cabecera
    },
    {
      path: '/formulario-persona-natural',
      name: 'formularioPersonaNatural',
      component: formularioPersonaNatural
    },
    {
      path: '/formulario-persona-juridica',
      name: 'personaJuridicaForm',
      component: personaJuridicaForm
    },
    {
      path:'/persona-juridica',
      name:'cabeceraJuridica',
      component: cabeceraJuridica

    }
  ]
})
