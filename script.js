document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('dot');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
        setTimeout(showSlides, 3000); 
    }

    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            currentSlide(i + 1);
        });
    }

    function currentSlide(n) {
        const slides = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('dot');
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[n - 1].style.display = 'block';
        dots[n - 1].className += ' active';
    }

    const navItems = document.querySelectorAll('nav ul li a');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const closeBtn = document.querySelector('.overlay .close');
    const overlayLinks = document.querySelectorAll('.overlay a');

    mobileMenu.addEventListener('click', () => {
        overlay.style.height = "100%";
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.height = "0%";
    });

    navItems.forEach(item => {
        item.addEventListener('click', smoothScroll);
    });

    overlayLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = targetElement.offsetTop;

        window.scroll({
            top: topOffset,
            behavior: 'smooth'
        });

        // Close the menu if on mobile
        if (overlay.style.height === "100%") {
            overlay.style.height = "0%";
        }
    }

    const projects3DCG = document.querySelectorAll('.project-3dcg');
    const projectsDesign = document.querySelectorAll('.project-design');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox .close');
    const projectPhotos = document.querySelectorAll('.project-photo img');
    const zoomButtons = document.querySelectorAll('.zoom-button');

    projects3DCG.forEach(project => {
        const descriptionText = project.getAttribute('data-description');
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.innerText = descriptionText;
        project.appendChild(descriptionDiv);
    });

    projectsDesign.forEach(project => {
        const descriptionText = project.getAttribute('data-description');
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.innerText = descriptionText;
        project.appendChild(descriptionDiv);
    });

    projectPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxCaption.innerText = this.getAttribute('data-description');
        });
    });

    zoomButtons.forEach(button => {
        button.addEventListener('click', function() {
            const photo = this.previousElementSibling || this.nextElementSibling;
            lightbox.style.display = 'block';
            lightboxImg.src = photo.src;
            lightboxCaption.innerText = photo.getAttribute('data-description');
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
