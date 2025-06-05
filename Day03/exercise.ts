/**
 * 1. Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number

Tulis kode untuk memeriksa apakah angka tersebut ganjil atau genap
○ Contoh: 25 → angka ganjil, 2 → angka genap
 */

let cek: number = 8;

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

let nomor: number = 7;
let cekPrima: boolean = true;

if (nomor <= 1) {
    cekPrima = false;
} else {
    for (let i = 2; i <= Math.sqrt(nomor); i++) {
        if (nomor % i === 0){
            cekPrima = false;
            break;
        }
    }
}

if (cekPrima) {
    hasil = (`${nomor} merupakan bilangan prima`);
} else {
    hasil = (`${nomor} bukan bilangan prima`);
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

let angka: number = 3;

let cetak: number = 0;
for (let i = 1; i <= angka; i++) {
    cetak += i;
}

console.log(cetak);

// Cara kedua:
angka = 6;
let penjumlahan = 0;
let expression = ""; // Untuk menyimpan ekspresi penjumlahan

for (let i = 1; i <= angka; i++) {
  penjumlahan += i;
  expression += i; // Tambahkan angka ke ekspresi
  if (i < angka) {
    expression += " + "; // Tambahkan tanda '+' jika belum angka terakhir
  }
}

expression += " = " + penjumlahan; // Tambahkan hasil penjumlahan
console.log(expression);

/**
 * 4. Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

Tulis kode untuk mencari faktorial suatu bilangan
○ Contoh: 4! → 4 x 3 x 2 x 1 = 24
○ Contoh: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

angka = 6;
let factorial = 1;
expression = ""; // Untuk menyimpan ekspresi faktorial

for (let i = angka; i >= 1; i--) {
  factorial *= i;
  expression += i; // Tambahkan angka ke ekspresi
  if (i > 1) {
    expression += " x "; // Tambahkan tanda 'x' jika belum angka terakhir
  }
}

expression += " = " + factorial; // Tambahkan hasil faktorial
console.log(expression);

/**
 * 5. Write a code to print the first N fibonacci numbers
○ Example: 15 → 610

Tulis kode untuk mencetak N angka Fibonacci pertama
○ Contoh: 15 → 610
 */

let N = 15;
let a = 0, b = 1;

for (let i = 0; i <= N; i++) {
    console.log(a);
    let c = a + b;
    a = b;  
    b = c;          
}







