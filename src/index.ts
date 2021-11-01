
// Basic Types

let id: number = 5; 
let dog: string = 'ajax';
let isPublished: boolean = true; 
let x: any = 'a string'
x = 7 // does not throw an error becuase the type in the above line is 'any' 
id = 5 

let ids: number[] = [4,6,8]; 
let array: any[] = ['ajax', 4, false]; 

// Tuple
/* Tuples in TypeScript allow you to specify the exact type and order 
of the values in an array */ 
let person: [number, string, boolean] = [5, 'constantinople', true]; 

// Tuple Array

let employee: [number, string][]; 

employee = [

    [1, 'Brad'],
    [4, 'Steven'],
    [5, 'Katherine']

]

//Union (union of two types)

let pid: string | number = 47; 

let sid: number | string = '47'; 

// Enum 

enum Directions {

    Up,   //0
    Down, //1
    Left, //2
    Right //3
}

enum Strings {

    'Up',   //0
    'Down', //1
    'Left', //2
    'Right' //3
}

// console.log(Strings.Up) <| will return 0 

// Object 

const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// the above object can also be separated out in order to read easier 

type User = {
    id: number,
    name: string,
}

const user2: User = {
    id: 1,
    name: 'John'
}

// Type assertion 

// First we set cid equal to 1 with type 'any' 
let cid: any = 1

// Next we can create an instance of our cid that needs to be a number. There are 
// two ways of doing this. 
let customerId = <number>cid 
let customerId1 = cid as string; 

//Functions 

function addNums(x: number, y: number): number {
    return x + y 
}

// Void type in a function 
// the void type is used when there is nothing being returned by the function,
// so there is no type to set for the return value

function log(message: string | number): void {
    console.log(message)
}
