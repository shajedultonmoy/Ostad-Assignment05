import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-midnight/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-gold uppercase tracking-[0.3em] font-medium text-sm mb-4">Visual Story</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream">Our Gallery</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
