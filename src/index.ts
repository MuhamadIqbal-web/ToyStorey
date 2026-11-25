import * as readline from "readline-sync";
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

// ==================== BAGIAN 4: ALAT BANTU INPUT ====================
// Fungsi dengan parameter dan return: menampilkan pertanyaan, lalu mengembalikan jawaban (string)
function tanya(pertanyaan: string): string {
    const jawaban: string = readline.question(pertanyaan); // program berhenti di sini sampai pengguna menekan Enter
    return jawaban.trim(); // trim() membuang spasi di awal dan akhir jawaban
}

// ==================== BAGIAN 5: FITUR-FITUR (MASIH KERANGKA) ====================
// Setiap fitur punya fungsi sendiri. Isinya diganti oleh anggota yang bertanggung jawab
// pada branch masing-masing, supaya tidak bentrok saat digabung (merge).

// ---------- Transaksi (Iqbal) ----------
function prosesTransaksi(): void {
    console.log("\n[Transaksi] Fitur ini belum dibuat.");
}

// ---------- Create Mainan (Ranu) ----------
function tambahMainan(): void {
    console.log("\n[Tambah Mainan] Fitur ini belum dibuat.");
}

// ---------- Read Mainan (Ranu) ----------
function lihatMainan(): void {
    tampilDaftarMainan(); // sementara: tampil semua saja, detail berdasarkan ID menyusul
}

// ---------- Update Mainan (Margareth) ----------
function ubahMainan(): void {
    console.log("\n[Ubah Mainan] Fitur ini belum dibuat.");
}

// ---------- Delete Mainan (Margareth) ----------
function hapusMainan(): void {
    console.log("\n[Hapus Mainan] Fitur ini belum dibuat.");
}

// ---------- Search Mainan (Iqbal) ----------
function cariMainan(): void {
    console.log("\n[Cari Mainan] Fitur ini belum dibuat.");
}

// ==================== BAGIAN 6: MENU ====================
// Submenu Kelola Daftar Mainan: berulang sampai pengguna memilih 0 (Kembali)
function menuKelolaMainan(): void {
    let kembali: boolean = false; // penanda: true kalau pengguna ingin kembali ke menu utama

    // while: ulangi terus selama kembali masih false
    while (!kembali) {
        console.log("\n========== KELOLA DAFTAR MAINAN ==========");
        console.log("1. Tambah Mainan");
        console.log("2. Lihat Mainan");
        console.log("3. Ubah Mainan");
        console.log("4. Hapus Mainan");
        console.log("5. Cari Mainan");
        console.log("0. Kembali");

        const pilihan: string = tanya("Pilih menu: ");

        // switch: memilih tindakan sesuai angka yang diketik
        switch (pilihan) {
            case "1":
                tambahMainan();
                break;
            case "2":
                lihatMainan();
                break;
            case "3":
                ubahMainan();
                break;
            case "4":
                hapusMainan();
                break;
            case "5":
                cariMainan();
                break;
            case "0":
                kembali = true; // loop berhenti pada putaran berikutnya
                break;
            default:
                // pilihan di luar angka 0-5 (atau kosong/huruf)
                console.log("Pilihan tidak valid! Masukkan angka 0-5.");
        }
    }
}

// Menu utama: berulang sampai pengguna memilih 0 (Keluar)
function menuUtama(): void {
    let selesai: boolean = false; // penanda: true kalau pengguna ingin keluar dari aplikasi

    while (!selesai) {
        console.log("\n========== MENU UTAMA TOY STOREY ==========");
        console.log("1. Transaksi");
        console.log("2. Kelola Daftar Mainan");
        console.log("0. Keluar");

        const pilihan: string = tanya("Pilih menu: ");

        switch (pilihan) {
            case "1":
                prosesTransaksi();
                break;
            case "2":
                menuKelolaMainan();
                break;
            case "0":
                selesai = true;
                break;
            default:
                console.log("Pilihan tidak valid! Masukkan angka 0-2.");
        }
    }
}

// ==================== BAGIAN 7: PROGRAM UTAMA ====================
function main(): void {
    console.log("Selamat Datang di TOY STOREY!");
    menuUtama();
    console.log("\nTerima kasih telah berbelanja di TOY STOREY. Sampai jumpa!");
}

main();