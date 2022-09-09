import React from "react";

const About = () => {
  return (
    <section className="flex items-center justify-center flex-col ">
    <div className="max-w-[30rem] px-4">
    <h5 className="mt-[63px] mb-16 text-center">HI, I&apos;M SWEENEY</h5>
      <p className="text-center text-[29.4017px]">
        I am a definite <span className="font-[700]">creative</span> with a love for <span className="font-[700]">branding</span>  and <span className="font-[700]">interface</span> design.
        My passion fuels my creativity and curiosity and it is the perfect mix
        for helping brands and individuals attain their creative goals through
        my intentional designs.
      </p>
      <div  className="flex justify-between mt-[59px]">
        <p className="text-[18.32px]">{'< Meet me'}</p>
        <p className="text-[18.32px]">{'View My work >'}</p>
      </div>
    </div>
     
    </section>
  );
};

export default About;
