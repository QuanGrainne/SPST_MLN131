const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'ai-assistants.html');

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    const replacements = [
        // Body and main typography
        { regex: /class="bg-background-light text-slate-800 font-display min-h-screen/g, replacement: 'class="bg-philo-ivory dark:bg-philo-dark text-philo-dark dark:text-philo-cream font-body min-h-screen transition-colors duration-500' },
        
        // Badges and text
        { regex: /bg-\[#D4A017\]\/10/g, replacement: 'bg-philo-gold/10' },
        { regex: /border-\[#D4A017\]\/30/g, replacement: 'border-philo-gold/30' },
        { regex: /text-\[#D4A017\]/g, replacement: 'text-philo-gold' },
        { regex: /hover:text-\[#D4A017\]/g, replacement: 'hover:text-philo-gold' },
        
        { regex: /text-3xl md:text-4xl font-serif font-bold text-slate-900/g, replacement: 'text-3xl md:text-4xl font-heading font-bold text-philo-dark dark:text-philo-cream' },
        { regex: /text-slate-500 italic/g, replacement: 'text-philo-dark/70 dark:text-philo-cream/70 italic' },
        { regex: /text-slate-600/g, replacement: 'text-philo-dark/70 dark:text-philo-cream/70' },
        
        // Cards
        { regex: /bg-white dark:bg-\[#121826\] rounded-2xl p-6 shadow-soft border border-gray-200\/50 dark:border-gray-800\/40/g, replacement: 'bg-philo-ivory dark:bg-philo-burgundy/80 rounded-2xl p-6 shadow-cinematic border border-philo-gold/30' },
        { regex: /text-lg font-bold text-slate-900 dark:text-white/g, replacement: 'text-lg font-bold text-philo-dark dark:text-philo-cream font-heading' },
        
        // Clear history button
        { regex: /text-xs font-semibold text-slate-500 hover:text-red-500/g, replacement: 'text-xs font-semibold text-philo-dark/70 hover:text-philo-gold' },
        { regex: /text-sm text-slate-500/g, replacement: 'text-sm text-philo-dark/70 dark:text-philo-cream/70' },
        
        // Icons
        { regex: /bg-primary\/10 text-primary dark:text-\[#D4A017\]/g, replacement: 'bg-philo-gold/10 text-philo-gold' },
        { regex: /bg-green-500\/10 text-green-600/g, replacement: 'bg-philo-gold/10 text-philo-gold' },
        
        // Chapter list
        { regex: /text-sm text-slate-700 dark:text-slate-350/g, replacement: 'text-sm text-philo-dark/70 dark:text-philo-cream/70 font-body' },
        { regex: /hover:text-\[#D4A017\]/g, replacement: 'hover:text-philo-gold' },
        
        // Suggestions
        { regex: /border-gray-200\/50 dark:border-gray-800\/40 hover:border-\[#D4A017\]\/40 hover:bg-\[#D4A017\]\/5/g, replacement: 'border-philo-gold/30 hover:border-philo-gold hover:bg-philo-gold/10' },
        
        // Chat Section
        { regex: /bg-white dark:bg-\[#121826\] rounded-2xl shadow-soft border border-gray-200\/50 dark:border-gray-800\/40 flex flex-col/g, replacement: 'bg-philo-ivory dark:bg-philo-burgundy/80 rounded-2xl shadow-cinematic border border-philo-gold/30 flex flex-col' },
        { regex: /px-6 py-4 border-b border-gray-200\/50 dark:border-gray-800\/40/g, replacement: 'px-6 py-4 border-b border-philo-gold/30' },
        { regex: /text-xs text-slate-500 dark:text-slate-400/g, replacement: 'text-xs text-philo-dark/70 dark:text-philo-cream/70' },
        { regex: /text-xs text-slate-650 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200\/50 dark:border-slate-700\/50/g, replacement: 'text-xs text-philo-gold bg-philo-gold/10 px-3 py-1 rounded-full border border-philo-gold/30' },
        { regex: /p-6 border-t border-gray-200\/50 dark:border-gray-800\/40/g, replacement: 'p-6 border-t border-philo-gold/30' },
        
        // Chat Input
        { regex: /w-full rounded-xl border border-gray-200\/50 dark:border-gray-800\/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-\[#D4A017\] focus:border-\[#D4A017\] bg-white dark:bg-\[#0A0F1D\] text-slate-800 dark:text-slate-200 resize-none placeholder-slate-400 dark:placeholder-slate-500/g, replacement: 'w-full rounded-xl border border-philo-gold/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-philo-gold focus:border-philo-gold bg-philo-ivory dark:bg-philo-dark text-philo-dark dark:text-philo-cream resize-none placeholder-philo-dark/40 dark:placeholder-philo-cream/40 font-body' },
        
        { regex: /text-xs text-slate-400 dark:text-slate-500 mt-2/g, replacement: 'text-xs text-philo-dark/50 dark:text-philo-cream/50 mt-2' },
        
        // Buttons
        { regex: /border-gray-200\/50 dark:border-gray-800\/40 text-slate-650 dark:text-slate-300 hover:border-\[#D4A017\]\/40 hover:text-\[#D4A017\] dark:hover:border-\[#D4A017\]\/50/g, replacement: 'border-philo-gold/30 text-philo-dark/70 dark:text-philo-cream/70 hover:border-philo-gold hover:text-philo-gold' },
        { regex: /bg-primary dark:bg-\[#D4A017\] text-white dark:text-\[#0F172A\] hover:bg-primary\/95 dark:hover:bg-\[#D4A017\]\/90/g, replacement: 'bg-gradient-to-r from-philo-gold to-philo-darkGold text-philo-dark hover:-translate-y-0.5 hover:shadow-gold-hover' }
    ];

    replacements.forEach(rule => {
        content = content.replace(rule.regex, rule.replacement);
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ai-assistants.html');
}
