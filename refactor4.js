const fs = require('fs');
const files = [
  'd:/vin_2/app/about/staff/[slug]/page.tsx',
  'd:/vin_2/app/about/location/[slug]/page.tsx'
];
for(let file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('use client')) {
    content = '"use client";\nimport { use, useRef } from "react";\n' + content;
  }
  
  content = content.replace(/export default async function/, 'export default function');
  content = content.replace(/await params;/, 'use(params);');
  
  if (!content.includes('const impactRef')) {
    content = content.replace(/(const \{ slug \} = .*?;)/, '$1\n  const teamRef = useRef<HTMLDivElement>(null);\n  const impactRef = useRef<HTMLDivElement>(null);\n  const volunteerRef = useRef<HTMLDivElement>(null);\n  const trustRef = useRef<HTMLDivElement>(null);\n');
  }
  
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
}
