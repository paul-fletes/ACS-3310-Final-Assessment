"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the phone number function to be tested
var index_1 = __importDefault(require("../index"));
describe('formatPhoneNumber', function () {
    it('formats a valid 10-digit number correctly', function () {
        var input = "4155448375";
        var output = (0, index_1.default)(input);
        expect(output).toBe("(415) 544-8375");
    });
    it('throws error for non-numeric input', function () {
        expect(function () {
            (0, index_1.default)("abcd123456");
        }).toThrow("Invalid phone number input");
    });
    it('throws error for input with more than 10 characters', function () {
        expect(function () {
            (0, index_1.default)("415544837511");
        }).toThrow("Invalid phone number input");
    });
    it('throws error for input with less than 10 characters', function () {
        expect(function () {
            (0, index_1.default)("41554483");
        }).toThrow("Invalid phone number input");
    });
});
