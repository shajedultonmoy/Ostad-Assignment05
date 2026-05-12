import { motion } from 'framer-motion';
import { FiCoffee, FiUsers, FiTruck, FiAward, FiStar } from 'react-icons/fi';

const features = [
  {
    icon: <FiCoffee />,
    title: 'Premium Beans',
    desc: 'Sourced from the finest coffee estates globally.'
  },
  {
    icon: <FiStar />,
    title: 'Fresh Ingredients',
    desc: 'Daily fresh milk, organic syrups, and artisan snacks.'
  },
  {
    icon: <FiUsers />,
    title: 'Cozy Environment',
    desc: 'Perfect ambiance for work, dates, or relaxation.'
  },
  {
    icon: <FiTruck />,
    title: 'Fast Delivery',
    desc: 'Hot coffee at your doorstep in under 20 minutes.'
  },
  {
    icon: <FiAward />,
    title: 'Expert Baristas',
    desc: 'Award-winning artists crafting every cup with love.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h4 className="text-gold uppercase tracking-[0.3em] font-medium text-sm mb-4">Why Us</h4>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream">Experience the Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(212, 163, 115, 0.1)' }}
              className="glass p-8 rounded-3xl text-center transition-all duration-300"
            >
              <div className="text-4xl text-gold mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-cream mb-3">{feature.title}</h3>
              <p className="text-warm/60 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
