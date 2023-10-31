import { assert } from 'chai';
import { designBlockchain } from "../src/designBlockchain.js";

describe("Blockchain Tests", () => {
  it("Hash should begin with 'cf92'", () => {
    const newDesignBlockchain = new designBlockchain(1, 1, { price: 1, From: '1', to: '1' }, '1');
    const result = newDesignBlockchain.calculateHash(1, 1, { price: 1, From: '1', to: '1' }, '1').toString().substring(0, 4);
    console.log('result :>> ', result);
    assert.equal(result, 'cf92');
  });
});