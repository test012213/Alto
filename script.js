// Laptop specifications data
const laptopSpecs = {
    ultra: {
        name: "Alto Ultra",
        chip: "AU1",
        ram: ["16GB", "32GB", "64GB"],
        display: "144Hz Nano Texture Display",
        webcam: "8K Webcam",
        storage: ["512GB", "1TB", "2TB", "4TB"],
        material: "Titanium",
        colors: ["Midnight", "Silver"],
        description: "The pinnacle of laptop engineering. Alto Ultra delivers unprecedented performance with our most advanced AU1 chip."
    },
    pro: {
        name: "Alto Pro",
        chip: "AP1",
        ram: ["16GB", "32GB"],
        display: "120Hz Nano Texture Display",
        webcam: "4K Webcam",
        storage: ["256GB", "512GB", "1TB", "2TB"],
        material: "Aluminium",
        colors: ["Midnight", "Silver"],
        description: "Professional-grade performance for creators and developers. The Alto Pro is built for those who demand excellence."
    },
    alto1: {
        name: "Alto 1",
        chip: "AL1",
        ram: ["16GB"],
        display: "120Hz Nano Texture Display",
        webcam: "1080p Webcam",
        storage: ["256GB", "512GB", "1TB"],
        material: "Aluminium",
        colors: ["Midnight", "Silver"],
        description: "The perfect balance of performance and value. Alto 1 brings premium features to everyone."
    },
    neo: {
        name: "Alto Neo",
        chip: "AN1",
        ram: ["8GB"],
        display: "60Hz Nano Texture Display",
        webcam: "1080p Webcam",
        storage: ["256GB", "512GB"],
        material: "Aluminium",
        colors: ["Midnight", "Silver", "Deep Blue", "Light Pink"],
        description: "Essential performance at an accessible price. Alto Neo makes the Alto experience available to everyone."
    }
};

const colorMap = {
    "Midnight": "#1d1d1f",
    "Silver": "#e8e8ed",
    "Deep Blue": "#1e3a8a",
    "Light Pink": "#ffc0cb"
};

// Show laptop details in modal
function showDetails(laptop) {
    const specs = laptopSpecs[laptop];
    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    
    const colorDots = specs.colors.map(color => 
        `<div class="color-dot" style="background: ${colorMap[color]};" title="${color}"></div>`
    ).join('');
    
    modalBody.innerHTML = `
        <h2 style="font-size: 48px; margin-bottom: 20px;">${specs.name}</h2>
        <p style="font-size: 18px; color: #a1a1a6; margin-bottom: 40px;">${specs.description}</p>
        
        <div class="specs-grid">
            <div class="spec-item">
                <h4>Chip</h4>
                <p>${specs.chip} Custom ARM Chip</p>
            </div>
            <div class="spec-item">
                <h4>RAM Options</h4>
                <p>${specs.ram.join(', ')}</p>
            </div>
            <div class="spec-item">
                <h4>Display</h4>
                <p>${specs.display}</p>
            </div>
            <div class="spec-item">
                <h4>Webcam</h4>
                <p>${specs.webcam}</p>
            </div>
            <div class="spec-item">
                <h4>Storage Options</h4>
                <p>${specs.storage.join(', ')}</p>
            </div>
            <div class="spec-item">
                <h4>Material</h4>
                <p>${specs.material}</p>
            </div>
        </div>
        
        <div class="spec-item" style="margin-top: 30px;">
            <h4>Available Colors</h4>
            <div class="color-options">
                ${colorDots}
            </div>
        </div>
        
        <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #424245;">
            <h4 style="color: #a1a1a6; font-size: 14px; margin-bottom: 15px;">KEY FEATURES</h4>
            <ul style="list-style: none; line-height: 2;">
                <li>✓ Custom ${specs.chip} ARM chip - Most secure and fastest</li>
                <li>✓ Advanced cooling system - No overheating</li>
                <li>✓ Premium speakers for immersive audio</li>
                <li>✓ Runs AltoOS exclusively</li>
            </ul>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeDetails() {
    document.getElementById('detailsModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const laptopCards = document.querySelectorAll('.laptop-card');
    laptopCards.forEach(card => observer.observe(card));
});

// Smooth scrolling
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
