import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-6 pt-[97px] fixed w-[90%] container">
      <div className=" ">
        <img src="./logo.png" className="" />
      </div>
      <ul className="sm:flex hidden">
        <li className="ml-10">
          <h5>WORK </h5>
        </li>
        <li className="ml-10">
          <h5>SERVICES</h5>
        </li>
        <li className="ml-10">
          <h5> FOR DESIGNERS</h5>
        </li>
      </ul>
    </div>
  );
};

export default Header;
