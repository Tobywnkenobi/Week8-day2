class Car {
    readonly vin: string
    make: string
    model: string
    year: number
    color?: string
  
    constructor(vin: string, make: string, model: string, year: number, color?: string){
      this.vin = vin
      this.make = make
      this.model = model
      this.year = year
      this.color = color
    }
  
    drive(miles: number):void {
      console.log(`You have driven ${miles} miles`)
    }
  
    displayInfo():void {
      console.log(`${this.make} ${this.model} ${this.year}`)
    }
  }
  
  
  const car = new Car('3480u34908','honda', 'civic', 2010)
  const car2 = new Car('3480u34908','honda', 'civic', 2010, 'white')
  console.log(car.color, 'color')
  console.log(car.make)
  console.log(car.year)
  car.drive(500)
  car.displayInfo()
  
  car.model = 'fit'
  car.displayInfo()
  
  console.log(car.vin)
  // car.vin = 'new value'
