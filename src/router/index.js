import Vue from 'vue'
import Router from 'vue-router'
import ingresoConsulta from '@/components/ingreso-y-consulta'
import creacionSolicitud from '@/components/Creacion-de-solicitud'
import personaNaturalFormulario1 from '@/components/formulario-persona-natural/Persona-natural-formulario-1'
import personaNaturalFormulario2 from '@/components/formulario-persona-natural/Persona-natural-formulario-2'

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
    }
  ]
})
