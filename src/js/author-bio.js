import Vue from './elements';
import Router from 'vue-router';
Vue.use(Router);

import { applyFilters, addFilter, addAction, doAction } from '@wordpress/hooks';

export default class AuthorBio {
    constructor() {
        this.applyFilters = applyFilters;
        this.addFilter = addFilter;
        this.addAction = addAction;
        this.doAction = doAction;
        this.Vue = Vue;
        this.Router = Router;
    }

    $get(options) {
        return window.jQuery.get(window.authorBioAdmin.ajaxurl, options);
    }

    $adminGet(options) {
        options.action = 'author_bio_admin_ajax';
        return window.jQuery.get(window.authorBioAdmin.ajaxurl, options);
    }

    $adminPost(options) {
        options.action = 'author_bio_admin_ajax';
        return window.jQuery.post(window.authorBioAdmin.ajaxurl, options);
    }

    $getJSON(options) {
        return window.jQuery.getJSON(window.authorBioAdmin.ajaxurl, options);
    }

    $post(options) {
        return window.jQuery.post(window.authorBioAdmin.ajaxurl, options);
    }
}
