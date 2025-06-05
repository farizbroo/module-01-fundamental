/**
 * 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
 * a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
 * 
 * 1. Tulis fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array (dengan dan tanpa fungsi sortir).
 * a. Contoh: arr = [12, 5, 23, 18, 4, 45, 32] → {terendah: 4, tertinggi: 45, rata-rata: 19.8xxx}
 */

let angka: number[] = [12, 5, 23, 18, 4, 45, 32];

const angkaTerendah: number = Math.min(...angka); // (...) adalah spread operator yang digunakan untuk menyebarkan elemen-elemen suatu iterable (seperti array atau objek) menjadi elemen terpisah.

const angkaTertinggi: number = Math.max(...angka);

let jumlah: number = 0;
for (let i = 0; i < angka.length; i++) {
    jumlah += angka[i]; // sudah otomatis terjumlah disini
}
const rataRata: number = (jumlah/angka.length);

console.log(`terendah: ${angkaTerendah}, tertinggi: ${angkaTertinggi}, rata-rata: ${rataRata}`);

/**
 * 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 * 
 * 2. Tulis fungsi yang mengambil array kata dan mengembalikan string dengan menggabungkan kata-kata dalam array, dipisahkan dengan koma dan - kata terakhir - dengan 'dan'.
 * a. Contoh: arr = ["apel", "pisang", "ceri", "kurma"] → “apel, pisang, ceri, dan kurma”
 */

let buah: string[] = ["apel", "pisang", "ceri", "kurma"]

const kataTerakhir = buah.pop(); // fungsi .pop() adalah mengambil data terakhir dari string
const hasil = buah.join(", ") + " dan " + (kataTerakhir); // fungsi .join adalah menggabungkan semua elemen dalam array menjadi sebuah string tunggal

console.log(hasil);

/**
 * 3. Write a function from a given array of numbers and return the second smallest number
 * a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 * 
 * 3. Tulis fungsi dari array angka yang diberikan dan kembalikan angka terkecil kedua
 * a. Contoh: angka = [5, 3, 1, 7, 2, 6] → 2
 */

angka = [5, 3, 1, 7, 2, 6];

let urutkan = angka.sort((a, b) => a - b); // fungsi .sort((a, b) => a - b) adalah untuk mengurutkan angka pada array dari yang terendah
console.log(angka[1]);

/**
 * 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
 * a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
 * 
 * 4. Tulis fungsi untuk menghitung setiap elemen pada posisi yang sama dari dua array bilangan bulat. Asumsikan kedua array memiliki panjang yang sama.
 * a. Contoh: [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
 */

let array1 = [1, 2, 3]
let array2 = [3, 2, 1]

const array3 = array1.map((value, index) => value + array2[index]);

console.log(array3);

/**
 * 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
 * a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
 * b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 * 
 * 5. Tulis fungsi yang menambahkan elemen di akhir array. Namun, elemen tersebut hanya boleh ditambahkan jika belum ada di dalam array.
 * a. Contoh: arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
 * b. Contoh: arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 */

let array = [1, 2, 3, 4]
let angkaBaru = 7;

function tambahAngka(array, angkaBaru) {
    // Periksa apakah elemen sudah ada di dalam array
    if (!array.includes(angkaBaru)) {
        array.push(angkaBaru); // Tambahkan elemen jika belum ada
    }
    return array;
}

console.log(tambahAngka(array, angkaBaru)); 