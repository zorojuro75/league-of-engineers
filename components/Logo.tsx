import React from "react";
interface LogoProps {
  children: React.ReactNode;
}
const Logo: React.FC<LogoProps> = ({ children }) => {
  return (
    <div className="px-6 py-4 text-green-900 font-extrabold text-2xl">
      {children}
    </div>
  );
};

export default Logo;
