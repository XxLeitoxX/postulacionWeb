import Vue from 'vue'
import Vuex from 'vuex'
//import {store} from '@/store'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
    rutGlobal: 111111111,
    done1: 'header__progress-number-active',
    done2: 'header__progress-number',
    done3: 'header__progress-number',
    done4: 'header__progress-number',
    done5: 'header__progress-number',
    done6: 'header__progress-number',
    formulario1: true,
    formulario2: false,
    formulario3: false,
    formulario4: false,
    formulario5: false,
    formulario6: false,
        

    }, mutations:{

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
        }
    },
    actions: {
        
    }
});