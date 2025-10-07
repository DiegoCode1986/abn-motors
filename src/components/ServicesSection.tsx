
import { Wrench, Cpu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "MANUTENÇÃO ESPECIALIZADA",
      description: "Manutenção completa para motocicletas de média e alta cilindrada com mais de 20 anos de experiência técnica especializada."
    },
    {
      icon: Cpu,
      title: "TECNOLOGIA AVANÇADA",
      description: "Scanner das marcas Triumph, Indian, Honda incluindo Gold wing, Harley e BMW. Atualização de software de toda a linha GS, S e XR da BMW."
    },
    {
      icon: ShoppingBag,
      title: "PRODUTOS PREMIUM",
      description: "Óleos, baterias, filtros e aditivos de alta qualidade, selecionados especialmente para motocicletas de alta performance."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">SERVIÇOS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            NOSSOS ESPECIALIDADES
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Oferecemos serviços completos para motocicletas de média e alta cilindrada, 
            combinando experiência tradicional com tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-ride-dark p-6 sm:p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-ride-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-ride-orange group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
               
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
