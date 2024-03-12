import React from 'react'
import logo from "../../assets/bratlogo.webp";

export default function Footer() {
  return (
    <div className="flex bg-[#4978B5]  justify-center py-5">
      <div className="">
        <img className="mb-4" src={logo} alt="" />
        <p>All Rights Reserved 2024</p>
      </div>
    </div>
  );
}
