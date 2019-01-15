import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

export const store = new Vuex.Store({
    state:{
        news: []
    }
})