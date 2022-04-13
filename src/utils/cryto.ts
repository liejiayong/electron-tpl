import CryptoJS from 'crypto-js';

const KEY = CryptoJS.enc.Utf8.parse('1234567891098766');
const IV = CryptoJS.enc.Utf8.parse('1234567891098766');

export interface ICryKey {
  (word: string | object): string;
}

export default {
  /**
   * 加密
   * @param word 明文
   * @returns 加密文本
   */
  encrypt(word: string | object) {
    const inp = typeof word === 'object' ? JSON.stringify(word) : word;
    const src = CryptoJS.enc.Utf8.parse(inp);
    const encrypter = CryptoJS.AES.encrypt(src, KEY, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypter.ciphertext.toString();
  },
  /**
   * 解密
   * @param word 密文
   * @returns 解密文本
   */
  decrypt(word: string) {
    const hexStr = CryptoJS.enc.Hex.parse(word);
    const src = CryptoJS.enc.Base64.stringify(hexStr);
    const decrypt = CryptoJS.AES.decrypt(src, KEY, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    const decryptStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptStr.toString();
  },
};
