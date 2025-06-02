// NUMBER : data angka
let jarak: number = 1500; // Nilai INT/INTEGER
let berat: number = 90.25; // Nilai FLOAT

// Arithmethic : +, -, *, /, %

// Algorithm kode perhitungan penjumlahan
// 1. menyiapkan data yang harus dijumlahkan
let angka1: number = 20;
let angka2: number = 35;
// 2. memproses penjumlahan dari data yang diberikan
const result: number = angka1 + angka2;
// 3. menampilkan hasil akhir penjumlahan di terminal
console.log(result);

// Fungsi Math Object :

// Nilai PI (untuk lingkaran) yang presisi
const PiMath: number = Math.PI;
console.log(PiMath);

// Pembulatan nilai :
// Pembulatan nilai keatas atau kebawah
console.log(Math.round(25.6)); 
console.log(Math.round(25.4));
// Pembulatan dipaksa keatas
console.log(Math.ceil(25.1));
// Pembulatan dipaksa kebawah
console.log(Math.floor(25.9));

// Nilai berpangkat
console.log(Math.pow(4, 2));
// Nilai akar
console.log(Math.sqrt(16));
// Nilai berpangkat 3
console.log(Math.cbrt(8));

// Nilai MIN dan MAX
console.log(Math.min(1, 2, 3, 10, -20));
console.log(Math.max(1, 2, 3, 10, -20))

// Random nilai di rentang 0 s/d 1
console.log(Math.random());

// Parsing data (mengkonversi data number, number dijadikan string dan string dijadikan number)
// contoh number dijadikan string
let price: number = 25500;
console.log(
    price.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
    })
);


