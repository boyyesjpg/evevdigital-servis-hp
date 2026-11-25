/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 10: Konter Pulsa, Aksesoris & Servis HP/Gadget (evevservis)
 */

const PROFIL_USAHA = {
  nama: "evevservis",
  namaLengkap: "evevservis — Bengkel Servis HP Kilat, Aksesoris Resmi & Agen Pulsa/PPOB",
  sektor: "Konter Pulsa, Aksesoris & Servis HP/Gadget",
  tagline: "Servis HP Kilat 30 Menit Bergaransi 90 Hari, Aksesoris Original & Pulsa Murah",
  deskripsi:
    "Pusat servis smartphone Android & iPhone terpercaya di Fatmawati, Jakarta Selatan. Pengerjaan transparan langsung di depan Anda, data 100% aman, suku cadang pilihan bergaransi resmi 90 hari, plus aksesoris original dan transaksi pulsa/kuota kilat.",
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. RS Fatmawati Raya No. 42, Cilandak, Jakarta Selatan 12430",
  jamOperasional: "Buka Setiap Hari: 08:30 - 21:00 WIB",
  areaLayanan:
    "Servis langsung tunggu di meja toko Fatmawati, layanan panggilan On-Site & antar-jemput se-Jakarta Selatan, serta pulsa/kuota instan all operator",
  garansi: "Garansi Resmi Toko Hingga 90 Hari",
  copyright: "© 2026 evevservis. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    {
      id: "ganti-lcd-touchscreen",
      nama: "Ganti Layar LCD & Touchscreen",
      kategori: "Best Seller • Bisa Ditunggu",
      harga: "Mulai Rp 250.000",
      hargaAngka: 250000,
      pengerjaan: "30 - 45 Menit",
      garansi: "Garansi 90 Hari",
      deskripsi:
        "Solusi layar retak, blank hitam, bergaris, atau ghost touch untuk iPhone & Android. Tersedia panel AMOLED Original dan OEM presisi dengan pemasangan rapi."
    },
    {
      id: "ganti-baterai-original",
      nama: "Ganti Baterai Health 100% Original",
      kategori: "Favorit • Pemasangan Cepat",
      harga: "Mulai Rp 150.000",
      hargaAngka: 150000,
      pengerjaan: "20 - 30 Menit",
      garansi: "Garansi 90 Hari",
      deskripsi:
        "Atasi baterai kembung, cepat drop, atau HP sering restart mendadak. Sel baterai berkualitas tinggi lengkap perekat frame baru agar kembali awet seharian."
    },
    {
      id: "servis-mati-total-ic",
      nama: "Servis Mati Total, IC Power & Kena Air",
      kategori: "Spesialis Hardware & Lab",
      harga: "Mulai Rp 180.000",
      hargaAngka: 180000,
      pengerjaan: "1 - 2 Hari Kerja",
      garansi: "Garansi 60 Hari",
      deskripsi:
        "Penanganan mesin short circuit, IC Charging, IC Power, port Type-C/Lightning, hingga ultrasonic cleaning korosi akibat kena air. Diagnosa awal gratis!"
    },
    {
      id: "pasang-hydrogel-laser",
      nama: "Pasang Anti-Gores Hydrogel Laser Cutting",
      kategori: "Semua Tipe Layar Flat & Curve",
      harga: "Rp 45.000",
      hargaAngka: 45000,
      pengerjaan: "5 Menit Presisi",
      garansi: "Pemasangan Bebas Gelembung",
      deskripsi:
        "Pelindung layar nano self-healing dipotong presisi mesin laser untuk semua seri HP & smartwatch. Tersedia varian Clear HD, Matte Anti-Minyak, dan Anti-Spy."
    },
    {
      id: "aksesoris-gan-tws",
      nama: "Aksesoris Charger GaN 65W, Kabel & TWS",
      kategori: "100% Original Bersegel",
      harga: "Mulai Rp 35.000",
      hargaAngka: 35000,
      pengerjaan: "Ready Stock & Sameday",
      garansi: "Tukar Baru 30 - 90 Hari",
      deskripsi:
        "Koleksi kabel braided fast charging 65W, adaptor GaN 33W–65W anti-panas, powerbank PD 10.000mAh, serta TWS Bluetooth 5.3 dengan jaminan tukar baru."
    },
    {
      id: "pulsa-kuota-ppob",
      nama: "Pulsa All Operator, Kuota Data & PPOB",
      kategori: "Harga Agen Termurah",
      harga: "Mulai Rp 12.000",
      hargaAngka: 12000,
      pengerjaan: "Masuk Instan 1 - 3 Menit",
      garansi: "Transaksi Aman & Resmi",
      deskripsi:
        "Isi ulang paket data Telkomsel, Indosat, XL, Tri, Smartfren, token PLN, top-up e-wallet, dan voucher game. Melayani eceran maupun daftar agen reseller."
    }
  ],

  /**
   * Auto-format pesan WhatsApp terstruktur ke +62 895-3234-18658
   */
  formatPesanWA: function (opsi) {
    var data = opsi || {};
    var layanan = data.paket || data.layanan || "Konsultasi Servis HP / Aksesoris / Pulsa";
    var harga = data.harga ? " (" + data.harga + ")" : "";
    var tipeHp = data.tipeHp || "";
    var namaPemesan = data.nama || "";
    var tanggal = data.tanggal || "";
    var jam = data.jam || "";
    var lokasi = data.alamat || "";
    var catatan = data.catatan || "";

    var baris = [
      "Halo *" + this.nama + "* 👋",
      "Saya ingin konsultasi / memesan layanan berikut:",
      "",
      "• *Layanan / Produk:* " + layanan + harga
    ];

    if (namaPemesan) baris.push("• *Nama / PIC:* " + namaPemesan);
    if (tipeHp) baris.push("• *Tipe Perangkat:* " + tipeHp);
    if (tanggal) baris.push("• *Tanggal:* " + tanggal);
    if (jam) baris.push("• *Perkiraan Jam:* " + jam);
    if (lokasi) baris.push("• *Lokasi / Alamat:* " + lokasi);
    if (catatan) baris.push("• *Keluhan / Catatan:* " + catatan);

    baris.push("");
    baris.push("Mohon info estimasi biaya dan ketersediaan waktunya ya. Terima kasih!");

    return baris.join("\n");
  },

  buatLinkWA: function (opsi) {
    var teks = typeof opsi === "string" ? opsi : this.formatPesanWA(opsi);
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(teks);
  }
};

