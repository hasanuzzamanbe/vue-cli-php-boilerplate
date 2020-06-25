window.MyProjectBus = new window.MyProject.Vue();

window.MyProject.Vue.mixin({
    methods: {
        $adminGet: window.MyProject.$adminGet,
        $adminPost: window.MyProject.$adminPost,
        $post: window.MyProject.$post,
        $t(str) {
            let transString = myProjectAdmin.i18n[str];
            if (transString) {
                return transString;
            }
            return str;
        },
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
