import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path
      d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.52-1.29.372-.775.372-1.447.26-1.59-.115-.143-.372-.215-.6-.215zm-2.722 4.305c-1.48 0-2.93-.402-4.2-1.195L8.34 21.9l.925-2.26c-1.017-1.36-1.518-2.94-1.518-4.635 0-4.002 3.226-7.228 7.226-7.228s7.228 3.226 7.228 7.228c0 4.00-3.226 7.226-7.228 7.226z"
      fill="currentColor"
    />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* "Join the Club" Section */}
      <div 
        className="relative bg-orange-600 text-center py-16 sm:py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/banner.PNG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wider">Junte-se ao Clube</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Fique por dentro das novidades, eventos exclusivos e promoções especiais da ABN Motors. Faça parte da nossa comunidade de apaixonados por duas rodas.
        </p>
        <Button variant="secondary" className="bg-black text-white hover:bg-gray-800 px-8 py-3 uppercase">
          Fazer orçamento
        </Button>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          
          {/* Left Logo */}
          <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center md:justify-start">
            <img src="/logo1.png" alt="ABN MOTORS" className="h-16 w-auto opacity-80" />
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center mb-6 md:mb-0 md:w-1/3">
            <p className="text-sm uppercase tracking-wider mb-2 text-gray-400">Siga-nos</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} ABN MOTORS. Todos os direitos reservados.</p>
          </div>

          {/* Right placeholder to balance the layout */}
          <div className="md:w-1/3">
            {/* Este espaço é para equilibrar o layout, como na imagem de referência. */}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/552134567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon className="w-12 h-12" />
      </a>
    </footer>
  );
};