import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiCoffeeTogo } from 'react-icons/bi';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Gallery from './sections/Gallery';
import Footer from './components/Footer';

import coffeeImg from './assets/coffee.png';
import snacksImg from './assets/snacks.png';

const coffeeItems = [
  { name: 'Espresso', price: '4.50', rating: '4.9', description: 'Rich and intense classic espresso.', image: coffeeImg },
  { name: 'Cappuccino', price: '5.50', rating: '4.8', description: 'Velvety steamed milk with double espresso.', image: coffeeImg },
  { name: 'Latte Art', price: '6.00', rating: '4.7', description: 'Creamy milk poured over rich espresso.', image: coffeeImg },
  { name: 'Mocha Magic', price: '6.50', rating: '4.9', description: 'Chocolatey delight with a caffeine kick.', image: coffeeImg },
  { name: 'Cold Brew', price: '5.00', rating: '4.6', description: 'Slow-steeped for 24 hours for maximum flavor.', image: coffeeImg },
  { name: 'Americano', price: '4.00', rating: '4.5', description: 'Simple, strong, and smooth.', image: coffeeImg },
];

const snackItems = [
  { name: 'Gourmet Burger', price: '12.50', rating: '4.9', description: 'Juicy beef with caramelized onions.', image: snacksImg },
  { name: 'Choco Lava Cake', price: '8.50', rating: '4.8', description: 'Melting chocolate heart dessert.', image: snacksImg },
  { name: 'Club Sandwich', price: '9.00', rating: '4.7', description: 'Fresh veggies and grilled chicken.', image: snacksImg },
  { name: 'Donut Glaze', price: '3.50', rating: '4.9', description: 'Sweet and fluffy morning treat.', image: snacksImg },
  { name: 'French Fries', price: '5.00', rating: '4.6', description: 'Crispy, golden, and salted to perfection.', image: snacksImg },
  { name: 'Artisan Cookies', price: '4.50', rating: '4.5', description: 'Home-baked with dark chocolate chunks.', image: snacksImg },
];

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 z-[100] bg-midnight flex flex-col items-center justify-center"
  >
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="text-6xl text-gold mb-8"
    >
      <BiCoffeeTogo />
    </motion.div>
    <motion.h2
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="text-2xl font-serif text-cream tracking-[0.5em] uppercase"
    >
      Moonlight Coffee
    </motion.h2>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-midnight text-warm min-h-screen font-sans selection:bg-gold selection:text-midnight">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <MenuSection
              id="menu"
              title="Featured Coffee"
              subtitle="The Signature Collection"
              items={coffeeItems}
            />
            <WhyChooseUs />
            <MenuSection
              id="snacks"
              title="Snacks & Desserts"
              subtitle="Sweet & Savory Treats"
              items={snackItems}
            />
            <Testimonials />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
