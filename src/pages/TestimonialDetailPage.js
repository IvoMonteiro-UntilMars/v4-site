import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const testimonials = {
  fatima: {
    name: "Fátima Soares",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Fatima_Soares.jpg",
    quote: "Tive 2 aumentos salariais em 4 meses (70% do salário líquido anual). Tenho investimentos automáticos semanalmente e invisto 900€ por mês!",
    instagram: "https://www.instagram.com/fatimaraquelsoares",
    fullStory: `A minha jornada de transformação financeira começou quando decidi investir em mim mesma através da consultoria. Em apenas 4 meses, consegui:

    • Dois aumentos salariais significativos, totalizando 70% de aumento no salário líquido anual
    • Estabeleci um sistema de investimentos automáticos semanais
    • Atualmente invisto 900€ por mês de forma consistente
    • Desenvolvi uma mentalidade financeira mais sólida e estratégica
    
    O mais importante foi aprender a negociar meu valor no trabalho e criar sistemas automáticos de poupança e investimento.`
  },
  catia: {
    name: "Cátia Frias",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Catia_Frias.jpg",
    quote: "Em 2 meses, aumentei o meu rendimento em 30%. Em 7 meses, esse aumento foi de 60%",
    instagram: "https://www.instagram.com/catia_frias",
    fullStory: `A minha história de crescimento profissional e financeiro demonstra o poder de uma estratégia bem executada:

    • Em apenas 2 meses, consegui um aumento de 30% no meu rendimento
    • Após 7 meses de implementação das estratégias, o aumento total chegou a 60%
    • Desenvolvi novas habilidades profissionais que me tornaram mais valiosa no mercado
    • Aprendi a identificar e aproveitar oportunidades de crescimento
    
    A consultoria me ajudou a ver meu potencial e me deu as ferramentas para alcançá-lo.`
  },
  gustavo: {
    name: "Gustavo Rocha",
    role: "CEO SOU Real Estate",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEvgM1ldiEdoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720710894111?e=1744848000&v=beta&t=toQLFVgwAj-ZGv8qhzjHK33JARYWczdNKyjE38xkDb4",
    quote: "Conheço o Ivo há mais de 6 anos e começámos esta parceria um ano depois de eu ter aberto a SOU. O resultado ao fim de um ano? Crescimento de 400% no volume de faturação.",
    website: "https://www.sou-re.com/",
    fullStory: `A parceria com o Ivo transformou completamente a trajetória da SOU Real Estate:

    • Crescimento impressionante de 400% no volume de faturação em apenas um ano
    • Implementação de estratégias comerciais inovadoras
    • Desenvolvimento de uma equipe mais eficiente e motivada
    • Estabelecimento de processos escaláveis
    
    A consultoria foi fundamental para transformar uma empresa promissora em um caso de sucesso no mercado imobiliário.`
  },
  telmo: {
    name: "Telmo Taipa",
    role: "Founder ADECI Group",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHhO4h2slV2_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723894291701?e=1744848000&v=beta&t=SW8AcOrsy8WJLRhRuQYnGd9FuWV8BGBCl3KSABu0BLE",
    quote: "Tivemos a sorte de, no início da jornada da ADECI, contar com o Ivo para criar a nossa primeira abordagem comercial a clientes. Foi com ele que demos os primeiros passos em como trazer vendas para a nossa empresa.",
    website: "https://adecigroup.com/",
    fullStory: `O início da ADECI Group foi marcado pela orientação estratégica que recebemos:

    • Desenvolvimento de uma abordagem comercial eficaz desde o primeiro dia
    • Criação de processos de vendas escaláveis
    • Estabelecimento de uma base sólida para crescimento sustentável
    • Formação de uma equipe comercial altamente eficiente
    
    A consultoria nos ajudou a evitar erros comuns e acelerar nosso crescimento no mercado.`
  }
};

function TestimonialDetailPage() {
  const { id } = useParams();
  const testimonial = testimonials[id];

  if (!testimonial) {
    return (
      <div className="min-h-screen bg-[#0a0d11] text-white flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Testemunho não encontrado</h1>
            <Link 
              to="/testemunhos" 
              className="text-[#ff4d00] hover:text-[#ff6b33] transition-colors"
            >
              Voltar para testemunhos
            </Link>
          </div>
        </div>
        <Footer showTermsAndPrivacy={false} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white flex flex-col">
      <nav className="fixed w-full bg-[#0a0d11]/90 backdrop-blur-sm z-50 border-b border-[#ff4d00]/10">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/testemunhos" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#ff4d00] transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para testemunhos
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-[500px] object-cover object-center rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-transparent to-transparent"></div>
            </div>

            <h1 className="text-4xl font-bold mb-2 text-[#FC2406]">{testimonial.name}</h1>
            {testimonial.role && (
              <p className="text-xl text-gray-400 mb-6">{testimonial.role}</p>
            )}

            <div className="bg-[#0f1318] p-8 rounded-lg mb-8">
              <p className="text-2xl text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-gray-300 whitespace-pre-line">
                {testimonial.fullStory}
              </div>
            </div>

            <div className="flex gap-4">
              {testimonial.instagram && (
                <a
                  href={testimonial.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FC2406] hover:bg-[#ff6b33] px-6 py-3 rounded-full transition-colors"
                >
                  Ver no Instagram →
                </a>
              )}
              {testimonial.website && (
                <a
                  href={testimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FC2406] hover:bg-[#ff6b33] px-6 py-3 rounded-full transition-colors"
                >
                  Visitar Website →
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer showTermsAndPrivacy={false} />
    </div>
  );
}

export default TestimonialDetailPage;
