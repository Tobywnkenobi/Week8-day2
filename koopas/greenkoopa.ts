import { Defense } from './interfaces'
import Koopa from './koopa'

export default class GreenKoopa extends Koopa implements Defense {
  static className = 'GreenKoopa'

  get age():number{
    return this._age - 1
  }
  
  constructor(_age: number, public color: string = 'green'){
    super(_age)
  }

  displayInfo(){
    console.log(`${GreenKoopa.className} ${this._age}`)
  }

  override walk():void{
    console.log("Walking Like a Green Koopa")
  }
  
  defense():void{
    console.log('Tucks into shell for d')
  }
}

const greenKoopa = new GreenKoopa(2)

console.log(greenKoopa.age)

greenKoopa.walk()