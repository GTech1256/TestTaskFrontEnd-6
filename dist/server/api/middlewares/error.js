"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_status_1 = tslib_1.__importDefault(require("http-status"));
var express_validation_1 = tslib_1.__importDefault(require("express-validation"));
var APIError_1 = tslib_1.__importDefault(require("../utils/APIError"));
exports.handler = function (err, req, res) {
    var response = {
        code: err.status,
        message: err.message,
        errors: err.errors,
        stack: err.stack,
    };
    if (process.env.NODE_ENV !== 'development') {
        delete response.stack;
    }
    res.status(err.status);
    res.json(response);
};
exports.converter = function (err, req, res) {
    var convertedError = err;
    if (err instanceof express_validation_1.default.ValidationError) {
        convertedError = new APIError_1.default({
            message: 'Validation Error',
            errors: err.errors,
            status: err.status,
            stack: err.stack,
            name: 'ValidationError',
        });
    }
    else if (!(err instanceof APIError_1.default)) {
        convertedError = new APIError_1.default({
            message: err.message,
            status: err.status,
            stack: err.stack,
            errors: err.errors || [],
            name: 'APIError'
        });
    }
    return exports.handler(convertedError, req, res);
};
exports.notFound = function (req, res) {
    var err = new APIError_1.default({
        message: 'Not found',
        status: http_status_1.default.NOT_FOUND,
        name: 'APIError',
        errors: []
    });
    return exports.handler(err, req, res);
};
//# sourceMappingURL=error.js.map