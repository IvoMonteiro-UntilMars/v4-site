import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, CheckCircle, ArrowRight, Instagram, Mail, XCircle, Play } from 'lucide-react';
import TestimonialCarousel from './components/TestimonialCarousel';
import TestimonialsPage from './pages/TestimonialsPage';
import TestimonialDetailPage from './pages/TestimonialDetailPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#112240] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#FC2406] text-white flex flex-col">
      {/* Header */}
      <header className="fixed w-full bg-[#00090F]/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Ivo Monteiro</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="hover:text-white-500 transition-colors">Início</a>
              <a href="#sobre" className="hover:text-white-500 transition-colors">Sobre Mim</a>
              <a href="#consultoria" className="hover:text-white-500 transition-colors">Consultoria</a>
              <Link to="/testemunhos" className="hover:text-white-500 transition-colors">Testemunhos</Link>
              <a href="#contactos" className="hover:text-white-500 transition-colors">Contactos</a>
              <a 
                href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php" 
                className="bg-[#FC2406] hover:bg-red-700 px-6 py-2 rounded-full transition-colors"
              >
                Começa Agora
              </a>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-4">
              <a href="#inicio" className="hover:text-red-500 transition-colors">Início</a>
              <a href="#sobre" className="hover:text-red-500 transition-colors">Sobre Mim</a>
              <a href="#consultoria" className="hover:text-red-500 transition-colors">Consultoria</a>
              <Link to="/testemunhos" className="hover:text-red-500 transition-colors">Testemunhos</Link>
              <a href="#contactos" className="hover:text-red-500 transition-colors">Contactos</a>
              <a 
                href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php" 
                className="bg-[#FC2406] hover:bg-red-700 px-6 py-2 rounded-full transition-colors"
              >
                Começa Agora
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center relative bg-[#00090F] pt-20">
          <div className="absolute inset-0 bg-[url('fotofundo.jpg')] bg-cover bg-center opacity-15"></div>
          <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative">
            <div>
              <h2 className="text-5xl font-bold leading-tight mb-6">
                Domina as bases para aumentar e investir o teu rendimento.
              </h2>
              <p className="text-xl text-gray-300 mb-3">
                E conquista + liberdade ao
              </p>
              <li className="flex items-start gap-4 mb-1">
                <CheckCircle stroke="#FC2406" className="mt-0 flex-shrink-0" />
                <p>Investires + dinheiro</p>
              </li>
              <li className="flex items-start gap-4 mb-8">
                <CheckCircle stroke="#FC2406" className="mt-0 flex-shrink-0" />
                <p>Ganhares + dinheiro</p>
              </li>
              <a 
                href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
                className="inline-block bg-[#FC2406] hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Garantir a Minha Consultoria Exclusiva Agora por 49,99€
              </a>
            </div>
            <div className="relative">
              <img 
                src="fotoprincipal.jpg" 
                alt="Ivo Monteiro" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Sobre Section */}
