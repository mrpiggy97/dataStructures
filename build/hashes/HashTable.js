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
    //set a value for this.data[address] (address will be set with key)
    set(key, value) {
        let address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push({ key: key, value: value });
    }
    //get value from address that comes from key
    get(key) {
        let address = this.hashMethod(key);
        let currentBucket = this.data[address];
        return currentBucket;
    }
    //delete entire array that comes from this.data[address]
    deleteBucket(bucket) {
        let newData = [];
        this.data.forEach((member) => {
            if (member !== bucket) {
                newData.push(member);
            }
        });
        this.data = newData;
    }
    //delete all members from this.data[address] with key <key>
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
    //get all the bucket keys inside this.data[address]
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
