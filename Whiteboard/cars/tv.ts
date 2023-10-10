class TV{
    constructor(protected serialNo: string){}

    display(){
        console.log(this.serialNo)
    }
}

class Roku extends TV{
    
    override display(){
        console.log(this.serialNo)
    }
}