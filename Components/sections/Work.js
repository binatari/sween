import React from "react";
import VertCard from "../VertCard";

const Work = () => {
  const links = ["BRANDING", "CONTENT", "INTERFACE", "OTHERS"];
  return (
    <section className="flex justify-center items-center min-h-screen" style={{height:"auto"}} >
      <div className=" py-[96px] px-[30px] md:flex flex-wrap bg-[url(../public/pattern.png)]">
        {links.map((link, key) => (
          <VertCard key={key} link={link} />
        ))}
      </div>
    </section>
  );
};

export default Work;
