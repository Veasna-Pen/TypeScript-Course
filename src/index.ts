/* 1. Built in Type */
/*
let course: string = "TypeScript"
let phone: number = 334131
let course = "TypeScript"
let phone = 334_131
let address;
*/

/* 2. Array */
/*
let numbers: number[] = [1, 2, '3']
let numbers: number[] = [1, 2, 3]
let numbers: number[] = []
numbers.forEach(n => numbers.push)
*/

/* 3. Tuple */
/*
let user: [number, string] = [1, 'John']
user.push(1)
*/

/* 4. Enums */
/*
const small = 1
const medium = 2
const large = 3
const enum Size {Small = 1, Medium = 2, Large = 3}
let mySize = Size.Medium
let mySize: Size = Size.Medium
*/

/* 5. Functions */
/*
function calculateTax(income: number){
    return 0
}
function calculateTax(income: number): number {
    if (income > 1000)
        return income * 10
}
function calculateTax(income: number): number {
    if (income > 1000)
        return income * 10
    return income * 1
}
function calculateTax(income: number, taxYear: number): number {
    if (taxYear > 2024)
        return income * 10
    return income * 1
}
function calculateTax(income: number, taxYear?: number): number {
    if ((taxYear || 2024) > 2024)
        return income * 10
    return income * 1
}
 */

/* 6. Objects */
// let people = {id: 1}
// people.name = 'Veasna'
// let people: {
//     id: number,
//     name: string
// } = {id: 1, name: 'Veasna'}
// let people: {
//     id: number,
//     name?: string
// } = {id: 1}

// let people: {
//     readonly id: number,
//     name: string
// } = {id: 1, name: 'Veasna'}
// people.id = 2

// let people: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Veasna',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

/* 7. Type Aliases */
// type People = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }
// let people: People = {
//     id: 1,
//     name: 'Veasna',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

/* 8. Union Types */

// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if (typeof weight === 'number')
//         return weight * 3
//     else
//         return parseInt(weight) * 2
// }
// kgToLbs(10)
// kgToLbs("10kg")

/* 9. Intersection Types */

let weight: number & string