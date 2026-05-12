import { IoMoonOutline } from 'react-icons/io5';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-midnight pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <IoMoonOutline className="text-3xl text-gold" />
                <BiCoffeeTogo className="text-xl text-cream absolute -bottom-1 -right-1" />
              </div>
              <span className="text-2xl font-serif font-bold text-cream tracking-wider ml-1">
                Moonlight <span className="text-gold">Coffee</span>
              </span>
            </div>
            <p className="text-warm/50 leading-relaxed">
              Experience the art of handcrafted coffee in a serene, luxurious atmosphere. Every cup tells a story.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-warm/50 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-cream mb-6">Our Menu</h4>
            <ul className="space-y-4">
              {['Espresso', 'Cappuccino', 'Latte', 'Snacks', 'Desserts'].map((link) => (
                <li key={link}>
                  <a href="#menu" className="text-warm/50 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-cream mb-6">Newsletter</h4>
            <p className="text-warm/50 mb-6">Subscribe for exclusive offers and coffee tips.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:border-gold outline-none text-cream transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gold text-midnight px-6 rounded-full font-bold hover:bg-cream transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-warm/30 text-sm">
            Copyright 2026 Moonlight Coffee. All rights reserved. Designed with care for coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
