class Counter{
    public static count: number = 0

    increaseCount(): void {
        Counter.count ++
    }

    static showCount():number {
        return this.count
    }
    static showCount():void {
        console.log(this.count)
    }
}

const count1 = new Counter()
const count3 = new Counter()
const count2 = new Counter()

console.log(counter1.showCount())
console.log(counter2.showCount())

counter1.increaseCount()
counter1.increaseCount()
counter1.increaseCount()
counter1.increaseCount()

console.log(counter1.showCount())
console.log(counter2.showCount())
console.log(counter3.showCount())
// console.log(counter1.showCount())

Counter.showCount()
