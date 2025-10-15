document.addEventListener('DOMContentLoaded', () => {
    console.log('script.js loaded and DOM fully parsed');

    // Running Banner Logic
    const bannerContent = document.querySelector('.banner-content');
    const cloudServices = [
        { name: 'Compute', cost: 1200.50, min: 1000, max: 1500 },
        { name: 'Storage', cost: 300.25, min: 250, max: 400 },
        { name: 'Network', cost: 150.70, min: 100, max: 200 },
        { name: 'Database', cost: 750.00, min: 600, max: 900 },
        { name: 'Monitoring', cost: 80.10, min: 70, max: 120 }
    ];

    function updateSimulatedCloudCosts() {
        let totalCost = 0;
        let bannerMessage = '';

        cloudServices.forEach(service => {
            // Simulate slight fluctuations
            const fluctuation = (Math.random() - 0.5) * 20; // +/- 10
            service.cost = Math.max(service.min, Math.min(service.max, service.cost + fluctuation));
            service.cost = parseFloat(service.cost.toFixed(2));
            totalCost += service.cost;

            bannerMessage += `${service.name}: $${service.cost.toFixed(2)} | `;
        });

        // Add total cost to the message
        bannerMessage = `Total Cloud Cost: $${totalCost.toFixed(2)} | ` + bannerMessage;

        // Update banner content
        if (bannerContent) {
            // Clear existing content before adding new
            bannerContent.innerHTML = ''; 
            const span = document.createElement('span');
            span.textContent = bannerMessage;
            bannerContent.appendChild(span);

            // Duplicate content for continuous scroll effect
            const content = span.outerHTML;
            bannerContent.innerHTML += content;
            bannerContent.innerHTML += content;
        }
    }

    // Initial update
    updateSimulatedCloudCosts();

    // Update every 10 seconds (adjust as needed)
    setInterval(() => updateSimulatedCloudCosts(), 20000);

    // Contact Form Submission (existing logic)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }
});