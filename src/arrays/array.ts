type map = {
    [key : number] : string
}

export default class MyArray{
    public length : number
    public data : map
    constructor(){
        this.length = 0
        this.data = {}
    }
    public Get(index : number) : string{
        if (index >= this.length){
            console.error("index is out of bound")
            return ""
        }else{
            return this.data[index]
        }
    }
    public Push(newMember : string){
        this.data[this.length] = newMember
        this.length = this.length + 1
    }
    public Delete(index : number){
        if (index >= this.length){
            console.error("index out of bounds")
        }else{
            let currentIndex : number = 0
            let newArray : map = {}
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
    public PrintMembers(){
        let formattedString : string = ""
        for(let i = 0; i < this.length; i++){
            formattedString = formattedString + ` ${this.data[i]}`
        }
        console.log(formattedString)
    }
}