import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Award, Shield, Leaf, Users } from 'lucide-react';
import logo from "./logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} className="App-logo" alt="logo" style={{height:50, width:50}} />
              
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#quality" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Quality</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                <a href="#home" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Products</a>
                <a href="#quality" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Quality</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/5618041/pexels-photo-5618041.jpeg")'
          }}
        >
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pure New Zealand Dairy Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              From our pristine pastures to your table, delivering the finest dairy products with uncompromising quality and natural goodness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Explore Products
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About NZ Pure Dairy</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over three decades, NZ Pure Dairy has been at the forefront of New Zealand's dairy industry, 
                committed to delivering exceptional dairy products that embody the purity and quality of our pristine landscapes.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our family-owned farms across the South Island produce milk from grass-fed cows in some of the world's 
                most pristine environments, ensuring every product meets the highest standards of quality and taste.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-gray-600">Partner Farms</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2587312/pexels-photo-2587312.jpeg" 
                alt="New Zealand dairy farm"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <Award className="w-8 h-8 mb-2" />
                <div className="font-semibold">Quality Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium dairy products, crafted with care and delivered fresh from our farms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Premium Milk"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Fresh Milk</h3>
                <p className="text-gray-600 mb-4">
                  Pure, creamy milk from grass-fed cows, rich in natural nutrients and calcium.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Learn More</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 rotate-[-90deg]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg" 
                alt="Artisan Cheese"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Artisan Cheeses</h3>
                <p className="text-gray-600 mb-4">
                  Handcrafted cheeses aged to perfection, offering distinctive flavors and textures.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Learn More</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 rotate-[-90deg]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/5191827/pexels-photo-5191827.jpeg" 
                alt="Greek Yogurt"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Greek Yogurt</h3>
                <p className="text-gray-600 mb-4">
                  Thick, creamy Greek yogurt packed with probiotics and natural protein.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Learn More</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 rotate-[-90deg]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/3821250/pexels-photo-3821250.jpeg" 
                alt="Butter"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Butter</h3>
                <p className="text-gray-600 mb-4">
                  Rich, golden butter churned from the finest cream for exceptional taste.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Learn More</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 rotate-[-90deg]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cream"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Cream</h3>
                <p className="text-gray-600 mb-4">
                  Silky smooth cream perfect for cooking, baking, and culinary creations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Learn More</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 rotate-[-90deg]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/8844030/pexels-photo-8844030.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Milk Powder"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Milk Powder</h3>
                <p className="text-gray-600 mb-4">
                  High-quality milk powder with extended shelf life and retained nutrition.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Learn More</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 rotate-[-90deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Values Section */}
      <section id="quality" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every step of our process is guided by our unwavering commitment to quality, sustainability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural & Sustainable</h3>
              <p className="text-gray-600">
                Our farming practices prioritize environmental sustainability and natural processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control at every stage of production.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Award Winning</h3>
              <p className="text-gray-600">
                Recognition for excellence from industry bodies and international awards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Heritage</h3>
              <p className="text-gray-600">
                Three generations of dairy expertise and traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The quality of NZ Pure Dairy products is exceptional. You can truly taste the difference in their milk and cheese."
              </p>
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <div className="text-gray-600">Restaurant Owner, Auckland</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a chef, I demand the finest ingredients. NZ Pure Dairy consistently delivers premium products that elevate my dishes."
              </p>
              <div className="font-semibold text-gray-900">James Chen</div>
              <div className="text-gray-600">Head Chef, Wellington</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Their commitment to sustainability and quality makes them our preferred dairy supplier. Highly recommended!"
              </p>
              <div className="font-semibold text-gray-900">Emma Thompson</div>
              <div className="text-gray-600">Procurement Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl mb-8 text-blue-100">
                Ready to experience the finest New Zealand dairy products? Contact us today to learn more about our offerings and partnerships.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+64 3 123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">info@nzpurdairy.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">Level 12, 7 waterloo<br />Quay, Willington, New Zealand 8001</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">NZ Pure Dairy</h3>
              <p className="text-gray-400">
                Premium New Zealand dairy products crafted with care and delivered with excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fresh Milk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artisan Cheese</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Greek Yogurt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium Butter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Farms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Guarantee</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NZ Pure Dairy. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;