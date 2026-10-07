document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // Feature 1: Mobile Navigation Menu Toggle
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close nav on click of link (Mobile UX)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });


  // ==========================================
  // Feature 2: FAQ Accordion
  // ==========================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      
      // Close all other active items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // Toggle target item
      faqItem.classList.toggle('active');
    });
  });


  // ==========================================
  // Feature 3: Project Filtering
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      // Filter display cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });


  // ==========================================
  // Feature 4: Form Field Validation
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset display alerts
    formSuccess.style.display = 'none';

    // Validate Name
    if (fullNameInput.value.trim() === '') {
      showError(fullNameInput);
      isValid = false;
    } else {
      clearError(fullNameInput);
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput);
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Phone
    if (phoneInput.value.trim().length < 7) {
      showError(phoneInput);
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    // On Success
    if (isValid) {
      formSuccess.style.display = 'block';
      contactForm.reset();
    }
  });

  function showError(inputElement) {
    inputElement.parentElement.classList.add('error');
  }

  function clearError(inputElement) {
    inputElement.parentElement.classList.remove('error');
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

});