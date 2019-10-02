"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Weather_1 = tslib_1.__importDefault(require("../models/Weather"));
exports.default = {
    getAll: function (req, res, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var normalizeWeatherData, weathers, _i, weathers_1, weather, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    normalizeWeatherData = {};
                    return [4, Weather_1.default.findAll({
                            limit: 24 * 5
                        })];
                case 1:
                    weathers = _a.sent();
                    for (_i = 0, weathers_1 = weathers; _i < weathers_1.length; _i++) {
                        weather = weathers_1[_i];
                        if (normalizeWeatherData[weather.city]) {
                            normalizeWeatherData[weather.city].push(weather);
                        }
                        else {
                            normalizeWeatherData[weather.city] = [weather];
                        }
                    }
                    res.json(normalizeWeatherData);
                    return [3, 3];
                case 2:
                    err_1 = _a.sent();
                    return [2, next(err_1)];
                case 3: return [2];
            }
        });
    }); }
};
//# sourceMappingURL=city.controller.js.map