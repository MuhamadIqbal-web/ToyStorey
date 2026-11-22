# ToyStorey
Project UAS Pemrograman Dasar - ToyStorey

# Sistem Kasir Tiket Konser Musik "Nikmati Suara" (CLI)

*Kelas / Kelompok:* T1B / Kelompok-8ASIK 
*Link Repository:* https://github.com
*Mata Kuliah:* Pemrograman Dasar  
*Tahun Akademik:* 2026/2027  

---

## A. Daftar Anggota & Pembagian Tugas

| No. | Nama Anggota | NIM | Akun GitHub | Tugas dan Tanggung Jawab |
|---|---|---|---|---|
| 1 | Muhamad Iqbal | 263140700111036 | @muhamadiqbal-web | Bertanggung jawab dalam pengelolaan repository GitHub, konfigurasi awal project (.gitignore, tsconfig.json, package.json), analisis permasalahan, Dokumentasi project (README.md & draft laporan) serta pengembangan fitur *Create* & *Update* transaksi/tiket. |
| 2 | margareth theresia rotua simanungkalit | 263140700111039 | @margarethsimanungkalit983 | Bertanggung jawab dalam penyusunan proposal/ Laporan, identifikasi entitas dan properti data, serta pengembangan fitur *Read* & *Search* riwayat pemesanan. |
| 3 | Ranu Saputro | 2263140700111040 | @ranusaputro | Bertanggung jawab dalam pencatatan kontribusi anggota, pengembangan fitur *Delete* & kalkulasi biaya, serta pengujian program bisa berjalan atau tidak. |

B. Proposal & Analisis Awal
1. Tema & Deskripsi Masalah
Tema: Sistem Kasir & Manajemen Transaksi Penjualan Mainan "TOY STOREY" Berbasis Console (TypeScript).
Deskripsi Masalah: Toko mainan "TOY STOREY" membutuhkan aplikasi kasir berbasis teks (command-line) yang praktis untuk memproses dan mengelola data penjualan secara terstruktur. Selain menghitung total pembayaran otomatis berdasarkan kategori mainan (LEGO, Action Figure, Remote Control), jumlah barang, status pembeli (Member / Non-Member), diskon (diskon 10% untuk subtotal di atas Rp 120.000 atau pembelian Yoda, serta diskon 7% khusus Member), dan biaya bungkus kado (Rp 10.000), kasir juga membutuhkan fitur pengelolaan riwayat transaksi (CRUD + Search) agar pencatatan penjualan dan pembaruan data pembeli dapat dilakukan dengan cepat tanpa kesalahan hitung manual.
2. Identifikasi Entitas & Properti Data

Entitas Utama: TransaksiMainan

idTransaksi: string — Kode unik transaksi (contoh: TRX-001)
namaPembeli: string — Nama lengkap pembeli
statusPembeli: string — Status pembeli (Member atau Non-Member)
kategoriMainan: string — Kategori mainan (LEGO, Action Figure, atau Remote Control)
namaMainan: string — Nama mainan yang dibeli (contoh: Lego Batman, Naruto, Helikopter)
hargaSatuan: number — Harga satuan mainan sesuai katalog
jumlahBarang: number — Jumlah mainan yang dibeli
subTotal: number — Hasil hargaSatuan × jumlahBarang
bungkusKado: boolean — Status permintaan bungkus kado (true / false)
biayaKado: number — Biaya bungkus kado (Rp 10.000 jika dibungkus; Rp 0 jika tidak)
persenDiskon: number — Persentase diskon yang berlaku (0.1 jika subtotal > Rp 120.000 atau membeli Yoda; 0.07 jika Member; selain itu 0)
nilaiDiskon: number — Nilai potongan harga (subTotal × persenDiskon)
totalBayar: number — Akumulasi total pembayaran (subTotal − nilaiDiskon + biayaKado)

Katalog Mainan

