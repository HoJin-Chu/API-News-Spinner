import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news: [],
        ask:[],
        jobs:[],
        user:{},
        item:[]
    },
    getters:{    // computed랑 비슷한데 다만 store에 있는것
        fetchedNews(state){
            return state.news
        },
        fetchedAsk(state){
            return state.ask
        },
        fetchedJobs(state){
            return state.jobs
        },
        fetchedUser(state){
            return state.user
        },
        fetchedItem(state){
            return state.item
        }
    },
    mutations,
    actions
})