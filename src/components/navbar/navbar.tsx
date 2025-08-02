import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70   mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <p style={{
          fontSize: "1.2rem",
          color: "var(--foreground)",
          fontWeight: "bold",
        }}>Jawad Akabour</p>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
          </Button>
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
