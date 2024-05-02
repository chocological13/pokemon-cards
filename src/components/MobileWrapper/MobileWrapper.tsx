import React from "react";

const MobileWrapper: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return <main className="bg-[#252A3E] max-w-md min-h-screen h-fit overflow-x-hidden">{children}</main>;
};

export default MobileWrapper;
