import Koopa from './koopa'
import { Defense } from './interfaces'

export default class RedKoopa extends Koopa implements Defense {
  static className = 'RedKoopa'
  color: string

  constructor(_age: number, color: string = 'red'){
    super(_age)
    this.color = color
  }

  displayInfo(){
    console.log(`${RedKoopa.className} ${this._age}`)
  }

  defense(): void {
      console.log("Tucks into shell and spins for D")
  }
}


const redKoopa = new RedKoopa(2, 'red')

redKoopa.defense()

console.log(RedKoopa.className)

console.log(Koopa.className)

redKoopa.walk()

redKoopa.defense()