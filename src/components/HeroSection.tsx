
export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center bg-no-repeat flex items-center" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
          url('/banner.PNG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%'
      }}
    >


      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base animate-fade-in">
              <span>HOME</span>
              <span>/</span>
              <span className="text-ride-orange">OFICINA ESPECIALIZADA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 animate-fade-in animation-delay-200 text-white leading-tight">
              ABN MOTO SERVICES
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in animation-delay-300 leading-relaxed">
              Especializada em Motos de <span className="text-ride-orange font-semibold">Média e Alta Cilindrada</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
              <div className="bg-ride-orange bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">Fundada em 2017</span>
              </div>
              <div className="bg-ride-orange bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">+20 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - responsive sizing */}
     
      
      {/* Loading fallback background */}
      
    </section>
  );
};
