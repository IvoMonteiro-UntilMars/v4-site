import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: "fatima",
    text: "Tive 2 aumentos salariais em 4 meses (70% do salário líquido anual). Tenho investimentos automáticos semanalmente e invisto 900€ por mês!",
    author: "Fátima Soares",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Fatima_Soares.jpg"
  },
  {
    id: "gustavo",
    text: "Conheço o Ivo há mais de 6 anos e começámos esta parceria um ano depois de eu ter aberto a SOU. O resultado ao fim de um ano? Crescimento de 400% no volume de faturação.",
    author: "Gustavo Rocha",
    role: "CEO SOU Real Estate",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEvgM1ldiEdoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720710894111?e=1744848000&v=beta&t=toQLFVgwAj-ZGv8qhzjHK33JARYWczdNKyjE38xkDb4"
  },
  {
    id: "telmo",
    text: "Tivemos a sorte de, no início da jornada da ADECI, contar com o Ivo para criar a nossa primeira abordagem comercial a clientes. Foi com ele que demos os primeiros passos em como trazer vendas para a nossa empresa.",
    author: "Telmo Taipa",
    role: "Founder ADECI Group",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHhO4h2slV2_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723894291701?e=1744848000&v=beta&t=SW8AcOrsy8WJLRhRuQYnGd9FuWV8BGBCl3KSABu0BLE"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-full mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-[#021015] rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full flex flex-col"
          >
            <div className="relative h-64">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-transparent to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[#FC2406] text-xl font-bold mb-2">{testimonial.author}</h3>
              {testimonial.role && (
                <p className="text-gray-400 mb-2">{testimonial.role}</p>
              )}
              <p className="text-gray-300 font-medium text-sm mb-4 flex-grow">{testimonial.text}</p>
              <Link
                to={`/testemunhos/${testimonial.id}`}
                className="inline-block text-[#ff4d00] hover:text-[#E6E6E6] transition-colors"
              >
                Ver testemunho completo →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/testemunhos"
          className="inline-block bg-[#FC2406] px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
        >
          Mais Testemunhos
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
