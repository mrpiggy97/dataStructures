type Hash<ValueType> = {
    key : string
    value : ValueType
}

export default class HashTable<ValueType>{
    public data : Hash<ValueType>[][]
    constructor(){
        this.data = Array(50)
    }
    public hashMethod(key : string) : number{
        let hash : number = 0
        for( let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length 
        }
        return hash
    }
    //set a value for this.data[address] (address will be set with key)
    public set(key : string, value : ValueType){
        let address : number = this.hashMethod(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push({key : key, value : value})
    }
    //get value from address that comes from key
    public get(key : string) : Hash<ValueType>[]{
        let address : number = this.hashMethod(key)
        let currentBucket : Hash<ValueType>[] = this.data[address]
        return currentBucket
    }
    //delete entire array that comes from this.data[address]
    public deleteBucket(bucket : Hash<ValueType>[]){
        let newData : Hash<ValueType>[][] = []
        this.data.forEach((member : Hash<ValueType>[]) : void => {
            if (member !== bucket){
                newData.push(member)
            }
        })
        this.data = newData
    }
    //delete all members from this.data[address] with key <key>
    public delete(key : string){
        let address : number = this.hashMethod(key)
        let bucket : Hash<ValueType>[] = this.get(key)
        let newBucketData : Hash<ValueType>[] = []
        bucket.map((member : Hash<ValueType>) : void => {
            if (member.key !== key){
                newBucketData.push(member)
            }
        })
        this.data[address] = newBucketData
        if(this.data[address].length === 0){
            this.deleteBucket(this.data[address])
        }
    }
    //get all the bucket keys inside this.data[address]
    public getAllBucketKeys(key : string) : string[]{
        let bucket : Hash<ValueType>[] = this.get(key)
        let keys : string[] = []
        bucket.map((member : Hash<ValueType>) : void => {
            keys.push(member.key)
        })
        return keys
    }
}

export {Hash}