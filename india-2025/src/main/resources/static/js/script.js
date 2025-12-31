// This runs as soon as the page loads 
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    fetchTimeline();
    startCountdown();
});

//1. Fetch data from you rJava Controller
async function fetchTimeline() {
    try{
        const response = await fetch('/api/timeline'); // This hits your java @GetMapping
        const data = await response.json();
        renderComicPanels(data);
    } catch (error) {
        console.error("Oops! Could not find theh 2025 dqata:", error);
    }
}

// New function to fetch 2026 specific events
async function fetchFutureEvents() {
    try {
        const response = await fetch('/api/future-timeline');
        const futureData = await response.json();

        renderComicPanels(futureData, true);
    } catch (error) {
        console.error("The future is stil hidden:", error);
    }
}

//2. Build the Comic Panels dynamically
function renderComicPanels(events, isFuture = false) {

    const containerId = isFuture ? 'skyline-container' : 'story-container';
    const container = document.getElementById(containerId);

    if (!isFuture) container.innerHTML = '';

    events.forEach((event) => {
        //Create a new div for each event
        const panel = document.createElement('div');

        //Give it the 'panel' classes and also 'GOOD' or 'BAD' for colors
        const glossyClass = isFuture ? 'FUTURE' : event.type;
        panel.classList.add('panel', event.type);

        const dateText = isFuture ? '${event.month}' : '${event.month} 2025';

        //Build the HTML inside teh panel
        panel.innerHTML = ` 
            <div class="panel-content">
                <div class="panel-header">
                    <span class="month-label">${event.month} 2025</span>
                </div>
                <h2 class="panel-title">${event.title}</h2>
                <p class="panel-desc">${event.description}</p>

                <div class="panel-image-container">
                    <img src="/images/${event.imagePath}" alt="${event.title}" class="panel-img">
                </div>
            </div>
        `;

        //Add the panel to our main container
        container.appendChild(panel);

        gsap.fromTo(panel,
            {
                opacity: 0,
                y: 100,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: panel,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    onEnter: () => {
                        updateBackground(event.type, isFuture);
                    },
                    onEnterBack: () => {
                        updateBackground(event.type, isFuture);
                    }
                }
            }
        );
    });
}

function startCountdown() {
    const timerElement = document.getElementById('countdown-timer');
    const portalButton = document.getElementById('portal-button');
    const gate = document.getElementById('new-year-gate');
    
    const targetDate = new Date('January 1, 2026 00:00:00').getTime();
    
    gate.style.display = 'block';

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;



        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;

        if (diff <= 0) {
            timerElement.innerHTML = "TIME IS UP!";
            portalButton.style.display = "inline-block";
            clearInterval(timerInterval);
        }
    }, 1000);
}

function openPortal() {
    const portalButton = document.getElementById('portal-button');
    const skylineContainer = document.getElementById('skyline-container');
    
    portalButton.style.display = 'none';
    skylineContainer.style.display = 'block';
    skylineContainer.style.height = 'auto';

    // Set up the Celebration Layout
    skylineContainer.innerHTML = `
        <div id="portal-header" style="text-align: center; padding: 60px 20px;">
            <h1 class="wish-text" style="font-family: 'Bangers'; font-size: 5rem; color: white; text-shadow: 0 0 20px #a855f7;">
                HAPPY NEW YEAR 2026!
            </h1>
            <p class="hero-subtitle">The Roadmap to India's Future</p>
        </div>
        <div id="future-list"></div> 
    `;

    // Start Sparkles (Confetti)
    for (let i = 0; i < 100; i++) {
        createSparkle();
    }

    startCanvasFireworks();
    
    // Delay fetching events slightly for dramatic effect
    setTimeout(() => {
        fetchFutureEvents();
        document.getElementById('portal-header').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('confetti'); // Uses the CSS we discussed
    
    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#a855f7'];
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    sparkle.style.opacity = Math.random();
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 5000);
}

function updateBackground(type, isFuture) {
    const body = document.body;
    body.classList.remove('good-news-bg', 'bad-news-bg', 'future-news-bg');
    
    if (isFuture) {
        body.classList.add('future-news-bg');
    } else if (type === 'GOOD') {
        body.classList.add('good-news-bg');
    } else if (type === 'BAD') {
        body.classList.add('bad-news-bg');
    }
}

function startCanvasFireworks() {
    // Basic placeholder for canvas fireworks
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 400;
    
    // Simple visual to show it triggered
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(168, 85, 247, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
