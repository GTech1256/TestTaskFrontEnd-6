"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = tslib_1.__importDefault(require("vue"));
var vue_router_1 = tslib_1.__importDefault(require("vue-router"));
var Home_vue_1 = tslib_1.__importDefault(require("./views/Home.vue"));
vue_1.default.use(vue_router_1.default);
exports.default = new vue_router_1.default({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home_vue_1.default,
        },
        {
            path: '/about',
            name: 'about',
            component: function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('./views/About.vue')); }); },
        },
    ],
});
//# sourceMappingURL=router.js.map