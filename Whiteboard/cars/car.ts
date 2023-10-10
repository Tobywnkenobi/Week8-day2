class Car {
    readonly vin: string
    make: string
    model: string
    year: number
    color?: string

    constructor(make: string, model: string, year: number) {
        this.vin = vin
        this.make = make
        this.model = model
        this.year = year
    }

    drive(miles: number):void {
        console.log(`You have driven ${miles} miles`)
    }
}

const car = new Car('56464466464', 'lamborghini', 'Diablo', 2010, 'black')
const car2 = new Car('12526464', 'honda', 'civic', 2015, 'white')

console.log(car.color, 'color')
console.log(car2.make)
console.log(car.make)
console.log(car.year)
car.drive(500)

car.model = 'Countach'
car.displayInfo()

