// type data ada 2 jenis :
// Primitif : string, number, boolean, undifined, symbol.
// Non Primitif / referennce type : array dan objek.
// Diluar kedua data tersebut ada data yang berkaitan dengan waktu (Date)

// DATE : data yang berhubungan dengan waktu (diambil dari fungsi bawaan javascript)
let now: Date = new Date(); //class constructor date
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toLocaleDateString("id"));
console.log(now.toLocaleTimeString("id"));
console.log(now.toLocaleString("id"));
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMonth());
console.log(now.getTime());
console.log(now.getDate());