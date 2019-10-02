"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var test_utils_1 = require("@vue/test-utils");
var HelloWorld_vue_1 = tslib_1.__importDefault(require("@/components/HelloWorld.vue"));
describe('HelloWorld.vue', function () {
    it('renders props.msg when passed', function () {
        var msg = 'new message';
        var wrapper = test_utils_1.shallowMount(HelloWorld_vue_1.default, {
            propsData: { msg: msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
//# sourceMappingURL=example.spec.js.map