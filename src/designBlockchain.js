"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.designBlockchain = void 0;
// import CryptoJS from 'crypto-js';
const sha256_1 = __importDefault(require("crypto-js/sha256"));
class designBlockchain {
    static calculateHash(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(block, nonce, data, prevHash) {
        this.block = block;
        this.nonce = nonce;
        this.data = data;
        this.prevHash = prevHash;
        console.log('thisblock :>> ', this.block);
    }
    calculateHash(block, nonce, data, prevHash) {
        return (0, sha256_1.default)(block + prevHash + data + nonce).toString();
    }
}
exports.designBlockchain = designBlockchain;
