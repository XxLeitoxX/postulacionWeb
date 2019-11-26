import Vue from 'vue'
import Vuex from 'vuex'
//import {store} from '@/store'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
    rutGlobal: 111111111,
    nombre:'Leonardo',
    done1: 'header__progress-number-active',
    done2: 'header__progress-number',
    done3: 'header__progress-number',
    done4: 'header__progress-number',
    done5: 'header__progress-number',
    done6: 'header__progress-number',
    pnformulario1: true,
    pnformulario2: false,
    pnformulario3: false,
    pnformulario4: false,
    pnformulario5: false,
    pnformulario6: false,
        

    }, mutations:{

        frmDatosPersonales(state){

            state.pnformulario1 = true;
            state.done1= 'header__progress-number-active';
            state.done2 = 'header__progress-number';
            state.pnformulario2 = false;
            state.pnformulario3 = false;
            state.pnformulario4 = false;
            state.pnformulario5 = false;
            state.pnformulario6 = false;
             
        },

        frmDireccionComercial(state){
            state.pnformulario1 = false;
            state.pnformulario2 = true;
            state.pnformulario3 = false;
            state.pnformulario4 = false;
            state.pnformulario5 = false;
            state.pnformulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-active';
            state.done3 = 'header__progress-number';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        frmComposicionAccionaria (state) {
            state.pnformulario1 = false;
            state.pnformulario2 = false;
            state.pnformulario3 = true;
            state.pnformulario4 = false;
            state.pnformulario5 = false;
            state.pnformulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-active';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        frmSeleccionComite (state) {
            state.pnformulario1 = false;
            state.pnformulario2 = false;
            state.pnformulario3 = false;
            state.pnformulario4 = true;
            state.pnformulario5 = false;
            state.pnformulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-active';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        frmPatrocinantes (state) {
            state.pnformulario1 = false;
            state.pnformulario2 = false;
            state.pnformulario3 = false;
            state.pnformulario4 = false;
            state.pnformulario5 = true;
            state.pnformulario6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-active';
            state.done6 = 'header__progress-number';
        },

        frmConfirmacion (state) {
            state.pnformulario1 = false;
            state.pnformulario2 = false;
            state.pnformulario3 = false;
            state.pnformulario4 = false;
            state.pnformulario5 = false;
            state.pnformulario6 = true;

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