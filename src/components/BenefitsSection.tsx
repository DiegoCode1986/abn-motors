
import { CheckCircle } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "SALÁRIO COMPETITIVO",
      description: "Oferecemos remuneração compatível com o mercado e bonificações por performance, reconhecendo o valor de especialistas técnicos."
    },
    {
      title: "PLANO DE SAÚDE E DENTAL",
      description: "Cobertura completa de saúde e dental para você e sua família, garantindo bem-estar e tranquilidade no trabalho."
    },
    {
      title: "VALE ALIMENTAÇÃO",
      description: "Benefício mensal para alimentação que valoriza nossos colaboradores e facilita o dia a dia no trabalho."
    },
    {
      title: "FÉRIAS REMUNERADAS",
      description: "Período de descanso garantido com remuneração integral, respeitando o equilíbrio entre vida pessoal e profissional."
    },
    {
      title: "VIAGENS DA EMPRESA",
      description: "Oportunidades de participar em eventos do setor e treinamentos especializados, expandindo conhecimentos técnicos."
    },
    {
      title: "DESENVOLVIMENTO PROFISSIONAL",
      description: "Investimos no crescimento de nossa equipe com cursos e certificações em novas tecnologias de manutenção de motocicletas."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">BENEFÍCIOS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            VANTAGENS & BENEFÍCIOS
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Oferecemos um pacote completo de benefícios para nossos colaboradores, 
            valorizando especialistas técnicos que compartilham nossa paixão por motocicletas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-4 sm:p-6 rounded-lg hover:bg-ride-gray transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-ride-orange mt-1 transform hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos section */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-ride-gray animate-fade-in animation-delay-700">
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-60">
            <div className="w-12 h-6 sm:w-16 sm:h-8 bg-gray-500 rounded animate-pulse"></div>
            <div className="w-16 h-6 sm:w-20 sm:h-8 bg-gray-500 rounded animate-pulse animation-delay-100"></div>
            <div className="w-14 h-6 sm:w-18 sm:h-8 bg-gray-500 rounded animate-pulse animation-delay-200"></div>
            <div className="w-12 h-6 sm:w-16 sm:h-8 bg-gray-500 rounded animate-pulse animation-delay-300"></div>
            <div className="w-16 h-6 sm:w-20 sm:h-8 bg-gray-500 rounded animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
