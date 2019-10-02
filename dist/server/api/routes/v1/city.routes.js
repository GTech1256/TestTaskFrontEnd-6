"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var city_controller_1 = tslib_1.__importDefault(require("../../controllers/city.controller"));
var router = express_1.default.Router();
exports.default = router
    .route('/')
    .get(city_controller_1.default.getAll);
//# sourceMappingURL=city.routes.js.map