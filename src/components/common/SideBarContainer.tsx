import React from "react";

type SideBarPropsType = { children: React.ReactNode };

const SideBar = ({ children }: SideBarPropsType) => {
  return (
    <div className="flex flex-col rounded-md p-6 bg-slate-900 h-screen w-96 gap-4">
      {children}
    </div>
  );
};

export default SideBar;
