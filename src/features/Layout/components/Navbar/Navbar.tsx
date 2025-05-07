import Link from "next/link"; 
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";

const Navbar = () => {
  return (
    <nav className={"flex flex-col items-center bg-white shadow"}>
      <div className="flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Plates Co
        </Link>

        <DesktopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
