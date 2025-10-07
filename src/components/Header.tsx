import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-ride-dark border-b border-ride-gray sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top bar - hidden on small screens */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-ride-gray">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-ride-orange transition-colors">
              <MapPin className="w-4 h-4" />
              <span>MAPA E HORÁRIOS</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 hover:text-ride-orange transition-colors">
            <Phone className="w-4 h-4" />
            <span>61 98575-6479</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="relative flex justify-center items-center py-4">
          {/* Left side for tablet and up - Social Icons */}
          <div className="hidden md:flex absolute left-0 items-center space-x-4">
            <a href="https://www.instagram.com/abnmoto" className="text-gray-300 hover:text-ride-orange transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/abnmotoservice/photos/?locale=pt_BR" className="text-gray-300 hover:text-ride-orange transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/logo1.png" alt="ABN MOTORS" className="h-28 w-48" />
            </a>
          </div>

          {/* Right side is empty to keep logo centered with left side items */}
          <div className="hidden md:flex absolute right-0 items-center space-x-4">
             {/* This div is a placeholder to balance the flexbox */}
          </div>
        </div>
      </div>
    </header>
  );
};