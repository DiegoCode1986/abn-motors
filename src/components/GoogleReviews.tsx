import { Star } from "lucide-react";

interface Review {
  id: number;
  image: string;
  alt: string;
}

export const GoogleReviews = () => {
  // Imagens dos depoimentos
  const reviews: Review[] = [
    {
      id: 1,
      image: "/ava1.PNG",
      alt: "Depoimento 1"
    },
    {
      id: 2,
      image: "/ava2.PNG",
      alt: "Depoimento 2"
    },
    {
      id: 3,
      image: "/ava3.PNG",
      alt: "Depoimento 3"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-ride-orange uppercase tracking-wide font-semibold text-sm sm:text-base">DEPOIMENTOS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <a 
            href="https://www.google.com/maps/place/ABN+Moto+Service/@-15.8157916,-47.9684375,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3172baf3d2d5:0xb9d07cc2f2b2987c!8m2!3d-15.8157916!4d-47.9658626!16s%2Fg%2F11wc9wbhl0?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-ride-orange hover:underline font-medium"
          >
            Deixe sua avaliação no Google
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={review.image} 
                alt={review.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
