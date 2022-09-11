class user {
    var id;
    var username;
    var password;
}

class userservice {
    user[] users = [];

    user[] getallusers() {
        return users;

}

    user getuserbyid(userid) {
        return user.filter(userid);
    }

}

/** Berapa banyak kekurangan dalam penulisan kode tersebut?
 * jawab: terdapat 10 kekurangan

/** Bagian mana saja terjadi kekurangan tersebut? *
 * jawab: hampir semua bagian memiliki kekurangan

/**  Tuliskan alasan dari tiap kekurangan tersebut!
 * jawab: 
 * 1. penamaan kelas harus diawali dengan huruf kapital
 * 2. properti id, username, dan password seharusnya dimasukkan kedalam constructor
 * 3. kelas UserService seharusnya extends ke kelas user
 * 4. menggunakan CamelCase pada penamaan method
 * 5. constructor digunakan pada UserService untuk sebagai rujukan properti id, dan username agar 
 * dimasukkan ke dalam super agar dapat meniru acts dari parent class
 * 6. pada properti username diubah redaksinya menjadi name agar menghindari penambahan kata yang itdak perlu
 * 7. index dalam array users diambil dari data kelas User properti name
 * 8. penggunaan properti dalam kelas harusnya menggunakan this.
 * 9. di dalam method getUserById ada parameter userId yang di mana data yang dipakai adalah filter dari 
 * data properti id kelas Users
 * 10. di dalam filter disisipkan sebuah arrow agar dapat mencari id berdasarkan user id yang dimasukkan. 
*/
