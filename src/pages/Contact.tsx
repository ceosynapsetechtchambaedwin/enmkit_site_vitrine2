import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
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
    budget: ''
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
      budget: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      info: "+237 673 398 046",
      description: "Lun-Ven, 8h-18h",
      gradient: "from-primary-500 to-primary-600",
      action:<a href='https://wa.me/237673398046' target='_blank'>Envoyer un message</a> 
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "contact@2metech.cm",
      description: "Réponse sous 24h",
      gradient: "from-secondary-500 to-secondary-600",
      action:<a href='mailto: edwintchamba@gmail.com'>Envoyer un email</a> 
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      info: "Bafoussam, Cameroun",
      description: "Siège social",
      gradient: "from-accent-500 to-accent-600",
      action:<a href='https://www.google.com/maps/place/Bafoussam,+Cameroun' target='_blank' rel='nooper noreferrer'> Voir sur la carte</a>
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      info: "Lun-Ven : 8h-18h",
      description: "Sam : 9h-13h",
      gradient: "from-purple-500 to-purple-600",
      action: "Planifier RDV"
    }
  ];

  const services = [
    "Installation EnmKit",
    "Démonstration produit",
    "Support technique",
    "Formation utilisateur",
    "Partenariat commercial",
    "Maintenance préventive",
    "Consultation énergétique",
    "Autre"
  ];

  const budgetRanges = [
    "Moins de 100,000 FCFA",
    "100,000 - 300,000 FCFA",
    "300,000 - 500,000 FCFA",
    "500,000 - 1,000,000 FCFA",
    "Plus de 1,000,000 FCFA",
    "À discuter"
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
              <span className="text-white/90 text-sm font-medium">Contactez-nous</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Parlons de votre{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                projet énergétique
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
              sur EnmKit et vous accompagner dans votre transition énergétique.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-neutral-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2 text-center"
              >
                <div className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-neutral-700 mb-2">{item.info}</p>
                <p className="text-neutral-600 text-sm mb-4">{item.description}</p>
                <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      projet ensemble
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
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Entreprise / Organisation
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
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
                      placeholder="Décrivez votre projet, vos besoins ou vos questions en détail..."
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
                        <span>Envoyer le message</span>
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
                      <div className="text-sm text-neutral-600">+237 673 398 046</div>
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
                  Pour les problèmes techniques urgents avec votre installation EnmKit
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
                  Planifiez une démonstration EnmKit adaptée à vos besoins spécifiques
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

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Notre localisation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Venez nous{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                rencontrer
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Rendez-vous dans nos bureaux pour une démonstration personnalisée d'EnmKit 
              et découvrir notre showroom technologique.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative">
              <div className="text-center z-10">
                <div className="bg-white p-4 rounded-full shadow-lg mb-6 inline-block">
                  <MapPin className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">2meTech Headquarters</h3>
                <p className="text-lg text-neutral-600 mb-2">Bafoussam, Cameroun</p>
                <p className="text-sm text-neutral-500 mb-6">
                  Carte interactive et directions détaillées disponibles prochainement
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold">
                  <MapPin className="h-5 w-5 mr-2" />
                  Obtenir les directions
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 animate-float"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-200 rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Questions{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                fréquentes
              </span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Consultez nos réponses aux questions les plus courantes avant de nous contacter
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                question: "Combien coûte l'installation d'EMKit ?",
                answer: "Le prix varie selon la taille de votre installation. Contactez-nous pour un devis personnalisé gratuit adapté à vos besoins.",
                icon: <DollarSign className="h-6 w-6 text-primary-600" />
              },
              {
                question: "EMKit fonctionne-t-il sans internet ?",
                answer: "EMKit stocke les données localement et se synchronise dès que la connexion est rétablie. Fonctionnement garanti même hors ligne.",
                icon: <Wifi className="h-6 w-6 text-secondary-600" />
              },
              {
                question: "Quelle est la durée de garantie ?",
                answer: "EMKit bénéficie d'une garantie constructeur de 5 ans avec support technique inclus et maintenance préventive.",
                icon: <Shield className="h-6 w-6 text-accent-600" />
              },
              {
                question: "Installation dans toutes les villes ?",
                answer: "Nous couvrons actuellement 25 villes au Cameroun avec nos équipes techniques certifiées. Expansion continue.",
                icon: <MapPin className="h-6 w-6 text-primary-600" />
              },
              {
                question: "Formation utilisateur incluse ?",
                answer: "Formation complète incluse dans l'installation : prise en main, optimisation et bonnes pratiques énergétiques.",
                icon: <Users className="h-6 w-6 text-secondary-600" />
              },
              {
                question: "Retour sur investissement ?",
                answer: "Retour sur investissement moyen de 6-8 mois grâce aux économies d'énergie réalisées avec EnmKit.",
                icon: <TrendingUp className="h-6 w-6 text-accent-600" />
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {faq.icon}
                </div>
                <h4 className="font-bold text-neutral-900 mb-3 text-lg">
                  {faq.question}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;