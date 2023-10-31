"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const designBlockchain_js_1 = require("../src/designBlockchain.js");
describe("Blockchain Tests", () => {
    it("Hash should begin with '4fc8'", () => {
        const newDesignBlockchain = new designBlockchain_js_1.designBlockchain(1, 1, '');
        const result = newDesignBlockchain.calculateHash(1, 1, '').toString().substring(0, 4);
        console.log('result1 :>> ', result);
        chai_1.assert.equal(result, '4fc8');
    });
    it("Hash should begin with '0000'", () => {
        const newDesignBlockchain = new designBlockchain_js_1.designBlockchain(1, 156384, 'test');
        const result = newDesignBlockchain.calculateHash(1, 156384, 'test').toString().substring(0, 4);
        console.log('result2 :>> ', result);
        chai_1.assert.equal(result, '0000');
    });
    it("test", () => {
        const newNonce = new designBlockchain_js_1.designBlockchain(1, 0, '');
        const resultNonce = newNonce.hashWith4Zeros();
        const newDesignBlockchain = new designBlockchain_js_1.designBlockchain(1, resultNonce, '');
        const result = newDesignBlockchain.calculateHash(1, resultNonce, '').toString().substring(0, 4);
        console.log('resultNonce :>> ', resultNonce);
        console.log('result3 :>> ', result);
        chai_1.assert.equal(result, '0000');
    });
});
