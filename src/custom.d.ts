// svg
declare module '*.svg' {
  import React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

// font
declare module '*.woff';
declare module '*.woff2';
