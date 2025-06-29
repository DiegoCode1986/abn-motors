
import { TrendingUp, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export const OpenPositionsSection = () => {
  const positions = [
    {
      icon: TrendingUp,
      title: "BRANDING",
      description: "Responsável por desenvolver estratégias de marca que conectem com entusiastas de motocicletas e fortaleçam nossa presença no mercado."
    },
    {
      icon: Target,
      title: "MARKETING",
      description: "Criar campanhas eficientes que alcancem nosso público-alvo e promovam nossos serviços especializados em manutenção de motocicletas."
    },
    {
      icon: Wrench,
      title: "MECÂNICO",
      description: "Especialista técnico em manutenção e reparo de motocicletas de diversos modelos, com experiência em diagnósticos e soluções técnicas."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">POSIÇÕES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            VAGAS ABERTAS
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Seja parte de uma equipe especializada em manutenção de motocicletas. 
            Valorizamos experiência técnica e paixão por motocicletas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {positions.map((position, index) => {
            const IconComponent = position.icon;
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
                  {position.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {position.description}
                </p>
                <Button className="bg-ride-orange hover:bg-orange-600 text-white px-6 py-2 rounded w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  APPLY NOW
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
