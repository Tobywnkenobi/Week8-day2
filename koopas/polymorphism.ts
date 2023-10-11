import { Defense, Flyable } from './interfaces'
import RedKoopa from './redkoopa'
import GreenKoopa from './greenkoopa'
import FlyingKoopa from './flyingkoopa'

const koopas: Defense[] = [new RedKoopa(2), new RedKoopa(3), new GreenKoopa(2), new FlyingKoopa(3, 'green')]

for( const koopa of koopas ) {
  koopa.defense()
}

const flyers: Array<Flyable> = [new FlyingKoopa(4, 'green')]

flyers[0].flying()

/* 
Create a class `Car` and then create 2 car subclasses `SmartCar`, `Truck`.
All Cars should be able to `brake` `drive` and `honk`

- When a SmartCar drives it makes `hummmm` sound and when it honks it makes a `MMmeep` sound
- When a Truck drives it makes a `vrooom` sound and when it honks it makes `BWaaaaaahp`
- When a Truck or a SmartCar brakes it makes `squeeel` sound
*/


/* 
Create a Interface Of MusicMedia that states anything implementing it should be able to `play` and create Classes: CD, Tape, Record to implement your interface

to implement play:

CDs will print "Spins and read with Laser"

Tapes will print "Magnetic Tape is read"

Records will print "Needle reads grooves"
*/