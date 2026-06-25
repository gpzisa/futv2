const fs = require('fs');
const lines = fs.readFileSync('app.js', 'utf8').split('\n');
lines.forEach((line, i) => {
    if (line.includes('spinWheel') || line.includes('spinDuration') || line.includes('cubic-bezier') || line.includes('transition:')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
