export default abstract class Koopa {
    static className = 'Koopa'
    color?: string
  
    get age(): number {
      return this._age
    }
    set age(value: number) {
      this._age = value
    }
  
    constructor(protected _age: number){} 
  
  
    walk():void {
      console.log('Walking On 2 feet')
    }
  }
  
  