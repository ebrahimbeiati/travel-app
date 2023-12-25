// "use client";
// import { useState } from "react";
// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// const Navbar = () => {
//    const [isOpen, setIsOpen] = useState(false);

//    //Handles the opening and closing of our nav
//    const handleClick = () => {
//      setIsOpen(!isOpen);
//    };
//   return (
//     <nav className=" flexBetween max-container padding-container relative z-40 py-6">
//       <Link href="/">
//         <Image
//           src="/logo.jpeg"
//           alt="logo"
//           width={74}
//           height={74}
//           className="rounded"
//         />
//       </Link>
//       <ul className="hidden h-full gap-10 lg:flex ">
//         {NAV_LINKS.map((link) => (
//           <Link
//             key={link.key}
//             href={link.href}
//             className="text-gray-90 hover:text-green-50 transition-all hover:font-bold"
//           >
//             {link.label}
//           </Link>
//         ))}
//       </ul>
//       <div className="lg:flexCenter hidden ">
//         <Button
//           type="button"
//           title="Login"
//           variant="btn_dark_green"
//           icon="/user.jpeg"
//         />
//           </div>
//           <Link href='/'>
//               <Image
//         src="/menu.jpeg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//         onClick={handleClick}
//       />
//           </Link>
     
//     </nav>
//   );
// };

// export default Navbar;
 "use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flexBetween max-container spaceBetween padding-container relative z-40 py-6">
      <Link href="/">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={74}
          height={74}
          className="rounded"
        />
      </Link>
      <div className="lg:flex hidden items-center">
        <ul className="hidden h-full gap-12 lg:flex ">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="text-gray-90 hover:text-green-50 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:ml-8">
          <Button
            type="button"
            title="Login"
            variant="btn_dark_green"
            icon="/user.jpeg"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative">
          <Image
            src={isOpen ? "/close-icon.jpeg" : "/menu.jpeg"}
            alt={isOpen ? "close" : "menu"}
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={handleClick}
          />
          <ul
            className={`lg:hidden absolute top-16 right-0 bg-white w-40 flex flex-col gap-4 p-4 transform transition-transform duration-300 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-gray-90 hover:text-green-50 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



