import { Defense, Flyable } from './interfaces'
import Koopa from './koopa'

export default class FlyingKoopa extends Koopa implements Defense, Flyable{
  constructor(protected _age: number, public color: string){
    super(_age)
  }

  defense(): void {
      console.log('Flying out of reach')
  }
  
  flying():void{
    console.log("Flying up 10 ft")
  }
}