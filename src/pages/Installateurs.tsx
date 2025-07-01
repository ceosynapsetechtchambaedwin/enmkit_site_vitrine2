import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Trophy, 
  Send, 
  CheckCircle, 
  Linkedin, 
  Facebook,
  MessageSquare,
  Calendar,
  Headphones,
  AlertCircle,
  ArrowRight,
  DollarSign, 
  Wifi,
  Shield,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '',
    budget: '',
    isCompany:'',
    localisation:'',
    experience:''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      company: '',
      budget: '',
      isCompany:'',
      localisation:'',
      experience:''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const annee_experiences = [
    "Entre 1  et 3 ans",
    "Entre 4  et 5ans",
    "Entre 5 et 10 ans",
  ];

  return (
    <div className="overflow-hidden">
              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                      <MessageSquare className="h-4 w-4 text-accent-400" />
                      <span className="text-white/90 text-sm font-medium">Devenez installateur</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                      Devenez  {' '}
                      <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                        installateur
                      </span> certifié EnMKit
                      
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                      Rejoignez notre réseau d’installateurs indépendants ou partenaires entreprises et participez à la révolution énergétique.

                    </p>
                  </div>
                </div>
              </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Trophy className="h-4 w-4" />
                        <span>Installateur certifié</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                        Rejoignez notre réseau d’{' '}
                    <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                        installateurs
                    </span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                    Nous recrutons des installateurs indépendants et des entreprises pour déployer EnMKit partout en Afrique
                    </p>
                </div>
            </div>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-100">
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Send className="h-4 w-4" />
                    <span>Formulaire de contact</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    Démarrons votre{' '}
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                     inscription
                    </span>
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Remplissez ce formulaire et notre équipe vous recontactera dans les 24h.
                  </p>
                </div>
                
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Message envoyé avec succès !</h4>
                      <p className="text-green-700 text-sm">
                        Nous avons bien reçu votre demande. Notre équipe vous recontactera dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="+237 6XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="localisation" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Localisation
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="localisation"
                        required
                        value={formData.localisation}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="Votre Localisation"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 w-300">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Expérience en installation  

                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      >
                        <option value="">Sélectionnez le nombre d'année</option>
                        {annee_experiences.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                      </div>
                  </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Etes vous une entreprise?
                      </label>
                      <select
                        id="isCompany"
                        name="isCompany"
                        value={formData.isCompany}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        >
                        <option value=""> Sélectionnez</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                     </select>
                    </div>
                    <div>
                      {formData.isCompany === "oui" && (
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-3">
                            Nom de l'entreprise
                        </label>
                            <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                            placeholder="Nom de votre entreprise"
                            />
             </div>
            )}

                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-semibold text-neutral-700 mb-3">
                            Téléversez votre pièce d'identité
                         </label>
                        <input
                         type="file"
                         id="image"
                         accept="image/*" 
                         required 
                         className="w-100%; p-10 w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg" 
                         />

                    </div>
                    
                  </div>

                  

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none text-lg"
                      placeholder="Décrivez le type d'installation déjà fait..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span>Envoyer ma candidature</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
              
                          {/* Sidebar */}
                          <div className="space-y-8">
                            {/* Quick Contact */}
                            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
                              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                Contact rapide
                              </h3>
                              <div className="space-y-4">
                                <a
                                  href="tel:+237"
                                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                                >
                                  <div className="bg-primary-500 p-3 rounded-lg">
                                    <Phone className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-neutral-900">Appel direct</div>
                                    <div className="text-sm text-neutral-600">+237 696 372 245</div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                </a>
                                
                                <a
                                  href="mailto:contact@2metech.cm"
                                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                                >
                                  <div className="bg-secondary-500 p-3 rounded-lg">
                                    <Mail className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-neutral-900">Email direct</div>
                                    <div className="text-sm text-neutral-600">contact@2metech.cm</div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-secondary-600 group-hover:translate-x-1 transition-all" />
                                </a>
                              </div>
                            </div>
              
                            {/* Social Media */}
                            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-100">
                              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                                Suivez-nous
                              </h3>
                              <div className="flex space-x-4 mb-6">
                                <a
                                  href="#"
                                  className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                                >
                                  <Linkedin className="h-6 w-6" />
                                </a>
                                <a
                                  href="#"
                                  className="bg-blue-800 text-white p-4 rounded-xl hover:bg-blue-900 transition-all duration-300 hover:scale-105"
                                >
                                  <Facebook className="h-6 w-6" />
                                </a>
                              </div>
                              <p className="text-neutral-600 text-sm leading-relaxed">
                                Restez informé de nos dernières actualités, innovations et témoignages clients
                              </p>
                            </div>
              
                            {/* Emergency Contact */}
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                              <div className="flex items-center space-x-3 mb-4">
                                <AlertCircle className="h-6 w-6 text-red-600" />
                                <h3 className="text-xl font-bold text-red-900">
                                  Support d'urgence
                                </h3>
                              </div>
                              <p className="text-red-700 mb-6 leading-relaxed">
                                Pour les problèmes techniques urgents avec votre installation EnMKit
                              </p>
                              <a
                                href="tel:+237"
                                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold"
                              >
                                <Headphones className="h-5 w-5 mr-2" />
                                Support 24/7
                              </a>
                            </div>
              
                            {/* Schedule Demo */}
                            <div className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-3xl p-8 border border-accent-100">
                              <div className="flex items-center space-x-3 mb-4">
                                <Calendar className="h-6 w-6 text-accent-600" />
                                <h3 className="text-xl font-bold text-accent-900">
                                  Démo personnalisée
                                </h3>
                              </div>
                              <p className="text-accent-700 mb-6 leading-relaxed">
                                Planifiez une démonstration EnMKit adaptée à vos besoins spécifiques
                              </p>
                              <button className="inline-flex items-center px-6 py-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-all duration-300 font-semibold">
                                <Zap className="h-5 w-5 mr-2" />
                                Planifier une démo
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
          </div>
  );
};

export default Contact;