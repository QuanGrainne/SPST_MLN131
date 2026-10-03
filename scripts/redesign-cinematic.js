const fs = require('fs');
const path = require('path');

const fileSets = [
    'home.html',
    'practice.html',
    'quiz1.html',
    'quiz2.html',
    'quiz3.html',
    'quiz4.html',
    'quiz5.html',
    'ai-assistants.html',
    'games.html',
    'crossword-game.html',
    'game-1.html',
    'game-2.html',
    'articles.html',
    'module1.html',
    'module2.html',
    'module3.html',
    'module4.html',
    'module5.html',
    'module6.html',
    'overview.html',
    'articles/doc-lap-tu-do-hcm.html',
    'articles/nguon-goc-tu-tuong-hcm.html',
    'articles/van-hoa-soi-duong.html'
];

const replacements = [
    // Body and Main backgrounds to deep cinematic burgundy
    { regex: /bg-philo-ivory dark:bg-philo-dark/g, replacement: 'bg-philo-blackBurgundy relative' },
    { regex: /bg-\[\#FAF8F3\] dark:bg-\[\#0A0F1D\]/g, replacement: 'bg-philo-blackBurgundy relative' },
    { regex: /bg-philo-ivory/g, replacement: 'bg-philo-blackBurgundy' },
    { regex: /bg-philo-dark/g, replacement: 'bg-philo-blackBurgundy' },
    { regex: /bg-\[\#FAF8F3\]/g, replacement: 'bg-philo-blackBurgundy' },
    
    // Text colors (make everything legible on dark backgrounds)
    { regex: /text-philo-dark dark:text-philo-cream/g, replacement: 'text-philo-ivory' },
    { regex: /text-\[\#1E293B\] dark:text-\[\#FAF8F3\]/g, replacement: 'text-philo-ivory' },
    { regex: /text-philo-dark\/70 dark:text-philo-cream\/70/g, replacement: 'text-philo-ivory/70' },
    { regex: /text-philo-dark\/60 dark:text-philo-cream\/60/g, replacement: 'text-philo-ivory/60' },
    { regex: /text-philo-dark\/40 dark:text-philo-cream\/40/g, replacement: 'text-philo-ivory/40' },
    { regex: /text-philo-dark\/80 dark:text-philo-cream\/80/g, replacement: 'text-philo-ivory/80' },
    
    // Primary Text colors that were set to dark explicitly
    { regex: /text-philo-dark/g, replacement: 'text-philo-ivory' },
    { regex: /text-\[\#0F172A\] dark:text-white/g, replacement: 'text-philo-ivory' },
    { regex: /text-\[\#0F172A\]/g, replacement: 'text-philo-ivory' },
    { regex: /text-slate-600 dark:text-slate-350/g, replacement: 'text-philo-ivory/80' },
    { regex: /text-slate-600 dark:text-slate-400/g, replacement: 'text-philo-ivory/80' },
    { regex: /text-slate-500/g, replacement: 'text-philo-ivory/70' },
    
    // Cards to premium glass panels (broad match)
    { regex: /bg-white dark:bg-\[\#121826\]/g, replacement: 'bg-[rgba(70,8,8,0.65)] backdrop-blur-md shadow-cinematic' },
    { regex: /bg-slate-100 dark:bg-\[\#0A0F1D\]/g, replacement: 'bg-black/40 border border-[#D9A62E]/20' },
    { regex: /bg-slate-200 dark:bg-slate-800/g, replacement: 'bg-black/60' },
    { regex: /bg-\[\#0F172A\]/g, replacement: 'bg-[rgba(70,8,8,0.65)] backdrop-blur-md' },
    { regex: /bg-white\/95 dark:bg-\[\#121826\]\/95/g, replacement: 'bg-black/80' },
    { regex: /bg-white/g, replacement: 'bg-[rgba(70,8,8,0.65)] backdrop-blur-md' },
    { regex: /border-slate-200\/50 dark:border-slate-800\/40/g, replacement: 'border-[#D9A62E]/25' },
    { regex: /border-slate-100 dark:border-slate-800/g, replacement: 'border-[#D9A62E]/25' },
    { regex: /border-slate-200/g, replacement: 'border-[#D9A62E]/25' },
    
    // Specific specific old regexes (fallback)
    { regex: /bg-philo-ivory dark:bg-philo-burgundy\/80 border-philo-gold\/30 shadow-cinematic/g, replacement: 'bg-[rgba(70,8,8,0.65)] backdrop-blur-xl border-[#D9A62E]/25 shadow-cinematic' },
    { regex: /bg-philo-ivory dark:bg-philo-burgundy\/50 border border-philo-gold\/30/g, replacement: 'bg-[rgba(70,8,8,0.65)] backdrop-blur-xl border border-[#D9A62E]/25' },
    
    // Standardize Gold Colors
    { regex: /philo-gold/g, replacement: 'philo-warmGold' },
    { regex: /philo-darkGold/g, replacement: 'philo-antiqueGold' },
    { regex: /text-philo-gold/g, replacement: 'text-philo-warmGold' },
    { regex: /border-philo-gold/g, replacement: 'border-philo-warmGold' },
    
    // Standardize Hover effects for cards
    { regex: /hover:border-philo-gold/g, replacement: 'hover:border-[#FFD700]' },
    { regex: /hover:shadow-gold-hover/g, replacement: 'hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]' },
    
    // Remove "dark:" prefix everywhere as we are strictly dark cinematic now
    { regex: /dark:text-philo-cream/g, replacement: '' },
    { regex: /dark:bg-philo-burgundy\/80/g, replacement: '' },
    { regex: /dark:bg-philo-burgundy\/50/g, replacement: '' },
    { regex: /dark:bg-philo-burgundy\/20/g, replacement: '' },
    { regex: /dark:border-philo-gold\/30/g, replacement: '' },
    { regex: /dark:text-philo-gold/g, replacement: '' },
    { regex: /dark:text-philo-[a-zA-Z0-9\/]+/g, replacement: '' },
    { regex: /dark:bg-philo-[a-zA-Z0-9\/]+/g, replacement: '' },
    { regex: /dark:border-philo-[a-zA-Z0-9\/]+/g, replacement: '' }
];

fileSets.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(rule => {
        content = content.replace(rule.regex, rule.replacement);
    });
    
    // Inject the cinematic section background behind the main content if it has a <main> tag
    if (content.includes('<main class="flex-grow">') && !content.includes('cinematic_section_bg.png')) {
        content = content.replace('<main class="flex-grow">', 
        `<main class="flex-grow relative z-10">\n      <!-- Shared Cinematic Background Texture -->\n      <div class="fixed inset-0 pointer-events-none z-[-1]">\n        <img src="assets/images/cinematic/cinematic_section_bg.png" alt="" class="w-full h-full object-cover opacity-30 mix-blend-screen" />\n        <img src="assets/images/cinematic/historical_texture.png" alt="" class="w-full h-full object-cover opacity-15 mix-blend-overlay absolute inset-0" />\n      </div>`);
    }

    // Fix a few specific button texts that should remain dark on gold buttons
    content = content.replace(/from-philo-warmGold to-philo-antiqueGold text-philo-ivory/g, 'from-philo-warmGold to-[#FFB700] text-philo-blackBurgundy');
    content = content.replace(/from-philo-warmGold to-philo-antiqueGold font-semibold rounded-full/g, 'from-philo-warmGold to-[#FFB700] text-philo-blackBurgundy font-semibold rounded-full');

    // Clean up multiple spaces
    content = content.replace(/ {2,}class=/g, ' class=');
    content = content.replace(/ class=" "/g, ' class=""');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Cinematified ${file}`);
    }
});
