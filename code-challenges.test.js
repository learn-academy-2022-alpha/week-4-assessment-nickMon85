// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
//  FAIL  ./code-challenges.test.js
//   ● Test suite failed to run
// FAIL  ./code-challenges.test.js
//   arrayContaining
//     ✕ matches even if received contains additional elements (1 ms)

//   ● arrayContaining › matches even if received contains additional elements

//     ReferenceError: arrayContaining is not defined
//1. create a test
//2. write a function
//3.removes first item from array
//4.randomly shuffles the reast

describe('arrayContaining', () => {
  it('matches even if received contains additional elements', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//  Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//  Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
   
    expect(arrayContaining(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(arrayContaining(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))

  })
})



const arrayContaining = (arr)=>{
    var newColors= arr.shift();

    arr.sort(()=>.5- Math.random());
    return arr

}


//IM really just lost on where I'm supposed to put the data.



// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("minMaxnum", () => {
it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
    
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]

    expect(minMaxnum(nums1)).toEqual([-8, 90])
    expect(minMaxnum(nums2)).toEqual([5, 109])
  })
})

//
const minMaxnum =(arr)=>{
    arr.sort()
   var arr1 = arr.pop()
   var arr2 =  arr.shift()
    var arr3 = arr2.concat(arr1)

    
//   var minValue = Math.min(...arr)
//   var maxValue = Math.max(...arr)
   
    return arr3
}


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('newDoublearr', () => {
  it('takes in two arrays as arguments and returns one array with no duplicate values.', () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(newDoublearr(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})


const newDoublearr = (arr1,arr2)=>{
    var newArr= arr1.concat(arr2)
    // remove all duplicates:
    var unique =newArr.filter(function(item,index){
        return newArr.indexOf(item)=== index
    })
    return unique
}


// b) Create the function that makes the test pass.
