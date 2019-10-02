"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_status_1 = tslib_1.__importDefault(require("http-status"));
var ExtendableError = (function (_super) {
    tslib_1.__extends(ExtendableError, _super);
    function ExtendableError(_a) {
        var message = _a.message, errors = _a.errors, status = _a.status, isPublic = _a.isPublic, stack = _a.stack;
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        _this.message = message;
        _this.errors = errors;
        _this.status = status;
        _this.isPublic = isPublic || true;
        _this.stack = stack;
        return _this;
    }
    return ExtendableError;
}(Error));
var APIError = (function (_super) {
    tslib_1.__extends(APIError, _super);
    function APIError(_a) {
        var message = _a.message, errors = _a.errors, stack = _a.stack, _b = _a.status, status = _b === void 0 ? http_status_1.default.INTERNAL_SERVER_ERROR : _b, isPublic = _a.isPublic;
        return _super.call(this, {
            message: message,
            errors: errors,
            status: status,
            isPublic: isPublic,
            stack: stack,
            name: name || 'APIError'
        }) || this;
    }
    return APIError;
}(ExtendableError));
exports.default = APIError;
//# sourceMappingURL=APIError.js.map