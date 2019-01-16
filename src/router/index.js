import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News'
import Ask from '../views/Ask'
import Jobs from '../views/Jobs'
import User from '../views/User'
import Item from '../views/Item'
import bus from '../utils/bus'
import { store } from '../store/index'
//import CreateListView from '../views/CreateListView'

Vue.use(VueRouter);

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
            beforeEnter:(to,from,next) => {
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
        },
        {
            path: '/ask',
            name: 'ask',
            component: Ask,
            beforeEnter:(to,from,next) => {
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
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs,
            beforeEnter:(to,from,next) => {
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
