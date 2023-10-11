class Counter{
    public static count: number = 0
  
    increaseCount(): void {
      Counter.count ++
    }
  
    showCount():number {
      return Counter.count
    }
    static showCount():void {
      console.log(this.count)
    }
  }
  
  const counter1 = new Counter()
  const counter3 = new Counter()
  const counter2 = new Counter()
  
  console.log(counter1.showCount())
  console.log(counter2.showCount())
  
  counter1.increaseCount()
  counter1.increaseCount()
  counter1.increaseCount()
  counter1.increaseCount()
  
  console.log(counter1.showCount())
  console.log(counter2.showCount())
  console.log(counter3.showCount())
  
  Counter.showCount()
