# Portfolio — Farhan Bintang Adrianto

Website portfolio personal yang menampilkan profil, keahlian teknis, project, dan sertifikat dari seorang Information Systems student di UPN "Veteran" East Java dengan fokus pada pengembangan full-stack dan UI/UX Design.

## Tentang Website

Website ini digunakan sebagai media untuk menampilkan:

- **Profil Pribadi** — Informasi tentang Farhan Bintang Adrianto, mahasiswa semester 4 dengan GPA 3.682
- **Keahlian Teknis** — 11 teknologi yang dikuasai (Frontend, Backend, Mobile, Database, dan Design)
- **Project Showcase** — 9 project yang telah dikembangkan mencakup web, mobile, dan desktop applications
- **Sertifikat & Penghargaan** — Pencapaian akademik dan profesional termasuk ranking nasional di kompetisi UX Design
- **Informasi Kontak** — Channel komunikasi melalui WhatsApp, Email, GitHub, dan LinkedIn

## Fitur

- **Landing Page Interaktif** — Hero section dengan animasi dan call-to-action buttons
- **About Me** — Grid layout dengan foto profil, GPA card, dan deskripsi personal
- **Technical Skills** — Grid showcase 11 keahlian teknis dengan icon SVG dan kategorisasi (Frontend, Backend, Mobile, Design)
- **Featured Projects** — 9 project cards dengan gambar, deskripsi, tech stack, dan link (live demo atau repository)
- **Certifications & Awards** — 4 sertifikat dengan image slider interaktif dan metadata
- **Contact Section** — 4 channel kontak dengan form WhatsApp messaging terintegrasi
- **Responsive Design** — Mobile-first approach dengan breakpoints untuk tablet dan desktop
- **Dark/Light Mode** — Theme toggle dengan localStorage persistence dan system preference detection
- **Smooth Scrolling** — Navigation links dengan scroll behavior yang smooth
- **Scroll Reveal Animation** — Elemen muncul dengan fade-up effect saat di-scroll ke viewport
- **Cursor Glow Effect** — Custom cursor dengan radial gradient glow di desktop (disabled di mobile)
- **Mobile Menu** — Hamburger menu yang responsive di tablet dan mobile
- **Sertifikat Image Slider** — Navigasi gambar sertifikat dengan prev/next buttons dan dot indicators

## Teknologi

- **HTML5** — Semantic markup dan struktur halaman
- **CSS3** — Grid layout, flexbox, gradients, animations, dan responsive design
- **JavaScript** — Vanilla JS untuk interaktivitas (tanpa framework)
  - Scroll reveal observer
  - Theme toggle dengan localStorage
  - Mobile menu toggle
  - Certificate image slider
  - WhatsApp messaging integration

## Struktur Project

```
portfolio farhan/
├── index.html              # File HTML utama dengan semua section
├── css/
│   └── style.css          # Stylesheet dengan CSS variables, animations, responsive breakpoints
├── javascript/
│   └── main.js            # JavaScript untuk interaktivitas dan DOM manipulation
└── img/
    ├── about_me/          # Foto profil (fotofarhan.png)
    ├── projects/          # 9 screenshot project dan folder "gak kanggo" (unused)
    ├── technical_skills/  # 11 SVG icon skill (JavaScript, PHP, Tailwind CSS, Laravel, dll)
    ├── logo_contact/      # 4 icon kontak (WhatsApp, Email, GitHub, LinkedIn)
    └── [sertifikat images] # 4 sertifikat dengan multi-image untuk slider
```

**Penjelasan Folder:**
- `index.html` — Entry point aplikasi dengan 6 section utama (Hero, About, Skills, Projects, Certificates, Contact)
- `css/style.css` — Styling responsif dengan dark mode, animations, dan CSS variables untuk konsistensi warna
- `javascript/main.js` — Scroll reveal animation, theme toggle, mobile menu, certificate slider, WhatsApp integration
- `img/about_me/` — Menyimpan foto profil Farhan
- `img/projects/` — 9 gambar project showcase (VeloDrive, SIMAK, Hanzmoni, Helpdesk+, iPhone Store, AstraLearn, StudyMate, POS, EcoManage)
- `img/technical_skills/` — Icon SVG dari devicon untuk 11 teknologi
- `img/logo_contact/` — Icon untuk 4 channel kontak
- Gambar lainnya — Sertifikat dan kompetisi (Microsoft, Generative AI, EKSIS, ITASE)

## Cara Menjalankan Project

1. **Clone Repository**
   ```bash
   git clone https://github.com/farhanadrianto/portfolio.git
   cd portfolio
   ```

2. **Masuk ke Folder Project**
   ```bash
   cd "portofolio farhan"
   ```

3. **Buka di Browser**
   - Double-click `index.html`, atau
   - Klik kanan → "Open with" → Pilih browser, atau
   - Drag `index.html` ke tab browser

Tidak memerlukan instalasi dependencies, server, atau build process.

## Tujuan Project

Portfolio ini dikembangkan sebagai media personal branding untuk:

- Menampilkan portfolio dan hasil karya dalam pengembangan software
- Meningkatkan visibility profesional di industri tech
- Mempermudah recruiter dan networking dalam memahami expertise secara langsung
- Demonstrasi kemampuan dalam web development, UI/UX, dan full-stack engineering
- Pusat kontak untuk collaboration opportunities dan career development

## Lisensi

Project ini dibuat untuk keperluan portfolio pribadi Farhan Bintang Adrianto.
Penggunaan atau modifikasi tanpa izin tidak diperkenankan.

---

**Made with 💜** — © 2026 Farhan Bintang Adrianto
