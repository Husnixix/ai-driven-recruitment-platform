import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "../ui/mode-toggle";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative top-0 border-b-transparent shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-3">
        <div className="text-3xl font-medium text-underlay-1">
          <Link to="/">HirelyAI</Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex justify-center gap-x-6 items-center">
            <Link to="/">Home</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in">Sign In</Link>
              <Button asChild>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </SignedOut>
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Button onClick={toggleMenu} className="focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 mt-2 w-full md:hidden bg-muted shadow-lg rounded`}
        >
          <div className="flex flex-col items-center p-4 space-y-4">
            <Link to="/" className="w-full text-center">
              Home
            </Link>
            <SignedIn>
              <UserButton className="w-full text-center" />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="w-full text-center">
                Sign In
              </Link>
              <Button className="w-full">
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </SignedOut>
            <ModeToggle className="w-full text-center" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
