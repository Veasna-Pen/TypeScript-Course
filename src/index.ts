/* 1. Built-in Type */
/*
Declare a variable `course` of type `string` and assign it the value `"TypeScript"`.
    let course: string = "TypeScript"

Declare a variable `phone` of type `number` and assign it the value `334131`.
    let phone: number = 334131

Duplicate declaration of `course`.
    let course = "TypeScript"

Duplicate declaration of `phone`.
    let phone = 334_131

Declare a variable `address` without specifying its type. It defaults to type `any`.
    let address;
*/

/* 2. Array */
/*
Declare an array `numbers` of type `number[]` and initialize it with `[1, 2, '3']`.
    let numbers: number[] = [1, 2, '3']

Declare an array `numbers` of type `number[]` and initialize it with `[1, 2, 3]`.
    let numbers: number[] = [1, 2, 3]

Declare an empty array `numbers` of type `number[]`.
    let numbers: number[] = []

Attempt to iterate over each element of `numbers` array and push each element to the array again, but the `forEach` function is not correctly implemented.
    numbers.forEach(n => numbers.push)
*/

/* 3. Tuple */
/*
Declare a tuple `user` which can hold exactly two elements, a number followed by a string. Initialize it with `[1, 'John']`.
    let user: [number, string] = [1, 'John']

Try to push a number into the `user` tuple, violating the fixed size of the tuple.
    user.push(1)
*/

/* 4. Enums */
/* 
Define constants for representing sizes.
    const small = 1
    const medium = 2
    const large = 3

Define an enum `Size` with numeric values.
    const enum Size {Small = 1, Medium = 2, Large = 3}

Initialize a variable `mySize` with the value `Size.Medium`.
    let mySize = Size.Medium

Initialize a variable `mySize` of type `Size` with the value `Size.Medium`.
    let mySize: Size = Size.Medium
*/

/* 5. Functions */
/* 
Declare a function `calculateTax` that takes a parameter `income` of type `number` and returns a value of type `number`.
    function calculateTax(income: number){
        return 0
    }

Declare a function `calculateTax` that takes a parameter `income` of type `number` and returns a value of type `number`.
However, it's missing a return statement for the case when `income <= 1000`.
    function calculateTax(income: number): number {
        if (income > 1000)
            return income * 10
    }

Declare a function `calculateTax` that takes a parameter `income` of type `number` and returns a value of type `number`.
This function calculates tax based on income. It returns `income * 10` if `income > 1000`, otherwise returns `income * 1`.
    function calculateTax(income: number): number {
        if (income > 1000)
            return income * 10
        return income * 1
    }

Declare a function `calculateTax` that takes two parameters `income` and `taxYear`, both of type `number`, and returns a value of type `number`.
However, it introduces a new parameter `taxYear` but doesn't use it in the function body.
    function calculateTax(income: number, taxYear: number): number {
        if (taxYear > 2024)
            return income * 10
        return income * 1
    }

Declare a function `calculateTax` that takes a parameter `income` of type `number` and an optional parameter `taxYear` of type `number`, and returns a value of type `number`.
If `taxYear` is provided and is greater than 2024, it returns `income * 10`, otherwise returns `income * 1`.
    function calculateTax(income: number, taxYear?: number): number {
        if ((taxYear || 2024) > 2024)
            return income * 10
        return income * 1
    }
*/

/* 6. Objects */
/*
Declare an object `people` with a property `id` and assign it the value `1`.
    let people = {id: 1}

Add a property `name` to the `people` object and assign it the value `'Veasna'`.
    people.name = 'Veasna'

Declare an object `people` with properties `id` and `name`, and their respective types.
    let people: {
        id: number,
        name: string
    } = {id: 1, name: 'Veasna'}

Declare an object `people` with a property `id` and assign it the value `1`.
    let people: {
        id: number,
        name?: string
    } = {id: 1}

Declare an object `people` with a property `id` as readonly and a property `name`, and their respective types.
    let people: {
        readonly id: number,
        name: string
    } = {id: 1, name: 'Veasna'}

Try to assign a new value to the `id` property of the `people` object, which is declared as readonly, causing a compilation error.
    people.id = 2

Declare an object `people` with properties `id`, `name`, and a method `retire`, and their respective types.
    let people: {
        readonly id: number,
        name: string,
        retire: (date: Date) => void
    } = {
        id: 1,
        name: 'Veasna',
        retire: (date: Date) => {
            console.log(date);
        }
    }
*/

/* 7. Type Aliases */
/* 
Declare a type alias `People` for an object with properties `id`, `name`, and a method `retire`.
    type People = {
        readonly id: number,
        name: string,
        retire: (date: Date) => void
    }

Declare an object `people` of type `People`.
    let people: People = {
        id: 1,
        name: 'Veasna',
        retire: (date: Date) => {
            console.log(date);
        }
    }
*/

/* 8. Union Types */
/*
Declare a function `kgToLbs` that takes a parameter `weight` of type `number | string` and returns a value of type `number`.
It converts kilograms to pounds and returns the result.
    function kgToLbs(weight: number | string): number {
        // Narrowing
        if (typeof weight === 'number')
            return weight * 3
        else
            return parseInt(weight) * 2
    }
    kgToLbs(10)
    kgToLbs("10kg")
*/

/* 9. Intersection Types */
/*
Declare type `Draggable` with a method `drag`.
    type Draggable = {
        drag: () => void
    }

Declare type `Resizable` with a method `resize`.
    type Resizable = {
        resize: () => void
    }

Declare a type `UIWidget` as an intersection of types `Draggable` and `Resizable`.
    type UIWidget = Draggable & Resizable

Declare an object `textBox` of type `UIWidget`.
    let textBox: UIWidget = {
        drag: () => {},
        resize: () => {}
    }
*/

/* 10. Literal Types */
/* 
Declare a variable `quantity` with a literal type `50 | 100` and assign it the value `50`.
    let quantity: 50 | 100 = 50;

Declare a type alias `Quantity` with a literal type `50 | 100`.
    type Quantity = 50 | 100

Declare a variable `quantity` of type `Quantity` and assign it the value `50`.
    let quantity: Quantity = 50;
*/

/* 11. Nullable Types */
/*
Declare a function `greet` that takes a parameter `name` of type `string | null | undefined`.
It checks if `name` is truthy and prints it in uppercase, otherwise prints "Hello".
    function greet(name: string | null | undefined) {
        if (name)
            console.log(name.toUpperCase());
        else
            console.log("Hello");
    }
    greet(null)
*/

/* 12. Optional Chaining */
/* 
Declare a type `Customer` with an optional property `birthday`.
    type Customer = {
        birthday?: Date
    }

Declare a function `getCustomer` that takes a parameter `id` of type `number` and returns a value of type `Customer | null | undefined`.
It returns a `Customer` object if `id` is not `0`, otherwise returns `null`.
    function getCustomer(id: number): Customer | null | undefined {
        return id === 0 ? null : { birthday: new Date }
    }

Call `getCustomer` function and assign its result to `customer`.
    let customer = getCustomer(1)

Check if `customer` is not `null` or `undefined`, then log its `birthday`.
    if (customer !== null && customer !== undefined)
        console.log(customer.birthday)

Use optional chaining to access `birthday` property of `customer` object, logging its year if `customer` is not `null` or `undefined`.
    console.log(customer?.birthday?.getFullYear())
*/