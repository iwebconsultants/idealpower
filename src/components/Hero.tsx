import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import contentData from '../content.json';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Safari auto-play prevented this:", e));
    }
  }, []);

  const { scrollY } = useScroll();
  
  // Mouse movement state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Parallax transforms for different layers
  // Background moves slowly
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ['-1%', '1%']);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ['-1%', '1%']);

  // Text moves moderately
  const textX = useTransform(mouseXSpring, [-0.5, 0.5], ['-2%', '2%']);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], ['-2%', '2%']);

  // Main image moves in opposite direction (depth effect)
  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], ['4%', '-4%']);
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], ['2%', '-2%']);

  // Floating elements move fastest
  const floatX = useTransform(mouseXSpring, [-0.5, 0.5], ['-5%', '5%']);
  const floatY = useTransform(mouseYSpring, [-0.5, 0.5], ['-5%', '5%']);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* Layer 0: Background Pattern & Gradients */}
      <motion.div 
        style={{ x: bgX, y: bgY, scale: 1.05 }}
        className="absolute inset-0 z-0"
      >
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        
        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-8 items-center h-full min-h-[600px]">
          
          {/* Layer 1: Left Content (Headline) */}
          <motion.div 
            style={{ x: textX, y: textY }}
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 whitespace-pre-wrap">
                {contentData.heroHeadline}
              </h1>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Discover Our Offerings
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Layer 2: Center Image (The "Cutout" Effect) */}
          <motion.div 
            style={{ x: imageX, y: imageY }}
            className="lg:col-span-4 flex justify-center items-end relative h-full min-h-[400px] lg:min-h-[700px] order-1 lg:order-2"
          >
            <div className="relative w-full h-full flex items-end justify-center">
              {/* Glow behind the image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-t from-yellow-500/20 to-transparent blur-3xl rounded-full" />
              
              {/* Main Image - Masked to look like a cutout/portrait */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full md:max-w-md h-full min-h-[500px] flex items-center justify-center"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover md:rounded-3xl shadow-2xl md:border border-white/10 mask-image-gradient"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                >
                  <source src="/images/Australian_Technician_Installs_Home_Battery%20(1).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Floating Badge on Image */}
                <motion.div 
                  style={{ x: floatX, y: floatY }}
                  className="absolute -right-6 top-1/4 bg-red-600 text-white p-4 rounded-2xl shadow-xl border border-red-500/50 hidden sm:block"
                >
                  <ShieldCheck className="h-8 w-8 mb-1" />
                  <div className="font-bold text-sm">Govt.<br/>Rebates</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Layer 3: Right Content (Stats & Info) */}
          <motion.div 
            style={{ x: floatX, y: floatY }}
            className="lg:col-span-3 flex flex-col justify-between h-full py-12 order-3 lg:order-3 space-y-12 lg:space-y-0 relative z-20"
          >
            {/* Top: Social Proof */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-start lg:items-end text-right"
            >
              <div className="flex items-center -space-x-4 mb-4">
                {[
                  "/images/local-electrician.jpeg",
                  "/images/electrical-contractor-team.png",
                  "/images/commercial-electrician-melbourne.jpeg"
                ].map((src, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden">
                    <img src={src} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center border-2 border-black text-black font-bold">
                  +
                </div>
              </div>
              <p className="text-white font-medium text-lg max-w-[200px] text-left lg:text-right">
                18k+ Satisfied Customers All Over Sydney
              </p>
            </motion.div>

            {/* Bottom: Description */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative pl-6 lg:pl-0"
            >
              {/* Orange Line Decoration */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-red-600 rounded-full lg:hidden" />
              <div className="hidden lg:block absolute -top-6 left-0 w-12 h-1 bg-yellow-500 rounded-full" />
              
              <h3 className="text-3xl font-bold text-white mb-2">Your Solar Experts</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Idealpower specializes in Solar and Battery Installation across Sydney. We are fully compliant with Australian Standards, providing reliable systems eligible for Government Rebates.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
