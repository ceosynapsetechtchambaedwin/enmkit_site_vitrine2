import React from 'react';
import {Shield, Award, Trophy, Lightbulb, Globe, AlertTriangle, DollarSign, Zap, Rocket } from 'lucide-react'

const Parteners = () =>{
  const Partenaire_info = [
  {
    icon:"http://res.cloudinary.com/dwateogqu/image/upload/image_totale",
    title: "TotalEnergies",
    description: "Lauréat du programme Startupper of the year, EnMKit a bénéficié d'un appui en visibilité, formation et financement pour booster son deploiement",
    highlight: "Soutien financier & entrepreneurial"
  },
  {
    title: "ORANGE",
    description: "Orange accompagne EnMKit via des infrastructures numériques, facilitant la collecte et la transmission des données en temps réel",
    highlight: "Support technologique"
  },
  {
    icon:"http://res.cloudinary.com/dwateogqu/image/upload/image_yali",
    title: "YALI Pretoria",
    description: "Grâce au Design Challenge remporté, Yali a permis de structurer EnMKit autour d'une démarche centrée sur l'impact social et l'innovation",
    highlight: "Encadrement et innovation"
  },
  {
    title: "F2E (Fonds d'Equipement et d'Entreprise)",
    description: "F2E soutient EnMKit dans l'expérimentation terrain et les connexions avce les acteurs de l'energie au Cameroun",
    highlight: "Appui local"
  },
  ]
  const allies = [
      {
        icon: <Lightbulb className="h-6 w-6" />,
        title: "Soutien Stratégique",
        description: "Ils accompagnent EnMKit dans son déploiement, renforçant notre crédibilité et notre ancrage industriel ",
        gradient: "from-primary-500 to-primary-600"
      },
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "Collaboration technologique ",
        description: "Avec nos partenaires, nous intégrons des solutions de pointe en IA et IoT pour améliorer l'efficacité énergétique en Afrique",
        gradient: "from-secondary-500 to-secondary-600"
      },
      {
        icon: <Globe className="h-6 w-6" />,
        title: "Reconnaissance internationale",
        description: "Notre collaboration avce des programmes valorise l'impact social et l'innovation du projet à l'échelle continentale",
        gradient: "from-accent-500 to-accent-600"
      }
    ];
    const impacts = [
        {
          icon: <AlertTriangle className="h-8 w-8" />,
          title: "TotalEnergies",
          description: "Partenaire stratégique pour l'accompagnement industriel et l'expérimentatin terrain",
          impact: "Accès à un réseau d'infrastructure et expertise énergétique",
          gradient: "from-red-500 to-red-600"
        },
        {
          icon: <DollarSign className="h-8 w-8" />,
          title: "ORANGE",
          description: "Partenaire technologique pour la connectivité et l'integration numérique",
          impact: "Soutien à la connectivité IoT et à la diffusion nationale",
          gradient: "from-orange-500 to-orange-600"
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: "YALI",
          description: "Appui institutionnel à travers la reconnaissance du leadership et de l'innovation",
          impact: "Renforcement de la visibilité panafricaine du projet ",
          gradient: "from-yellow-500 to-yellow-600"
        },
        {
          icon: <Rocket  className="h-8 w-8" />,
          title: "F2E",
          description: "Collaboration technique pour la recherche et le developpement énergétique",
          impact: "Accès à des données techniques et support R&D",
          gradient: "from-secondary-600 to-secondary-600"
        }
      ];
  
   return (
        <div className="overflow-hidden">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <Award className="h-4 w-4 text-accent-400" />
                  <span className="text-white/90 text-sm font-medium">Partenaires clés</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                  Partenaires{' '}
                  <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                    Strategiques
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  EnMKit bénéficie du soutien de partenaires prestigieux qui nous accompagnent dans notre mission 
                  d'innover pour un avenir énergétique durable en Afrique. 
                </p>
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                      <div className="text-center mb-20">
                        <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                          <Trophy className="h-4 w-4" />
                          <span>Support stratégique</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                         Nos Partenaires,{' '}
                          <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                           notre force
                          </span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                          Nous collaborons avec des leaders engagés pour propulser EnMKit plus loin. Découvrez les rôles de chacun dans notre mission énergétique
                        </p>
                      </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
            
                    {Partenaire_info.map((partners, index) => (
                    <div
                      key={index}
                      className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
                    >
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-accent-100 to-secondary-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {partners.highlight}
                        </span>
                      </div>
                      
                      <div className={`bg-gradient-to-r ${partners.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {partners.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                        {partners.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {partners.description}
                      </p>
                    </div>
            ))}
          </div>
            <section className="py-24  from-neutral-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-20">
                        <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                          <AlertTriangle className="h-4 w-4" />
                          <span>Impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                          Un Impact {' '}
                          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Considérable
                          </span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                          Découvrez comment nos partenaires contribuent concrètement au déploiment et à l'impact d'EnMKit
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-8">
                        {impacts.map((impact, index) => (
                          <div
                            key={index}
                            className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
                          >
                            <div className={`bg-gradient-to-r ${impact.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                              {impact.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                              {impact.title}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                              {impact.description}
                            </p>
                            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-xl">
                              <div className="text-sm font-semibold text-primary-700">
                                Impact : {impact.impact}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
            </section>
            <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                        <Shield className="h-4 w-4 text-accent-400" />
                        <span className="text-white/90 text-sm font-medium">Nos alliés</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nos alliés de{' '}
                        <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                          confiance
                        </span>
                      </h2>
                      <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Nos partenaires stratégiques accompagnent EnMKit dans sa mission d'innovation énergétique à travers 
                        un appui technique, financier ou institutionnel
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {allies.map((allie, index) => (
                        <div key={index} className="text-center group">
                          <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all duration-300">
                            <div className={`text-white`}>
                              {allie.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">
                            {allie.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed">
                            {allie.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        </div>

)}
export default Parteners;