<section id="sobre" className="bg-[#00090F]">
  <div className="container mx-auto px-4 py-20">
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
      <div>
        <h2 className="text-5xl font-bold mb-8" style={{ color: "#FC2406" }}>Sobre Mim</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0" />
            <p>Licenciatura na Faculdade de Economia do Porto (FEP)</p>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0" />
            <p>Experiência na KPMG e Sonae antes de iniciar negócios próprios</p>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0" />
            <p>Criei um negócio, com meses de ganhos superiores a 12.000€</p>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="text-[#FC2406] mt-2 flex-shrink-0" />
            <div>
              <p>Ao iniciar no mundo dos negócios tinha muitas dúvidas:</p>
              <div className="ml-8 space-y-2 mt-4">
                <p>- Com quem devo falar?</p>
                <p>- Custa dinheiro?</p>
                <p>- É preciso saber vender?</p>
                <p>- É preciso ser extrovertido?</p>
                <p>- É preciso saber TUDO sobre uma empresa?</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* Vídeo / Capa */}
      <div className="relative group w-[80%] ml-auto mr-[-5%]">
        {!isVideoPlaying ? (
          <div 
            className="relative cursor-pointer w-full transition-all duration-500 ease-in-out"
            onClick={() => setIsVideoPlaying(true)}
          >
            {/* Imagem original sem cortar */}
            <img 
              src="Ivomonteiro.jpg" 
              alt="Ivo Monteiro Professional" 
              className="rounded-lg shadow-2xl w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {/* Ícone de Play */}
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 group-hover:bg-opacity-50 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#FC2406] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play size={40} className="text-white ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative transition-all duration-500 ease-in-out w-full pb-[177.77%]"> {/* 9:16 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/2yRCc-C7HZw?autoplay=1"
              title="Ivo Monteiro Video"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  </div>
</section>


        {/* Consultoria Section */}
        <section id="consultoria" className="bg-[#00090F] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">As Três Fases da Consultoria</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: <span style={{ color: "#00090F" }}>Fase 1</span>,
                  title: "Diagnóstico",
                  description: "Análise completa da tua situação financeira atual"
                },
                {
                  phase: <span style={{ color: "#00090F" }}>Fase 2</span>,
                  title: "Estratégias",
                  description: "Métodos práticos para aumentar os teus rendimentos"
                },
                {
                  phase: <span style={{ color: "#00090F" }}>Fase 3</span>,
                  title: "Investimento",
                  description: "Técnicas comprovadas para multiplicar o teu dinheiro"
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#FC2406] p-8 rounded-lg hover:transform hover:scale-105 transition-all">
                  <div className="text-black-500 font-bold mb-4">{item.phase}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testemunhos" className="bg-[#00090F] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-bold text-center mb-28">Depoimentos Reais</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Para Quem Section */}
        <section className="bg-[#00090F] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">A Consultoria é Para Quem?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Jovens que querem criar liberdade financeira",
                "Quem deseja começar um negócio, mas não sabe por onde começar",
                "Quem quer uma estratégia clara para aumentar rendimentos",
                "Interessados em trabalhar remotamente com flexibilidade"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#FC2406] p-6 rounded-lg">
                  <CheckCircle className="text-white-500 flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        {/* Não é Para Quem Section */}
        <section className="bg-[#00090F] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">A Consultoria Não é Para Quem?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Procura esquemas de enriquecimento rápido",
                "Não está disposto a aprender e implementar novas estratégias",
                "Espera resultados sem dedicação e compromisso",
                "Não quer investir em seu desenvolvimento pessoal"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#FC2406] p-6 rounded-lg">
                  <XCircle className="text-white-900 flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00090F] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Garante a Tua Sessão Exclusiva</h2>
            <p className="text-2xl mb-8">por 49,99€ <span className="line-through text-gray-300">500€</span></p>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
              className="inline-flex items-center gap-2 bg-[#FC2406] text-white-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Reservar Agora
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <Footer 
        showTermsAndPrivacy={true}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Modals */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Termos de Uso"
      >
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Aceitação dos Termos</h4>
          <p>
            Ao acessar e utilizar este website, você aceita e concorda em cumprir estes termos e condições de uso.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Serviços</h4>
          <p>
            Os serviços de consultoria são fornecidos mediante agendamento prévio e pagamento conforme estabelecido no site.
          </p>

          <h4 className="text-lg font-semibold text-white">3. Responsabilidades</h4>
          <p>
            O cliente é responsável por fornecer informações precisas e verdadeiras durante o processo de consultoria.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Cancelamento</h4>
          <p>
            Cancelamentos devem ser realizados com antecedência mínima de 72 horas da sessão agendada. Após as 72 horas o reembolso pode não ser realizado.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Propriedade Intelectual</h4>
          <p>
            Todo o conteúdo apresentado durante as sessões de consultoria é de propriedade intelectual do consultor.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Política de Privacidade"
      >
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Coleta de Dados</h4>
          <p>
            Coletamos apenas as informações necessárias para a prestação dos nossos serviços de consultoria.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Uso das Informações</h4>
          <p>
            As informações coletadas são utilizadas exclusivamente para melhorar nossos serviços e comunicação com os clientes.
          </p>

          <h4 className="text-lg font-semibold text-white">3. Proteção de Dados</h4>
          <p>
            Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Compartilhamento</h4>
          <p>
            Não compartilhamos suas informações pessoais com terceiros sem seu consentimento expresso.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Seus Direitos</h4>
          <p>
            Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento.
          </p>
        </div>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testemunhos" element={<TestimonialsPage />} />
        <Route path="/testemunhos/:id" element={<TestimonialDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
