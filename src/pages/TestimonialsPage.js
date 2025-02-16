import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const testimonials = [
  {
    id: "fatima",
    name: "Fátima Soares",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Fatima_Soares.jpg",
    quote: "Tive 2 aumentos salariais em 4 meses (70% do salário líquido anual). Tenho investimentos automáticos semanalmente e invisto 900€ por mês!",
  },
  {
    id: "catia",
    name: "Cátia Frias",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Catia_Frias.jpg",
    quote: "Em 2 meses, aumentei o meu rendimento em 30%. Em 7 meses, esse aumento foi de 60%",
  },
  {
    id: "gustavo",
    name: "Gustavo Rocha",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEvgM1ldiEdoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720710894111?e=1744848000&v=beta&t=toQLFVgwAj-ZGv8qhzjHK33JARYWczdNKyjE38xkDb4",
    quote: "Conheço o Ivo há mais de 6 anos e começámos esta parceria um ano depois de eu ter aberto a SOU. O resultado ao fim de um ano? Crescimento de 400% no volume de faturação.",
    role: "CEO SOU Real Estate",
  },
  {
    id: "telmo",
    name: "Telmo Taipa",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHhO4h2slV2_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723894291701?e=1744848000&v=beta&t=SW8AcOrsy8WJLRhRuQYnGd9FuWV8BGBCl3KSABu0BLE",
    quote: "Tivemos a sorte de, no início da jornada da ADECI, contar com o Ivo para criar a nossa primeira abordagem comercial a clientes. Foi com ele que demos os primeiros passos em como trazer vendas para a nossa empresa.",
    role: "Founder ADECI Group",
  }
];

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0a0d11] text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a0d11]/90 backdrop-blur-sm z-50 border-b border-[#ff4d00]/10">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#ff4d00] transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section with Geometric Background */}
        <div className="relative pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full">
              <svg className="absolute w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                {/* Main border */}
                <path
                  d="M0,0 L1000,0 L1000,1000 L0,1000 Z"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                {/* Diagonal lines */}
                <path
                  d="M0,0 L1000,1000 M1000,0 L0,1000"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                {/* Circles */}
                <circle
                  cx="500"
                  cy="500"
                  r="300"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <circle
                  cx="500"
                  cy="500"
                  r="200"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20 relative">
            <h1 className="text-8xl font-bold text-center mb-4">SOMOS</h1>
            <h2 className="text-8xl font-bold text-center text-[#FC2406] mb-20">VENCEDORES</h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Link 
                key={testimonial.id}
                to={`/testemunhos/${testimonial.id}`}
                className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-[#0a0d11]/50 to-transparent z-10"></div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-[400px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-[#0f1318]/90">
                  <h3 className="text-2xl font-bold mb-2 text-[#FC2406] group-hover:text-[#ff6b33] transition-colors">
                    {testimonial.name}
                  </h3>
                  {testimonial.role && (
                    <p className="text-gray-400 mb-2">{testimonial.role}</p>
                  )}
                  <p className="text-gray-300">{testimonial.quote}</p>
                  <div className="mt-4 inline-block text-[#ff4d00] hover:text-[#E6E6E6] transition-colors">
                    Ver história completa →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold mb-8">Junta-te a Estas Histórias de Sucesso</h2>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
              className="inline-block bg-[#FC2406] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Começar Minha Jornada Agora
            </a>
          </div>
        </div>
      </main>

      <Footer showTermsAndPrivacy={false} />
    </div>
  );
}

export default TestimonialsPage;
