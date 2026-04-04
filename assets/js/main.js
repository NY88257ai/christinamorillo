/* ============================================================
   C:\hristina Morillo — main.js
   ============================================================ */

// ── Mobile Nav Toggle ──
(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
})();

// ── Scroll Fade-in Animations ──
(function () {
  const targets = document.querySelectorAll(
    '.stat, .post, .book, .bio-body p, .blog-item, .podcast-card'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
})();

// ── Staggered stat animation ──
(function () {
  const stats = document.querySelectorAll('.stat');
  stats.forEach((stat, i) => {
    stat.style.transitionDelay = `${i * 80}ms`;
  });
})();

// ── Blog Filter ──
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const blogItems  = document.querySelectorAll('.blog-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      blogItems.forEach(item => {
        const tags = item.dataset.tags || '';
        if (tag === 'all' || tags.includes(tag)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
})();

// ── Subscribe Form ──
function handleSubscribe(e) {
  e.preventDefault();
  const form  = e.target;
  const input = form.querySelector('input[type="email"]');
  const msg   = document.getElementById('subscribeMsg');
  if (!input || !msg) return;

  const email = input.value.trim();
  if (!email) return;

  // Simulate submission (replace with your email service endpoint)
  msg.textContent = 'Thanks! You\'re on the list.';
  input.value = '';

  setTimeout(() => { msg.textContent = ''; }, 4000);
}

// ── Nav scroll effect ──
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10 ? '#2a2a2a' : '#2a2a2a';
  }, { passive: true });
})();
