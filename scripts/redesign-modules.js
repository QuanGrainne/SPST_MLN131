const fs = require('fs');
const path = require('path');

const files = [
    'module1.html',
    'module2.html',
    'module3.html',
    'module4.html',
    'module5.html',
    'module6.html'
];

const replacements = [
    { regex: /\bbg-background-light\b/g, replacement: 'bg-philo-ivory' },
    { regex: /\bdark:bg-background-dark\b/g, replacement: 'dark:bg-philo-dark' },
    { regex: /\btext-text-main-light\b/g, replacement: 'text-philo-dark' },
    { regex: /\bdark:text-text-main-dark\b/g, replacement: 'dark:text-philo-cream' },
    { regex: /\btext-text-muted-light\b/g, replacement: 'text-philo-dark/70' },
    { regex: /\bdark:text-text-muted-dark\b/g, replacement: 'dark:text-philo-cream/70' },
    { regex: /\bbg-surface-light\b/g, replacement: 'bg-philo-ivory' },
    { regex: /\bdark:bg-surface-dark\b/g, replacement: 'dark:bg-philo-burgundy/80' },
    
    { regex: /\btext-primary\b/g, replacement: 'text-philo-gold' },
    { regex: /\bborder-primary\b/g, replacement: 'border-philo-gold' },
    { regex: /\bbg-primary\b/g, replacement: 'bg-philo-gold' },
    { regex: /\bfrom-primary\b/g, replacement: 'from-philo-gold' },
    { regex: /\bto-secondary\b/g, replacement: 'to-philo-darkGold' },
    { regex: /\bhover:border-primary\b/g, replacement: 'hover:border-philo-gold' },
    { regex: /\bhover:text-primary\b/g, replacement: 'hover:text-philo-gold' },
    { regex: /\bhover:bg-primary\b/g, replacement: 'hover:bg-philo-gold' },
    
    { regex: /\bfont-display\b/g, replacement: 'font-heading' },
    
    // Replace light blue background used for badges/tabs
    { regex: /\bbg-blue-50\b/g, replacement: 'bg-philo-gold/10' },
    { regex: /\bdark:bg-blue-900\/20\b/g, replacement: 'dark:bg-philo-gold/5' },
    { regex: /\btext-blue-700\b/g, replacement: 'text-philo-gold' },
    { regex: /\bborder-blue-100\b/g, replacement: 'border-philo-gold/30' },
    
    // Replace light red backgrounds used for badges/tabs
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
    
    // Gradients and specific structural classes
    { regex: /class="lesson-header-academic"/g, replacement: 'class="lesson-header-academic bg-gradient-to-br from-philo-dark to-philo-darkGold/20"' },
    
    // Remove the custom gradient definition from <style> blocks
    { regex: /background:\s*linear-gradient\([^;]+;\s*padding:\s*2rem;/g, replacement: 'padding: 2rem;' },
    
    // Button styling (Start quiz, submit button)
    { regex: /\bbg-blue-600\b/g, replacement: 'bg-philo-gold' },
    { regex: /\bhover:bg-blue-700\b/g, replacement: 'hover:bg-philo-darkGold' },
    { regex: /\btext-blue-600\b/g, replacement: 'text-philo-gold' },
    { regex: /\bgray-100\b/g, replacement: 'philo-gold/20' },
    { regex: /\bgray-200\b/g, replacement: 'philo-gold/30' },
    { regex: /\bgray-700\b/g, replacement: 'philo-gold/20' },
    { regex: /\bgray-800\b/g, replacement: 'philo-gold/10' },
    { regex: /\bgray-900\b/g, replacement: 'philo-dark' },
    { regex: /\bgray-300\b/g, replacement: 'philo-gold/40' },
    { regex: /\bgray-600\b/g, replacement: 'philo-gold/60' },
];

files.forEach(file => {
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
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes made to ${file}`);
    }
});
