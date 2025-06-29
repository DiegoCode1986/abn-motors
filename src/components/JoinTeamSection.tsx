
export const JoinTeamSection = () => {
  return (
    <section className="py-20 bg-ride-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <span className="text-ride-orange uppercase tracking-wide font-semibold">CARREIRA</span>
              <h2 className="text-5xl font-bold text-white mt-4 mb-6">
                JUNTE-SE AO TIME
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Seja parte de uma equipe especializada em manutenção de motocicletas de todos os modelos. 
                Valorizamos experiência técnica e paixão por motocicletas em um ambiente dinâmico e inovador.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-ride-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">NOSSA MISSÃO</h3>
                <p className="text-gray-300">
                  Oferecer serviços excepcionais de manutenção e reparo para motocicletas, 
                  garantindo segurança e performance máxima para nossos clientes.
                </p>
              </div>

              <div className="bg-ride-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">CULTURA DA EMPRESA</h3>
                <p className="text-gray-300">
                  Promovemos um ambiente colaborativo onde a experiência técnica se encontra 
                  com a paixão por motocicletas, criando oportunidades de crescimento profissional.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mecânico trabalhando em motocicleta"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ride-orange opacity-30 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-ride-gray p-8 rounded-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
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
