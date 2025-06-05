/**
 * 1. Write a function from a given array of mixed data types and return the sum of all the number
 * a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 * 
 * 1. Tulis fungsi dari array yang diberikan dengan tipe data campuran dan kembalikan jumlah semua angka
 * a. Contoh: mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */




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
    return array1.concat(array2);
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

let arr = [1, 2, 2, 2, 3, 3, 4, 5, 5]

function duplikat(){
    
}




/**
 * 4. Write a function to find the difference in 2 given array
 * b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 * 
 * 4. Tulislah fungsi untuk mencari selisih 2 dari array yang diberikan
 * b. Contoh: arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 */