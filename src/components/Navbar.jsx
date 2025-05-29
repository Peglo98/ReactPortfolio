import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <>
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
          <div className="container flex items-center justify-between">
            <a
                href="#hero"
                className="text-xl font-bold text-primary flex items-center"
            >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Peglo98 </span> Portfolio
            </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, idx) => (
                  <a
                      key={idx}
                      href={item.href}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        <div
            className={cn(
                "fixed inset-0 w-full h-screen bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
                "transition-opacity duration-300 md:hidden",
                isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}
        >
          {/* Close button inside overlay */}
          <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-foreground"
              aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col space-y-8 text-xl overflow-y-auto">
            {navItems.map((item, idx) => (
                <a
                    key={idx}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
            ))}
          </div>
        </div>
      </>
  );
};
