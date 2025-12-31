// Language Toggle Functionality
const langToggle = document.getElementById('langToggle');
const langText = document.querySelector('.lang-text');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    // Update body lang attribute
    document.body.setAttribute('lang', currentLang);

    // Update language button text
    langText.textContent = currentLang === 'en' ? 'EN' : 'عربي';

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLang);

    // Store language preference
    localStorage.setItem('preferredLanguage', currentLang);

    // Dispatch language change event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: currentLang }
    }));

    // Add smooth transition effect
    document.body.style.transition = 'all 0.3s ease';
});

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        document.body.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('lang', currentLang);
        langText.textContent = currentLang === 'en' ? 'EN' : 'عربي';
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animated counter for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    updateCounter();
}

// Intersection Observer for triggering animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe hero stats section
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    observer.observe(heroStats);
}

// Donation amount selection
const donationAmounts = document.querySelectorAll('.donation-amount');
const customAmountDiv = document.querySelector('.custom-amount');
const customAmountInput = document.getElementById('customAmount');
let selectedAmount = 0;

donationAmounts.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        donationAmounts.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const amount = button.getAttribute('data-amount');

        if (amount === 'custom') {
            customAmountDiv.style.display = 'block';
            customAmountInput.focus();
            selectedAmount = 0;
        } else {
            customAmountDiv.style.display = 'none';
            selectedAmount = parseInt(amount);
        }
    });
});

// Custom amount input handling
if (customAmountInput) {
    customAmountInput.addEventListener('input', (e) => {
        selectedAmount = parseInt(e.target.value) || 0;
    });
}

// Donate button functionality
const donateBtn = document.getElementById('donateBtn');
if (donateBtn) {
    donateBtn.addEventListener('click', () => {
        if (selectedAmount > 0) {
            // Show donation modal or redirect to payment processor
            showDonationModal(selectedAmount);
        } else {
            const message = currentLang === 'en'
                ? 'Please select a donation amount or enter a custom amount.'
                : 'يرجى اختيار مبلغ التبرع أو إدخال مبلغ مخصص.';
            alert(message);
        }
    });
}

// Simple donation modal
function showDonationModal(amount) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    const title = currentLang === 'en' ? 'Thank you for your donation!' : 'شكراً لك على تبرعك!';
    const message = currentLang === 'en'
        ? `You're about to donate $${amount.toLocaleString()} to Resalat Nour Association.`
        : `أنت على وشك التبرع بمبلغ $${amount.toLocaleString()} لجمعية رسالة نور.`;
    const redirectText = currentLang === 'en'
        ? 'This would typically redirect to a secure payment processor.'
        : 'سيتم توجيهك عادةً إلى معالج دفع آمن.';
    const continueBtn = currentLang === 'en' ? 'Continue to Payment' : 'المتابعة للدفع';
    const cancelBtn = currentLang === 'en' ? 'Cancel' : 'إلغاء';

    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};
            font-family: ${currentLang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif'};
        ">
            <h3>${title}</h3>
            <p>${message}</p>
            <p>${redirectText}</p>
            <div style="margin-top: 2rem;">
                <button onclick="this.closest('div[style*=\'position: fixed\']').remove()" 
                        style="
                            background: #667eea;
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            cursor: pointer;
                            margin-right: 1rem;
                        ">
                    ${continueBtn}
                </button>
                <button onclick="this.closest('div[style*=\'position: fixed\']').remove()" 
                        style="
                            background: #6c757d;
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            cursor: pointer;
                        ">
                    ${cancelBtn}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            const errorMsg = currentLang === 'en'
                ? 'Please fill in all fields.'
                : 'يرجى ملء جميع الحقول.';
            alert(errorMsg);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const errorMsg = currentLang === 'en'
                ? 'Please enter a valid email address.'
                : 'يرجى إدخال عنوان بريد إلكتروني صحيح.';
            alert(errorMsg);
            return;
        }

        // Show success message
        const successMsg = currentLang === 'en'
            ? 'Thank you for your message! We\'ll get back to you soon.'
            : 'شكراً لك على رسالتك! سنتواصل معك قريباً.';
        showSuccessMessage(successMsg);
        contactForm.reset();
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (!email) {
            const errorMsg = currentLang === 'en'
                ? 'Please enter your email address.'
                : 'يرجى إدخال عنوان بريدك الإلكتروني.';
            alert(errorMsg);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const errorMsg = currentLang === 'en'
                ? 'Please enter a valid email address.'
                : 'يرجى إدخال عنوان بريد إلكتروني صحيح.';
            alert(errorMsg);
            return;
        }

        const successMsg = currentLang === 'en'
            ? 'Thank you for subscribing to our newsletter!'
            : 'شكراً لك على الاشتراك في نشرتنا الإخبارية!';
        showSuccessMessage(successMsg);
        newsletterForm.reset();
    });
}

// Success message function
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};
        font-family: ${currentLang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif'};
    `;
    successDiv.textContent = message;

    document.body.appendChild(successDiv);

    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            successDiv.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations for success messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Video card click handlers
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        const videoTitle = card.querySelector('p').textContent;
        const message = currentLang === 'en'
            ? `This would open the video: ${videoTitle}`
            : `سيتم فتح الفيديو: ${videoTitle}`;
        alert(message);
    });
});

// Add loading animation for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        if (!this.classList.contains('donation-amount')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;

            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add fade-in animation for sections
const fadeInElements = document.querySelectorAll('.activity-card, .video-card, .value-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// Social media links configuration
const socialLinks = {
    facebook: 'https://www.facebook.com/Resalitnour2021',
    twitter: 'https://x.com/resalitnour',
    instagram: 'https://www.instagram.com/resalitnour/',
    youtube: 'https://www.youtube.com/@%D8%AC%D9%85%D8%B9%D9%8A%D8%A9%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%D9%86%D9%88%D8%B1%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9',
    email: 'mailto:Admin@resalitnour.org'
};

// Update social media links
document.querySelectorAll('.social-link').forEach(link => {
    const icon = link.querySelector('i');
    if (icon.classList.contains('fa-facebook')) {
        link.href = socialLinks.facebook;
    } else if (icon.classList.contains('fa-x-twitter')) {
        link.href = socialLinks.twitter;
    } else if (icon.classList.contains('fa-instagram')) {
        link.href = socialLinks.instagram;
    } else if (icon.classList.contains('fa-youtube')) {
        link.href = socialLinks.youtube;
    } else if (icon.classList.contains('fa-envelope')) {
        link.href = socialLinks.email;
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Resalat Nour Association website loaded successfully!');

    // Add any additional initialization code here
    // For example, loading external data, setting up analytics, etc.
});
