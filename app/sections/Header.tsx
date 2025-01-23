import Image from "next/image";
import LogoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg"
import Button from "../components/Button";

const navigationItems = [
  {
    name: "About",
    href: "#about"
  },
  {
    name: "Features",
    href: "#features"
  },
  {
    name: "Updates",
    href: "#updates"
  },
  {
    name: "Help",
    href: "#help"
  },
  {
    name: "Customers",
    href: "#customers"
  }
]

export default function Header() {
  return (
    <header className="bg-black">
      <div className="p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 blur-md gradient-bg" />
             <Image src={LogoImage} alt="Saas logo" className="relative h-12 w-12" />
          </div>

          <nav className="hidden md:inline-flex">
            <div className="flex items-center gap-6">
              {navigationItems.map((item) => (
              <a 
                href={item.href} 
                key={item.name}
                className="text-white/60 hover:text-white transition"
              >
                {item.name}
              </a>
              ))}

              <Button>
                Get for free
              </Button>
            </div>
            
          </nav>
          {/* Hamburger icon */}
          <div className="border border-white/30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}
