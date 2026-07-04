// ========================
// CURSOR GLOW
// ========================
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

// ========================
// SCROLL REVEAL
// ========================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when they come into view
      entry.target.querySelectorAll('.skill-bar[data-width]').forEach((bar) => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => revealObserver.observe(el));

// ========================
// SEND MESSAGE BUTTON
// ========================
const sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!name || !message) {
      alert('Mohon isi nama dan pesan terlebih dahulu.');
      return;
    }

    const nomorWA = '6281233862127'; // ganti dengan nomor WA kamu
    const text = encodeURIComponent(`Halo Farhan, saya ${name}.\n\n${message}`);
    window.open(`https://wa.me/${nomorWA}?text=${text}`, '_blank');
  });
}

// ========================
// CERTIFICATE SLIDER
// ========================
function slidecert(btn, direction) {
  const slider = btn.closest('.cert-slider');
  const slides = slider.querySelector('.cert-slides');
  const dots = slider.querySelectorAll('.dot');
  const total = slider.querySelectorAll('.cert-slide').length;
  
  let current = parseInt(slides.dataset.current) || 0;
  current += direction;

  if (current < 0) {
    current = 0;
  }

  if (current > total - 1) {
    current = total - 1;
  }

  slides.dataset.current = current;
  slides.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  if (dots[current]) {
    dots[current].classList.add('active');
  }

  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  if (prevBtn) {
    prevBtn.style.opacity = current === 0 ? '.35' : '1';
  }

  if (nextBtn) {
    nextBtn.style.opacity = current === total - 1 ? '.35' : '1';
  }
}

// Inisialisasi semua slider saat halaman dimuat
function initSliders() {
  const sliders = document.querySelectorAll('.cert-slider');
  sliders.forEach(slider => {
    const slides = slider.querySelector('.cert-slides');
    const dots = slider.querySelectorAll('.dot');
    const total = slider.querySelectorAll('.cert-slide').length;
    
    if (slides && !slides.dataset.current) {
      slides.dataset.current = '0';
      slides.style.transform = 'translateX(0%)';
      
      // Update dot active state
      if (dots.length > 0) {
        dots.forEach((dot, idx) => {
          dot.classList.remove('active');
          if (idx === 0) dot.classList.add('active');
        });
      }
      
      // Update button opacity
      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');
      if (prevBtn) prevBtn.style.opacity = total <= 1 ? '.35' : '1';
      if (nextBtn) nextBtn.style.opacity = total <= 1 ? '.35' : '1';
    }
  });
}

// ========================
// MOBILE MENU
// ========================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks a');
const menuClose = document.getElementById('menuClose');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

if (menuClose) {
  menuClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ========================
// THEME TOGGLE FUNCTIONALITY
// ========================
const themeToggle = document.getElementById('themeToggle');

// Cek preferensi yang tersimpan di localStorage
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set theme awal — default light
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

// ========================
// PRIVATE REPO BTN — fix visibility per tema
// ========================
function updatePrivateRepoBtns() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.querySelectorAll('.private-repo-btn').forEach((btn) => {
    if (isLight) {
      btn.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
      btn.style.border = '1px solid #cbd5e0';
      btn.style.color = '#718096';
    } else {
      btn.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
      btn.style.border = '1px solid rgba(255, 255, 255, 0.1)';
      btn.style.color = 'rgba(255, 255, 255, 0.6)';
    }

    // Perbaiki onmouseleave supaya restore warna yang benar per tema
    btn.onmouseleave = function () {
      if (document.documentElement.getAttribute('data-theme') === 'light') {
        this.style.borderColor = '#cbd5e0';
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
        this.style.color = '#718096';
      } else {
        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        this.style.color = 'rgba(255, 255, 255, 0.6)';
      }
    };
  });
}

// Fungsi toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  updatePrivateRepoBtns();
}

// Event listener untuk tombol toggle
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Optional: Keyboard shortcut (Ctrl/Cmd + Shift + L)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
    e.preventDefault();
    toggleTheme();
  }
});

// ========================
// UPDATE SKILL BARS OBSERVER (perbaikan)
// ========================
// Hapus observer lama dan buat ulang untuk skill bars
// Ini memastikan skill bars animasi berfungsi di kedua mode
const skillBarsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar[data-width]').forEach((bar) => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillBarsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach((el) => {
  skillBarsObserver.observe(el);
});

// ========================
// DETECT SYSTEM PREFERENCE CHANGES
// ========================
// Auto-switch theme hanya jika user belum menyimpan preferensi manual
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    // Hanya auto-switch jika user belum menyimpan preferensi manual
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  }
});

// ========================
// INITIALIZE ALL ON PAGE LOAD
// ========================
document.addEventListener('DOMContentLoaded', () => {
  initSliders();
  updatePrivateRepoBtns();
  
  // Re-run reveal observer untuk elemen yang mungkin sudah terlihat
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// ========================
// PREVENT CURSOR GLOW ON MOBILE
// ========================
// Cek apakah device adalah mobile/touch device
function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

// Sembunyikan cursor glow di device touch
if (isTouchDevice() && cursorGlow) {
  cursorGlow.style.display = 'none';
}