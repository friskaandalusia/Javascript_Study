
console.log("Selamat datang di ES6 Study I!");
console.log("Ayo belajar bersama Ninja Ken!");

//Setiap pernyataan harus diakhiri dengan tanda titik koma (;). Tanpa diakhiri titik koma, disebagian besar 
//kasus, code tersebut akan berfungsi secara normal, 
//namun kami sarankan agar anda selalu menyertakanya untuk membiasakan diri bercoding secara rapi dan jelas.

// Cetak "Hello World" ke console
console.log('Hello world');

// Cetak "Ninja Ken" ke console
console.log('Ninja Ken');

// Ubah baris dibawah menjadi komentar
//console.log("Ubah baris ini menjadi komentar");

// Cetak hasil 5 tambah 3
console.log(5+3);

// Cetak hasil 20 kurang 8
console.log(20-8);

// Cetak string "4 + 5"
console.log("4+5");


//pengalian dan pembagian
//Mari kita pelajari cara kalkulasi selain penambahan dan pengurangan! Seperti yang Anda lihat di bawah, 
//tanda bintang (*) dapat digunakan untuk pengalian dan garis miring kanan (/) dapat digunakan untuk pembagian. 
//Simbol ini berbeda dari simbol yang digunakan dalam matematika standar, jadi pastikan untuk diingat!

//Modulo (sisa pembagian)
//dapat menggunakan simbol persentase (%) untuk mendapatkan modulo, sisa setelah pembagian. 
//Ini berguna karena ada banyak cara untuk menggunakan modulo dalam pemrograman!

// Cetak hasil 8 kali 4 di console.
console.log(8*4);

// Cetak hasil 24 bagi 4 di console.
console.log(24/4);

// Cetak sisa setelah membagi 7 dengan 2 di console.
console.log(7%2);

// Cetak kombinasi dari string "Guru " dan "Domba"
console.log("Guru"+"Domba");

// Cetak kombinasi dari "20" dan "15" (dan jadikan sebagai string)
console.log("20"+"15");

// Deklarasikan nama variable dengan nilai string "Ninja Ken"
let name="Ninja Ken";

// Cetakan nilai nama variable
console.log(name);

// Deklarasikan variable length
let length=5;

// Cetak nilai variable length
console.log(length);

// Gunakan variable length untuk mencetak hasil area lingkaran
console.log(length* length*3);

let name = "Ninja Ken";
console.log(name);

// Update nilai variable ke "Birdie"
name = "Birdie";

// Cetak nilai dari variable name
console.log(name);


//Shorthand (Penulisan Singkat)
//Ada shorthand untuk code seperti number = number + 10. Shorthand ini sering digunakan

let number = 7;
console.log(number);

// Tambahkan 3 ke nilai variable number
number = number +3;

console.log(number);

// Bagi nilai variable number dengan 2
number = number/2;

console.log(number);

// Deklarasikan constant language
const language = "Prancis";

// Cetak nilai constant language
console.log(language);
// Gunakan constant language untuk mencetak "Saya bisa berbicara bahasa ____"

console.log("Saya bisa berbicara bahasa "+language);

//Cara Menulis Template Literal
//Seperti contoh, kta dpt memasukkan constant dan variable ke string dengan menulis ${someConstant}. 
//Saat melakukan ini, Anda harus meletakkan keseluruhan string di antara dua backtick(`) . 

const name = "Ninja Ken";
const age = 14;

// Cetak string "Nama saya adalah ____"
console.log(` Nama saya adalah ${ name }`);

// Cetak string "Hari ini saya berusia ____ tahun"
console.log(` Hari ini saya berusia ${ age } tahun`);


//if  statement
const level = 12;

// Tambahkan pernyataan if dengan kondisi: level > 10
if(level>10){
  console.log("Level Anda lebih tinggi dari 10");
}

const age = 24;

// Cetak hasil dari age >= 18
console.log(age >= 18);

// Cetak hasil dari age < 18
console.log(age < 18);

// Ketika nilai dari age lebih besar atau sama dengan 18, cetak "Saya berusia lebih dari 18 tahun"
if (age >= 18) {
  console.log("Saya berusia lebih dari 18 tahun");
}

const password = "ninjaken";

// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if (password === "ninjaken") {
  console.log("Berhasil log in");
}

// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if (password !== "ninjaken") {
  console.log("Password salah");
}

const age = 17;

/* Ketika age lebih besar atau sama dengan 10, cetak:
"Saya berusia dibawah 18 tahun, namun diatas 9 tahun" */
if (age >= 18) {
  console.log("Saya di atas 18 tahun");
} else if (age >= 10) {
  console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
} else {
  console.log("saya dibawah 10 tahun");
}




