'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, StarIcon, CheckCircleIcon, PlayCircleIcon, MicrophoneIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      title: 'Integriertes Anzeigen-Management',
      description: 'Professionelle Kampagnen-Erstellung für Facebook, Instagram, Google & YouTube mit intelligenter Budget-Optimierung.',
      icon: '📊',
    },
    {
      title: 'Premium Landingpages',
      description: 'Conversion-optimierte Vorlagen mit A/B-Testing und personalisierten Inhalten für maximale Performance.',
      icon: '🎯',
    },
    {
      title: 'KI-gestützte Automatisierung',
      description: 'Intelligente Lead-Nurturing Sequenzen über E-Mail, WhatsApp & SMS mit personalisierter Ansprache.',
      icon: '🤖',
    },
    {
      title: 'Smart Lead-Scoring',
      description: 'Automatische Bewertung und Priorisierung aller Leads basierend auf Verhalten und Engagement.',
      icon: '⭐',
    },
    {
      title: 'Nahtlose Integration',
      description: 'Direkte Anbindung an Ihr PMA-System mit strukturiertem CSV-Export und API-Schnittstellen.',
      icon: '🔄',
    },
    {
      title: 'White-Label Branding',
      description: 'Vollständig anpassbares Design mit Ihrem Corporate Identity für professionellen Markenauftritt.',
      icon: '🎨',
    }
  ]

  const salesFeatures = [
    {
      title: 'KI-Vertriebstrainer',
      description: 'Personalisierte Trainingseinheiten mit KI-Feedback zu Ihrer Gesprächsführung und Verkaufstechnik.',
      icon: '🎓',
    },
    {
      title: 'Interaktives Skript-Portal',
      description: 'Bewährte Verkaufsscripts für alle PMA-Situationen mit anpassbaren Vorlagen und Best Practices.',
      icon: '📋',
    },
    {
      title: 'Rollenspiel-Simulator',
      description: 'Realistische Verkaufsgespräche mit KI-Kunden für risikofreies Training verschiedener Szenarien.',
      icon: '🎭',
    },
    {
      title: 'Performance Analytics',
      description: 'Detaillierte Analyse Ihrer Verkaufsgespräche mit Verbesserungsvorschlägen und Erfolgsmessung.',
      icon: '📈',
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Marcus Weber',
      role: 'Senior PMA-Berater, Frankfurt',
      text: 'Die Plattform hat meine Lead-Qualität um 280% verbessert und mir täglich 3 Stunden Arbeitszeit gespart. Absolut professionell!',
      rating: 5
    },
    {
      name: 'Sarah Lindemann',
      role: 'PMA-Beraterin, München',
      text: 'Das KI-Vertriebstraining hat meine Abschlussquote von 12% auf 34% gesteigert. Die Scripts sind Gold wert!',
      rating: 5
    },
    {
      name: 'Thomas Richter',
      role: 'PMA-Berater, Hamburg',
      text: 'Die Automatisierung ist beeindruckend. Meine Conversion-Rate ist von 2,1% auf 6,8% gestiegen – das sind messbare Ergebnisse.',
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="container-width">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold text-gradient">
                PMA Platform
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/dashboard" className="glass-button-primary flex items-center gap-2">
                Dashboard
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="glass-hero section-padding pt-32">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-slate-600 mb-8 animate-float">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                Premium Lead-Marketing + KI-Vertriebstraining
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-8 leading-tight">
                Professionelles{' '}
                <span className="text-gradient-primary">Lead-Management</span>
                {' '}+ KI-Vertriebstraining
              </h1>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Eine elegante All-in-One-Lösung für Leadgenerierung, intelligente Qualifizierung 
                und KI-gestütztes Vertriebstraining – perfekt abgestimmt auf PMA-Berater.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link href="/dashboard" className="glass-button-primary text-lg px-8 py-4 flex items-center gap-3">
                  <PlayCircleIcon className="w-6 h-6" />
                  Plattform starten
                </Link>
                <button className="glass-button-secondary text-lg px-8 py-4 flex items-center gap-3">
                  <AcademicCapIcon className="w-6 h-6" />
                  KI-Training testen
                </button>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">280%</div>
                <div className="text-slate-600 font-medium text-sm">Mehr Leads</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">+22%</div>
                <div className="text-slate-600 font-medium text-sm">Abschlussquote</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">3.2h</div>
                <div className="text-slate-600 font-medium text-sm">Zeit gespart</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">99.8%</div>
                <div className="text-slate-600 font-medium text-sm">Verfügbarkeit</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Management Features */}
      <section className="section-padding bg-white/40">
        <div className="container-width">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Lead-Management Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Professionelle Tools für die komplette Lead-Journey – von der ersten Anzeige 
                bis zur strukturierten Übergabe an Ihr PMA-System.
              </p>
            </motion.div>
          </div>

          <div className="grid-auto-fit">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center group"
              >
                <div className="glass-feature-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KI-Vertriebstraining Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="container-width">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-slate-600 mb-6">
                <MicrophoneIcon className="w-4 h-4 text-blue-500" />
                KI-Powered Sales Training
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Vertriebserfolg durch{' '}
                <span className="text-gradient-primary">KI-Training</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionäres KI-gestütztes Vertriebstraining mit personalisierten Coaching-Sessions, 
                Skript-Portal und realitätsnahen Rollenspielen für maximalen Verkaufserfolg.
              </p>
            </motion.div>
          </div>

          <div className="grid-auto-fit">
            {salesFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-500"
              >
                <div className="glass-feature-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
                  <AcademicCapIcon className="w-4 h-4" />
                  KI-gestützt
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sales Training CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient mb-6">
                Steigern Sie Ihre Abschlussquote um +22%
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Unsere KI analysiert Ihre Verkaufsgespräche in Echtzeit und gibt Ihnen 
                personalisierte Verbesserungsvorschläge. Trainieren Sie mit bewährten Scripts 
                und realistischen Rollenspielen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="glass-button-primary px-8 py-4 flex items-center gap-3">
                  <MicrophoneIcon className="w-5 h-5" />
                  KI-Training starten
                </button>
                <button className="glass-button-secondary px-8 py-4 flex items-center gap-3">
                  <DocumentTextIcon className="w-5 h-5" />
                  Skript-Portal ansehen
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Erfolgsgeschichten
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Erfahrungen von PMA-Beratern, die bereits erfolgreich mit unserer Plattform arbeiten
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="glass-testimonial text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-slate-700 mb-8 italic leading-relaxed font-light">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-slate-800 text-lg">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-slate-600 mt-1">
                  {testimonials[currentSlide].role}
                </div>
              </div>
            </motion.div>

            {/* Elegant Pagination */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500 scale-125 shadow-lg' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="glass-hero section-padding">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Starten Sie noch heute mit Ihrer professionellen Lead-Marketing-Plattform 
              und erleben Sie messbaren Erfolg in Ihrem Beratungsgeschäft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/dashboard" className="glass-button-primary text-lg px-10 py-5 flex items-center justify-center gap-3">
                <PlayCircleIcon className="w-6 h-6" />
                Kostenlos starten
              </Link>
              <button className="glass-button-secondary text-lg px-10 py-5 flex items-center justify-center gap-3">
                <CheckCircleIcon className="w-6 h-6" />
                Persönliche Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-nav border-t border-white/20">
        <div className="container-width py-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              PMA Lead-Marketing + KI-Vertriebstraining
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Professionelle All-in-One-Plattform • DSGVO-konformes Hosting in Deutschland • 
              Umfassendes Onboarding & KI-Training inklusive
            </p>
            
            <div className="border-t border-slate-200 pt-8">
              <p className="text-slate-500">
                © 2024 PMA Platform. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 