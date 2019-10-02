"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var sequelize_typescript_1 = require("sequelize-typescript");
var CityModel = (function (_super) {
    tslib_1.__extends(CityModel, _super);
    function CityModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        sequelize_typescript_1.Column,
        tslib_1.__metadata("design:type", String)
    ], CityModel.prototype, "city", void 0);
    tslib_1.__decorate([
        sequelize_typescript_1.Column,
        tslib_1.__metadata("design:type", Object)
    ], CityModel.prototype, "data", void 0);
    tslib_1.__decorate([
        sequelize_typescript_1.CreatedAt,
        sequelize_typescript_1.Column,
        tslib_1.__metadata("design:type", Date)
    ], CityModel.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        sequelize_typescript_1.UpdatedAt,
        sequelize_typescript_1.Column,
        tslib_1.__metadata("design:type", Date)
    ], CityModel.prototype, "updatedAt", void 0);
    CityModel = tslib_1.__decorate([
        sequelize_typescript_1.Table
    ], CityModel);
    return CityModel;
}(sequelize_typescript_1.Model));
exports.default = CityModel;
//# sourceMappingURL=Weather.js.map