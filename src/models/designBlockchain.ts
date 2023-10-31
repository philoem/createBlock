import CryptoJS from 'crypto-js';

type dataType = {
  price: number;
  From: string;
  to: string;
};

export class designBlockchain {
  id: number;
  nonce: string;
  data: dataType;
  prevHash: string;
  message: string;

  constructor(id: number, nonce: string, data: dataType, prevHash: string, message: string) {
    this.id = id;
    this.nonce = nonce;
    this.data = data;
    this.prevHash = prevHash;
    this.message = message;
    console.log('thisid :>> ', this.id);
  }

  // Concatenation pour hasher les données
  getHash(): any {
    const hash = CryptoJS.SHA256('message');
    console.log(hash.toString());
  }

}