import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Abarrotes from '../components/Abarrotes'
import Frutas from '../components/Frutas'
import Verduras from '../components/Verduras'
import Carnes from '../components/Carnes'
import Lacteos from '../components/Lacteos'
import Limpieza from '../components/Limpieza'
import Bebidas  from '../components/Bebidas'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
        path:'/home',
        name:'home',
        component:Home
        },
        {
        path:'/abarrotes',
        name:'abarrotes',
        component:Abarrotes
        },
        {
        path:'/frutas',
        name:'frutas',
        component:Frutas
        },
        {
        path:'/verduras',
        name:'verduras',
        component:Verduras
        },
        {
        path:'/carnes',
        name:'carnes',
        component:Carnes
        },
        {
        path:'/lacteos',
        name:'lacteos',
        component:Lacteos
        },
        {
        path:'/limpieza',
        name:'limpieza',
        component:Limpieza   
        },
        {
        path:'/bebidas',
        name:'bebidas',
        component:Bebidas
        }
    ]
})
