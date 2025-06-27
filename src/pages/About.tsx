import React from 'react';
import { Award, Users, Target, Lightbulb, Globe, Heart, Star, Trophy, Rocket, Shield } from 'lucide-react';
import Image6 from "./images/image6.jpg"
const About = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Grand Prix POESAM 2024",
      description: "Reconnaissance de l'excellence en innovation technologique africaine",
      gradient: "from-accent-500 to-accent-600",
      highlight: "Lauréat principal"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Prix spécial féminin",
      description: "Célébration du leadership féminin dans la tech africaine",
      gradient: "from-primary-500 to-primary-600",
      highlight: "Leadership féminin"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Programme Orange Fab",
      description: "Sélectionnée parmi les 7 startups d'excellence du programme d'accélération",
      gradient: "from-secondary-500 to-secondary-600",
      highlight: "Top 7 startups"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Développer des solutions technologiques révolutionnaires adaptées aux défis africains",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Impact social",
      description: "Améliorer la qualité de vie des familles à travers la technologie accessible",
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description: "Maintenir les plus hauts standards de qualité et de service client",
      gradient: "from-accent-500 to-accent-600"
    }
  ];

  const team = [
    {
      name: "Dr Agnès Virginie Tjahe",
      role: "Fondatrice & CEO",
      image: "https://images.app.goo.gl/aGB5eBPNkQsv32wq7",
      description: "Docteure en génie électrique, experte en systèmes énergétiques intelligents et lauréate POESAM 2024",
      achievements: ["PhD Génie Électrique", "Lauréate POESAM 2024", "5+ ans d'expérience"],
      gradient: "from-primary-500 to-secondary-500"
    },
    {
      name: "Expert Tech Senior",
      role: "CTO & Co-fondateur",
      image: "https://images.app.goo.gl/aGB5eBPNkQsv32wq7",
      description: "Spécialiste IoT et développement de systèmes embarqués avec expertise internationale",
      achievements: ["Expert IoT", "Systèmes embarqués", "Innovation tech"],
      gradient: "from-secondary-500 to-accent-500"
    },
    {
      name: "Dr Agnès Virginie Tjahe",
      role: "Fondatrice & CEO",
      image: "https://images.app.goo.gl/aGB5eBPNkQsv32wq7",
      description: "Docteure en génie électrique, experte en systèmes énergétiques intelligents et lauréate POESAM 2024",
      achievements: ["PhD Génie Électrique", "Lauréate POESAM 2024"],
      gradient: "from-primary-500 to-secondary-500"
    },
    {
      name: "Responsable Informatique",
      role: "Head of Innovation",
      image: "https://images.app.goo.gl/aGB5eBPNkQsv32wq7",
      description: "Experte en recherche et développement de solutions énergétiques durables",
      achievements: ["R&D énergétique", "Solutions durables", "Innovation continue"],
      gradient: "from-accent-500 to-primary-500"
    }
  ];

  const milestones = [
    { year: "2023", event: "Fondation de 2meTech", description: "Création de l'entreprise avec une vision claire" },
    { year: "2024", event: "Développement EnmKit", description: "Finalisation du prototype et tests pilotes" },
    { year: "2024", event: "Lauréat POESAM", description: "Grand Prix + Prix spécial féminin" },
    { year: "2024", event: "Orange Fab", description: "Sélection programme d'accélération" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Globe className="h-4 w-4 text-accent-400" />
              <span className="text-white/90 text-sm font-medium">Innovation africaine</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Pionniers de{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                l'innovation
              </span>{' '}
              énergétique
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              2meTech développe des solutions technologiques révolutionnaires qui transforment 
              la relation des foyers africains avec l'énergie électrique.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="h-4 w-4" />
                  <span>Notre histoire</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Une vision{' '}
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    transformatrice
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  2meTech a été fondée avec une vision claire : démocratiser l'accès à une énergie 
                  intelligente et durable en Afrique. Face aux défis persistants de gestion énergétique 
                  sur le continent, notre équipe d'experts a développé EnmKit, une solution innovante 
                  qui répond aux besoins spécifiques des foyers africains.
                </p>
                <p>
                  Dirigée par Dr Agnès Virginie Tjahe, lauréate du Grand Prix POESAM 2024, notre 
                  entreprise combine excellence académique et expertise technique pour créer des 
                  produits qui ont un impact réel sur la vie quotidienne de nos utilisateurs.
                </p>
                <p>
                  Aujourd'hui, 2meTech est reconnue comme l'une des startups tech les plus prometteuses 
                  du Cameroun, avec des distinctions prestigieuses qui témoignent de notre engagement 
                  envers l'innovation et l'excellence.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: "2024", label: "Année de création" },
                  { number: "100+", label: "Foyers équipés" },
                  { number: "3", label: "Prix remportés" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={Image6}
                  alt="Histoire de 2meTech"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-accent-500 to-secondary-500 p-3 rounded-xl">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neutral-900">POESAM 2024</div>
                    <div className="text-sm text-neutral-600">Grand Prix</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4" />
              <span>Nos distinctions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Excellence{' '}
              <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                reconnue
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              La reconnaissance de notre excellence par les institutions les plus prestigieuses 
              du paysage technologique africain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-accent-100 to-secondary-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {achievement.highlight}
                  </span>
                </div>
                
                <div className={`bg-gradient-to-r ${achievement.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {achievement.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>Notre équipe</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Expertise{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                d'exception
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Des experts passionnés qui allient compétences techniques de haut niveau 
              et connaissance approfondie du marché africain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-8">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Role Badge */}
                  <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl">
                    <h3 className="font-bold text-neutral-900 text-lg">{member.name}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-neutral-600 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Notre{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                parcours
              </span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Les étapes clés de notre développement et de notre reconnaissance
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-2xl shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{milestone.event}</h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-accent-400" />
              <span className="text-white/90 text-sm font-medium">Nos valeurs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Principes{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                fondamentaux
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Les valeurs qui guident notre mission et notre vision 
              pour l'avenir énergétique de l'Afrique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all duration-300">
                  <div className={`text-white`}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-12 rounded-3xl">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Notre Mission</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Révolutionner la gestion énergétique domestique en Afrique en développant 
                des solutions technologiques innovantes, accessibles et durables qui permettent 
                à chaque foyer de maîtriser sa consommation électrique et de réaliser des 
                économies significatives tout en contribuant à un avenir énergétique durable.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-50 to-accent-50 p-12 rounded-3xl">
              <div className="bg-gradient-to-r from-secondary-500 to-accent-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Notre Vision</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Devenir le leader africain des solutions énergétiques intelligentes, 
                en contribuant à un avenir où chaque foyer du continent a accès à une 
                énergie propre, efficace et parfaitement contrôlée grâce à des technologies 
                conçues par et pour l'Afrique, avec un impact positif global.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;