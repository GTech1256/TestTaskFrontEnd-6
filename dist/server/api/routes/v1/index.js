"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var city_routes_1 = tslib_1.__importDefault(require("./city.routes"));
var router = express_1.default.Router();
router.get('/status', function (req, res) { return res.send('OK'); });
router.use('/docs', express_1.default.static('docs'));
router.use('/city', city_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map