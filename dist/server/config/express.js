"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var morgan_1 = tslib_1.__importDefault(require("morgan"));
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var compression_1 = tslib_1.__importDefault(require("compression"));
var method_override_1 = tslib_1.__importDefault(require("method-override"));
var cors_1 = tslib_1.__importDefault(require("cors"));
var helmet_1 = tslib_1.__importDefault(require("helmet"));
var v1_1 = tslib_1.__importDefault(require("../api/routes/v1"));
var error_1 = require("../api/middlewares/error");
var logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
var app = express_1.default();
app.use(morgan_1.default(logs));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(compression_1.default());
app.use(method_override_1.default());
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.static('public'));
app.use('/api/v1', v1_1.default);
app.use(/\/((?!api).)*/, express_1.default.static('public/index.html'));
app.use(error_1.converter);
app.use(error_1.notFound);
app.use(error_1.handler);
exports.default = app;
//# sourceMappingURL=express.js.map