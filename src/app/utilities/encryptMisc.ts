import SimpleCrypto from 'simple-crypto-js';

export abstract class EncryptMisc {
    private static key: string;
    private static simpleCripto: any;
    static setKey(key: string): void {
        if (key && key !== null && key.length > 0) {
            this.key = key;
            this.simpleCripto = new SimpleCrypto(this.key);
        }
    }
    static hasEncryption(): boolean {
        return (this.key && this.key.length > 0 && this.simpleCripto);
    }
    static encrypt(data: any): string {
        if (this.hasEncryption() && data && data !== null) {
            return this.simpleCripto.encrypt(data);
        } else {
            return '';
        }
    }
    static decrypt(ciphered: string): any {
        if (this.hasEncryption() && ciphered && ciphered !== null && ciphered.length > 0) {
            let val: any = this.simpleCripto.decrypt(ciphered);
            try {
                val = JSON.parse(val);
            } catch (e) {}
            return val;
        } else {
            return null;
        }
    }
    static generateKey() {
        return SimpleCrypto.generateRandom();
    }
}
