import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
                ShopHub
              </h3>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your one-stop destination for premium tech gadgets and accessories.
              Elevate your digital lifestyle with our curated collection.
            </p>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/kamaljeet-sharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-cyan-600 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/kamaljeet-sharma6321/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-cyan-600 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://x.com/kamaljeet6321"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-cyan-600 transition"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/kamaljeet5377/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-cyan-600 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Shop</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li><Link to="/profile" className="footer-link">My Account</Link></li>
              <li><Link to="/cart" className="footer-link">Cart</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/shipping" className="footer-link">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cyan-600 mt-0.5" />
                <span>Demo Project Address, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-cyan-600" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-cyan-600" />
                <span>support@shophub.demo</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-400">
          © {currentYear} ShopHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;