"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var joi_1 = tslib_1.__importDefault(require("joi"));
exports.default = {
    cityOneGET: {
        options: {
            contextRequest: true,
        },
        params: joi_1.default.object().keys({
            id: joi_1.default.string().required()
        })
    },
};
//# sourceMappingURL=city.validation.js.map