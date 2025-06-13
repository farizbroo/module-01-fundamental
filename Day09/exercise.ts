/**
 * * Spesifikasi :
○ Buatlah program untuk menghitung total gaji berdasarkan tipe karyawan
○ Terdapat dua tipe karyawan yaitu karyawan tetap dan karyawan paruh waktu
○ Gaji karyawan tetap :
■ Rp 100.000,-/jam
■ Rp 75.000,-/jam, jika jumlah jam kerja per hari lebih dari 6 jam
○ Gaji karyawan paruh waktu :
■ Rp 50.000,-/jam
■ Rp 30.000,-/jam, jika jumlah jam kerja per hari lebih dari 6 jam
● Persyaratan :
○ Buatlah kelas induk Employee
○ Buatlah kelas FulltimeEmployee dan ParttimeEmployee sebagai anak kelas Employee
■ Buatlah metode pada kelas tersebut untuk menambah jam kerja per hari
■ Buatlah metode pada kelas tersebut untuk menghitung total gaji
○ Gunakan konsep pewarisan
 */

// Kelas Induk Employee
class Employee {
  constructor() {
    this.workingHours = [];
  }

  // Metode untuk menambah jam kerja per hari
  addWorkingHours(hours) {
    if (hours < 0) {
      console.log("Jam kerja tidak boleh negatif");
      return;
    }
    this.workingHours.push(hours);
  }

  // Metode untuk menghitung total gaji (akan di-override oleh kelas anak)
  calculateTotalSalary() {
    throw new Error("Method calculateTotalSalary() must be implemented");
  }
}

// Kelas FulltimeEmployee (anak dari Employee)
class FulltimeEmployee extends Employee {
  calculateTotalSalary() {
    let totalSalary = 0;
    for (const hours of this.workingHours) {
      if (hours > 6) {
        totalSalary += 75000 * hours;
      } else {
        totalSalary += 100000 * hours;
      }
    }
    return totalSalary;
  }
}

// Kelas ParttimeEmployee (anak dari Employee)
class ParttimeEmployee extends Employee {
  calculateTotalSalary() {
    let totalSalary = 0;
    for (const hours of this.workingHours) {
      if (hours > 6) {
        totalSalary += 30000 * hours;
      } else {
        totalSalary += 50000 * hours;
      }
    }
    return totalSalary;
  }
}

// Contoh penggunaan
const fulltimeEmployee = new FulltimeEmployee();
fulltimeEmployee.addWorkingHours(8); // Hari 1: 8 jam
fulltimeEmployee.addWorkingHours(6); // Hari 2: 6 jam
fulltimeEmployee.addWorkingHours(5); // Hari 3: 5 jam
console.log("Total gaji karyawan tetap: Rp", fulltimeEmployee.calculateTotalSalary());

const parttimeEmployee = new ParttimeEmployee();
parttimeEmployee.addWorkingHours(4); // Hari 1: 4 jam
parttimeEmployee.addWorkingHours(7); // Hari 2: 7 jam
parttimeEmployee.addWorkingHours(3); // Hari 3: 3 jam
console.log("Total gaji karyawan paruh waktu: Rp", parttimeEmployee.calculateTotalSalary());