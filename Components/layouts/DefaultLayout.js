import React from "react";
import Header from "../Header";
import InfiniteLooper from "../Looper";

const DefaultLayout = ({ children }) => {
  const beltItems = [
    "LOVER & BREEDER OF CREATIVITY •  ",
    "LOVER & BREEDER OF CREATIVITY •  ",
    "LOVER & BREEDER OF CREATIVITY •  ",
    "LOVER & BREEDER OF CREATIVITY •  ",
  ];
  return (
    <div className="bg-[url(../public/bg.png)] min-h-screen bg-[#0A0909] relative">
        <div className="fixed top-[47%] md:top-[46%] w-full flex justify-center">
            <img src="./SWN.png" className="h-[6rem] md:h-[8rem]"/>
        </div>
            <div className="fixed top-1/2 w-full bg-black ">
        <InfiniteLooper speed="12" direction="left">
          {beltItems.map((item, i) => (
            <h4 className=" font-[700] text-[#363535] mr-10" key={i}>
              {item}
            </h4>
          ))}
        </InfiniteLooper>
        </div>
      <div className="container mx-auto relative">
        <Header />
    
        
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
