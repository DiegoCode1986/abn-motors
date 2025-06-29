
export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <span>HOME</span>
              <span>/</span>
              <span className="text-ride-orange">CARREIRA</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
              CARREIRA
            </h1>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-ride-orange opacity-20 transform rotate-45"></div>
    </section>
  );
};
