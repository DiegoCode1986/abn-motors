
export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center bg-no-repeat flex items-center" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
          url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%'
      }}
    >
      {/* Responsive background images for different devices */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 sm:opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
            url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75')`,
          backgroundPosition: 'center 50%'
        }}
      />
      
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 lg:opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
            url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundPosition: 'center 40%'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base animate-fade-in">
              <span>HOME</span>
              <span>/</span>
              <span className="text-ride-orange">CARREIRA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 animate-fade-in animation-delay-200 text-red-500 leading-tight">
              ABN MOTO SERVICES
            </h1>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - responsive sizing */}
      <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-ride-orange opacity-20 transform rotate-45 animate-pulse"></div>
      
      {/* Loading fallback background */}
      <div className="absolute inset-0 bg-ride-dark opacity-90 -z-10"></div>
    </section>
  );
};
