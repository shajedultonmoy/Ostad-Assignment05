import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Sophia Williams',
    role: 'Coffee Blogger',
    text: 'The atmosphere at Moonlight Coffee is simply magical. The Espresso is the best I have ever had!',
    image: 'https://i.pravatar.cc/150?u=sophia'
  },
  {
    name: 'James Anderson',
    role: 'Software Engineer',
    text: 'A perfect place to work. Fast Wi-Fi, cozy seating, and the Cold Brew keeps me going for hours.',
    image: 'https://i.pravatar.cc/150?u=james'
  },
  {
    name: 'Emily Davis',
    role: 'Food Critic',
    text: 'The snacks here are surprisingly gourmet. The burgers are a must-try along with their signature Mocha.',
    image: 'https://i.pravatar.cc/150?u=emily'
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-midnight/90">
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-gold uppercase tracking-[0.3em] font-medium text-sm mb-4">Testimonials</h4>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-16">What Our Guests Say</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          className="pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="glass p-10 md:p-16 rounded-[3rem] relative"
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-24 h-24 rounded-full border-4 border-gold shadow-2xl"
                  />
                </div>
                <p className="text-2xl italic text-warm/80 mb-8 font-serif leading-relaxed">
                  "{review.text}"
                </p>
                <h3 className="text-xl font-bold text-gold">{review.name}</h3>
                <p className="text-cream/50 uppercase tracking-widest text-xs mt-1">{review.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
