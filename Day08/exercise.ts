/**
 * Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
    { name: ‘Student 1’, email : ‘student1@mail.com’ },
    { name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
    { name: ‘Student 1’, email : ‘student1@mail.com’ },
    { name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :
ArrayResult → [
    { name: ‘Student 1’, email : ‘student1@mail.com’ },
    { name: ‘Student 2’, email : ‘student2@mail.com’ },
    { name: ‘Student 3’, email : ‘student3@mail.com’ }
]
 */

let a = [
    { name: "Murid 1", email : "murid1@mail.com" },
    { name: "Murid 2", email : "murid2@mail.com" }
];
let b = [
    { name: "Murid 1", email : "murid1@mail.com" },
    { name: "Murid 3", email : "murid3@mail.com" }
];

// Menggabungkan kedua array
let gabungan = [...a, ...b];

// Menghapus duplikat berdasarkan email
let c = gabungan.filter((value, index, array) => 
    array.findIndex(i => i.email === value.email) === index
);

console.log(c);
