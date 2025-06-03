/**
 * 1. Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number

Tulis kode untuk memeriksa apakah angka tersebut ganjil atau genap
○ Contoh: 25 → angka ganjil, 2 → angka genap
 */

let cek: number = 4;

let hasil: string = ""
if (cek % 2 === 0) {
    hasil = `${cek} -> angka genap`
} else {
    hasil = `${cek} -> angka ganjil`
}

console.log(hasil);

/**
 * 2. Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number

Tulis kode untuk memeriksa apakah angka tersebut merupakan bilangan prima atau bukan
○ Contoh: 7 → 7 merupakan bilangan prima
○ Contoh: 6 → 6 bukan bilangan prima
 */

cek = 6;

hasil = ""
if (cek <= 1) {
    hasil = `${cek} bukan bilangan prima`;
}
for (let i: number = 2; i <= Math.sqrt(cek); i++) {
    if (cek % i === 0){
        hasil = `${cek} bukan bilangan prima`;
    } else {
        hasil = `${cek} merupakan bilangan prima`;
    }
}

console.log(hasil);

/**
 * 3. Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6

Tulis kode untuk mencari jumlah angka 1 sampai N
○ Contoh: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Contoh: 3 → 1 + 2 + 3 = 6
 */

let angka: number = 4;

let jumlah: string = "";
for (let i: number = 1; i <= angka; i++) {
    jumlah += `${i} + `;
}

console.log(jumlah);

/**
 * 4. Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

Tulis kode untuk mencari faktorial suatu bilangan
○ Contoh: 4! → 4 x 3 x 2 x 1 = 24
○ Contoh: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

let a: number = 4;
let temp: number = a;

let result: string = "";
for (let i: number = temp; i <= a; a--) {
    result -= `${temp} x `
}

console.log(result);

/**
 * 5. Write a code to print the first N fibonacci numbers
○ Example: 15 → 610

Tulis kode untuk mencetak N angka Fibonacci pertama
○ Contoh: 15 → 610
 */









