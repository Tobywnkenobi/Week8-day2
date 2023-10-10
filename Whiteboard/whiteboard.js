// Problem Statement:

// Given an array `nums`, write a function to move all 0's to the end of the array while maintaining the relative order of the non-zero elements, and return the resulting array.

// Example:

// plaintext
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: [0,0,11,2,3,4]
// Output: [11,2,3,4,0,0]


// Function Signature: 

// function moveZeroes(nums: number[]): number[];

function moveZeros(nums) {
    let zeroCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            i--; 
            zeroCount++;
        }
    }
    
    for (let i = 0; i < zeroCount; i++) {
        nums.push(0);
    }
    
    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 11, 2, 3, 4])); // Output: [11, 2, 3, 4, 0, 0]
