// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Gallery Filter System
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.item(0).style.opacity = '0'; // smooth transition effect hint
        setTimeout(() => {
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }, 150);
    });
});

// Donation form mock submission handler
// Mobile Money Donation Form Handler
const donateForm = document.getElementById('donateForm');
donateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const provider = document.getElementById('momoProvider').value;
    const amount = donateForm.querySelector('input[type="number"]').value;
    const phone = donateForm.querySelector('input[type="tel"]').value;

    // Simulate USSD prompt redirection feedback
    alert(`Thank you! A payment prompt of GH₵${amount} has been sent to your ${provider} number (${phone}). Please approve the transaction on your phone.`);
    
    donateForm.reset();
});