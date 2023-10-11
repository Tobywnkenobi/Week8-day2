function moveZeros(numArray: Array<number>): number[] {
    const output: number[] = []
    const zeros: number[] = []
    for (const number of numArray){
      if (number != 0) output.push(number)
      else zeros.push(0)
    }
    return output.concat(zeros)
  }
  console.log(moveZeros([0,0,11,2,3,4]), [11,2,3,4,0,0])
  console.log(moveZeros([0,1,0,3,12]), [1,3,12,0,0])