// Deklarasikan variable number
let number =1;
console.log(number);

// Print nilai dari variable number, dan tambahkan dengan 1
number += 1;


// Salin kedua baris diatas dan tempelkan dibaris bawah sebanyak 4 kali
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;

//LOOPING
// Deklarasikan variable number
let number = 1;

// Tambahkan while loop dibawah
while (number<=100){
  console.log (number);
  number +=1;
}

// Gunakan loop for untuk mem-print angka dari 1 hingga 100
for(let number = 1; number <=100;number +=1){
    console.log (number);
  }

// Selesikan code loop for dibawah ini
for (let number = 1; number <= 100; number++) {
  // Gunakan statement if untuk mem-print string "Kelipatan 3" ketika angka yang diprint adalah angka kelipatan 3
  if (number % 3 === 0) {
    console.log("Kelipatan 3");
  } else {
    console.log(number);
  }
}

// Tetapkan array yang diberikan sebagai constant animals
const animals = ["anjing", "kucing", "domba"];

// Print constant animals
console.log(animals);

const animals = ["anjing", "kucing", "domba"];

// Gantikan element ketiga dari array menjadi "kelinci"
animals[2] = "kelinci";

// Print array ketiga dari constant animal ke console
console.log(animals[2]);

const animals = ["anjing", "kucing", "domba"];

// Gunakan loop for untuk mem-print nilai animals di console secara berurutan
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}

const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mem-print jumlah element di array
console.log(animals.length);

// Gunakan property length untuk mengubah kondisi dibawah
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Deklarasikan constant character dan berikan object yang sudah disediakan
const character = {name: "Ninja Ken", age: 14};

// Print nilai character
console.log(character);

const character = {name: "Ninja Ken", age: 14};

// Print nilai property name milik character
console.log(character.name);

// Gantikan nilai age milik character ke 20 
character.age = 20;

// Print constant character ke console
console.log(character);


const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 1000}
];

// Print element pertama milik array characters
console.log(characters[0]);

// Print nilai milik property name dari element array character kedua 
console.log(characters[1].name);


const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];

// Selesaikan loop for dibawah
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // Tentukan nilai constant character
  const character = characters[i];
  
  // Print "Nama saya adalah ____"
  console.log(`Nama saya adalah ${character.name}`);
  
  // Print "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character.age} tahun`);
  
}

const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  // Tambahkan element dibawah
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  console.log(`Saya berumur ${character.age} tahun`);
}

const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  
  // Tambahkan statement if dibawah
  if (character.age === undefined) {
    console.log("Umur saya rahasia!");
  } else {
    console.log(`Saya berumur ${character.age} tahun`);
  }
}


//objek bersarang
const cafe = {
  name: "Progate Cafe",
  businessHours: { 
    // Tetapkan object yang sudah disediakan untuk businessHours
    opening: "10:00",
    closing: "20:00"
  },
};

// Print "Nama: ____"
console.log(`Nama: ${cafe.name}`);

// Print "Jam: Dari jam ____ sampai jam ____"
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);


const cafe = {
  name: "Progate Cafe",
  businessHours: { 
    opening: "10:00",
    closing: "20:00"
  },
  // Tambahkan property menu dan berikan array yang sudah disediakan
  menu: [ "Kopi", "Teh", "Kue Cokelat"]
};

console.log(`Nama: ${cafe.name}`);
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

// Gunakan loop for untuk mem-print nilai menu array
for (let i = 0; i < cafe.menu.length; i++) {
  console.log(cafe.menu[i]);
}

// Tetapkan function ke constant hello
const hello = function() {
  console.log("Halo!");
  console.log("Saya Ninja Ken");
};

// Panggil function yang ditetapkan di constant hello
hello();

// Tetapkan arrow function ke constant greet
const greet = () => {
  console.log("Halo!");
};

// Panggil function greet
greet();

// Tambahkan parameter name ke function
const greet = (name) => {
  // Print pesan "Halo, ____"
  console.log(`Halo, ${name}`);
};

// Panggil function greet dengan "Guru Domba" sebagai argument
greet("Guru Domba");


const check = (number) => {
  // periksa apakah number adalah kelipatan dari 3 dan return-kan hasilnya
  return number % 3 === 0;
};

// Panggil function check dalam kondisi statement if
if (check(123)) {
  console.log("Multiple of 3");
} else {
  console.log("Not a multiple of 3");
}


// Definisikan constant name
const name = "Ninja Ken";

const introduce = (name) => {
  // Print "Saya ____" diconsole
  console.log(`Saya ${name}`);
};

// Panggil function introduce
introduce("Guru Domba");

// Print nilai dari constant name
console.log(name);


//Dilatihan ini kita akan membuat function yang benama getMax, yang berfungsi untuk menemukan nilai tertinggi/maksimum.
//Seperti contoh dibawah, function getMax menerima tiga angka sebagai argument-nya dan me-return nilai maksimum dari ketiga angka tersebut.


const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {
  let max = a;
  
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  return max;
};

// Print "Nilai maksimum adalah __"
const max = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${max}`);

// Definisikan constant animal
const animal = {
  name: "Leo",
  age: 3,
  greet: () => {
    console.log("Halo");
  }
};

// Print property name milik constant animal
console.log(animal.name);

// Panggil greet method property milik animal
animal.greet();


// Definisikan class Animal
class Animal {
}


class Animal {
}

// Tetapkan instance class Animal ke constant animal
const animal = new Animal();

// Tampilkan nilai milik constant animal
console.log(animal);

class Animal {
  // Tambahkan constructor
  constructor() {
    console.log("Membuat instance baru");
  }
}

const animal = new Animal();


class Animal {
  constructor() {
    // Tetapkan nilai string「Leo」ke property name
    this.name = "Leo";
    
    // Tetapkan nilai「3」ke property age
    this.age = 3;
  }
}

const animal = new Animal();

// Print「Nama: ____」
console.log(`Nama: ${animal.name}`);

// Print「Usia: __」
console.log(`Usia: ${animal.age}`);


class Animal {
  // Tambahkan argument「name」dan「age」
  constructor(name,age) {
    // Gantikan nilai string "Leo" dengan nilai milik argument name
    this.name = name;
    
    // Gantikan「3」dengan nilai milik argument age
    this.age = age;
  }
}

// Teruskan argument「"Mocha"」「8」ke constant animal dibawah
const animal = new Animal("Mocha", 8);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Tambahkan method greet
  greet() {
    console.log("Halo");
  }
}

const animal = new Animal("Leo", 3);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);

// Panggil method greet milik animal instance
animal.greet();


class Animal {
  constructor(nama, usia) {
    this.name = nama;
    this.age = usia;
  }
  
  greet() {
    console.log("Halo");
  }
  
  // Tambahkan method info
  info() {
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

const animal = new Animal("Leo", 3);
animal.greet();

// Panggil method info menggunakan constant animal
animal.info();


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    // Panggil method greet
    this.greet();
    
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berumur ${this.age} tahun`);
  }
}

const animal = new Animal("Leo", 3);
// Hapus baris dibawah

animal.info();


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berumur ${this.age} tahun`);
  }
}

// Definisikan class Dog agar dapat menerima warisan dari class Animal
class Dog extends Animal {
}

const animal = new Animal("Leo", 3);
animal.info();


