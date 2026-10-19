// main.js
// Project data array
const projects = [
  {
    title: "MACPOINT POS",
    type: "Point of Sale System",
    desc: "Sales management with inventory, barcode scanning, cart management, receipts, reports, and stock monitoring.",
    icon: "fa-cash-register",
    status: "Concept / In Development",
    link: null
  },
  {
    title: "MACSTOCK",
    type: "Inventory Management",
    desc: "System concept for product records, stock monitoring, pricing, inventory movement, and reports.",
    icon: "fa-boxes",
    status: "Concept",
    link: null
  },
  {
    title: "MACGRADE",
    type: "Education System",
    desc: "Grading system concept for managing student grades, academic records, and grading computations.",
    icon: "fa-graduation-cap",
    status: "Concept",
    link: null
  },
  {
    title: "REBORN: ECHOES OF ANOTHER WORLD",
    type: "Storytelling & Game Dev",
    desc: "Visual novel and web-novel concept using Ren'Py and Python, focused on interactive storytelling.",
    icon: "fa-book-open",
    status: "Concept",
    link: null
  },
  {
    title: "TETRIX: NEON GRID",
    type: "Puzzle Game",
    desc: "Neon-inspired block puzzle game concept featuring a digital arcade aesthetic.",
    icon: "fa-gamepad",
    status: "Concept",
    link: null
  },
  {
    title: "SNAKE: DIGITAL HUNT",
    type: "Arcade Game",
    desc: "A modern digital take on the classic Snake game.",
    icon: "fa-dragon",
    status: "Concept",
    link: null
  },
  {
    title: "MACDATA HUB",
    type: "Data Management",
    desc: "Concept for organizing, managing, and accessing digital records in one place.",
    icon: "fa-database",
    status: "Concept",
    link: null
  },
  {
    title: "WEBCORE Digital Solutions",
    type: "Digital Services Brand",
    desc: "Technology brand for affordable websites, custom systems, IT support, AI solutions, and digital services.",
    icon: "fa-building",
    status: "Active Brand",
    link: null
  },
  {
    title: "BEST · Barangay Electronic System",
    type: "Barangay Community Management",
    desc: "Barangay Electronic System for Total Community Management. Streamline governance, empower residents, and build a connected barangay with real-time data, transparent services, and community engagement.",
    icon: "fa-landmark",
    status: "Live",
    link: "https://nomercyusermc.github.io/barangay-system/"
  },
  {
    title: "WEBCore",
    type: "Web Experiments",
    desc: "A living library of beautiful web experiments.",
    icon: "fa-flask",
    status: "Live",
    link: "https://nomercyusermc.github.io/Project-WebCore/"
  },
  {
    title: "RedMed AI",
    type: "AI Assistant",
    desc: "AI medical and first-aid assistant concept with English, Tagalog, and Cebuano language support.",
    icon: "fa-robot",
    status: "Prototype",
    link: "https://redmed-ai.ai.studio/"
  },
  {
    title: "BlockVerse AI: Tetris Arena",
    type: "AI & Game Concept",
    desc: "AI-themed Tetris arena project.",
    icon: "fa-cubes",
    status: "Concept",
    link: "https://blockverse-ai-tetris-arena.ai.studio"
  },
  {
    title: "NEON TECH CAMPUS",
    type: "Interactive 3D Portfolio",
    desc: "Interactive 3D digital portfolio and virtual workspace.",
    icon: "fa-vr-cardboard",
    status: "Concept",
    link: null
  },
  {
    title: "WEBCORE.EDU",
    type: "School Management System",
    desc: "Student, teacher, attendance, grading, and administrative modules concept.",
    icon: "fa-school",
    status: "Concept",
    link: null
  },
  {
    title: "Bukidnon Bus Route Calculator",
    type: "Route & Travel System",
    desc: "Route-distance and travel-cost system concept for bus routes, expenses, terminal operations, and reports.",
    icon: "fa-bus",
    status: "Concept",
    link: null
  },
  {
    title: "M&M ELECTRONIC WEBCORE POS",
    type: "Point of Sale System",
    desc: "M&M Electronic point-of-sale system built with WEBCore.",
    icon: "fa-receipt",
    status: "Live",
    link: "https://nomercyusermc.github.io/Project-WebCore-POS/"
  },
  {
    title: "Digital Profile Website",
    type: "Personal Portfolio",
    desc: "Responsive personal profile website with animations, navigation, and project information.",
    icon: "fa-id-card",
    status: "Live",
    link: "https://marc-namacpacan-3.base44.app"
  }
];

