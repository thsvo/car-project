import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navitems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Content",
      path: "/content",
    },
  ];

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start ">
        <Link href={"/"}>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            height={60}
            width={60}
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center space-x-6">
          {navitems.map((item, index) => (
            <Link
              className="font-semibold hover:text-primary duration-300"
              key={index}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-x-4">
          <CiShoppingCart className="h-10 w-7"></CiShoppingCart>
          <CiSearch className="h-10 w-7" />

          <a className="btn btn-primary hover:btn-outline-text-white btn-outline px-8 text-white  ">
            Appoinment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
