"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = tslib_1.__importDefault(require("vue"));
var vuex_1 = tslib_1.__importDefault(require("vuex"));
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: {
        message: 'hello'
    },
    mutations: {},
    actions: {},
    getters: {
        messageInUpperCase: function (_a) {
            var message = _a.message;
            return message.toUpperCase();
        }
    }
});
//# sourceMappingURL=store.js.map