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
            hash = (hash + key.charCodeAt(i) * i) % this.data.length + 20
        }
        return hash
    }

    public set(key : string, value : ValueType){
        let address : number = this.hashMethod(key)
        if(!this.data[address]){
            this.data[address] = [{key : key, value : value}]
        }else{
            this.data[address].push({key : key, value : value})
        }
    }

    public get(key : string){
        let address : number = this.hashMethod(key)
        let currentBucket : Hash<ValueType>[] = this.data[address]
        if(currentBucket){
            return currentBucket[0]
        }
    }

    public getBucketMember(index : number,key : string) : Hash<ValueType>{
        let address : number = this.hashMethod(key)
        let currentBucket : Hash<ValueType>[] = this.data[address]
        return currentBucket[index]
    }

    public deleteBucket(key : string){
        let newData : Hash<ValueType>[][] = []
        this.data.forEach((member : Hash<ValueType>[]) : void => {
            if (member[0].key !== key){
                newData.push(member)
            }
        })
        this.data = newData
    }
}