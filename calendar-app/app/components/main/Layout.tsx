import React from "react";

interface LayoutProps {
  children: React.ReactNode
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-32 text-dark dark:text-light  xl:px-24 lg:px-16 md:px-12 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
