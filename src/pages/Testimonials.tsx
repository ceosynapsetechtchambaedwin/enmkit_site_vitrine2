import React from 'react';
import { Star, Quote, Users, Building, Home, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Ngono",
      role: "Mère de famille, Yaoundé",
      content: "Depuis l'installation d'EnmKit, j'ai réduit ma facture d'électricité de 38%. Je peux enfin prévoir mes dépenses énergétiques et mes enfants apprennent à être plus responsables avec l'électricité. Une révolution dans notre quotidien !",
      rating: 5,
      image: "https://images.app.goo.gl/aZFWKMNHYyFmwpgx8",
      savings: "38%",
      category: "Famille"
    },
    {
      name: "Paul Mbarga",
      role: "Entrepreneur, Douala",
      content: "EnmKit m'a permis de détecter des appareils défaillants qui consommaient inutilement. L'application est très intuitive et le support technique exceptionnel. Un investissement rentabilisé en 4 mois seulement !",
      rating: 5,
      image: "https://images.app.goo.gl/fZZQGqxKnbKi2p897",
      savings: "42%",
      category: "Entreprise"
    },
    {
      name: "Claudette Foko",
      role: "Directrice administrative",
      content: "La tranquillité d'esprit que procure EnmKit n'a pas de prix. Je peux surveiller ma consommation même en voyage d'affaires. La technologie camerounaise à son meilleur niveau ! Fière de soutenir l'innovation locale.",
      rating: 5,
      image: "https://images.app.goo.gl/ZCzMDCqiF3jB1nYW6",
      savings: "35%",
      category: "Professionnel"
    },
    {
      name: "Jean-Claude Talla",
      role: "Ingénieur, Bafoussam",
      content: "En tant qu'ingénieur, j'apprécie la précision des mesures d'EnmKit. Les données détaillées m'aident à optimiser l'efficacité énergétique de ma maison. Innovation made in Cameroon au niveau international !",
      rating: 5,
      image: "https://images.app.goo.gl/hfCB1o83aH2698a46",
      savings: "45%",
      category: "Technique"
    }
  ];

  const partners = [
    {
      name: "Orange Digital Center",
      logo: "🔶",
      description: "Partenaire stratégique dans le programme Orange Fab d'accélération des startups",
      type: "Accélérateur"
    },
    {
      name: "POESAM",
      logo: "🏆",
      description: "Programme d'Orientation et d'Encadrement pour la création de Start-up Africaines",
      type: "Institution"
    },
    {
      name: "Ministère de l'Énergie",
      logo: "⚡",
      description: "Soutien institutionnel pour l'innovation énergétique au Cameroun",
      type: "Gouvernement"
    },
    {
      name: "Université de IUT",
      logo: "🎓",
      description: "Partenariat recherche et développement en génie électrique",
      type: "Académique"
    }
  ];

  const stats = [
    {
      icon: <Home className="h-8 w-8" />,
      number: "100+",
      label: "Foyers équipés",
      description: "Familles qui font confiance à EnmKit",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "87%",
      label: "Satisfaction client",
      description: "Taux de satisfaction exceptionnellement élevé",
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <Building className="h-8 w-8" />,
      number: "6",
      label: "Villes couvertes",
      description: "Présence dans les principales villes du Cameroun",
      gradient: "from-accent-500 to-accent-600"
    }
  ];

  const caseStudyData = {
    before: "68,000",
    after: "42,000",
    savings: "26,000",
    percentage: "38%",
    payback: "6 mois"
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Star className="h-4 w-4 text-accent-400" />
              <span className="text-white/90 text-sm font-medium">Témoignages clients</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Ils ont choisi{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                EnmKit
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment EnmKit transforme la vie quotidienne de nos utilisateurs 
              et les aide à maîtriser leur consommation énergétique.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-r ${stat.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white group-hover:shadow-xl transition-all duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">{stat.number}</div>
                <div className="text-xl font-semibold text-neutral-700 mb-2">{stat.label}</div>
                <div className="text-neutral-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Quote className="h-4 w-4" />
              <span>Témoignages authentiques</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Ce que disent{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                nos clients
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Des témoignages authentiques de familles et professionnels qui ont adopté EnmKit 
              et transformé leur relation avec l'énergie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.category}
                  </span>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-neutral-900 text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-600 text-sm mb-3">{testimonial.role}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-neutral-700 leading-relaxed italic mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Savings Highlight */}
                <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-700">Économies réalisées</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                      -{testimonial.savings}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-8 md:p-16 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <TrendingUp className="h-4 w-4" />
                    <span>Étude de cas détaillée</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                    Famille Kamdem :{' '}
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      Transformation réussie
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                      Situation initiale
                    </h4>
                    <p>
                      Factures électriques imprévisibles variant de 45,000 à 85,000 FCFA par mois 
                      pour une famille de 5 personnes à Yaoundé. Aucun contrôle sur la consommation.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                      Solution EnmKit
                    </h4>
                    <p>
                      Installation en octobre 2024 avec formation complète de la famille 
                      à l'utilisation de l'application et optimisation personnalisée.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mr-2" />
                      Résultats après 6 mois
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Réduction moyenne de 38% sur les factures</li>
                      <li>Factures stabilisées et prévisibles</li>
                      <li>Détection d'un réfrigérateur défaillant</li>
                      <li>Optimisation des heures d'utilisation</li>
                      <li>Sensibilisation familiale réussie</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                  Impact financier
                </h4>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                    <span className="text-neutral-700 font-medium">Avant EMKit</span>
                    <span className="text-2xl font-bold text-red-600">{caseStudyData.before} FCFA/mois</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                    <span className="text-neutral-700 font-medium">Après EnmKit</span>
                    <span className="text-2xl font-bold text-green-600">{caseStudyData.after} FCFA/mois</span>
                  </div>
                  
                  <div className="border-t-2 border-neutral-200 pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">
                          {caseStudyData.percentage}
                        </div>
                        <div className="text-sm text-neutral-600">Réduction</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-r from-secondary-50 to-accent-50 rounded-xl">
                        <div className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                          {caseStudyData.payback}
                        </div>
                        <div className="text-sm text-neutral-600">Retour investissement</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent-50 to-secondary-50 p-4 rounded-xl text-center">
                    <div className="text-sm text-neutral-600 mb-1">Économies annuelles</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                      312,000 FCFA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-secondary-50 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Nos partenaires</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Écosystème{' '}
              <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
                d'excellence
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              2meTech collabore avec les acteurs les plus influents de l'écosystème 
              technologique et énergétique africain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-neutral-100 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="mb-3">
                  <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {partner.type}
                  </span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-4">{partner.name}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Users className="h-4 w-4 text-accent-400" />
              <span className="text-white/90 text-sm font-medium">Rejoignez nos clients satisfaits</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Votre tour de{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                réussir
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Découvrez par vous-même pourquoi EnmKit est la solution de référence 
              pour la gestion énergétique intelligente. Rejoignez plus de 1,200 foyers satisfaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-2xl hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="/solution"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explorer EnmKit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;