// ------------------------------------------------------------
// RENDER PROJECTS with enhanced effects
// ------------------------------------------------------------
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  projects.forEach((project, index) => {
    // Create card wrapper
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.title === 'RedMed AI') {
      card.classList.add('project-card--redmed');
      const borderLight = document.createElement('span');
      borderLight.className = 'neon-border-light';
      borderLight.setAttribute('aria-hidden', 'true');
      card.appendChild(borderLight);
    }
    if (project.title === 'BlockVerse AI: Tetris Arena') {
      card.classList.add('project-card--blockverse');
      const borderLight = document.createElement('span');
      borderLight.className = 'neon-border-light';
      borderLight.setAttribute('aria-hidden', 'true');
      card.appendChild(borderLight);
    }
    if (project.title === 'NEON TECH CAMPUS') {
      card.classList.add('project-card--neon-campus');
      const borderLight = document.createElement('span');
      borderLight.className = 'neon-border-light';
      borderLight.setAttribute('aria-hidden', 'true');
      card.appendChild(borderLight);
    }
    card.style.animationDelay = `${index * 0.07}s`;

    // Icon with subtle floating animation
    const iconDiv = document.createElement('div');
    iconDiv.className = 'project-icon';
    const icon = document.createElement('i');
    icon.className = `fas ${project.icon}`;
    iconDiv.appendChild(icon);

    // Title with gradient text
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    // Type label
    const type = document.createElement('div');
    type.className = 'project-type';
    type.textContent = project.type;

    // Description
    const desc = document.createElement('p');
    desc.className = 'project-desc';
    desc.textContent = project.desc;

    // Status badge
    const status = document.createElement('span');
    status.className = 'project-status';
    status.textContent = project.status;

    // Assemble card
    card.appendChild(iconDiv);
    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(desc);
    card.appendChild(status);

    // Optional external link
    if (project.link) {
      const link = document.createElement('a');
      link.className = 'project-link';
      link.href = project.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = 'View Project <i class="fas fa-arrow-right"></i>';
      card.appendChild(link);
    }

    // ----- 3D TILT EFFECT on mousemove -----
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 6;
      const rotateX = ((centerY - y) / centerY) * 6;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });

    // ----- CLICK RIPPLE EFFECT -----
    card.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.className = 'card-ripple';
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      card.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });

    grid.appendChild(card);
  });
}

// ------------------------------------------------------------
// MOBILE MENU TOGGLE
// ------------------------------------------------------------
function setupMenuToggle() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }
}

// ------------------------------------------------------------
// SCROLL REVEAL via IntersectionObserver
// ------------------------------------------------------------
function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
}

// ------------------------------------------------------------
// PARTICLE BACKGROUND (subtle floating dots)
// ------------------------------------------------------------
function createParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particleCanvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  canvas.style.opacity = '0.4';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 50;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#00e0ff' : '#b300ff';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    particles.forEach(p => {
      if (p.x > canvas.width) p.x = Math.random() * canvas.width;
      if (p.y > canvas.height) p.y = Math.random() * canvas.height;
    });
  });

  init();
  animate();
}

// ------------------------------------------------------------
// TYPEWRITER EFFECT for section title (optional)
// ------------------------------------------------------------
function typewriterEffect() {
  const title = document.querySelector('.section-title');
  if (!title) return;

  const text = title.textContent.replace('⚡ ', '');
  title.textContent = '⚡ ';
  let i = 0;

  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }

  // Start typewriter after short delay
  setTimeout(type, 500);
}

// ------------------------------------------------------------
// COUNTER ANIMATION for project count (adds a stat bar)
// ------------------------------------------------------------
function addProjectCounter() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !grid.parentNode) return;

  const counter = document.createElement('div');
  counter.className = 'project-counter';
  counter.innerHTML = `
    <span class="counter-label">Total Projects</span>
    <span class="counter-value" id="projectCount">0</span>
  `;

  grid.parentNode.insertBefore(counter, grid);

  // Animate count up
  const target = projects.length;
  const el = document.getElementById('projectCount');
  let current = 0;
  const duration = 1500;
  const stepTime = duration / target;

  const timer = setInterval(() => {
    current++;
    if (el) el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, stepTime);
}

// ------------------------------------------------------------
// GLITCH EFFECT on card hover (adds brief glitch class)
// ------------------------------------------------------------
function setupGlitchEffect() {
  document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.project-card');
    if (card && !card.classList.contains('glitching')) {
      card.classList.add('glitching');
      setTimeout(() => card.classList.remove('glitching'), 300);
    }
  });
}

function setupCertificatePreview() {
  const dialog = document.querySelector('.certificate-dialog');
  const previewImage = dialog?.querySelector('.certificate-dialog-image');
  const caption = dialog?.querySelector('.certificate-dialog-caption');
  const closeButton = dialog?.querySelector('.certificate-close');

  if (!(dialog instanceof HTMLDialogElement) || !previewImage || !caption || !closeButton) return;

  document.querySelectorAll('.certificate-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const image = trigger.querySelector('img');
      const title = trigger.querySelector('.certificate-title');
      if (!image || !title) return;

      previewImage.src = image.currentSrc || image.src;
      previewImage.alt = title.textContent.trim();
      caption.textContent = title.textContent.trim();
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
}

// ------------------------------------------------------------
// INIT on DOM ready
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupCertificatePreview();
  setupMenuToggle();
  setupScrollReveal();
  createParticles();
  typewriterEffect();
  addProjectCounter();
  setupGlitchEffect();

  // Re-run scroll reveal after cards are rendered
  setTimeout(setupScrollReveal, 100);
});