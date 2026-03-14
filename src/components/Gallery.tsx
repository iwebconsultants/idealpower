import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export default function Gallery() {
  const [images, setImages] = React.useState<string[]>([
    "/images/commercial-electrician-melbourne.jpeg",
    "/images/electrical-contractor-team.png",
    "/images/electrician-working-switchboard-cables.jpg",
    "/images/professional-electrical-services.jpg",
    "/images/residential-electrician-services.webp",
    "/images/electrical-switchboard-installation.jpg"
  ]);

  React.useEffect(() => {
    const unsub = onSnapshot(doc(db, 'site_settings', 'main'), (doc) => {
      if (doc.exists() && doc.data().galleryImages) {
        setImages(doc.data().galleryImages);
      }
    });
    return () => unsub();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Work</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              A glimpse into our recent projects and high-quality workmanship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt={`Ideal Power Project Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold px-6 py-3 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
