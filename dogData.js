// Buat agar constant dog dapat diakses dari file berikut
import Dog from "./dog";

const dog = new Dog("Leo", 4, "Chihuahua");


// Export constant dog
export default dog;

//Statement export default disebut default export. Dengan 
//export default, saat file di-import, export default value akan secara otomatis 
//di-import. Karena itu, nama nilai saat meng-export dan meng-import code dapat berbeda.

//Export default hanya dapat digunakan untuk satu nilai dalam satu file. 
//Karena nilai export default akan secara otomatis di-import saat file tersebut di-import,
//maka hanya satu nilai yang diperbolehkan. Jika Anda ingin meng-export beberapa nilai, 
//gunakan export bernama yang akan kita bahas di slide berikutnya.

//Seperti yang dapat Anda lihat di bawah ini di sebelah kiri, 
//export bernama di-export dengan menuliskan nama di dalam {} (tanda kurung kurawal) 
//tanpa menuliskan default. Saat meng-import nilai export bernama, 
//tentukan nama export tersebut di file yang akan menerimanya. Nilai yang Anda import dapat ditentukan dengan menulis 
//import { valueName } from "./fileName" menggunakan {}.

//Sejauh ini, Anda telah menggunakan ./fileName untuk menentukan file yang mau di-import. Code ini disebut jalur relatif karena fungsinya adalah untuk menunjukkan jalur yang dapat menghubungkan satu file ke file yang lain. Seperti yang dapat Anda lihat disebelah kanan, jalur menuju ke file "./dogData" sudah dideklarasikan. Jalur relatif ini menunjukkan posisi menuju dogData.js dari posisi script.js.
//Tanda jalur relatif ./ dengan satu titik berarti kita membuat jalur untuk keluar selangkah ke direktori dimana file yang memiliki jalur relatif tersebut disimpan. Seperti contoh dikanan bawah. Jika kita menulis "./dogData" di file script.js, maka kita membuat jalur relatif yang mengarahkan code untuk keluar selangkah dari script.js ke direktori src, dan kemudian masuk ke file dogData.js.