Kategori	Mainan	Harga
LEGO	Lego Batman	Rp 80.000
LEGO	Lego Star Wars	Rp 140.000
LEGO	Lego Marvel	Rp 120.000
LEGO	Lego Indiana Jones	Rp 90.000
LEGO	Lego Ninja Go	Rp 50.000
Action Figure	Madara	Rp 95.000
Action Figure	Naruto	Rp 85.000
Action Figure	Itachi	Rp 90.000
Action Figure	Sasuke	Rp 85.000
Action Figure	Darth Father	Rp 150.000
Action Figure	Yoda	Rp 120.000
Action Figure	Spider Man	Rp 155.000
Action Figure	Iron Man	Rp 145.000
Action Figure	Batman	Rp 120.000
Remote Control	Mobil	Rp 75.000
Remote Control	Helikopter	Rp 150.000
3. Daftar Fitur Utama (CRUD + Search) & Decomposition Awal
Create (Tambah Transaksi Penjualan):
Menerima input nama pembeli, status pembeli, kategori mainan, pilihan mainan, jumlah barang, dan opsi bungkus kado.
Menjalankan sub-proses penentuan harga satuan, perhitungan subtotal, penentuan diskon (10% atau 7% Member), biaya kado, dan total bayar secara otomatis, lalu menyimpan transaksi ke dalam daftar/array dan mencetak struk.
Read (Tampilkan Semua Riwayat Transaksi):
Menampilkan seluruh daftar transaksi yang sudah tercatat beserta rincian mainan, jumlah, diskon, biaya kado, dan total pendapatan toko.
Update (Ubah Data Transaksi):
Mencari transaksi berdasarkan idTransaksi, memungkinkan kasir memperbarui data (seperti mengganti mainan, jumlah barang, status member, atau opsi kado), lalu menghitung ulang totalBayar secara otomatis.
Delete (Hapus / Batalkan Transaksi):
Menghapus data transaksi berdasarkan idTransaksi apabila terjadi pembatalan oleh pembeli (disertai konfirmasi sebelum menghapus).
Search (Cari Transaksi):
Mencari data transaksi berdasarkan ID Transaksi, Nama Pembeli, atau filter Kategori Mainan (LEGO / Action Figure / Remote Control).
C. Rencana Pengembangan Project

Pengembangan project dilakukan melalui beberapa tahapan:
1. Persiapan repository public dan konfigurasi awal TypeScript (.gitignore, tsconfig.json, package.json, src/index.ts).
2. Penyusunan proposal, analisis permasalahan, serta draft awal laporan (Sampul, Sub-bab 1.1, 1.2, dan rencana 3.2) di folder docs/.
3. Perancangan struktur data (interface/type TransaksiMainan) dan alur logika program (decomposition).
4. Implementasi fitur CRUD + Search serta integrasi logika perhitungan kasir (diskon, member, dan biaya kado) dari versi UTS.
5. Pengujian dan evaluasi program pada seluruh skenario input dan validasi.
6. Penyusunan dokumentasi akhir dan laporan UAS.


D. Proses Pengerjaan
Progress 1
[] Membuat repository GitHub dengan visibilitas Public.
[] Menyiapkan struktur awal project (.gitignore, tsconfig.json, package.json, dan src/index.ts).
[] Menyiapkan program "Hello console" di src/index.ts dan memastikan dapat dijalankan oleh semua anggota.
[] Setiap anggota melakukan minimal 1 commit menggunakan akun GitHub masing-masing.
[] Melengkapi README.md awal (daftar anggota, NIM, akun GitHub, dan tabel pembagian tugas).
[] Mengunggah proposal & analisis awal (tema, deskripsi masalah, entitas & properti, fitur CRUD + Search, decomposition awal) pada docs/ atau README.md.
[] Menyimpan draft awal laporan (Halaman Sampul, Sub-bab 1.1, 1.2 awal, dan rencana tabel kontribusi 3.2) di folder docs/ pada branch main.
