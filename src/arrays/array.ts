type map<ValueType> = {
    [key : number] : ValueType
}

export default class MyArray<ValueType>{
    public length : number
    public data : map<ValueType>
    constructor(){
        this.length = 0
        this.data = {}
    }
    //get element from index <index>
    public Get(index : number) : ValueType{
        return this.data[index]
    }
    //introduce element with index <this.length>
    public Push(newMember : ValueType){
        this.data[this.length] = newMember
        this.length = this.length + 1
    }
    //delete element that comes from index <index>
    public Delete(index : number){
        if (index >= this.length){
            console.error("index out of bounds")
        }else{
            let currentIndex : number = 0
            let newArray : map<ValueType> = {}
            for (let i = 0; i < this.length; i++){
                if (i !== index){
                    newArray[currentIndex] = this.data[i]
                    currentIndex = currentIndex + 1
                }
            }
            this.length = this.length - 1
            this.data = newArray
        }
    }
    //add element to beggining of array
    public addToStart(member : ValueType){
        let newArray : map<ValueType> = {}
        let currentIndex : number = 1
        newArray[0] = member
        for(let i = 0; i < this.length; i++){
            newArray[currentIndex] = this.data[i]
            currentIndex = currentIndex + 1
        }
        this.data = newArray
        this.length = this.length + 1
    }
    //remove first element from array
    public removeFirst(){
        let newArray : map<ValueType> = {}
        let currentIndex : number = 0
        for(let i = 1; i < this.length; i++){
            newArray[currentIndex] = this.data[i]
            currentIndex = currentIndex + 1
        }
        this.data = newArray
        this.length = this.length - 1
    }
    //print all members from array
    public PrintMembers(){
        let formattedString : string = ""
        for(let i = 0; i < this.length; i++){
            formattedString = formattedString + ` ${this.data[i]}`
        }
        console.log(formattedString)
    }
}