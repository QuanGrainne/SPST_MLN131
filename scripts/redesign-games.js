const fs = require('fs');
const path = require('path');

const fileSets = [
    'games.html',
    'game-1.html',
    'game-2.html',
    'crossword-game.html'
];

const replacements = [
    // Backgrounds and body
    { regex: /\bbg-background-light\b/g, replacement: 'bg-philo-ivory' },
    { regex: /\bdark:bg-background-dark\b/g, replacement: 'dark:bg-philo-dark' },
    { regex: /\bfont-sans\b/g, replacement: 'font-body' },
    { regex: /\bfont-serif\b/g, replacement: 'font-heading' },
    { regex: /\bfont-display\b/g, replacement: 'font-heading' },
    
    // Text colors
    { regex: /\btext-text-main-light\b/g, replacement: 'text-philo-dark' },
    { regex: /\bdark:text-text-main-dark\b/g, replacement: 'dark:text-philo-cream' },
    { regex: /\btext-slate-800\b/g, replacement: 'text-philo-dark dark:text-philo-cream' },
    { regex: /\btext-slate-900\b/g, replacement: 'text-philo-dark dark:text-philo-cream' },
    { regex: /\btext-slate-600\b/g, replacement: 'text-philo-dark/70 dark:text-philo-cream/70' },
    { regex: /\btext-slate-500\b/g, replacement: 'text-philo-dark/70 dark:text-philo-cream/70' },
    { regex: /\btext-slate-400\b/g, replacement: 'text-philo-dark/50 dark:text-philo-cream/50' },
    
    // Cards & Surfaces
    { regex: /\bbg-surface-light\b/g, replacement: 'bg-philo-ivory' },
    { regex: /\bdark:bg-surface-dark\b/g, replacement: 'dark:bg-philo-burgundy/80' },
    { regex: /\bbg-white\b/g, replacement: 'bg-philo-ivory dark:bg-philo-burgundy/80' },
    { regex: /\bborder-slate-100\b/g, replacement: 'border-philo-gold/30' },
    { regex: /\bborder-slate-200\b/g, replacement: 'border-philo-gold/30' },
    { regex: /\bborder-slate-300\b/g, replacement: 'border-philo-gold/30' },
    { regex: /\bshadow-soft\b/g, replacement: 'shadow-cinematic' },
    { regex: /\bbg-slate-50\b/g, replacement: 'bg-philo-gold/5 dark:bg-philo-darkGold/20' },
    
    // Primary/Brand colors
    { regex: /\btext-primary\b/g, replacement: 'text-philo-gold' },
    { regex: /\bborder-primary\b/g, replacement: 'border-philo-gold' },
    { regex: /\bbg-primary\b/g, replacement: 'bg-philo-gold' },
    { regex: /\bfrom-primary\b/g, replacement: 'from-philo-gold' },
    { regex: /\bto-secondary\b/g, replacement: 'to-philo-darkGold' },
    { regex: /\bhover:border-primary\b/g, replacement: 'hover:border-philo-gold' },
    { regex: /\bhover:text-primary\b/g, replacement: 'hover:text-philo-gold' },
    { regex: /\bhover:bg-primary\b/g, replacement: 'hover:bg-philo-gold' },
    
    // Common colored badges (Blue, Red, Purple, Green, Amber)
    { regex: /\bbg-blue-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\bborder-blue-100\b/g, replacement: 'border-philo-gold/30' },
    { regex: /\btext-blue-500\b/g, replacement: 'text-philo-gold' },
    { regex: /\btext-blue-600\b/g, replacement: 'text-philo-gold' },
    { regex: /\bbg-blue-600\b/g, replacement: 'bg-philo-gold' },
    { regex: /\bhover:bg-blue-700\b/g, replacement: 'hover:bg-philo-darkGold' },
    { regex: /\btext-blue-700\b/g, replacement: 'text-philo-gold' },
    { regex: /\bdark:bg-blue-900\/20\b/g, replacement: 'dark:bg-philo-gold/5' },
    
    { regex: /\bbg-red-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\bdark:bg-red-900\/20\b/g, replacement: 'dark:bg-philo-gold/5' },
    { regex: /\bborder-red-100\b/g, replacement: 'border-philo-gold/30' },
    { regex: /\bdark:border-red-800\b/g, replacement: 'dark:border-philo-gold/30' },
    { regex: /\btext-red-700\b/g, replacement: 'text-philo-gold' },
    { regex: /\btext-red-600\b/g, replacement: 'text-philo-gold' },
    { regex: /\bhover:text-red-600\b/g, replacement: 'hover:text-philo-darkGold' },
    { regex: /\bborder-red-600\b/g, replacement: 'border-philo-gold' },
    { regex: /\bbg-red-600\b/g, replacement: 'bg-philo-gold' },
    { regex: /\btext-red-100\b/g, replacement: 'text-philo-cream' },
    { regex: /\bbg-red-100\b/g, replacement: 'bg-philo-gold/20' },
    
    { regex: /\bbg-purple-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\btext-purple-600\b/g, replacement: 'text-philo-gold' },
    { regex: /\btext-purple-500\b/g, replacement: 'text-philo-gold' },
    { regex: /\bbg-purple-600\b/g, replacement: 'bg-philo-gold' },
    
    { regex: /\bbg-amber-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\btext-amber-600\b/g, replacement: 'text-philo-gold' },
    { regex: /\btext-amber-700\b/g, replacement: 'text-philo-gold' },
    { regex: /\bborder-amber-100\b/g, replacement: 'border-philo-gold/30' },
    
    { regex: /\bbg-emerald-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\btext-emerald-500\b/g, replacement: 'text-philo-gold' },
    { regex: /\btext-emerald-600\b/g, replacement: 'text-philo-gold' },
    { regex: /\bborder-emerald-200\b/g, replacement: 'border-philo-gold/30' },
    { regex: /\bbg-emerald-600\b/g, replacement: 'bg-philo-gold' },
    { regex: /\bhover:bg-emerald-700\b/g, replacement: 'hover:bg-philo-darkGold' },
    
    { regex: /\bbg-indigo-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\btext-indigo-500\b/g, replacement: 'text-philo-gold' },
    { regex: /\bbg-indigo-600\b/g, replacement: 'bg-philo-gold' },
    { regex: /\bhover:bg-indigo-700\b/g, replacement: 'hover:bg-philo-darkGold' },
    
    { regex: /\bbg-orange-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\btext-orange-700\b/g, replacement: 'text-philo-gold' },
    
    { regex: /\bbg-green-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\btext-green-700\b/g, replacement: 'text-philo-gold' },
    
    // Common background specific fixes
    { regex: /\bbg-slate-900\b/g, replacement: 'bg-philo-dark' },
    { regex: /\bbg-slate-100\b/g, replacement: 'bg-philo-gold/20 dark:bg-philo-gold/10' },
    
    // Ensure gradient text replacement works 
    { regex: /from-blue-500 to-purple-600/g, replacement: 'from-philo-gold to-philo-darkGold' },
];

fileSets.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${file}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(rule => {
        content = content.replace(rule.regex, rule.replacement);
    });
    
    // Remove conflicting hover/text colors added during string replacement overlap
    content = content.replace(/text-philo-dark dark:text-philo-cream dark:text-philo-cream/g, 'text-philo-dark dark:text-philo-cream');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes made to ${file}`);
    }
});
