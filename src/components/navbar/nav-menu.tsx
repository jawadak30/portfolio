import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // ✅ for Vite + React

type NavMenuProps = {
  className?: string;
  [key: string]: any;
};

export const NavMenu = ({ className, ...props }: NavMenuProps) => {
  return (
    <NavigationMenu className={cn("hidden lg:flex", className)} {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link to="/about" className="block px-4 py-2 hover:bg-muted">
              What is this?
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link to="/projects" className="block px-4 py-2 hover:bg-muted">
              View Projects
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link to="/contact" className="block px-4 py-2 hover:bg-muted">
              Get in Touch
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
