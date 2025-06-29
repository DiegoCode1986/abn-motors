
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
    <section className="py-20 bg-ride-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ride-orange uppercase tracking-wide font-semibold">BENEFÍCIOS</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            VANTAGENS & BENEFÍCIOS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Oferecemos um pacote completo de benefícios para nossos colaboradores, 
            valorizando especialistas técnicos que compartilham nossa paixão por motocicletas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-ride-orange mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos section */}
        <div className="mt-20 pt-16 border-t border-ride-gray">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="w-16 h-8 bg-gray-500 rounded"></div>
            <div className="w-20 h-8 bg-gray-500 rounded"></div>
            <div className="w-18 h-8 bg-gray-500 rounded"></div>
            <div className="w-16 h-8 bg-gray-500 rounded"></div>
            <div className="w-20 h-8 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
