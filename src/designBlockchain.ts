// import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';

type dataType = {
  price: number;
  From: string;
  to: string;
};

export class designBlockchain {
  static calculateHash(arg0: string) {
    throw new Error('Method not implemented.');
  }
  block: number;
  nonce: number;
  data: dataType;
  prevHash: string;

  constructor(block: number, nonce: number, data: dataType, prevHash: string) {
    this.block = block;
    this.nonce = nonce;
    this.data = data;
    this.prevHash = prevHash;
  }

  public calculateHash(block: number, nonce: number, data: dataType, prevHash: string ) {
    return sha256(block + prevHash  + data + nonce).toString()
  }

}