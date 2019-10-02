"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var supertest_1 = tslib_1.__importDefault(require("supertest"));
var index_1 = tslib_1.__importDefault(require("../../../index"));
var axios_mock_adapter_1 = tslib_1.__importDefault(require("axios-mock-adapter"));
var axios_1 = tslib_1.__importDefault(require("axios"));
var mock = new axios_mock_adapter_1.default(axios_1.default);
var fakeRate = {
    USD: { Value: 70 },
    EUR: { Value: 64 },
};
mock.onGet(/daily_json/).reply(200, {
    Valute: fakeRate,
});
describe('Errors', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2];
            });
        }); });
        it('should return html instead 404', function () { return supertest_1.default(index_1.default)
            .get('/not/valid')
            .expect('Content-Type', /text\/html/); });
        it('should return 404 in invalid api url', function () { return supertest_1.default(index_1.default)
            .get('/api/not/valid')
            .expect(404); });
        return [2];
    });
}); });
//# sourceMappingURL=errors.test.js.map