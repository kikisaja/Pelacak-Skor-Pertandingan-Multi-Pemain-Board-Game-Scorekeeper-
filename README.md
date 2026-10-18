# 🎲 Board Game Scorekeeper

Aplikasi pencatat skor pertandingan multi-pemain (*Board Game Scorekeeper*) berbasis web untuk 2 hingga 4 pemain. Dilengkapi tombol modifikasi poin cepat, kustomisasi nama pemain, serta log riwayat aktivitas poin secara *real-time*.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **State Array Management:**
   Mengelola penyimpanan data skor, nama, dan log riwayat menggunakan *JavaScript Arrays* yang dinamis.
2. **Dynamic DOM Generation:**
   Membangun ulang struktur kartu pemain secara otomatis berdasarkan nilai dropdown jumlah pemain (`playerCount`).
3. **Array Manipulation (`unshift`):**
   Memasukkan riwayat aktivitas terbaru ke indeks pertama larik log agar riwayat tampil dari urutan yang paling baru (*newest first*).

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur grid pemain, pilihan jumlah pemain, dan kotak riwayat
├── style.css        # Desain Neobrutalism, warna tema pemain, dan layout responsif
└── script.js        # Logika modifikasi skor, pengaturan nama, & perenderan log riwayat
