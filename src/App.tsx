import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  CheckCircle, 
  Sofa, 
  Car, 
  Bed, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  MessageCircle, 
  Star,
  Armchair,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Button = ({ children, className, variant = 'primary', icon: Icon, ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg shadow-blue-500/30 focus:ring-blue-500",
    secondary: "bg-white text-blue-900 hover:bg-gray-50 hover:shadow-lg shadow-gray-200/50 border border-gray-100 focus:ring-gray-200",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg shadow-green-500/30 focus:ring-green-500",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

const SectionHeading = ({ subtitle, title, align = 'center', light = false }: any) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className={`uppercase tracking-wider text-sm font-bold ${light ? 'text-blue-200' : 'text-blue-600'} mb-2 block`}>
      {subtitle}
    </span>
    <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-slate-900'} leading-tight`}>
      {title}
    </h2>
    <div className={`h-1.5 w-24 bg-blue-500 mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
  >
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300 z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8">
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const FeatureItem = ({ icon: Icon, title, text }: any) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600">{text}</p>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5531984096004?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20limpeza%20de%20estofados.";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              MP
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              CLEAN
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Processo', 'Depoimentos'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-blue-50'}`}
              >
                {item}
              </button>
            ))}
            <Button 
              variant={isScrolled ? 'primary' : 'secondary'} 
              className="px-5 py-2 text-sm"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                {['Início', 'Serviços', 'Sobre', 'Processo', 'Depoimentos'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                    className="text-left text-slate-600 font-medium py-2 border-b border-gray-50"
                  >
                    {item}
                  </button>
                ))}
                <Button 
                  variant="whatsapp" 
                  className="w-full justify-center mt-4"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  icon={MessageCircle}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Clean Living Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold tracking-wide uppercase">Especialista em Higienização</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Seus Estofados <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Novos de Novo</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl"
            >
              Limpeza profissional profunda que elimina ácaros, bactérias e manchas. 
              Atendemos em Sabinópolis e região com qualidade garantida.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="whatsapp" 
                className="h-14 text-lg px-8"
                icon={MessageCircle}
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                className="h-14 text-lg px-8"
                onClick={() => scrollToSection('servicos')}
              >
                Conhecer Serviços
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center space-x-6 text-blue-200 text-sm font-medium"
            >
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Atendimento em Domicílio</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Produtos Profissionais</div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats / Trust Banner */}
      <section className="py-10 bg-white -mt-1 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: "Qualidade Garantida", value: "100%" },
              { icon: MapPin, label: "Sabinópolis e Região", value: "Local" },
              { icon: Clock, label: "Atendimento Ágil", value: "24h" },
              { icon: Star, label: "Satisfação", value: "5.0" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-2xl text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional Cleaning" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">MP</div>
                  <div>
                    <p className="font-bold text-slate-900">Marcio Pimentel</p>
                    <p className="text-sm text-slate-500">Especialista MP Clean</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                align="left"
                subtitle="Sobre Nós"
                title="Excelência em Limpeza e Higienização"
              />
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A MP Clean é referência em limpeza de estofados em Sabinópolis e região. 
                Utilizamos técnicas avançadas e produtos de alta performance para devolver 
                a vida aos seus móveis e veículos.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nosso compromisso vai além da estética: focamos na saúde da sua família, 
                eliminando ácaros, fungos e bactérias que se acumulam no dia a dia.
              </p>
              
              <div className="space-y-4 mb-10">
                <FeatureItem 
                  icon={CheckCircle} 
                  title="Equipamentos Profissionais" 
                  text="Utilizamos extratoras de alta potência para limpeza profunda." 
                />
                <FeatureItem 
                  icon={Droplets} 
                  title="Produtos Biodegradáveis" 
                  text="Segurança para sua família e pets, com eficiência máxima." 
                />
              </div>

              <Button onClick={() => window.open(whatsappLink, '_blank')}>
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Nossas Soluções"
            title="O que podemos limpar para você?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              icon={Sofa}
              title="Sofás e Poltronas"
              description="Limpeza profunda para sofás de 2 ou 3 lugares, retráteis e poltronas. Removemos manchas, odores e revitalizamos o tecido."
              image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={Bed}
              title="Colchões e Cabeceiras"
              description="Higienização de colchões Solteiro, Casal, Queen e King. Eliminação de ácaros e bactérias para um sono mais saudável."
              image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={Car}
              title="Estética Automotiva"
              description="Limpeza completa de bancos e carpetes automotivos. Seu carro limpo e cheiroso como novo."
              image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={Armchair}
              title="Cadeiras de Jantar"
              description="Renove sua sala de jantar. Limpeza detalhada para jogos de 4, 6 ou mais cadeiras, removendo gordura e sujeira."
              image="https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={Sparkles}
              title="Tapetes e Carpetes"
              description="Lavagem especializada que preserva as fibras e devolve as cores originais do seu tapete."
              image="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Impermeabilização"
              description="Proteja seu estofado contra líquidos e manchas acidentais, aumentando a vida útil do tecido."
              image="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            light
            subtitle="Como Funciona"
            title="Processo de Limpeza Profissional"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              { step: "01", title: "Inspeção", desc: "Avaliamos o tecido e o tipo de sujeira para escolher o produto ideal." },
              { step: "02", title: "Aplicação", desc: "Aplicamos produtos flotadores que soltam a sujeira das fibras." },
              { step: "03", title: "Extração", desc: "Utilizamos máquinas potentes para sugar toda a sujeira e resíduos." },
              { step: "04", title: "Secagem", desc: "Seu estofado limpo, cheiroso e pronto para uso em poucas horas." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 border border-blue-700 rounded-2xl bg-blue-800/30 backdrop-blur-sm hover:bg-blue-800/50 transition-colors">
                <div className="text-6xl font-bold text-blue-500/20 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-blue-200 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Por que escolher a MP Clean?</h3>
                <div className="space-y-6">
                  {[
                    "Atendimento personalizado em Sabinópolis e região",
                    "Orçamento rápido via WhatsApp",
                    "Técnicos treinados e uniformizados",
                    "Garantia de satisfação em todos os serviços"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button variant="primary" onClick={() => window.open(whatsappLink, '_blank')}>
                    Agendar Agora
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cleaning Result" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Depoimentos"
            title="O que nossos clientes dizem"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Ana Paula", text: "Meu sofá ficou novo! Eu achava que não tinha mais jeito, mas o Marcio fez um milagre. Recomendo demais!", stars: 5 },
              { name: "Carlos Eduardo", text: "Serviço impecável. Pontuais, organizados e o preço é muito justo pela qualidade entregue. O carro ficou zero.", stars: 5 },
              { name: "Mariana Silva", text: "Tirei uma mancha antiga do colchão que me incomodava há anos. Atendimento nota 10 em Sabinópolis.", stars: 5 }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">Cliente Verificado</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading 
            subtitle="Dúvidas Frequentes"
            title="Perguntas Comuns"
          />
          <div className="space-y-4">
            {[
              { q: "Quanto tempo demora para secar?", a: "O tempo de secagem varia entre 4 a 12 horas, dependendo da ventilação do local e do tipo de tecido." },
              { q: "Vocês atendem em domicílio?", a: "Sim! Levamos todo o equipamento necessário até sua casa ou empresa em Sabinópolis e região." },
              { q: "Os produtos são seguros para pets?", a: "Utilizamos produtos biodegradáveis e seguros para crianças e animais de estimação." },
              { q: "Removem qualquer tipo de mancha?", a: "Removemos a grande maioria das manchas, mas algumas antigas ou quimicamente alteradas podem ser permanentes. Avaliamos antes de iniciar." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Seu sofá merece esse cuidado!
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Não deixe a sujeira acumular. Agende sua limpeza hoje mesmo e sinta a diferença de um ambiente higienizado.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="secondary" 
              className="h-16 text-xl px-10 shadow-2xl"
              icon={MessageCircle}
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Solicitar Orçamento via WhatsApp
            </Button>
          </motion.div>
          <p className="mt-6 text-blue-200 text-sm">
            Resposta rápida • Orçamento sem compromisso
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  MP
                </div>
                <span className="text-2xl font-bold text-white">CLEAN</span>
              </div>
              <p className="text-slate-400 mb-6">
                Especialistas em limpeza e higienização de estofados. 
                Levando saúde e bem-estar para sua casa ou empresa.
              </p>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="font-bold text-white">Ig</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="font-bold text-white">Fb</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {['Início', 'Serviços', 'Sobre', 'Processo', 'Contato'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <span className="block text-white">WhatsApp</span>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-blue-400">
                      (31) 98409-6004
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <span className="block text-white">Localização</span>
                    <span>Sabinópolis e Região, MG</span>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Disponível para agendamento</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} MP Clean. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
