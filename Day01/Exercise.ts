/*
1. Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/

let panjang: number = 5;
let lebar: number = 3;
const luas: number = panjang * lebar;
console.log(luas);

/*
2. Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/

panjang = 5;
lebar = 3;
const keliling: number = 2 * (panjang + lebar);
console.log(keliling);

/*
3. Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/

let radius: number = 5;
const diameter: number = 2 * radius;
console.log(diameter);

const kelilingLingkaran: number = Math.PI * diameter;
console.log(kelilingLingkaran);

const luasLingkaran: number = Math.PI * radius * radius;
console.log(luasLingkaran);

/*
4. Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/

let sudutA: number = 80;
let sudutB: number = 65;
const sudutC: number = 180 - (sudutA + sudutB);
console.log(sudutC);

/*
5. Write a code to convert temperature from Celsius to Fahrenheit.
Example : celsius = 25
Output : 77
*/

let celsius: number = 25;
const fahrenheit: number = (celsius * 9/5) + 32;
console.log(fahrenheit);

/*
6. Write a code to swap two numbers.
Write a code to swap two numbers
Example : a = 4, b = 7
output : a = 7, b = 4
*/

let a: number = 4;
let b: number = 7;
let temp: number ; // (temp) temporary = variable bantuan untuk menyimpan data sementara

temp = a;
a = b;
b = temp;

console.log("a = " + a + "," + " b = " + b)

/*
7. Write a code to get first and last character from a string.
Example : word = "Programming"
Output : P and g
*/

let kata: string = "Programming"

const hurufAwal: string = kata.charAt(0); // .charAt = mencari huruf berdasarkan posisi huruf keberapa (dan dimulai dari 0, 1, 2 dst.)
const hurufAkhir: string = kata.charAt((kata.length)-1);
console.log(`${hurufAwal} and ${hurufAkhir}`);

/*
8. Write a code to calculate the square and cube of a number
Example : number = 4
Output : square = 16, cube = 64
*/

let bilangan: number = 4
const kuadrat: number = bilangan ** 2;
console.log(kuadrat);

const pangkatTiga: number = bilangan ** 3;
console.log(pangkatTiga);

/* 
9. Write a code to convert minutes to hours and minutes.
Example : totalMinutes : 135
Output : 2 hours and 15 minutes
*/

let totalMinutes: number = 135
const jam: number = Math.floor (totalMinutes / 60);
// const menit: number = totalMinutes - (jam * 60);
const menit: number = totalMinutes % 60; // <- cara lain menggunakan modulus (%) = habis bagi. 
console.log(jam + " Jam" + " " + menit + " Menit");







