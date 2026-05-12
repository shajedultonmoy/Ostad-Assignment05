import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="section-padding bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 border-2 border-gold/30 rounded-2xl group-hover:border-gold transition-colors duration-500"></div>
          <img
            src={aboutImg}
            alt="About Moonlight Coffee"
            className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full"
          />
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl z-20 hidden md:block">
            <p className="text-gold font-serif text-3xl font-bold">15+</p>
            <p className="text-cream text-xs uppercase tracking-widest">Years of Craft</p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h4 className="text-gold uppercase tracking-[0.3em] font-medium text-sm">Our Story</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream leading-tight">
            Crafting Moments <br />
            <span className="italic text-gold">Under the Moon</span>
          </h2>
          <p className="text-warm/70 text-lg leading-relaxed">
            Moonlight Coffee was born from a simple passion: to create a sanctuary where the art of coffee meets the serenity of the night. Every bean we roast is hand-selected and handled with the utmost care, ensuring a symphony of flavors in every cup.
          </p>
          <p className="text-warm/70 text-lg leading-relaxed">
            Whether you're seeking a quiet place to work or a cozy corner for conversation, our space is designed to inspire and rejuvenate.
          </p>
          <div className="pt-6">
            <button className="btn-outline">Read Full Story</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
