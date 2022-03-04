"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor() {
        this.data = Array(50);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        let address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push({ key: key, value: value });
    }
    get(key) {
        let address = this.hashMethod(key);
        let currentBucket = this.data[address];
        return currentBucket;
    }
    deleteBucket(bucket) {
        let newData = [];
        this.data.forEach((member) => {
            if (member !== bucket) {
                newData.push(member);
            }
        });
        this.data = newData;
    }
    delete(key) {
        let address = this.hashMethod(key);
        let bucket = this.get(key);
        let newBucketData = [];
        bucket.map((member) => {
            if (member.key !== key) {
                newBucketData.push(member);
            }
        });
        this.data[address] = newBucketData;
        if (this.data[address].length === 0) {
            this.deleteBucket(this.data[address]);
        }
    }
    getAllBucketKeys(key) {
        let bucket = this.get(key);
        let keys = [];
        bucket.map((member) => {
            keys.push(member.key);
        });
        return keys;
    }
}
exports.default = HashTable;
