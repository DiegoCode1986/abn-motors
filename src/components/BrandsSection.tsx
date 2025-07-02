import { Button } from "@/components/ui/button";

export const BrandsSection = () => {
  const brands = [
    {
      name: "BMW",
      specialty: "Atualização de software GS, S e XR",
      description: "Especialistas em toda linha BMW com tecnologia de diagnóstico avançada"
    },
    {
      name: "HARLEY DAVIDSON", 
      specialty: "Manutenção completa",
      description: "Serviços especializados para a linha completa Harley Davidson"
    },
    {
      name: "TRIUMPH",
      specialty: "Scanner e diagnóstico",
      description: "Tecnologia específica para diagnóstico e manutenção Triumph"
    },
    {
      name: "INDIAN",
      specialty: "Scanner e manutenção",
      description: "Equipamentos especializados para motocicletas Indian"
    },
    {
      name: "HONDA",
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
              className="bg-ride-gray p-6 sm:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-ride-orange mb-2">
                {brand.name}
              </h3>
              <h4 className="text-lg font-semibold text-white mb-3">
                {brand.specialty}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center animate-fade-in animation-delay-700">
          <div className="bg-ride-orange bg-opacity-10 p-6 sm:p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Sua marca não está listada?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Entre em contato conosco! Nossa experiência de mais de 20 anos nos permite 
              trabalhar com diversas outras marcas e modelos de motocicletas.
            </p>
            <Button className="bg-ride-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300">
              CONSULTE SUA MARCA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
