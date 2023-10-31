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
  data: string;

  constructor(block: number, nonce: number, data: string) {
    this.block = block;
    this.nonce = nonce;
    this.data = data;
  }

  public calculateHash(block: number, nonce: number, data: string ) {
    return sha256(block.toString() + nonce.toString()  + data).toString()
  }

  public hashWith4Zeros(){
    let block = 1;
    let nonce = 0;
    let data = '';
    while (!this.calculateHash(block, nonce, data).startsWith('0000')) {
      nonce++;
    }
    return nonce;
  }

}