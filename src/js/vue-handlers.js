import Vue from './elements';
import Router from 'vue-router';
Vue.use(Router);

export default class MyProject {
    constructor() {
        this.Vue = Vue;
        this.Router = Router;
    }
}
