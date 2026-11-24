// ==================== BAGIAN 1: TIPE DATA ====================
// interface = "cetakan" yang menentukan properti apa saja yang dimiliki sebuah data Mainan
interface Mainan {
    idMainan: string;   // kode unik mainan, contoh: "M-001"
    namaMainan: string; // nama mainan, contoh: "Lego Batman"
    harga: number;      // harga satuan dalam rupiah
    promo: boolean;     // true = mainan promo (otomatis diskon 10%)
}

// ==================== BAGIAN 2: DATA AWAL (SEED) ====================
// const dipakai karena "kotak" array-nya tidak diganti, hanya isinya yang akan bertambah/berkurang
const daftarMainan: Mainan[] = [
    { idMainan: "M-001", namaMainan: "Lego Batman", harga: 80000, promo: false },
    { idMainan: "M-002", namaMainan: "Lego Star Wars", harga: 140000, promo: false },
    { idMainan: "M-003", namaMainan: "Lego Marvel", harga: 120000, promo: false },
    { idMainan: "M-004", namaMainan: "Lego Indiana Jones", harga: 90000, promo: false },
    { idMainan: "M-005", namaMainan: "Lego Ninja Go", harga: 50000, promo: false },
    { idMainan: "M-006", namaMainan: "Madara", harga: 95000, promo: false },
    { idMainan: "M-007", namaMainan: "Naruto", harga: 85000, promo: false },
    { idMainan: "M-008", namaMainan: "Itachi", harga: 90000, promo: false },
    { idMainan: "M-009", namaMainan: "Sasuke", harga: 85000, promo: false },
    { idMainan: "M-010", namaMainan: "Darth Father", harga: 150000, promo: false },
    { idMainan: "M-011", namaMainan: "Yoda", harga: 120000, promo: true },
    { idMainan: "M-012", namaMainan: "Spider Man", harga: 155000, promo: false },
    { idMainan: "M-013", namaMainan: "Iron Man", harga: 145000, promo: false },
    { idMainan: "M-014", namaMainan: "Batman", harga: 120000, promo: false },
    { idMainan: "M-015", namaMainan: "Mobil", harga: 75000, promo: false },
    { idMainan: "M-016", namaMainan: "Helikopter", harga: 150000, promo: false },
];

// let dipakai karena nilainya akan terus bertambah setiap ada mainan baru
// (pakai penghitung sendiri supaya ID tidak kembar walaupun ada mainan yang dihapus)
let nomorIdBerikutnya: number = 17;

// ==================== BAGIAN 3: FUNGSI TAMPIL ====================
// Fungsi void: hanya menampilkan ke layar, tidak mengembalikan nilai
function tampilDaftarMainan(): void {
    console.log("\n========== DAFTAR MAINAN ==========");
    // for...of: ulangi sekali untuk setiap mainan di dalam array
    for (const mainan of daftarMainan) {
        let tandaPromo: string = "";
        // jika mainan promo, tambahkan label PROMO di belakang harga
        if (mainan.promo) {
            tandaPromo = " (PROMO)";
        }
        console.log(
            `${mainan.idMainan} | ${mainan.namaMainan.padEnd(20)} | Rp${mainan.harga.toLocaleString("id-ID")}${tandaPromo}`
        );
    }
    console.log(`Total: ${daftarMainan.length} mainan`);
}

// ==================== BAGIAN 4: PROGRAM UTAMA ====================
console.log("Selamat Datang di TOY STOREY!");
tampilDaftarMainan();
console.log(`ID berikutnya yang akan dipakai: M-${String(nomorIdBerikutnya).padStart(3, "0")}`);