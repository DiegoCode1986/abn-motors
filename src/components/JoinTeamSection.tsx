
export const JoinTeamSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">CARREIRA</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                JUNTE-SE AO TIME
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Seja parte de uma equipe especializada em manutenção de motocicletas de todos os modelos. 
                Valorizamos experiência técnica e paixão por motocicletas em um ambiente dinâmico e inovador.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-ride-gray p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">NOSSA MISSÃO</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Oferecer serviços excepcionais de manutenção e reparo para motocicletas, 
                  garantindo segurança e performance máxima para nossos clientes.
                </p>
              </div>

              <div className="bg-ride-gray p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">CULTURA DA EMPRESA</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Promovemos um ambiente colaborativo onde a experiência técnica se encontra 
                  com a paixão por motocicletas, criando oportunidades de crescimento profissional.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mecânico trabalhando em motocicleta"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-ride-orange opacity-30 rounded-lg animate-pulse"></div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 animate-fade-in animation-delay-500">
          <div className="bg-ride-gray p-6 sm:p-8 rounded-lg transform hover:scale-[1.01] transition-all duration-300">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              Seja parte de uma equipe que valoriza especialistas técnicos em manutenção de motocicletas de todos os modelos. 
              Oferecemos oportunidades de carreira em um ambiente dinâmico onde sua paixão por motocicletas 
              se encontra com excelência técnica e oportunidades de crescimento profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
