const fs = require('fs');

const files = [
  'd:/vin_2/app/about/staff/page.tsx',
  'd:/vin_2/app/about/staff/[slug]/page.tsx',
  'd:/vin_2/app/about/organization/page.tsx',
  'd:/vin_2/app/about/location/[slug]/page.tsx',
  'd:/vin_2/app/about/location/page.tsx',
  'd:/vin_2/app/program/page.tsx',
  'd:/vin_2/app/affiliation/page.tsx'
];

for (let file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Add missing > to button tags that end with group-hover/impact:opacity-100"
  content = content.replace(/opacity-100"\s*([❮❯])/g, 'opacity-100">\n            $1');
  
  // Also fix `<svg` cases for volunteers say
  content = content.replace(/opacity-100"\s*<svg/g, 'opacity-100">\n              <svg');

  // And for the trust section
  content = content.replace(/hover:bg-gray-50"\s*<svg/g, 'hover:bg-gray-50">\n                <svg');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully fixed syntax in: ' + file);
  } else {
    console.log('No syntax errors found in: ' + file);
  }
}
