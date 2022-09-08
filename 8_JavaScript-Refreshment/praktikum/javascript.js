var nomorurut = 5;
let a = "kampus merdeka";
let b = "kampus merdeka";
const nama = "Budi";
//let terdaftar = false;
let terdaftar = true; //Jawaban no 1 B
let lengkap_arr = [a, b, nama, terdaftar];


function perkenalan() {
    let asal = "Indonesia";
    return console.log(
        "perkenalkan nama saya " +
            nama +
        " nomor urut " +
        nomorurut +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal 
    );
} 

if (terdaftar === true) { /**Jawaban no 1 B */
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka"); 

} //OUTPUT: Budi terdaftar sebagai kegiatan kampus merdeka

a = b;
nama = b;

console.log("asal diakses = " + akses);
console.log("a adalah = " + a);
console.log("b adalah = " + b);


/**Jawaban no 1 A */
console.log(lengkap_arr[2]); 
//OUTPUT: Budi

/**Jawaban no 1 C */
return console.log(
    "perkenalkan nama saya " +
        nama +
    " nomor urut " +
    nomorurut +
    " sekarang sedang mengikuti " +
    b +
    "berasal dari " +
    asal 
); 
//OUTPUT: perkenalkan nama saya Budi nomor urut 5 sekarang sedang mengikuti kampus merdeka berasal dari Indonesia

/** Jawaban no 1 D */
console.log(nama + " terdaftar sebagai kegiatan kampus merdeka"); 
console.log("a adalah = " + a);
console.log("b adalah = " + b);
console.log("array = "+ lengkap_arr[2]);
perkenalan();
//OUTPUT: Budi terdaftar sebagai kegiatan kampus merdeka
// a adalah = kampus merdeka
// b adalah = kampus merdeka
// array = Budi
// perkenalkan nama saya Budi nomor urut 5 sekarang sedang mengikuti kampus merdeka berasal dari Indonesia


/** Jawaban no 2 */
// a. Baris 21 22 23 tidak tampil karena variable terdaftar saat diinisialisasi memiliki nilai false.
// b. Deklarasi baris 26(sekarang 19) menyebabkan error karena variable nama menggunakan fungsi const di mana const sendiri bersifat dependen/fixed tidak dapat diubah valuenya.
// c. Baris ke 28 dapat dieksekusi karena tidak mendeklarasikan variable a dan b, yang dideklarasikan ialah variable asal.

/** Jawaban no 3 */
const foo = ['Budi', 'Sita', 'Ayu'];
const [A,B,C] = foo;
console.log(A);
console.log(B);
console.log(C);
//OUTPUT: Budi
// Sita
// Ayu

/** Jawaban no 4 */
let bdays = ['10-17','05-19','20-19'];
const bdaysnew = bdays.map(x => x.replace('-','/')); 
console.log(bdaysnew);
//OUTPUT: ['10/17', '05/19', '20/19']

/** Jawaban no 5 */
let value = [1,2,3,4,5];
const times_2 = value.map(val => val*2);
console.log(times_2);
//OUTPUT: [2,4,6,8,10]

/** Jawaban no 6 */
let arr = [1.5,2.56,5.1,12.33];
const rounding = arr.map(val=> Math.round(val));
console.log(rounding);
//OUTPUT: [2, 3, 5, 12]