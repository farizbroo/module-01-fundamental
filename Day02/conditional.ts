// CONDITIONAL STATEMENT

/**
 * - IF STATEMENT : untuk memeriksa satu buah kondisi
 * - IF...ELSE STATEMENT : untuk memeriksa dua kondisi
 * - IF...ELSE IF...ELSE STATEMENT : untuk memeriksa tiga kondisi atau lebih
 * - SWITCH CASE STATEMENT : untuk memeriksa data dalam mencocokkan nilai
 */

// Contoh data
let nama: string = "Edo";
let usia: number = 20;

// IF
/**
 * Aturan penulisannya :
 * if(condition){
 *      // code
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISION / LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition di dalam if terpenuhi (bernilai TRUE)
 */

// example : memvalidasi batas usia
if (usia > 16) {
    console.log(`${nama} sudah dewasa`);
}

// IF...ELSE
/**
 * Aturan penulisannya :
 * if(condition){
 *      // code
 * } else {
 *      // code
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISION / LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition di dalam if terpenuhi (bernilai TRUE)
 */
usia = 10;
if (usia > 16) {
    const print: string = `${nama} SUDAH dewasa`;
    console.log(print);
} else {
    const print: string = `${nama} BELUM dewasa`;
    console.log(print);
}

let isNgantuk: boolean = true;
if (isNgantuk) {
    console.log("Beli Kopi");
} else {
    console.log("Beli Es Krim");
}

// IF...ELSE IF...ELSE STATEMENT
/**
 * Aturan penulisannya :
 * if (condition) {
 *      // code
 * } else if (condition) {
 *      // code
 * } else {
 *      // code
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISION / LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition di dalam if terpenuhi (bernilai TRUE)
 */

// Example : Klasifikasi nilai ujian
// INPUT
const examGrade: number = 70;

// PROCESS
let result: string;
if (examGrade >= 90) {
    result = "Grade A";
} else if (examGrade >= 80 && examGrade < 90) {
    result = "Grade B";
} else if (examGrade >= 70 && examGrade < 80) {
    result = "Grade C";
} else {
    result = "Grade F";
}

// OUTPUT
console.log(result);

// SWITCH...CASE
/**
 * Aturan penulisan :
 * switch (data) {
 *      case value:
 *          // code
 *      default:
 *          // code
 * }
 */

const job: string = "Driver";

switch (job) {
    case "Coder": // job === "Coder"
        console.log("Membuat aplikasi");
        break
    case "Driver":
        console.log("Mengemudi");
        break
    default:
        console.log("tidak ditemukan");
        break
}