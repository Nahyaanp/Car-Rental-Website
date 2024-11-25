document.getElementById('loginButton').onclick = function () {
    window.location.href = '404error.html';
};

document.getElementById('signupButton').onclick = function () {
    window.location.href = '404error.html';
};


// Function to handle the counting animation
function animateCounters() {
    const counters = document.querySelectorAll('.txt1[data-target]');
    const speed = 200; // Adjust the speed of the animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Get the target number
            const count = +counter.innerText; // Get the current number
            const increment = target / speed; // Calculate increment value

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Call updateCount every 10ms
            } else {
                counter.innerText = target; // Ensure the final value matches the target
            }
        };

        updateCount();
    });
}

// Trigger the animation when the section becomes visible
window.addEventListener('load', animateCounters);


// Highlight the active link in the navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav .item a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