window.PROFIL_USAHA = PROFIL_USAHA;
window.pesanViaWA = function (paketNama, harga) {
  var url = PROFIL_USAHA.buatLinkWA({
    paket: paketNama,
    harga: harga || ""
  });
  window.open(url, "_blank", "noopener,noreferrer");
  return false;
};

document.addEventListener("DOMContentLoaded", function () {
  // 1. Auto-Hydrate elements with data-config
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (PROFIL_USAHA[key] && typeof PROFIL_USAHA[key] === "string") {
      el.textContent = PROFIL_USAHA[key];
    }
  });

  // 2. Auto-hydrate tombol WhatsApp berbasis data-wa-paket
  document.querySelectorAll("[data-wa-paket]").forEach(function (link) {
    var paket = link.getAttribute("data-wa-paket");
    var harga = link.getAttribute("data-wa-harga") || "";
    link.setAttribute(
      "href",
      PROFIL_USAHA.buatLinkWA({
        paket: paket,
        harga: harga
      })
    );
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 3. Intercept forms to route directly to WhatsApp (+62 895-3234-18658)
  document.querySelectorAll("form").forEach(function (form) {
    if (
      form.classList.contains("search-form") ||
      (form.querySelector('input[type="search"]') && !form.classList.contains("wa-order-form"))
    ) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var searchInput = form.querySelector('input[type="search"]');
        var query = searchInput ? searchInput.value.trim() : "";
        var targetSection =
          document.getElementById("layanan") ||
          document.getElementById("etalase") ||
          document.getElementById("paket-b2b");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        var info = form.querySelector(".search-feedback");
        if (!info) {
          info = document.createElement("div");
          info.className = "search-feedback";
          info.style.fontSize = "12px";
          info.style.marginTop = "6px";
          info.style.color = "#0369a1";
          form.appendChild(info);
        }
        info.textContent = query
          ? 'Menampilkan layanan terkait: "' + query + '"'
          : "Menampilkan daftar layanan & harga evevservis...";
        setTimeout(function () {
          if (info && info.parentNode) info.parentNode.removeChild(info);
        }, 3500);
      });
    } else if (
      form.classList.contains("wa-form") ||
      form.classList.contains("wa-order-form") ||
      form.id === "contact-form" ||
      form.id === "wa-order-form" ||
      (form.getAttribute("action") || "").indexOf("wa.me") !== -1
    ) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var inputs = form.querySelectorAll("input, textarea, select");
        var detail = {
          paket: "Konsultasi Servis HP / Pemesanan evevservis",
          nama: "",
          tipeHp: "",
          tanggal: "",
          jam: "",
          alamat: "",
          catatan: ""
        };
        var tambahan = [];

        inputs.forEach(function (input) {
          if (input.type === "submit" || input.type === "button") return;
          var val = (input.value || "").trim();
          if (!val || val.indexOf("Pilih ") === 0) return;

          var key = (input.name || input.id || "").toLowerCase();
          if (key.indexOf("name") !== -1 || key.indexOf("nama") !== -1) {
            detail.nama = val;
          } else if (key.indexOf("tipe") !== -1 || key.indexOf("device") !== -1) {
            detail.tipeHp = val;
          } else if (key.indexOf("layanan") !== -1 || key.indexOf("paket") !== -1 || input.tagName === "SELECT") {
            detail.paket = val;
          } else if (key.indexOf("date") !== -1 || key.indexOf("tanggal") !== -1) {
            detail.tanggal = val;
          } else if (key.indexOf("time") !== -1 || key.indexOf("jam") !== -1) {
            detail.jam = val;
          } else if (key.indexOf("alamat") !== -1 || key.indexOf("lokasi") !== -1) {
            detail.alamat = val;
          } else if (key === "text" || key.indexOf("keluhan") !== -1 || key.indexOf("catatan") !== -1 || key.indexOf("message") !== -1) {
            detail.catatan = detail.catatan ? detail.catatan + " | " + val : val;
          } else {
            var label = input.placeholder || input.name || "Info";
            tambahan.push(label + ": " + val);
          }
        });

        if (tambahan.length > 0) {
          detail.catatan = detail.catatan
            ? detail.catatan + " | " + tambahan.join(" | ")
            : tambahan.join(" | ");
        }

        window.open(PROFIL_USAHA.buatLinkWA(detail), "_blank", "noopener,noreferrer");
      });
    }
  });

  // 4. Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
