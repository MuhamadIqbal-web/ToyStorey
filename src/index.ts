import * as readline from "readline-sync";

// ==================== BAGIAN 1: TIPE DATA ====================
// interface = "cetakan" yang menentukan properti apa saja yang dimiliki sebuah data Mainan
interface Mainan {
    idMainan: string;   // kode unik mainan, contoh: "M-001"
    namaMainan: string; // nama mainan, contoh: "Lego Batman"
    harga: number;      // harga satuan dalam rupiah
    promo: boolean;     // true = mainan promo (otomatis diskon 10%)
}

//BRANCH: feature/transaksi
// Cetakan untuk satu baris barang di keranjang belanja saat transaksi
interface ItemKeranjang {
    idMainan: string;     // kode mainan yang dibeli
    namaMainan: string;   // nama mainan (diambil dari daftar mainan)
    hargaSatuan: number;  // harga satuan (diambil dari daftar mainan)
    jumlahBarang: number; // jumlah yang dibeli
    subTotal: number;     // hargaSatuan x jumlahBarang
    promo: boolean;       // true jika mainan ini termasuk promo
}

// ==================== BAGIAN 2: DATA AWAL (SEED) ====================
// [BRANCH: feature/struktur-data]
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

// [BRANCH: feature/transaksi]
// Nilai-nilai tetap aturan transaksi (const karena tidak pernah berubah)
const BIAYA_BUNGKUS_KADO: number = 10000;     // biaya bungkus kado (Rp)
const BATAS_SUBTOTAL_DISKON: number = 120000; // subtotal di atas ini mendapat diskon 10%
const DISKON_BESAR: number = 0.1;             // diskon 10% (subtotal > 120.000 atau ada mainan promo)
const DISKON_MEMBER: number = 0.07;           // diskon 7% khusus Member

// [BRANCH: feature/struktur-data]
// Fungsi dengan parameter dan return: mencari posisi (indeks) mainan di array berdasarkan ID
// Mengembalikan -1 jika ID tidak ditemukan
function cariIndeksById(id: string): number {
    const idCari: string = id.trim().toUpperCase(); // rapikan input: buang spasi dan jadikan huruf besar
    // findIndex: menelusuri array sampai menemukan mainan dengan ID yang sama
    return daftarMainan.findIndex((mainan) => mainan.idMainan === idCari);
}

// Fungsi dengan parameter dan return: membuat teks ID dari sebuah nomor, contoh 17 -> "M-017"
function buatIdMainan(nomor: number): string {
    return "M-" + String(nomor).padStart(3, "0"); // padStart melengkapi angka dengan 0 di depan
}
