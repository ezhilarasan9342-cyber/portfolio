/* ============================================
   EZHILARASAN N — Portfolio v2 Interactions
   Minimal: scroll reveals, smooth nav, mobile menu
   No custom cursor, no parallax, no flashy effects
   ============================================ */

(function () {
    'use strict';

    // === Scroll Reveal ===
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // === Mobile Menu ===
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
                mobileMenu.classList.remove('open');
                mobileMenu.style.opacity = '0';
                mobileMenu.style.pointerEvents = 'none';
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.add('open');
                mobileMenu.style.opacity = '1';
                mobileMenu.style.pointerEvents = 'all';
                document.body.style.overflow = 'hidden';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileMenu.style.opacity = '0';
                mobileMenu.style.pointerEvents = 'none';
                document.body.style.overflow = '';
            });
        });
    }

    // === Smooth Scroll (all anchor links) ===
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const href = link.getAttribute('href');
        if (href && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });

    // === Nav background on scroll ===
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.pageYOffset > 80) {
                nav.style.backgroundColor = 'rgba(250, 246, 240, 0.95)';
                nav.style.backdropFilter = 'blur(8px)';
                nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.06)';
            } else {
                nav.style.backgroundColor = 'transparent';
                nav.style.backdropFilter = 'none';
                nav.style.boxShadow = 'none';
            }
        }
    });

})();
