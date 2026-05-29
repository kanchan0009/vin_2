const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(appDir);

files.forEach(file => {
  // Skip components directory itself
  if (file.includes(path.join('app', 'components'))) {
    return;
  }

  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  let hasChooseImpact = false;
  let hasOurTeam = false;

  // 1. Refactor Choose Impact Section
  const impactIndex = content.toLowerCase().indexOf('choose where your impact begins');
  if (impactIndex !== -1) {
    const startSectionIdx = content.lastIndexOf('<section', impactIndex);
    const endSectionIdx = content.indexOf('</section>', impactIndex);
    if (startSectionIdx !== -1 && endSectionIdx !== -1 && startSectionIdx < impactIndex) {
      const sectionContent = content.slice(startSectionIdx, endSectionIdx + '</section>'.length);
      content = content.replace(sectionContent, '<ChooseImpact />');
      hasChooseImpact = true;
    }
  }

  // 2. Refactor Our Team Members Section
  const teamIndex = content.toLowerCase().indexOf('our team members');
  if (teamIndex !== -1) {
    const startSectionIdx = content.lastIndexOf('<section', teamIndex);
    const endSectionIdx = content.indexOf('</section>', teamIndex);
    if (startSectionIdx !== -1 && endSectionIdx !== -1 && startSectionIdx < teamIndex) {
      const sectionContent = content.slice(startSectionIdx, endSectionIdx + '</section>'.length);
      // Check if it is the slider section (contains teamRef or scroll arrows)
      if (
        sectionContent.includes('teamRef') || 
        sectionContent.includes('&#10094;') || 
        sectionContent.includes('&#10095;') ||
        sectionContent.includes('❮') ||
        sectionContent.includes('❯')
      ) {
        content = content.replace(sectionContent, '<OurTeam />');
        hasOurTeam = true;
      }
    }
  }

  // 3. Clean up refs and add imports if changed
  if (hasChooseImpact || hasOurTeam) {
    // Add imports
    let imports = '';
    if (hasChooseImpact && !content.includes('import ChooseImpact')) {
      imports += 'import ChooseImpact from "@/app/components/ChooseImpact";\n';
    }
    if (hasOurTeam && !content.includes('import OurTeam')) {
      imports += 'import OurTeam from "@/app/components/OurTeam";\n';
    }

    if (imports) {
      // Find import or client directive to insert imports after
      if (content.includes('"use client";')) {
        content = content.replace('"use client";', '"use client";\n' + imports);
      } else if (content.includes("'use client';")) {
        content = content.replace("'use client';", "'use client';\n" + imports);
      } else {
        content = imports + content;
      }
    }

    // Clean up unused refs
    if (hasChooseImpact) {
      content = content.replace(/const\s+impactRef\s*=\s*useRef\s*(?:<\s*HTMLDivElement\s*>)?\(\s*null\s*\);?/g, '');
    }
    if (hasOurTeam) {
      content = content.replace(/const\s+teamRef\s*=\s*useRef\s*(?:<\s*HTMLDivElement\s*>)?\(\s*null\s*\);?/g, '');
    }

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Refactored: ${path.relative(__dirname, file)} (ChooseImpact: ${hasChooseImpact}, OurTeam: ${hasOurTeam})`);
    }
  }
});
