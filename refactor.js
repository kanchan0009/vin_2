const fs = require('fs');

const files = [
  'd:/vin_2/app/about/staff/page.tsx',
  'd:/vin_2/app/about/staff/[slug]/page.tsx',
  'd:/vin_2/app/about/organization/page.tsx',
  'd:/vin_2/app/about/location/[slug]/page.tsx',
  'd:/vin_2/app/about/location/page.tsx'
];

for (let file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Add useRef import if not present
  if (!content.includes('import { useRef }')) {
    content = content.replace(/"use client";\r?\n/, '"use client";\nimport { useRef } from "react";\n');
  }

  // Find the component start to inject refs
  const compMatch = content.match(/export default function \w+\(.*?\)\s*\{/);
  if (compMatch) {
    let refsToInject = '';
    if (!content.includes('impactRef = useRef')) refsToInject += '\n  const impactRef = useRef<HTMLDivElement>(null);';
    if (!content.includes('volunteerRef = useRef')) refsToInject += '\n  const volunteerRef = useRef<HTMLDivElement>(null);';
    if (!content.includes('trustRef = useRef')) refsToInject += '\n  const trustRef = useRef<HTMLDivElement>(null);';
    if (!content.includes('testimonialsRef = useRef')) refsToInject += '\n  const testimonialsRef = useRef<HTMLDivElement>(null);';
    
    if (refsToInject !== '') {
      content = content.replace(compMatch[0], compMatch[0] + refsToInject + '\n');
    }
  }

  // 1. Impact Section Left Arrow
  content = content.replace(
    /\{\/\* Left Arrow \*\/\}\s*<button className="absolute -left-4 top-1\/2 -translate-y-1\/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">/g,
    `{/* Left Arrow */}
          <button 
            onClick={() => impactRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition opacity-0 group-hover/impact:opacity-100"`
  );

  // 1. Impact Section Right Arrow
  content = content.replace(
    /\{\/\* Right Arrow \*\/\}\s*<button className="absolute -right-4 top-1\/2 -translate-y-1\/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">/g,
    `{/* Right Arrow */}
          <button 
            onClick={() => impactRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition opacity-0 group-hover/impact:opacity-100"`
  );

  // 1. Impact Section Group & Cards container
  content = content.replace(
    /\{\/\* Cards \*\/\}\s*<div className="relative">/g,
    `{/* Cards */}\n        <div className="relative group/impact">`
  );
  content = content.replace(
    /<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">/g,
    `<div \n            ref={impactRef}\n            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"\n            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}\n          >`
  );

  // 1. Impact Section Cards
  content = content.replace(
    /<div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">/g,
    `<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">`
  );

  // 2. Volunteers Say Left Arrow
  content = content.replace(
    /\{\/\* Left Arrow \*\/\}\s*<button className="absolute left-\[-20px\] top-1\/2 z-20 hidden h-9 w-9 -translate-y-1\/2 items-center justify-center rounded-full border border-\[#e5e7eb\] bg-white shadow-sm md:flex">/g,
    `{/* Left Arrow */}
            <button 
              onClick={() => volunteerRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="absolute left-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex opacity-0 group-hover/vol:opacity-100 transition"`
  );

  // 2. Volunteers Say Right Arrow
  content = content.replace(
    /\{\/\* Right Arrow \*\/\}\s*<button className="absolute right-\[-20px\] top-1\/2 z-20 hidden h-9 w-9 -translate-y-1\/2 items-center justify-center rounded-full border border-\[#e5e7eb\] bg-white shadow-sm md:flex">/g,
    `{/* Right Arrow */}
            <button 
              onClick={() => volunteerRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="absolute right-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex opacity-0 group-hover/vol:opacity-100 transition"`
  );

  // 2. Volunteers Say Group & Cards Container
  content = content.replace(
    /\{\/\* Slider Area \*\/\}\s*<div className="relative">/g,
    `{/* Slider Area */}\n          <div className="relative group/vol">`
  );
  content = content.replace(
    /<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">/g,
    `<div \n              ref={volunteerRef}\n              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"\n              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}\n            >`
  );

  // 2. Volunteers Say Cards
  content = content.replace(
    /<div className="rounded-2xl border border-\[#ececec\] bg-\[#E2E8F0\] p-6 shadow-\[0_4px_20px_rgba\(0,0,0,0\.03\)\]">/g,
    `<div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">`
  );

  // 3. Trust Section Left Arrow
  content = content.replace(
    /\{\/\* Navigation Arrows \*\/\}\s*<div className="hidden items-center gap-2 md:flex">\s*<button className="flex h-9 w-9 items-center justify-center rounded-full border border-\[#dcdcdc\] bg-white shadow-sm transition hover:bg-gray-50">/g,
    `{/* Navigation Arrows */}
            <div className="hidden items-center gap-2 md:flex">
              <button 
                onClick={() => trustRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50"`
  );

  // 3. Trust Section Right Arrow
  content = content.replace(
    /<\/svg>\s*<\/button>\s*<button className="flex h-9 w-9 items-center justify-center rounded-full border border-\[#dcdcdc\] bg-white shadow-sm transition hover:bg-gray-50">/g,
    `</svg>
              </button>

              <button 
                onClick={() => trustRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50"`
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully refactored: ' + file);
  } else {
    console.log('No changes made to: ' + file);
  }
}
