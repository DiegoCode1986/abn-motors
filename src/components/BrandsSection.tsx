import { Button } from "@/components/ui/button";

export const BrandsSection = () => {
  const brands = [
    {
      name: "BMW",
      logo: "/bmw.jpg",
      specialty: "Atualização de software GS, S e XR",
      description: "Especialistas em toda linha BMW com tecnologia de diagnóstico avançada"
    },
    {
      name: "HARLEY DAVIDSON",
      logo: "/harley-removebg.png",
      specialty: "Manutenção completa",
      description: "Serviços especializados para a linha completa Harley Davidson"
    },
    {
      name: "TRIUMPH",
      logo: "triumph.jpg",
      specialty: "Scanner e diagnóstico",
      description: "Tecnologia específica para diagnóstico e manutenção Triumph"
    },
    {
      name: "INDIAN",
      logo: "/indian-removeb.png",
      specialty: "Scanner e manutenção",
      description: "Equipamentos especializados para motocicletas Indian"
    },
    {
      name: "HONDA",
      logo: "/honda-removebg.png",
      specialty: "Incluindo Gold Wing",
      description: "Manutenção completa Honda incluindo a sofisticada Gold Wing"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">MARCAS ATENDIDAS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            ESPECIALISTAS EM MARCAS PREMIUM
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Trabalhamos com as principais marcas de motocicletas de média e alta cilindrada, 
            oferecendo serviços especializados e tecnologia específica para cada marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-ride-gray p-6 sm:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <img src={brand.logo} alt={`${brand.name} logo`} className="h-22 mb-6 object-contain" />
                <h3 className="text-xl font-bold text-ride-orange tracking-wider uppercase">{brand.name}</h3>
                <p className="text-white font-semibold mb-3">{brand.specialty}</p>
                <p className="text-gray-300 text-sm">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
