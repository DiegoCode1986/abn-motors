
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-ride-dark border-b border-ride-gray">
      <div className="container mx-auto px-6">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-ride-gray">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>MAP & HOURS</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>(021) 3456 7890</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">ENGLISH</span>
            <span className="text-gray-300">LOGIN</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">RIDE</span>
              <span className="bg-ride-orange px-2 py-1 rounded text-white ml-1">ON</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-ride-orange transition-colors">HOME</a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors">ABOUT</a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors">SERVICES CENTER</a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors">PAGE</a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors">BLOG</a>
            <a href="#" className="text-gray-300 hover:text-ride-orange transition-colors">TEAM</a>
          </nav>

          <Button className="bg-ride-orange hover:bg-orange-600 text-white px-6 py-2 rounded">
            CONTACT US
          </Button>
        </div>
      </div>
    </header>
  );
};
