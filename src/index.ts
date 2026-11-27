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
