const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');
    
    // Check if design-tokens is already included
    if (!content.includes('design-tokens.css')) {
        // Insert before tailwind script
        content = content.replace(
            /<script src="https:\/\/cdn.tailwindcss.com.*"><\/script>/,
            '<link rel="stylesheet" href="css/design-tokens.css">\n    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>'
        );
        fs.writeFileSync(path.join(dir, file), content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`Skipped ${file}, already contains design-tokens.css`);
    }
});
