window.AuthorBioBus = new window.AuthorBio.Vue();

window.AuthorBio.Vue.mixin({
    methods: {
        $adminGet: window.AuthorBio.$adminGet,
        $adminPost: window.AuthorBio.$adminPost,
        $post: window.AuthorBio.$post,
        $t(str) {
            let transString = authorBioAdmin.i18n[str];
            if (transString) {
                return transString;
            }
            return str;
        },
    }
});

import {routes} from './routes'

const router = new window.AuthorBio.Router({
    routes: routes,
    linkActiveClass: 'active'
});

import App from './AdminApp'
if (document.getElementById("myAdminPanel")) {
    new window.AuthorBio.Vue({
        el: '#myAdminPanel',
        render: h => h(App),
        router: router
    });
}
