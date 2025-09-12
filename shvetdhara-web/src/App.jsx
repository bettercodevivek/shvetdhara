import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Truck,
  Leaf,
  Shield,
  Milk,
  Heart,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Calendar,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The freshest dairy I've ever had! Their curd tastes exactly like homemade. The quality is unmatched and delivery is always punctual.",
      role: "Premium Customer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Rohan Mehta",
      text: "Always on time, eco-friendly, and delicious. I trust them for my family. Their commitment to quality and sustainability is impressive.",
      role: "Family Subscriber",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Ananya Patel",
      text: "From milk to paneer, everything feels authentic. Highly recommend! The taste brings back childhood memories of farm-fresh dairy.",
      role: "Long-time Customer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const products = [
    { icon: <Milk className="h-12 w-12" />, name: "Fresh Milk", desc: "Rich & wholesome taste", color: "from-blue-400 to-blue-600", price: "₹65/L" },
    { icon: <Heart className="h-12 w-12" />, name: "Organic Curd", desc: "Smooth & probiotic-rich", color: "from-green-400 to-green-600", price: "₹80/500g" },
    { icon: <Star className="h-12 w-12" />, name: "Farm Paneer", desc: "Soft, fresh, protein-packed", color: "from-purple-400 to-purple-600", price: "₹120/500g" },
    { icon: <Shield className="h-12 w-12" />, name: "Pure Ghee", desc: "Golden, aromatic, nutrient-rich", color: "from-yellow-400 to-yellow-600", price: "₹450/L" },
    { icon: <Leaf className="h-12 w-12" />, name: "Natural Butter", desc: "Naturally churned goodness", color: "from-orange-400 to-orange-600", price: "₹280/500g" },
    { icon: <Award className="h-12 w-12" />, name: "Artisan Cheese", desc: "Creamy delight for all ages", color: "from-pink-400 to-pink-600", price: "₹350/200g" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"
          >
            Shvetdhara
          </motion.h1>
          <nav className="hidden md:flex gap-8 text-green-900 font-medium">
            <a href="#features" className="hover:text-green-600 transition-colors">Features</a>
            <a href="#products" className="hover:text-green-600 transition-colors">Products</a>
            <a href="#testimonials" className="hover:text-green-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-green-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-green-800" onClick={() => setNavOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        {navOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/50 z-50 flex">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              className="w-64 bg-white h-full p-6 shadow-2xl flex flex-col gap-6"
            >
              <button onClick={() => setNavOpen(false)} className="self-end text-green-800 hover:text-green-600 transition-colors">
                <X size={28} />
              </button>
              <a href="#features" onClick={() => setNavOpen(false)} className="text-lg font-medium hover:text-green-600 transition-colors">Features</a>
              <a href="#products" onClick={() => setNavOpen(false)} className="text-lg font-medium hover:text-green-600 transition-colors">Products</a>
              <a href="#testimonials" onClick={() => setNavOpen(false)} className="text-lg font-medium hover:text-green-600 transition-colors">Testimonials</a>
              <a href="#contact" onClick={() => setNavOpen(false)} className="text-lg font-medium hover:text-green-600 transition-colors">Contact</a>
            </motion.div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Slideshow */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={src} alt="Farm Fresh" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </motion.div>
        ))}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6 leading-tight"
          >
            Farm Fresh <span className="text-green-300">Dairy</span> Everyday
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            Pure milk, creamy curd, and wholesome goodness delivered to your doorstep with love from our farm to yours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full shadow-xl hover:bg-white/30 hover:scale-105 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Slide Controls */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Features / Products Section */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-3xl shadow-xl flex flex-col justify-between bg-gradient-to-br ${p.color} text-white`}
          >
            <div className="mb-6">{p.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <p className="mb-4">{p.desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">{p.price}</span>
              <button className="px-6 py-2 bg-white text-green-700 rounded-full hover:shadow-lg transition-all">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-emerald-50 to-green-100 px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-green-900">
            What Our <span className="text-emerald-600">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from families who trust us with their daily dairy needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="p-12 rounded-3xl shadow-2xl bg-white text-center relative"
          >
            <Quote className="h-12 w-12 text-green-500 mx-auto mb-6" />
            <p className="text-xl italic mb-8 text-gray-700 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-green-200"
              />
              <div className="text-left">
                <h4 className="font-bold text-green-900 text-xl">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </motion.div>

          <button
            onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-full hover:bg-white shadow-lg transition-all"
          >
            <ChevronLeft size={24} className="text-green-700" />
          </button>
          <button
            onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-full hover:bg-white shadow-lg transition-all"
          >
            <ChevronRight size={24} className="text-green-700" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentTestimonial ? "bg-green-600 scale-125" : "bg-green-300"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white text-center px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 initial={{ y: 30 }} whileInView={{ y: 0 }} className="text-5xl font-bold mb-6">
            Bring Home the Taste of <span className="text-yellow-300">Purity</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of happy families who enjoy healthy and natural dairy every single day. Experience the difference of farm-fresh quality.
          </motion.p>
          <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-10 py-4 bg-white text-green-700 font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg"
            >
              Subscribe Now
            </a>
            <a
              href="#"
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Shvetdhara</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              From our farm to your home, with love & purity. We're committed to providing the freshest, most natural dairy products sourced directly from our sustainable farm.
            </p>
            <div className="flex gap-4">
              <Facebook className="hover:text-green-400 cursor-pointer transition-colors" size={24} />
              <Twitter className="hover:text-green-400 cursor-pointer transition-colors" size={24} />
              <Instagram className="hover:text-green-400 cursor-pointer transition-colors" size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Subscription</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-gray-300">
                <Phone size={20} className="mt-1 text-green-400" /> <span>+91 98765 43210</span>
              </p>
              <p className="flex items-start gap-3 text-gray-300">
                <Mail size={20} className="mt-1 text-green-400" /> <span>support@shvetdhara.com</span>
              </p>
              <p className="flex items-start gap-3 text-gray-300">
                <Clock size={20} className="mt-1 text-green-400" /> <span>Mon-Sat: 6AM-8PM</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shvetdhara. All rights reserved. Crafted with care for your family.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
