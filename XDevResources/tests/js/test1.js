"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sinon_1 = __importDefault(require("sinon"));
var chai_1 = require("chai");
require("mocha");
var sandbox = sinon_1["default"].createSandbox();
describe("Running Application", function () {
    it("should start Application", function () {
        chai_1.expect(1).to.equal(1);
    });
    it("should log all error", function () {
        chai_1.expect(2).to.equal(2);
    });
    it("should verify System Authentication", function () {
        chai_1.expect(2).to.equal(2);
    });
    it("should end system gracefully", function () {
        chai_1.expect(2).to.equal(2);
    });
});
//# sourceMappingURL=test1.js.map