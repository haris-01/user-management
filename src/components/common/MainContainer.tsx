import React from "react";

type MainContainerPropsType = { children: React.ReactNode };

const MainContainer = ({ children }: MainContainerPropsType) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {children}
    </div>
  );
};

export default MainContainer;
