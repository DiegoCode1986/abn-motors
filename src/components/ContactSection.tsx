
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">CONTATO</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            FAÇA-NOS UMA VISITA!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Nossa oficina está preparada para receber você e sua motocicleta. 
            Agende uma visita ou solicite um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-ride-dark rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <Phone className="w-6 h-6 text-ride-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Telefone</h4>
                  <p className="text-gray-300">(11) 98765-4321</p>
                  <p className="text-gray-300">(11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ride-dark rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <Mail className="w-6 h-6 text-ride-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">E-mail</h4>
                  <p className="text-gray-300">contato@abnmotoservices.com.br</p>
                  <p className="text-gray-300">andre.lira@abnmotoservices.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ride-dark rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <MapPin className="w-6 h-6 text-ride-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Endereço</h4>
                  <p className="text-gray-300">Rua das Motocicletas, 123</p>
                  <p className="text-gray-300">Vila Moto - São Paulo, SP</p>
                  <p className="text-gray-300">CEP: 01234-567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ride-dark rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <Clock className="w-6 h-6 text-ride-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-300">Sábado: 8h às 12h</p>
                  <p className="text-gray-300">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-bold text-white mb-6">Solicite um Orçamento</h3>
            
            <form className="space-y-4">
              <Input 
                placeholder="Seu nome completo" 
                className="bg-ride-dark border-gray-600 text-white placeholder-gray-400"
              />
              <Input 
                placeholder="Seu telefone" 
                className="bg-ride-dark border-gray-600 text-white placeholder-gray-400"
              />
              <Input 
                placeholder="Seu e-mail" 
                type="email"
                className="bg-ride-dark border-gray-600 text-white placeholder-gray-400"
              />
              <Input 
                placeholder="Marca e modelo da sua moto" 
                className="bg-ride-dark border-gray-600 text-white placeholder-gray-400"
              />
              <textarea 
                placeholder="Descreva o serviço desejado ou problema"
                rows={4}
                className="w-full p-3 bg-ride-dark border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ride-orange"
              />
              
              <Button className="w-full bg-ride-orange hover:bg-orange-600 text-white py-3 transform hover:scale-105 transition-all duration-300">
                SOLICITAR ORÇAMENTO
              </Button>
            </form>

            <div className="mt-8 p-6 bg-ride-orange bg-opacity-10 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">💡 Dica Importante</h4>
              <p className="text-gray-300 text-sm">
                Para um diagnóstico mais preciso, traga sempre o manual da sua motocicleta 
                e informe sobre o histórico de manutenções anteriores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
