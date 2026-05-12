import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';

const MenuCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-1">
          <AiFillStar className="text-gold" />
          <span className="text-cream text-sm font-bold">{item.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-cream mb-2">{item.name}</h3>
        <p className="text-warm/60 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gold text-2xl font-bold">${item.price}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-midnight hover:bg-cream transition-colors shadow-[0_0_15px_rgba(212,163,115,0.3)]"
          >
            <FiPlus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const MenuSection = ({ title, subtitle, items, id }) => {
  return (
    <section id={id} className="section-padding bg-midnight/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] font-medium text-sm mb-4"
          >
            {subtitle}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream"
          >
            {title}
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <MenuCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
