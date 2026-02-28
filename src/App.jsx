import React, { useState } from "react";
import {
  Monitor,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Headphones,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="p-2 rounded-lg">
                <img src="/logo.png" className="h-14 w-14" />
              </div>
              <div>
                <span className="font-bold text-2xl text-slate-900 tracking-tight">
                  Disodex
                </span>
                <span className="font-medium text-xs text-blue-600 block leading-none ml-1">
                  Computers Ltd
                </span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#home"
                className="text-slate-600 hover:text-blue-600 font-medium transition"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-slate-600 hover:text-blue-600 font-medium transition"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-600 font-medium transition"
              >
                About Us
              </a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                Contact Us
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Products
              </a>
              <a
                href="#wholesale"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Wholesale
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
        style={{
          backgroundImage: "url(/homepage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/21.25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Trusted Tech Partner Since 2010
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.1]">
                Tech You Can Trust for{" "}
                <span className="text-blue-400">Business</span> & Home.
              </h1>
              <p className="text-lg text-black-200 max-w-lg leading-relaxed italic">
                Trusted nationwide for original computers, accesories and
                enterprise solutions offering competitive pricing, warranty
                coverage andreliable nationwide delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 hover:scale-110 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-lg shadow-blue-600/20">
                  <ShoppingCart className="w-5 h-5" />
                  Find Your Next Device
                </button>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-175">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose Disodex?
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed italic">
              We bridge the gap between enterprise logistics and personal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:scale-110 hover:shadow-lg transition duration-300 border-2 border-grey">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Logistics</h3>
              <p className="text-slate-600 leading-relaxed italic">
               From our door to yours, faster than you'd expect. 
               Experience seamless delivery that keeps up with your pace, so you get what you need, exactly when you need it.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:scale-110 hover:shadow-lg transition duration-300 border-2 border-grey">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Warranty Support</h3>
              <p className="text-slate-600 leading-relaxed italic">
               Protection that works as hard as you do.
               Our warranty support ensures your laptop stays ready for anything.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:scale-110 hover:shadow-lg transition duration-300 border-2 border-grey">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tech Support</h3>
              <p className="text-slate-600 leading-relaxed italic">
                Dedicated IT support for businesses. From assembly to network
                setup, we are here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-slate-175">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Our Products
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed italic">
                Everything you need, from components to ready-made systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:scale-110 hover:shadow-xl transition duration-300 border-2 border-grey">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <img
                  src="..\Computer.jpg"
                  alt="Laptops"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Laptops</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed italic">
                  Business, Gaming & Student
                </p>
                <a href="#" className="text-blue-600 text-sm font-semibold">
                  Shop Now
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:scale-110 hover:shadow-xl transition duration-300 border-2 border-grey">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <img
                  src="..\Components.jpg"
                  alt="Components"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Components</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed italic">
                  GPUs, RAM, Storage
                </p>
                <a href="#" className="text-blue-600 text-sm font-semibold">
                  Browse Parts
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:scale-110 hover:shadow-xl transition duration-300 border-2 border-grey">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <img
                  src="..\Accessories.jpg"
                  alt="Servers"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Accessories</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed italic">Device Essentials</p>
                <a href="#" className="text-blue-600 text-sm font-semibold">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="about" className="py-20 bg-slate-175">
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-xl text-white">Disodex</span>
              </div>
              <p className="text-sm">
                Your trusted partner for computer hardware since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Desktops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1 ">
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">Email: disodex1@gmail.com</p>
              <p className="text-sm mb-2">Phone: 08023920435</p>
              <p className="text-sm">Address: 1, Francis Oremeji Street Off Simibiat Abiola Way</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2026 Disodex Computers Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
       </section>
    </div>
   
  );
};

export default LandingPage;
