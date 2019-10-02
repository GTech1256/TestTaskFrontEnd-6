"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('dotenv').config();
var logger_1 = tslib_1.__importDefault(require("./config/logger"));
var express_1 = tslib_1.__importDefault(require("./config/express"));
express_1.default.listen(process.env.PORT, function () { return logger_1.default.info("server started on port " + process.env.PORT + " (" + process.env.NODE_ENV + ")"); });
exports.default = express_1.default;
//# sourceMappingURL=index.js.map