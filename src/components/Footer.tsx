import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Facebook, Award, ExternalLink } from 'lucide-react';
import Image2  from "./image/Image2.jpg"


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div >
                <img src={Image2} alt='logo' height="50px" width="50px"></img>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl blur opacity-30"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  2meTech
                </span>
                <div className="text-sm text-neutral-400 font-medium">Innovation énergétique</div>
              </div>
            </div>
            
            <p className="text-neutral-300 mb-8 max-w-md leading-relaxed">
              EnmKit, la solution camerounaise primée POESAM 2024 pour un contrôle intelligent 
              de votre consommation électrique. Innovation africaine, impact mondial.
            </p>

            {/* Awards */}
            <div className="bg-gradient-to-r from-accent-500/10 to-secondary-500/10 p-4 rounded-xl border border-accent-500/20 mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="h-5 w-5 text-accent-400" />
                <span className="text-accent-400 font-semibold">Lauréat POESAM 2024</span>
              </div>
              <p className="text-sm text-neutral-300">
                Grand Prix + Prix spécial féminin - Dr Agnès Virginie Tjahe
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-neutral-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <Linkedin className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-neutral-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <Facebook className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Solution EnmKit', href: '/solution' },
                { name: 'À propos', href: '/about' },
                { name: 'Témoignages', href: '/testimonials' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-neutral-800 p-2 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-primary-400 group-hover:text-white" />
                </div>
                <span className="text-neutral-300">+237 673 398 046</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-neutral-800 p-2 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-primary-400 group-hover:text-white" />
                </div>
                <span className="text-neutral-300">contact@2metech.cm</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-neutral-800 p-2 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-primary-400 group-hover:text-white" />
                </div>
                <span className="text-neutral-300">Bafoussam, Cameroun</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-r-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2024 2meTech. Tous droits réservés. 
              <span className="ml-2 text-accent-400 font-medium">
                Lauréat POESAM 2024 - Innovation énergétique africaine
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;