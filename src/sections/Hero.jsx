import { motion } from 'framer-motion';
import { BiCoffeeTogo } from 'react-icons/bi';
import heroBg from '../assets/hero-bg.png';

const floatingCups = [
  { x: '12%', y: '18%', duration: 13 },
  { x: '28%', y: '72%', duration: 17 },
  { x: '46%', y: '32%', duration: 15 },
  { x: '64%', y: '64%', duration: 19 },
  { x: '78%', y: '24%', duration: 14 },
  { x: '88%', y: '78%', duration: 18 },
];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-midnight/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {floatingCups.map((cup, i) => (
          <motion.div
            key={i}
            className="absolute text-gold/20 text-4xl"
            initial={{
              x: cup.x,
              y: cup.y,
              rotate: 0,
            }}
            animate={{
              y: [cup.y, '-20px', '20px', cup.y],
              rotate: 360,
            }}
            transition={{
              duration: cup.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <BiCoffeeTogo />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif font-bold text-cream mb-6 drop-shadow-2xl"
        >
          Moonlight <span className="text-gold">Coffee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-warm/80 mb-10 font-light tracking-wide italic"
        >
          "Experience handcrafted coffee under the glow of moonlight."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="btn-primary">Explore Menu</button>
          <button className="btn-outline">Book a Table</button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
