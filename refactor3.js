const fs = require('fs');
const files = [
  'd:/vin_2/app/about/staff/page.tsx',
  'd:/vin_2/app/about/staff/[slug]/page.tsx',
  'd:/vin_2/app/about/organization/page.tsx',
  'd:/vin_2/app/about/location/[slug]/page.tsx',
  'd:/vin_2/app/about/location/page.tsx'
];
for(let file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let orig = content;
  
  content = content.replace(/opacity-100"\s*❮/g, 'opacity-100">\n            ❮');
  content = content.replace(/opacity-100"\s*❯/g, 'opacity-100">\n            ❯');
  content = content.replace(/opacity-100 transition"\s*<svg/g, 'opacity-100 transition">\n              <svg');
  content = content.replace(/hover:bg-gray-50"\s*<svg/g, 'hover:bg-gray-50">\n                <svg');
  
  if(content !== orig) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
}
