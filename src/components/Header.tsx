
import { MapPin, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-ride-dark border-b border-ride-gray sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top bar - hidden on small screens */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-ride-gray">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-ride-orange transition-colors">
              <MapPin className="w-4 h-4" />
              <span>MAP & HOURS</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-ride-orange transition-colors">
              <Phone className="w-4 h-4" />
              <span>(021) 3456 7890</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 hover:text-ride-orange transition-colors cursor-pointer">ENGLISH</span>
            <span className="text-gray-300 hover:text-ride-orange transition-colors cursor-pointer">LOGIN</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-white">RIDE</span>
              <span className="bg-ride-orange px-2 py-1 rounded text-white ml-1 transform hover:scale-105 transition-transform">ON</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-ride-orange transition-colors duration-300 relative group">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ride-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors duration-300 relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ride-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors duration-300 relative group">
              SERVICES CENTER
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ride-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors duration-300 relative group">
              PAGE
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ride-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors duration-300 relative group">
              BLOG
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ride-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors duration-300 relative group">
              TEAM
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ride-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden sm:block bg-ride-orange hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded transform hover:scale-105 transition-all duration-300">
              CONTACT US
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-ride-gray animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-ride-orange transition-colors py-2">HOME</a>
              <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors py-2">ABOUT</a>
              <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors py-2">SERVICES CENTER</a>
              <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors py-2">PAGE</a>
              <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors py-2">BLOG</a>
              <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors py-2">TEAM</a>
              <Button className="bg-ride-orange hover:bg-orange-600 text-white px-6 py-2 rounded w-full mt-4">
                CONTACT US
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
