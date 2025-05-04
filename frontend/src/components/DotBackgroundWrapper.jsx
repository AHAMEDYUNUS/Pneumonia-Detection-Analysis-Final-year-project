import React from "react";

const DotBackgroundWrapper = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Dotted Background */}
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#a3a3a3_1px,transparent_1px)]" />
      
      {/* Optional: Radial Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DotBackgroundWrapper;
