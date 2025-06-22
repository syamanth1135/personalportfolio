async function testFetch() {
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            const endpoint = 'https://formspree.io/f/xeogbbdp';
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const statusDiv = document.getElementById('formStatus');
                if (response.ok) {
                    statusDiv.textContent = 'Message sent successfully!';
                    statusDiv.style.color = 'green';
                } else {
                    statusDiv.textContent = 'Error sending message: ' + response.statusText;
                    statusDiv.style.color = 'red';
                }
            } catch (error) {
                const statusDiv = document.getElementById('formStatus');
                statusDiv.textContent = 'Network error: ' + error.message;
                statusDiv.style.color = 'red';
            }
        }
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);


        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                nav.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });
        const heroText = document.querySelector('.hero p');
        const texts = [
            'Computer Science & AI Student',
            'Full Stack Developer',
            'Machine Learning Enthusiast',
            'UI/UX Designer'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                heroText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                heroText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }


            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
        setTimeout(typeEffect, 2000);