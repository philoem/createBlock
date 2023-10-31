"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.designBlockchain = void 0;
const sha256_1 = __importDefault(require("crypto-js/sha256"));
class designBlockchain {
    static calculateHash(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(block, nonce, data) {
        this.block = block;
        this.nonce = nonce;
        this.data = data;
    }
    calculateHash(block, nonce, data) {
        return (0, sha256_1.default)(block.toString() + nonce.toString() + data).toString();
    }
    hashWith4Zeros() {
        let block = 1;
        let nonce = 0;
        let data = '';
        while (!this.calculateHash(block, nonce, data).startsWith('0000')) {
            nonce++;
        }
        return nonce;
    }
}
exports.designBlockchain = designBlockchain;
