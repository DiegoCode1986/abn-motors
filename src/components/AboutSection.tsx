
export const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">SOBRE NÓS</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                EXPERIÊNCIA E ESPECIALIZAÇÃO
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                Oficina especializada em motos de média e alta cilindrada fundada em 2017 pelo 
                <span className="text-ride-orange font-semibold"> Sr. André Lira</span>, 
                mecânico altamente especializado no mundo das 02 rodas com mais de 20 anos na experiência mecânica.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Somos uma equipe especializada em manutenção e produtos premium, 
                combinando experiência tradicional com tecnologia de ponta para oferecer 
                o melhor serviço para sua motocicleta.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-ride-gray p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">NOSSA MISSÃO</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Oferecer serviços excepcionais de manutenção e reparo para motocicletas de média e alta cilindrada, 
                  garantindo performance máxima e confiabilidade para nossos clientes.
                </p>
              </div>

              <div className="bg-ride-gray p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">NOSSA EXPERIÊNCIA</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Com mais de 20 anos de experiência mecânica e especialização em marcas premium, 
                  oferecemos diagnósticos precisos e soluções técnicas avançadas.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mecânico especializado trabalhando em motocicleta premium"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-ride-orange opacity-30 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
