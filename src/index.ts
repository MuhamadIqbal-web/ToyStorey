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
// Format Rupiah
// ==================== BAGIAN 3: FUNGSI TAMPIL ====================
// [BRANCH: feature/format-rupiah]
// Fungsi dengan parameter dan return: mengubah angka 80000 menjadi teks "Rp80.000"
function formatRupiah(angka: number): string {
    return "Rp" + angka.toLocaleString("id-ID"); // toLocaleString("id-ID") memberi titik pemisah ribuan
}

// Fungsi void: menampilkan SATU baris mainan (dipakai oleh daftar mainan dan hasil pencarian)
function tampilBarisMainan(mainan: Mainan): void {
    let tandaPromo: string = "";
    // jika mainan promo, tambahkan label PROMO di belakang harga
    if (mainan.promo) {
        tandaPromo = " (PROMO)";
    }
    console.log(
        `${mainan.idMainan} | ${mainan.namaMainan.padEnd(20)} | ${formatRupiah(mainan.harga)}${tandaPromo}`
    );
}

// Fungsi void: hanya menampilkan ke layar, tidak mengembalikan nilai
function tampilDaftarMainan(): void {
    console.log("\n========== DAFTAR MAINAN ==========");

    // jika array kosong, beri tahu pengguna lalu hentikan fungsi
    if (daftarMainan.length === 0) {
        console.log("Daftar mainan kosong.");
        return;
    }

    let nomorBaris: number = 0; // penghitung baris yang sudah ditampilkan
    // for...of: ulangi sekali untuk setiap mainan di dalam array
    for (const mainan of daftarMainan) {
        tampilBarisMainan(mainan);
        nomorBaris += 1; // compound: tambah 1 setiap selesai menampilkan satu baris
        // % (sisa bagi): setiap kelipatan 5 baris diberi garis pemisah agar daftar mudah dibaca
        if (nomorBaris % 5 === 0 && nomorBaris < daftarMainan.length) {
            console.log("-".repeat(45));
        }
    }
    console.log(`Total: ${daftarMainan.length} mainan`);
}
// Menu

// ==================== BAGIAN 4: ALAT BANTU INPUT & VALIDASI ====================
// [BRANCH: feature/menu]
// Fungsi dengan parameter dan return: menampilkan pertanyaan, lalu mengembalikan jawaban (string)
function tanya(pertanyaan: string): string {
    const jawaban: string = readline.question(pertanyaan); // program berhenti di sini sampai pengguna menekan Enter
    return jawaban.trim(); // trim() membuang spasi di awal dan akhir jawaban
}

// ==================== BAGIAN 8: MENU ====================
// [BRANCH: feature/menu]
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
                console.log("Contoh tambah mainan");
                break;
            case "2":
                console.log("Contoh lihat mainan");
                break;
            case "3":
                console.log("Contoh ubah mainan");
                break;
            case "4":
                console.log("Contoh Hapus mainan");
                break;
            case "5":
                console.log("Contoh cari mainan");
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
                console.log("Contoh Proses Transaksi");
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
menuUtama();
//Ini untuk fitur Create
