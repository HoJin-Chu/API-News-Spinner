import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News'
import Ask from '../views/Ask'
import Jobs from '../views/Jobs'
import User from '../views/User'
import Item from '../views/Item'
import bus from '../utils/bus'
import { store } from '../store/index'

Vue.use(VueRouter);

const SpinnerLoading = (to,from,next) => {
    bus.$emit('start:spinner')
    
    store.dispatch('FETCH_LIST', to.name)
        .then(() => {
            next()
        })
        .catch((error)=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
    }

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
          path: '/',
          redirect : '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: News,
            beforeEnter:SpinnerLoading
        },
        {
            path: '/ask',
            name: 'ask',
            component: Ask,
            beforeEnter:SpinnerLoading
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs,
            beforeEnter:SpinnerLoading
        },
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/item/:id',
            component: Item
        }
    ]
})
