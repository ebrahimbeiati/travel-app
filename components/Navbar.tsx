import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-40 py-6">
      <Link href="/">
        <Image src="/logo.jpeg" alt="logo" width={74} height={74} className="rounded" />
      </Link>
      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href}
              className="text-gray-90 reqular-16 hover:text-green-50 transition-all hover:font-bold">{link.label}
          </Link>
        ))}
          </ul>
          <div className="lg:fexCenter hidden ">
              <Button
                  type="button"
                  title="Login"
                  variant="btn_dark_green"
                  icon="/user.jpeg"
              />
              </div>
    </nav>
  );
}

export default Navbar
