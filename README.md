# EvEvDigital — Showcase Sektor: Servis HP, Laptop & Elektronik

> **Repositori Mandiri EvEvDigital untuk Sektor Servis HP, Laptop & Elektronik (evevelektronik)**  
> Berisi 3 varian template siap pakai berstandar modern (Toss Design System, Apple HIG, Shadcn UI) dengan dukungan Dual Theme (Dark/Light mode) dan integrasi WhatsApp CS resmi EvEvDigital.

---

## 🌐 Tautan Live Preview (Vercel)

| Halaman | Varian Desain | URL Langsung |
| :--- | :--- | :--- |
| **Beranda (Default)** | Variasi 1 | **[https://evevdigital-servis-hp.vercel.app/](https://evevdigital-servis-hp.vercel.app/)** |
| **Template 1** | Ganti LCD & Baterai HP | **[https://evevdigital-servis-hp.vercel.app/template-1.html](https://evevdigital-servis-hp.vercel.app/template-1.html)** |
| **Template 2** | Servis Laptop & PC | **[https://evevdigital-servis-hp.vercel.app/template-2.html](https://evevdigital-servis-hp.vercel.app/template-2.html)** |
| **Template 3** | Servis TV & Elektronik | **[https://evevdigital-servis-hp.vercel.app/template-3.html](https://evevdigital-servis-hp.vercel.app/template-3.html)** |

---

## 📁 Struktur Berkas

`	ext
evevdigital-servis-hp/
├── index.html            # Landing page utama (mengarah ke Template 1)
├── template-1.html       # Varian 1: Ganti LCD & Baterai HP
├── template-2.html       # Varian 2: Servis Laptop & PC
├── template-3.html       # Varian 3: Servis TV & Elektronik
├── vercel.json           # Konfigurasi routing Vercel Clean URLs
├── .gitignore            # Filter direktori build & cache
├── css/                  # Styling & tema dark/light
├── js/                   # Skrip interaktif & profil usaha
└── images/               # Aset gambar, ikon, dan banner
`

---

## 🤖 Panduan Pemeriksaan & Refactoring dengan Gemini Neon (Gemini App)

Saat mengunggah atau menghubungkan repositori ini ke **Gemini Neon di Gemini App**, gunakan panduan instruksi berikut:

1. **Fokus Sektor**: Repositori ini khusus melayani pelaku UMKM sektor **Servis HP, Laptop & Elektronik**.
2. **Auto-Hydration Profil Usaha**:
   - Periksa objek PROFIL_USAHA di file HTML atau js/profil-usaha.js.
   - Pastikan nomor WhatsApp resmi +62 895-3234-18658 dan branding **"Ditenagai oleh EvEvDigital"** terpasang di footer.
3. **Pilar Desain & Responsivitas**:
   - Pastikan tombol tema (Dark/Light mode switch) berfungsi mulus dan tidak mengalami glitch kontras teks.
   - Evaluasi tampilan mobile viewport (360px - 414px) agar Bento-Grid dan tombol WhatsApp sticky melayang mudah dijangkau jempol.
4. **Verifikasi Aset Gambar**:
   - Pastikan seluruh foto Unsplash menghasilkan status HTTP 200 tanpa broken image.
   - Tidak diperkenankan menggunakan string base64 raksasa pada body HTML.

---

## 📞 Kontak & Dukungan Resmi

- **Website Hub Katalog**: [https://template-silk-six.vercel.app](https://template-silk-six.vercel.app/)
- **WhatsApp Bisnis**: +62 895-3234-18658
- **Email**: evevdigital@gmail.com
- **Lisensi**: Hak Cipta &copy; 2026 EvEvDigital. All rights reserved.