import Vue from 'vue'
import Vuex from 'vuex'
//import {store} from '@/store'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
    URL: process.env.VUE_APP_URL,    
    rutGlobal: '',
    emailGlobal:'',
    telefonoGlobal:'',
    camaraGlobal:'',
    tipoSociedad:'',
    done1: 'header__progress-number-active',
    done2: 'header__progress-number',
    done3: 'header__progress-number',
    done4: 'header__progress-number',
    done5: 'header__progress-number',
    done6: 'header__progress-number',
    //Natural
    formulario1: true,
    formulario2: false,
    formulario3: false,
    formulario4: false,
    formulario5: false,
    formulario6: false,
    //Juridica
    pjform1: true,
    pjform2: false,
    pjform3: false,
    pjform4: false,
    pjform5: false,
    pjform6: false,
        

    }, mutations:{

        rutEnNumeroSolicitud(state, payload){
            state.rutGlobal = payload.rut;
            state.emailGlobal = payload.correo;
            state.telefonoGlobal = payload.telefono;
            state.camaraGlobal = payload.camara;
            state.tipoSociedad = payload.tipoSociedad;
        },

        frm1(state){

            state.formulario1 = true;
            state.done1= 'header__progress-number-active';
            state.done2 = 'header__progress-number';
            state.formulario2 = false;
            state.formulario3 = false;
            state.formulario4 = false;
            state.formulario5 = false;
            state.formulario6 = false;
             
        },

        frm2(state){
            state.formulario1 = false;
            state.formulario2 = true;
            state.formulario3 = false;
            state.formulario4 = false;
            state.formulario5 = false;
            state.formulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-active';
            state.done3 = 'header__progress-number';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        frm3 (state) {
            state.formulario1 = false;
            state.formulario2 = false;
            state.formulario3 = true;
            state.formulario4 = false;
            state.formulario5 = false;
            state.formulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-active';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        frm4(state) {
            state.formulario1 = false;
            state.formulario2 = false;
            state.formulario3 = false;
            state.formulario4 = true;
            state.formulario5 = false;
            state.formulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-active';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        frm5 (state) {
            state.formulario1 = false;
            state.formulario2 = false;
            state.formulario3 = false;
            state.formulario4 = false;
            state.formulario5 = true;
            state.formulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-active';
            state.done6 = 'header__progress-number';
        },

        frm6 (state) {
            state.formulario1 = false;
            state.formulario2 = false;
            state.formulario3 = false;
            state.formulario4 = false;
            state.formulario5 = false;
            state.formulario6 = true;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-done';
            state.done6 = 'header__progress-number-active';
        },
        form1(state){

            state.pjform1 = true;
            state.done1= 'header__progress-number-active';
            state.done2 = 'header__progress-number';
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = false;
             
        },

        form2(state){
            state.pjform1 = false;
            state.pjform2 = true;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-active';
            state.done3 = 'header__progress-number';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        form3 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = true;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-active';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        form4 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = true;
            state.pjform5 = false;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-active';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        form5 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = true;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-active';
            state.done6 = 'header__progress-number';
        },

        form6 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = true;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-done';
            state.done6 = 'header__progress-number-active';
        }
    },
    actions: {
        
    }
});