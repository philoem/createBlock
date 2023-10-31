import { assert } from 'chai';
import { designBlockchain } from "../src/designBlockchain.js";

describe("Blockchain Tests", () => {
  it("Hash should begin with '4fc8'", () => {
    const newDesignBlockchain = new designBlockchain(1, 1, '');
    const result = newDesignBlockchain.calculateHash(1, 1, '').toString().substring(0, 4);
    console.log('result1 :>> ', result);
    assert.equal(result, '4fc8');
  });

  it("Hash should begin with '0000'", () => {
    const newDesignBlockchain = new designBlockchain(1, 156384, 'test');
    const result = newDesignBlockchain.calculateHash(1, 156384, 'test').toString().substring(0, 4);
    console.log('result2 :>> ', result);
    assert.equal(result, '0000');
  });

  it("test", () => {
    const newNonce = new designBlockchain(1, 0, '');
    const resultNonce = newNonce.hashWith4Zeros();
    const newDesignBlockchain = new designBlockchain(1, resultNonce, '');
    const result = newDesignBlockchain.calculateHash(1, resultNonce, '').toString().substring(0, 4);
    console.log('resultNonce :>> ', resultNonce);
    console.log('result3 :>> ', result);
    assert.equal(result, '0000');
  });
});