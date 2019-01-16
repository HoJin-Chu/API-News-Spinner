import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList,fetchAskList,fetchJobsList } from '../api/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news: [],
        ask:[],
        jobs:[]
    },
    mutations: { 
        SET_NEWS(state, data){
            state.news = data;
        },
        SET_ASK(state, data){
            state.ask = data
        },
        SET_JOBS(state, data){
            state.jobs = data
        }
    },
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
                .then( response => {
                    // 액션에서 state에대해서 값을 못넣어주므로 mutation에서 값을 처리하도록 넘긴다 
                    context.commit('SET_NEWS',response.data)
                })
                .catch( error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        },
        FETCH_ASK(context){
            fetchAskList()
                .then( response => {
                    context.commit('SET_ASK', response.data)
                })
                .catch( error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
                .then( ({data}) => {
                    commit('SET_JOBS', data)
                })
                .catch( error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        }
    }
})