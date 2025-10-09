
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleReviews } from "./GoogleReviews";

export const ContactSection = () => {
  return (
    <>
    <section className="py-12 sm:py-16 lg:py-20 bg-ride-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">CONTATO</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            FAÇA-NOS UMA VISITA!
          </h2>
          <a 
            href="https://www.google.com/local/place/fid/0x935a3172baf3d2d5:0xb9d07cc2f2b2987c/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr6HUN01PwasRtPkVxKW6IA1MXT3YNh_7UGYh9paT_KcGW9Ocoli62xmlZ1eOTdvcwsu5Y5GZHdIOX9ySVx2av0j3s4plPTYNEe_dzyCnBn2RWHexhizchpOKYMarxK_baNtMs8ZesNem95%3Dw160-h106-k-no-pi-10.112571-ya236.26743-ro0-fo100&ik=CAoSHENJQUJJaEN6NnVUWk1HQUZhLTVmb1pwYy02bXM%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-ride-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 mb-6"
          >
            Faça um tour na nossa loja
          </a>
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
                  <p className="text-gray-300">(61) 99867-3293</p>
                 
                </div>
              </div>

              

              <div className="flex items-start space-x-4 p-4 bg-ride-dark rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <MapPin className="w-6 h-6 text-ride-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Endereço</h4>
                  <p className="text-gray-300"> A oficina fica no Galpão 17,SMAS Área Especial G Conjunto A Lote 16/17 </p>
                 
                  <p className="text-gray-300">Guará, Brasília - DF</p>
                  <p className="text-gray-300">CEP:71215-300</p>
                  <p><a target="_blank" rel="noopener noreferrer" className="text-ride-orange hover:underline cursor-pointer" href="https://www.google.com/maps/place/ABN+Moto+Service/@-15.8157916,-47.9684375,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3172baf3d2d5:0xb9d07cc2f2b2987c!8m2!3d-15.8157916!4d-47.9658626!16s%2Fg%2F11wc9wbhl0?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D">Acesse a localização</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ride-dark rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <Clock className="w-6 h-6 text-ride-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-300">Segunda a Sexta: 8h às 17h</p>
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
              
           
            <Button 
              variant="secondary" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 uppercase"
              onClick={() => window.open('https://wa.me/5561998673293', '_blank', 'noopener,noreferrer')}
            >
              Fazer orçamento
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
    <GoogleReviews />
    </>
  );
};

export default ContactSection;
