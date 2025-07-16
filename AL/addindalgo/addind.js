// function Addnumber(a, b) {
//     if (typeof a != "number" || typeof b != "number") {
//         return "I can only do numbers please Enter valid numbers";
//     }
//     return a + b;



// }
// var sum = Addnumber(4, 5);
// console.log(sum);



function calcAge(age) {
    if (typeof age !== 'number' || age < 0) {
        return "Invalid age";
    }

    return age * 365;

}
var year = calcAge(65);
var year1 = calcAge(0);
var year2 = calcAge(20);

console.log(year, year1, year2);