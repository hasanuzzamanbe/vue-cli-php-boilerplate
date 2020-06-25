import Vue from './elements';
import Router from 'vue-router';
Vue.use(Router);

export default class MyProject {
    constructor() {
        this.Vue = Vue;
        this.Router = Router;
    }

    $get(options) {
        return window.jQuery.get(window.myProjectAdmin.ajaxurl, options);
    }

    $adminGet(options) {
        options.action = 'author_bio_admin_ajax';
        return window.jQuery.get(window.myProjectAdmin.ajaxurl, options);
    }

    $adminPost(options) {
        options.action = 'author_bio_admin_ajax';
        return window.jQuery.post(window.myProjectAdmin.ajaxurl, options);
    }

    $getJSON(options) {
        return window.jQuery.getJSON(window.myProjectAdmin.ajaxurl, options);
    }

    $post(options) {
        return window.jQuery.post(window.myProjectAdmin.ajaxurl, options);
    }
}
