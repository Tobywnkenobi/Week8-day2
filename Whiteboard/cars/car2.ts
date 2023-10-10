/* 
Access Control Keywords:L
public, protected, private
*/

class Car2 {
    public get make(): string {
        return this._make;
    }
    public get year(): number {
        
    }
    public set make(value: string) {
        this._make = value;
    }

    set color(color: string) {
        if(color.toLowerCase() != 'orange'){
            this._color = color    
        }
        
    }

    get color(): string {
        return this._color

    get model(): string {
        return this._model
    }

    }
    constructor( 
        private readonly vin: string,
        private _make: string,
        private model:string,
        private year: number,
        public _color?: string,
    ) {} 

    

    drive(miles: number):void {
        console.log(`You have driven ${miles} miles`)
    }
}

const car3 = new Car2('645564645', 'ferrari', '360 spyder', 2016)

car3.displayinfo()
console.log(car.color, 'color')
console.log(car2.make)
console.log(car.make)
console.log(car.year)
car.drive(500)

car.model = 'Countach'
car.displayInfo(): void {
    console.log(`${this.make} ${this.model} ${this.year}`)
}

