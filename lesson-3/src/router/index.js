import Vue from "vue";
import Router from 'vue-router';

import AddPaymentForm from '../components/AddPaymentForm.vue';

Vue.use(Router)

const routes = [
    {
        path: "/dashboard/:page/",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "PageDashboard"*/'../views/mainView.vue'),
    },
    {
        path: '/paymentsTemplate',
        name: "Payment Tamplate",
        component: () => import(/* webpackChunkName: "PagePaymentsTemplate"*/'../views/paymentsTemplateView.vue'),
    },
    {
        path: '/error',
        name: "error",
        component: () => import(/* webpackChunkName: "PageEror"*/'../views/errorView.vue'),
    },
    {
        path: '/add/:section/:category/',
        name: "AddPaymentForm",
        component: AddPaymentForm
    },
    {
        path: '*',
        redirect: {name: 'error'}
    },
]

const router = new Router({
    mode: 'history',
    routes
})

const userAuthExists = true 

router.beforeEach((to, from, next) => {
    if (to.name !== 'error' && !userAuthExists) {
        next({ name: 'error' })
    } else {
        next()
    }
})

const getTitleByRouteName = (routeName) => {
    return {
        'Dashboard': 'Take a look on your payments',
        'Payment Tamplate': 'Quick add your payments',
        'error': 'Oops! Seems like something wrong happend with this page :(',
        'AddPaymentForm': 'Adding needed payment'
    }[routeName]
}

router.afterEach((to) => {
    document.title = getTitleByRouteName(to.name)
})

export default router;
