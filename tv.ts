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
  
  const tv = new TV('0354783-9754')
  
  tv.display()
  
  // tv.serialNo
  