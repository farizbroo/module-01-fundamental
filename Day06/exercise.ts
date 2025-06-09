/**
 * 1. Write a function from a given array of mixed data types and return the sum of all the number
 * a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 * 
 * 1. Tulis fungsi dari array yang diberikan dengan tipe data campuran dan kembalikan jumlah semua angka
 * a. Contoh: mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */

const mixedArray = ["3", 4, "string", null, false, undefined, 2]

function penjumlahan(){
    let angka = 0;
    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === 'number'){
            angka += mixedArray[i];
        }
    }
    return angka;
}

console.log(penjumlahan());

/**
 * 2. Write a function that will combine 2 given array into one array
 * b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 * 
 * 2. Tulislah sebuah fungsi yang menggabungkan 2 array yang diberikan menjadi satu array
 * b. Contoh: arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

function gabungan(array1, array2){
    return [...arr1, ...array2];
}
const hasil = gabungan(arr1, arr2);

console.log(hasil);

/**
 * 3. Write a function to find duplicate values in an array
 * b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 * 
 * 3. Tulis fungsi untuk mencari nilai duplikat dalam array
 * b. Contoh: arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */

function findDuplicates(arr) {
  const duplicates = [];
  const countMap = {};

  arr.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  for (const num in countMap) {
    if (countMap[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

// Contoh penggunaan
const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(arr));

/**
 * 4. Write a function to find the difference in 2 given array
 * b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 * 
 * 4. Tulislah fungsi untuk mencari selisih 2 dari array yang diberikan
 * b. Contoh: arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 */

arr1 = [1, 2, 3, 4, 5];
arr2 = [3, 4, 5, 6, 7];

function findArrayDifference(arr1: number[], arr2: number[]): number[] {
    // Gabungkan kedua array
    const combined = [...arr1, ...arr2];
    
    // Buat Map untuk menghitung kemunculan setiap elemen (lebih efisien dari objek biasa)
    const countMap = new Map<number, number>();
    
    // Hitung kemunculan setiap elemen
    for (const num of combined) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Filter elemen yang hanya muncul sekali
    const difference: number[] = [];
    for (const [num, count] of countMap) {
        if (count === 1) {
            difference.push(num);
        }
    }
    
    return difference;
}

const result = findArrayDifference(arr1, arr2);
console.log(result); // Output: [1, 2, 6, 7]