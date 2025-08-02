import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type NavMenuProps = {
  className?: string;
  [key: string]: any;
};

export const NavMenu = ({ className, ...props }: NavMenuProps) => {
  return (
    <NavigationMenu className={cn("hidden lg:flex", className)} {...props}>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <a
            href="#about"
            className="px-4 py-2 font-medium hover:text-primary transition-colors"
          >
            About
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="#projects"
            className="px-4 py-2 font-medium hover:text-primary transition-colors"
          >
            Projects
          </a>
        </NavigationMenuItem>
                <NavigationMenuItem>
          <a
            href="#skills"
            className="px-4 py-2 font-medium hover:text-primary transition-colors"
          >
            Skills
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="#contact"
            className="px-4 py-2 font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
