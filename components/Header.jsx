
import Link from "next/link";
import { getCategories } from "../services";
const navLinks=[
  { name: "blogs", url: "/blogs" },
  { name: "projects", url: "/#" },
  { name: "services", url: "/services" },
  { name: "Home", url: "/" },

]
const Header = () => {
  return (
    <div className="container mx-auto  mb-8">
      <div className="border-b w-full inline-block  py-8   bg-blue-600 px-8 ">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-4xl text-white  ">
              CodingMetropolis
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.url}>
              <span className="md:float-right mt-2 align-middle text-white  text-xl ml-4 cursor-pointer">
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
