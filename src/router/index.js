import Vue from 'vue'
import Router from 'vue-router'
import ingresoConsulta from '@/components/ingreso-y-consulta'
import creacionSolicitud from '@/components/Creacion-de-solicitud'

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
    }
     
  ]
})
