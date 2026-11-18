export const site = {
  name: "Muhammad Khairul Umardi Latif",
  shortName: "Latif",
  role: "Backend Developer & Pengembang API",
  tagline: "Membangun Sistem yang Andal di Balik Layar",
  description:
    "Portfolio Muhammad Khairul Umardi Latif — Mahasiswa D3 Manajemen Informatika, Politeknik Negeri Padang. Backend Developer yang fokus membangun REST API, logika bisnis, dan basis data yang andal menggunakan Laravel dan NestJS.",
  url: "https://latif-portfolio.vercel.app",
  location: "Padang, Sumatera Barat",
  phone: "+62 852-6528-4134",
  email: "latifkhairul1603@gmail.com",
  university: "Politeknik Negeri Padang",
  program: "D3 Manajemen Informatika",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/zinexsix", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Instagram", href: "https://instagram.com/mhdlatif._", icon: "instagram" },
  { name: "YouTube", href: "https://www.youtube.com/@muhammadkhairulumardilatif", icon: "youtube" },
] as const;

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Docs", href: "#docs" },
  { name: "Contact", href: "#contact" },
];

export const funFact =
  "Pernah stuck 3 jam gara-gara bug, eh ternyata cuma kurang titik koma. Sejak itu saya selalu curiga sama diri sendiri duluan sebelum nyalahin library orang.";

export const experience = [

   {
    period: "2024 — Sekarang",
    title: "Mahasiswa D3 Manajemen Informatika",
    org: "Politeknik Negeri Padang",
    description:
      "Fokus pada mata kuliah pemrograman web, basis data, dan pengembangan aplikasi sisi server.",
  },

  {
    period: "2025 — Sekarang",
    title: "Staff Divisi IT",
    org: "Unit Kegiatan Mahasiswa Cybertech, Politeknik Negeri Padang",
    description:
      "Mengelola dan memperbarui website organisasi, serta membantu dokumentasi kegiatan dalam bentuk digital.",
  },
 
] as const;

export const workedWith = [
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
  { name: "PHP", icon: "php", color: "#777BB4" },
  { name: "NestJS", icon: "nestjs", color: "#E0234E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "React", icon: "react", color: "#61DAFB" },
] as const;

export const services = [
  {
    title: "Backend Development",
    description: "Membangun logika bisnis dan sisi server aplikasi web menggunakan Laravel dan NestJS.",
    icon: "server",
  },
  {
    title: "REST API",
    description: "Merancang dan membangun REST API yang terstruktur, aman, dan mudah diintegrasikan dengan frontend maupun aplikasi mobile.",
    icon: "plug",
  },
  {
    title: "Database Design",
    description: "Merancang skema basis data relasional, relasi tabel, dan query MySQL yang efisien.",
    icon: "database",
  },
  {
    title: "Autentikasi & Keamanan",
    description: "Menerapkan login berbasis peran, validasi data, dan proteksi akses pada aplikasi.",
    icon: "shield-check",
  },
  {
    title: "Sistem Transaksi",
    description: "Membangun alur pemesanan, pembayaran, dan laporan transaksi untuk aplikasi bisnis.",
    icon: "shopping-cart",
  },
  {
    title: "Deployment & Version Control",
    description: "Mengelola kode dengan Git & GitHub serta menyiapkan lingkungan aplikasi menggunakan Docker.",
    icon: "container",
  },
] as const;

export type ProjectCategory = "Web" | "E-Commerce" | "Design";

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Web", "E-Commerce", "Design"];

export const projects: {
  title: string;
  description: string;
  category: ProjectCategory;
  tools: string[];
  href?: string;
  image?: string;
  note?: string;
}[] = [
  {
    title: "Beben Sport Center — Sistem Booking Lapangan Olahraga",
    description:
      "Aplikasi web untuk reservasi/booking lapangan olahraga (futsal) secara online, lengkap dengan sistem pembayaran, notifikasi, dan panel admin untuk mengelola lapangan, pelanggan, serta laporan transaksi.",
    category: "Web",
    tools: ["Laravel 13", "PHP 8.3", "MySQL", "Tailwind CSS", "Alpine.js"],
    image: "/projects/beben-sport-center.png",
    href: "https://github.com/zinexsix/web_futsal_beben",
  },
  {
    title: "Catatan Keuangan — Web Personal Finance Tracker",
    description:
      "Aplikasi web untuk mencatat transaksi keuangan pribadi, mengelola anggaran, tagihan, kategori, dan target tabungan, lengkap dengan laporan dan ekspor PDF.",
    category: "Web",
    tools: ["Laravel 13", "PHP 8.3", "Bootstrap 5", "Alpine.js", "Chart.js"],
    image: "/projects/catatan-keuangan.png",
    href: "https://github.com/zinexsix/web_catatan_keuangan",
  },
  {
    title: "Cafe Pojok Rumah",
    description:
      "Website pemesanan makanan & minuman untuk kafe, dengan katalog menu, keranjang belanja, checkout dengan pembayaran QRIS/transfer, serta dashboard admin untuk mengelola produk, pesanan, dan laporan penjualan.",
    category: "E-Commerce",
    tools: ["PHP Native", "MySQLi", "Bootstrap 5.3", "Bootstrap Icons"],
    image: "/projects/cafe-pojok-rumah.png",
    href: "https://github.com/zinexsix/cafe_pojok_pojok.git",
  },
  {
    title: "SIAKAD PNP — Sistem Informasi Akademik",
    description:
      "Aplikasi manajemen akademik kampus berbasis web untuk mengelola data mahasiswa, dosen, program studi, dan ruangan, lengkap dengan sistem login berbasis peran (admin/dosen/mahasiswa) dan alur persetujuan pendaftaran mahasiswa oleh admin.",
    category: "Web",
    tools: ["Laravel 13", "PHP 8.3", "Blade", "Tailwind CSS 4", "MySQL", "Pest"],
    note: "Proyek Pembelajaran Laravel",
    image: "/projects/siakad-pnp.png",
    href: "https://github.com/zinexsix/Siakad-Pnp",
  },
];

export const certificateCategories: {
  category: string;
  items: { title: string; image: string }[];
}[] = [
  {
    category: "Huawei Academy - Cloud Operations",
    items: [
      {
        title: "HCIA-Cloud Computing V5.5 Course",
        image: "/certificates/huawei-cloud-operations/hcia-cloud-computing-v5.5.png",
      },
      {
        title: "HCIA-Cloud Service V3.5 Course",
        image: "/certificates/huawei-cloud-operations/hcia-cloud-service-v3.5.png",
      },
    ],
  },
  {
    category: "Hackathon & Kompetisi",
    items: [
      {
        title: "Finalis Top 10 - Play IT! PLUS Hackathon Deeptech 2026",
        image: "/certificates/hackathon/play-it-plus-hackathon-2026.png",
      },
    ],
  },
  {
    category: "Java",
    items: [],
  },
];

export const docsLinks = [
  {
    name: "My Certificate",
    description: "Lihat sertifikat pelatihan dan kursus yang pernah diselesaikan.",
    type: "gallery" as const,
    icon: "award",
  },
  {
    name: "View CV",
    description: "Unduh atau lihat CV terbaru dalam format PDF.",
    href: "/cv.pdf",
    type: "link" as const,
    icon: "file-text",
  },
  {
    name: "View Social Media",
    description: "Kunjungi Instagram untuk update aktivitas terbaru.",
    href: socials[2].href,
    type: "link" as const,
    icon: "share-2",
  },
];
