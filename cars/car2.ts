/* 
Access Control Keywords:
public, protected, private
*/
class Car2 {
    public get vin(): string {
      return this._vin;
    }
    public get year(): number {
      return this._year;
    }
    public set year(value: number) {
      this._year = value;
    }
    public get make(): string {
      return this._make;
    }
    public set make(value: string) {
      this._make = value;
    }
  
    set color(color: string) {
      if(color.toLowerCase() !== 'orange'){
        this._color = color
      } else console.log("Please choose a valid option")
    }
  
    get color():string | undefined {
      return this._color
    }
  
    get model(): string {
      return this._model
    }
  
    set model(model: string) {
      this._model = model
    }
  
    constructor(
      private readonly _vin: string,
      private _make: string,
      private _model: string,
      private _year: number,
      private _color?: string
    ) {}
  
    drive(miles: number): void {
      console.log(`You have driven ${miles} miles`);
    }
  
    displayInfo(): void {
      console.log(`${this.make} ${this.model} ${this.year}`);
    }
  }
  
  const car3 = new Car2('3480u34908', 'honda', 'civic', 2010);
  // car3.make
  car3.displayInfo();
  
  console.log(car3.color)
  
  car3.color = 'orange'
  
  console.log(car3.color)
  console.log(car3.model)
  