    const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        const dotsContainer = document.getElementById('sliderDots');
        let currentSlide = 0;

        // Create dots
        slides.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if(idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showSlide(idx));
            dotsContainer.appendChild(dot);
        });
        const dots = document.querySelectorAll('.dot');

        function showSlide(n) {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === n);
                dots[idx].classList.toggle('active', idx === n);
            });
            currentSlide = n;
        }

        prevBtn.onclick = () => showSlide((currentSlide - 1 + slides.length) % slides.length);
        nextBtn.onclick = () => showSlide((currentSlide + 1) % slides.length);

        // Optional: Auto-slide every 7 seconds
        // setInterval(() => nextBtn.click(), 7000);