// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('nav ul li a');
//     const sections = document.querySelectorAll('section');
//     const backToTopBtn = document.getElementById('backToTopBtn');
//     const nav = document.querySelector('nav'); // Ensure there's a <nav> element in your HTML

//     // Show/Hide Back to Top Button
//     window.addEventListener('scroll', () => {
//         if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//             backToTopBtn.style.display = 'block';
//         } else {
//             backToTopBtn.style.display = 'none';
//         }

//         // Active link highlighting on scroll
//         let current = '';
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;

//             // Check if the pageYOffset is within the section's range
//             if (pageYOffset >= sectionTop - nav.offsetHeight && pageYOffset < sectionTop + section.offsetHeight) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').includes(current)) {
//                 link.classList.add('active');
//             }
//         });
//     });

//     // Smooth scrolling on nav link click
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop - nav.offsetHeight, // Adjust for fixed nav if any
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Back to Top Button functionality
//     backToTopBtn.addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });



