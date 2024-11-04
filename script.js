const wave = document.querySelector('.wave');

function animateWave() {
    wave.style.transform = 'rotate(20deg)';
    setTimeout(() => {
        wave.style.transform = 'rotate(-20deg)';
    }, 300);
}

wave.addEventListener('mouseover', animateWave);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Highlight skill on hover
const skillItems = document.querySelectorAll('.skill-item ul li');

skillItems.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.color = '#7431eb'; // Highlight color on hover
    });
    skill.addEventListener('mouseout', () => {
        skill.style.color = '#555'; // Revert back to original color
    });
});


// Highlight project buttons on hover
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#3a0842'; // Darken the button on hover
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#7431eb'; // Revert to original color
    });
});

// Highlight experience items on hover
document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    item.addEventListener('mouseout', () => {
        item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});


function toggleDescription(element) {
    const description = element.querySelector('.description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}




document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Form Validation (Simple Example)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Reset form
    this.reset();
  });