export const site = {
  name: "Muhammad Khairul Umardi Latif",
  shortName: "Latif",
  role: "Pengembang Web & Desainer UI/UX ",
  tagline: "Menjembatani Desain dan Pengembangan",
  description:
    "Portfolio Muhammad Khairul Umardi Latif — Mahasiswa D3 Manajemen Informatika, Politeknik Negeri Padang. Web Developer & UI/UX enthusiast yang fokus membangun produk digital yang rapi dan fungsional.",
  url: "https://latif-portfolio.vercel.app",
  location: "Padang, Sumatera Barat",
  phone: "+62 852-6528-4134",
  email: "latifkhairul1603@gmail.com",
  university: "Politeknik Negeri Padang",
  program: "D3 Manajemen Informatika",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/username", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Instagram", href: "https://instagram.com/mhdlatif._", icon: "instagram" },
  { name: "YouTube", href: "https://youtube.com/@username", icon: "youtube" },
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
      "Fokus pada mata kuliah pemrograman web, basis data, dan desain antarmuka pengguna.",
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
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#38BDF8" },
  { name: "Figma", icon: "figma", color: "#F24E1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
  { name: "WordPress", icon: "wordpress", color: "#21759B" },
  { name: "Git", icon: "git", color: "#F05032" },
] as const;

export const services = [
  {
    title: "Web Development",
    description: "Membangun website modern, cepat, dan responsif menggunakan Next.js & React.",
    icon: "code",
  },
  {
    title: "UI/UX Design",
    description: "Merancang antarmuka yang intuitif mulai dari wireframe hingga hi-fi prototype di Figma.",
    icon: "palette",
  },
  {
    title: "E-Commerce",
    description: "Membangun toko online dengan sistem katalog, keranjang, dan pembayaran yang mudah digunakan.",
    icon: "shopping-cart",
  },
  {
    title: "Graphic Design",
    description: "Mendesain aset visual seperti logo, poster, dan brand identity yang konsisten.",
    icon: "brush",
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
