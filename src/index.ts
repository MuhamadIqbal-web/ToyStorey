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
