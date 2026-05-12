import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoMoonOutline, IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { BiCoffeeTogo } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Snacks', href: '#snacks' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="relative">
            <IoMoonOutline className="text-3xl text-gold" />
            <BiCoffeeTogo className="text-xl text-cream absolute -bottom-1 -right-1" />
          </div>
          <span className="text-2xl font-serif font-bold text-cream tracking-wider">
            Moonlight <span className="text-gold">Coffee</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-cream hover:text-gold transition-colors font-medium text-sm tracking-widest uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Icons & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-cream hover:text-gold transition-colors text-xl">
            <IoSearchOutline />
          </button>
          <div className="relative cursor-pointer group">
            <IoCartOutline className="text-cream hover:text-gold transition-colors text-2xl" />
            <span className="absolute -top-2 -right-2 bg-gold text-midnight text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-2 px-6 text-sm"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-cream hover:text-gold text-lg font-medium tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-8 text-2xl pt-4">
                 <IoSearchOutline className="text-gold" />
                 <div className="relative">
                    <IoCartOutline className="text-gold" />
                    <span className="absolute -top-2 -right-2 bg-cream text-midnight text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                 </div>
              </div>
              <button className="btn-primary">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
