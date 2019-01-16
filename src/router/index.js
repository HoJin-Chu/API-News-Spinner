import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News'
import Ask from '../views/Ask'
import Jobs from '../views/Jobs'
import User from '../views/User'
import Item from '../views/Item'

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
            component: News,
        },
        {
            path: '/ask',
            component: Ask,
        },
        {
            path: '/jobs',
            component: Jobs,
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
