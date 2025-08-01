import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
            <a href="#about" className="block px-4 py-2 hover:bg-muted">
              What is this?
            </a>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <a href="#projects" className="block px-4 py-2 hover:bg-muted">
              View Projects
            </a>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <a href="#contact" className="block px-4 py-2 hover:bg-muted">
              Get in Touch
            </a>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
