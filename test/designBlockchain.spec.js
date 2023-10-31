"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const designBlockchain_js_1 = require("../src/designBlockchain.js");
describe("Blockchain Tests", () => {
    it("Hash should begin with 'cf92'", () => {
        const newDesignBlockchain = new designBlockchain_js_1.designBlockchain(1, 1, { price: 1, From: '1', to: '1' }, '1');
        const result = newDesignBlockchain.calculateHash(1, 1, { price: 1, From: '1', to: '1' }, '1').toString().substring(0, 4);
        console.log('result :>> ', result);
        chai_1.assert.equal(result, 'cf92');
    });
});
