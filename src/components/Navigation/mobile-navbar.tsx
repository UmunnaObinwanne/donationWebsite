"use client";

import { Menu, X, Search } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

  interface MobileNavbarProps {
  children?: ReactNode;  // Add this interface
}

export function MobileNavbar({children}: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");



  const menuItems = [
    "Home",
    "About Us",
    "Our Work",
    "Get Involved",
    "News & Stories",
    "Contact"
  ];

  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = overflow;
  }, [isOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <button 
        className="fixed right-4 top-4 z-50 md:hidden text-black" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      <div 
        className={`fixed inset-0 w-full h-full bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header with Search and Close */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative flex items-center">
                <Search className="absolute left-0 h-5 w-5 text-white/70" />
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-1 bg-transparent border-b border-white/30 focus:outline-none focus:border-white text-white placeholder:text-white/70"
                />
              </div>
            </form>
            <button 
              className="text-white flex-shrink-0" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-xl font-medium text-white hover:text-white/70 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}