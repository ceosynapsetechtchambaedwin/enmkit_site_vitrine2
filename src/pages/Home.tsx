import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image5  from "./images/image5.jpg"
import Image1  from "./images/image7.jpg"
import { 
  ArrowRight, 
  Smartphone, 
  TrendingDown, 
  Activity, 
  Shield, 
  Users, 
  Award,
  Zap,
  Globe,
  Target,
  CheckCircle,
  Play,
  Star,
  Lightbulb
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Contrôle intelligent",
      description: "Surveillez et contrôlez votre consommation électrique depuis votre smartphone, où que vous soyez.",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Économies garanties",
      description: "Réduisez jusqu'à 40% vos factures d'électricité grâce à notre technologie d'optimisation avancée.",
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Monitoring temps réel",
      description: "Recevez des alertes instantanées et suivez votre consommation en temps réel avec des analyses prédictives.",
      gradient: "from-accent-500 to-accent-600"
    }
  ];

  const stats = [
    { number: "100+", label: "Foyers équipés", icon: <Users className="h-6 w-6" /> },
    { number: "40%", label: "Économies moyennes", icon: <TrendingDown className="h-6 w-6" /> },
    { number: "24/7", label: "Monitoring continu", icon: <Activity className="h-6 w-6" /> },
    { number: "2024", label: "Lauréat POESAM", icon: <Award className="h-6 w-6" /> }
  ];

  const achievements = [
    {
      title: "Grand Prix POESAM 2024",
      description: "Reconnaissance de l'excellence en innovation technologique africaine",
      icon: <Award className="h-6 w-6 text-accent-500" />
    },
    {
      title: "Prix spécial féminin",
      description: "Célébration du leadership féminin dans la tech africaine",
      icon: <Star className="h-6 w-6 text-secondary-500" />
    },
    {
      title: "Programme Orange Fab",
      description: "Sélectionnée parmi les startups d'excellence du programme d'accélération",
      icon: <Lightbulb className="h-6 w-6 text-primary-500" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/90 to-secondary-900/90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Award className="h-4 w-4 text-accent-400" />
                <span className="text-white/90 text-sm font-medium">Lauréat POESAM 2024</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  L'avenir énergétique{' '}
                  <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                    commence
                  </span>{' '}
                  avec{' '}
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    EnmKit
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                  La solution camerounaise primée qui révolutionne la gestion énergétique domestique. 
                  Innovation africaine, impact mondial.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/solution"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 hover:scale-105"
                >
                  Découvrez EnmKit
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="https://youtu.be/9IIHCJs5RWc?si=UIw04_euqjkTXRTD"
                >
                  <button className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Play className="mr-3 h-5 w-5" />
                      Voir la démo
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span className="text-white/70 text-sm">Installation en 2h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span className="text-white/70 text-sm">Garantie 5 ans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span className="text-white/70 text-sm">Support 24/7</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Device Image */}
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <img
                    src={Image5}
                    alt="image5"
                    className="w-full h-full object-cover rounded-2xl saturate-200 "
                  />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary-500 p-2 rounded-lg">
                      <TrendingDown className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">-40%</div>
                      <div className="text-sm text-neutral-600">Facture électrique</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-500 p-2 rounded-lg">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">24/7</div>
                      <div className="text-sm text-neutral-600">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-all duration-300">
                  <div className="text-primary-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>Technologie de pointe</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Pourquoi choisir{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                EnmKit
              </span>{' '}
              ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Une solution complète qui révolutionne la gestion de l'énergie domestique 
              avec une technologie de pointe développée au Cameroun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-primary-200 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Globe className="h-4 w-4" />
                  <span>Innovation africaine</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Une innovation{' '}
                  <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                    camerounaise
                  </span>{' '}
                  primée
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  2meTech est une entreprise tech camerounaise fondée par Dr Agnès Virginie Tjahe, 
                  lauréate du Grand Prix POESAM 2024 et du Prix spécial féminin. Notre mission : 
                  démocratiser l'accès à une énergie intelligente et durable en Afrique.
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-neutral-50 to-transparent rounded-xl hover:from-primary-50 transition-all duration-300">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{achievement.title}</h4>
                      <p className="text-neutral-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                En savoir plus sur notre équipe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={Image1}
                  alt="Équipe 2meTech - Dr Agnès Virginie Tjahe"
                  className="w-full h-full object-cover saturate-200 "
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-secondary-600" />
                  <div>
                    <div className="text-lg font-bold text-neutral-900">Innovation</div>
                    <div className="text-sm text-neutral-600">Made in Cameroon</div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Target className="h-4 w-4 text-accent-400" />
              <span className="text-white/90 text-sm font-medium">Rejoignez la révolution énergétique</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Prêt à transformer votre{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                gestion énergétique
              </span>{' '}
              ?
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les milliers de foyers qui économisent déjà avec EnmKit. 
              L'avenir énergétique commence aujourd'hui.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-2xl hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105"
              >
                Demander une démo gratuite
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/solution"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explorer EnmKit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;