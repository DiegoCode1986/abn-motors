
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-8 border-b border-gray-800">
          <div className="mb-6 lg:mb-0">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">RIDE</span>
              <span className="bg-ride-orange px-2 py-1 rounded text-white ml-1">ON</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Seja parte de uma equipe especializada em manutenção de motocicletas. 
              Inscreva-se para receber atualizações sobre novas vagas e oportunidades.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="text-2xl font-bold text-white mb-4 lg:mb-0 lg:mr-8">
              NEWSLETTER
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu melhor email aqui" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-w-[250px]"
              />
              <Button className="bg-ride-orange hover:bg-orange-600 px-6">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ride-orange" />
                <span>(021) 3456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ride-orange" />
                <span>customer@ride-on.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ride-orange mt-1" />
                <span>Rua Das Motocicletas, 123<br />São Paulo - SP</span>
              </div>
              <div className="text-gray-300">
                Seg - Sex 8 am - 7 pm
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-4">SOBRE</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-ride-orange transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Empregos</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Últimas Notícias</a></li>
            </ul>
          </div>

          {/* Interest */}
          <div>
            <h4 className="font-semibold text-white mb-4">INTERESSE</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-ride-orange transition-colors">Contate-nos</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Encontre um Dealer</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Proprietários</a></li>
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="font-semibold text-white mb-4">COMERCIAL</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-ride-orange transition-colors">Política / Militar</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Torne-se um Dealer</a></li>
              <li><a href="#" className="hover:text-ride-orange transition-colors">Sistemas PowerTrain</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-ride-orange cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-gray-400 hover:text-ride-orange cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 text-gray-400 hover:text-ride-orange cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-ride-orange cursor-pointer transition-colors" />
            <Youtube className="w-6 h-6 text-gray-400 hover:text-ride-orange cursor-pointer transition-colors" />
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm text-gray-400">
            <span>COPYRIGHT 2024 RIDE-ON ALL RIGHTS RESERVED</span>
            <a href="#" className="hover:text-ride-orange transition-colors">POLICY</a>
            <a href="#" className="hover:text-ride-orange transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-ride-orange transition-colors">TERMS</a>
            <a href="#" className="hover:text-ride-orange transition-colors">ACCESSIBILITY</a>
            <a href="#" className="hover:text-ride-orange transition-colors">SITE MAP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
