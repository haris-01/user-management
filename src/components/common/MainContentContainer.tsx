import React from "react";

type Props = { children: React.ReactNode };

const MainContentContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-col border-2 rounder-md w-3/6 bg-gray-900 p-8 gap-4 ">
      {children}
    </div>
  );
};

export default MainContentContainer;
