import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem]"
          >
            <h2 className="text-3xl font-serif font-bold text-cream mb-8">Book a Table</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold outline-none text-cream transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold outline-none text-cream transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="date"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold outline-none text-cream transition-colors"
                />
                <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold outline-none text-cream transition-colors appearance-none">
                  <option className="bg-midnight">2 People</option>
                  <option className="bg-midnight">4 People</option>
                  <option className="bg-midnight">6+ People</option>
                </select>
              </div>
              <textarea
                rows="4"
                placeholder="Special Requests"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold outline-none text-cream transition-colors"
              ></textarea>
              <button className="btn-primary w-full">Confirm Reservation</button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-serif font-bold text-cream mb-8">Contact Us</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold text-2xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cream mb-1">Our Location</h4>
                  <p className="text-warm/60">123 Moonlight Street, Coffee District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold text-2xl shrink-0">
                  <FiClock />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cream mb-1">Business Hours</h4>
                  <p className="text-warm/60">Mon - Fri: 8 AM - 11 PM</p>
                  <p className="text-warm/60">Sat - Sun: 9 AM - 12 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold text-2xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cream mb-1">Call Us</h4>
                  <p className="text-warm/60">+1 (234) 567-890</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
