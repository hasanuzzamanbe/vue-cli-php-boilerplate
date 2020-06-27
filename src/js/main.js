window.MyProjectBus = new window.MyProject.Vue();

window.MyProject.Vue.mixin({
    methods: {
        yourMethods: function() {
            // write your own global mixin here
            //call form vue app like, this.yourMethods()
        }
    }
});

import {routes} from './routes'

const router = new window.MyProject.Router({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active'
});

import App from './AdminApp'
if (document.getElementById("myAdminPanel")) {
    new window.MyProject.Vue({
        el: '#myAdminPanel',
        render: h => h(App),
        router: router
    });
}
