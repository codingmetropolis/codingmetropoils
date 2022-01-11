import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [navLinks, setNavLinks] = useState([
    { name: "blogs", url: "/blogs" },
    { name: "projects", url: "/#" },
    { name: "services", url: "/#" },
  ]);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              CodingMetropolis
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.url}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
