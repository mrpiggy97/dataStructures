"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor() {
        this.data = Array(50);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length + 20;
        }
        return hash;
    }
    set(key, value) {
        let address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [{ key: key, value: value }];
        }
        else {
            this.data[address].push({ key: key, value: value });
        }
    }
    get(key) {
        let address = this.hashMethod(key);
        let currentBucket = this.data[address];
        if (currentBucket) {
            return currentBucket[0];
        }
    }
    getBucketMember(index, key) {
        let address = this.hashMethod(key);
        let currentBucket = this.data[address];
        return currentBucket[index];
    }
    deleteBucket(key) {
        let newData = [];
        this.data.forEach((member) => {
            if (member[0].key !== key) {
                newData.push(member);
            }
        });
        this.data = newData;
    }
}
exports.default = HashTable;
