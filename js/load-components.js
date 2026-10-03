/**
 * Loads the header and footer components into the page.
 * Assumes 'header.html' and 'footer.html' are in the same directory as the page or root.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Determine path prefix (handle subdirectories if needed, though structure seems flat for now)
    // Determine path prefix
    const prefix = window.componentPrefix || "";

    // Dynamically load global philosophy.css relative to page directory
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = prefix + "css/philosophy.css?v=" + new Date().getTime();
    document.head.appendChild(styleLink);

    // Inject shared cinematic background if it doesn't already exist
    if (!document.getElementById("global-cinematic-bg")) {
        const bgContainer = document.createElement("div");
        bgContainer.className = "fixed inset-0 pointer-events-none z-[-1]";
        bgContainer.id = "global-cinematic-bg";
        bgContainer.innerHTML = `
            <img src="${prefix}assets/images/cinematic/cinematic_section_bg.png" alt="" class="w-full h-full object-cover opacity-30 mix-blend-screen" />
            <img src="${prefix}assets/images/cinematic/historical_texture.png" alt="" class="w-full h-full object-cover opacity-15 mix-blend-overlay absolute inset-0" />
        `;
        if (document.body) {
            document.body.insertBefore(bgContainer, document.body.firstChild);
        }
    }

    // Load Header
    const timestamp = new Date().getTime();
    fetch(prefix + 'header.html?v=' + timestamp)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Fix relative links in header
            if (prefix) {
                const headerLinks = document.querySelectorAll('#header-placeholder a');
                headerLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                        link.setAttribute('href', prefix + href);
                    }
                });
                const headerImages = document.querySelectorAll('#header-placeholder img');
                headerImages.forEach(img => {
                    const src = img.getAttribute('src');
                    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                        img.setAttribute('src', prefix + src);
                    }
                });
            }

            setActiveNavLink();

            // Initialize search AFTER header is loaded
            // Initialize search AFTER header is loaded
            // Dynamically load search scripts if they are not already present
            const scriptPrefix = prefix || '';
            const loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    if (document.querySelector(`script[src="${src}"]`)) {
                        resolve();
                        return;
                    }
                    const script = document.createElement('script');
                    script.src = src;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.body.appendChild(script);
                });
            };


            // Load search data first, then search init script
            const timestamp = new Date().getTime();
            loadScript(scriptPrefix + 'js/search-data-global.js?v=' + timestamp)
                .then(() => loadScript(scriptPrefix + 'js/search-init.js?v=' + timestamp))
                .then(() => {
                    if (typeof initializeSearch === 'function') {
                        initializeSearch();
                    }
                })
                .catch(err => console.error('Error loading search scripts:', err));

            // Add scroll-based navigation highlighting for home.html
            setupScrollBasedNavigation();

            // Check if we are on a game page and hide floating buttons
            checkAndHideFloatingButtons();
        })
        .catch(error => console.error('Error loading header:', error));

    function checkAndHideFloatingButtons() {
        const currentPath = window.location.pathname;
        // Game mới chỉ cần thêm data-page-type="game" vào thẻ <body>.
        // Giữ fallback cho các game cũ để không làm hỏng link legacy.
        const legacyGamePages = ['worldview-game.html', 'philosopher-match-game.html', 'philosophy-game-enhanced.html', 'crossword-game.html', 'wordle-game.html'];
        const isGamePage = document.body?.dataset?.pageType === 'game' ||
            legacyGamePages.some(page => currentPath.includes(page));

        if (isGamePage) {
            const tetBtn = document.getElementById('tet-toggle-btn-header');
            const aiBtn = document.getElementById('ai-chat-btn');

            if (tetBtn) tetBtn.style.display = 'none';
            if (aiBtn) aiBtn.style.display = 'none';
        }
    }


    // Load Footer
    fetch(prefix + 'footer.html?v=' + timestamp)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            // Fix relative links in footer
            if (prefix) {
                const footerLinks = document.querySelectorAll('#footer-placeholder a');
                footerLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                        link.setAttribute('href', prefix + href);
                    }
                });
                const footerImages = document.querySelectorAll('#footer-placeholder img');
                footerImages.forEach(img => {
                    const src = img.getAttribute('src');
                    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                        img.setAttribute('src', prefix + src);
                    }
                });
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});

/**
 * Sets the active navigation link based on the current URL.
 */
function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Reset to inactive state defaults (Gold text)
        link.className = "nav-link px-3 py-2 rounded-xl hover:bg-philo-gold/10 hover:-translate-y-px transition-all duration-300 text-philo-gold text-sm font-medium hover:text-philo-lightGold relative pb-1 border-b-2 border-transparent";

        // Check for match
        const isMatch = (linkHref === currentPath) ||
            (currentPath === 'home.html' && linkHref === 'home.html' && !currentHash) ||
            (currentPath === 'home.html' && linkHref === '#overview' && currentHash === '#overview') ||
            (linkHref === 'home.html#overview' && currentPath.includes('module')) ||
            (linkHref === 'practice.html' && currentPath.includes('quiz')) ||
            (linkHref === 'games.html' && (document.body?.dataset?.pageType === 'game' || currentPath.includes('games'))) ||
            (linkHref.includes('articles.html') && (window.location.pathname.includes('/articles/') || currentPath.includes('articles')));

        if (isMatch) {
            link.classList.add('nav-active');
            if (linkHref === 'games.html') {
                link.className = "nav-link nav-active px-3 py-2 rounded-xl bg-philo-gold/10 hover:-translate-y-px transition-all duration-300 text-philo-gold text-sm font-bold relative pb-1 flex items-center gap-1.5";
            } else {
                link.className = "nav-link nav-active px-3 py-2 rounded-xl bg-philo-gold/10 hover:-translate-y-px transition-all duration-300 text-philo-gold text-sm font-bold relative pb-1";
            }
        }
    });
}

/**
 * Setup scroll-based navigation highlighting for home.html
 */
function setupScrollBasedNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';

    // Only apply on home.html
    if (currentPath !== 'home.html') {
        return;
    }

    const overviewSection = document.getElementById('overview');
    if (!overviewSection) {
        return;
    }

    const homeLink = document.getElementById('home-link');
    const modulesLink = document.getElementById('modules-link');

    if (!homeLink || !modulesLink) {
        return;
    }

    const activeClass = "nav-link nav-active px-3 py-2 rounded-xl bg-philo-gold/10 hover:-translate-y-px transition-all duration-300 text-philo-gold text-sm font-bold relative pb-1";
    const inactiveClass = "nav-link px-3 py-2 rounded-xl hover:bg-philo-gold/10 hover:-translate-y-px transition-all duration-300 text-philo-gold text-sm font-medium hover:text-philo-lightGold relative pb-1";

    function updateActiveLink() {
        const scrollPosition = window.scrollY;
        const overviewTop = overviewSection.offsetTop - 150;

        if (scrollPosition >= overviewTop) {
            homeLink.className = inactiveClass;
            homeLink.classList.remove('nav-active');
            modulesLink.className = activeClass;
            modulesLink.classList.add('nav-active');
        } else {
            homeLink.className = activeClass;
            homeLink.classList.add('nav-active');
            modulesLink.className = inactiveClass;
            modulesLink.classList.remove('nav-active');
        }
    }

    window.addEventListener('scroll', updateActiveLink);
    setTimeout(() => {
        updateActiveLink();
    }, 100);
}
