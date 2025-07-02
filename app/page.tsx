'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, StarIcon, CheckCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      title: 'Integriertes Anzeigen-Tool',
      description: 'Einfache Ausspielung von Anzeigen auf Facebook, Instagram, Google & YouTube',
      icon: '📊',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Landingpage-Vorlagen',
      description: 'Professionelle, conversion-optimierte Landingpages für alle Finanzthemen',
      icon: '🎯',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'KI-gestützte Kommunikation',
      description: 'Intelligente Nachrichtenabfolge per E-Mail, WhatsApp oder SMS',
      icon: '🤖',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Lead-Qualifizierung',
      description: 'Automatische Bewertung und Kategorisierung aller Leads',
      icon: '⭐',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Strukturierte Übergabe',
      description: 'Automatisierter CSV-Export ins zentrale PMA-System',
      icon: '📤',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Whitelabel-Design',
      description: 'Vollständig individualisierbar auf Ihr persönliches Branding',
      icon: '🎨',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const testimonials = [
    {
      name: 'Max Mustermann',
      role: 'PMA-Berater, München',
      text: 'Die Plattform hat meine Lead-Qualität um 300% verbessert. Endlich alles an einem Ort!',
      rating: 5
    },
    {
      name: 'Sarah Schmidt',
      role: 'PMA-Beraterin, Hamburg',
      text: 'Dank der Automatisierung spare ich täglich 2-3 Stunden. Einfach fantastisch!',
      rating: 5
    },
    {
      name: 'Thomas Weber',
      role: 'PMA-Berater, Berlin',
      text: 'Das Whitelabel-Design macht einen professionellen Eindruck bei meinen Kunden.',
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  PMA Platform
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className="btn-primary flex items-center gap-2"
              >
                Dashboard
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 py-20">
        <div className="absolute inset-0 opacity-50" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                All-in-One{' '}
                <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Lead- & Marketing
                </span>
                <br />
                plattform für PMA-Berater
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Vollständig whitelabel-basierte Komplettlösung zur eigenständigen 
                Leadgenerierung, -qualifizierung und strukturierten Übergabe an das zentrale PMA-System.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/dashboard" 
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
                >
                  <PlayCircleIcon className="w-6 h-6" />
                  Plattform starten
                </Link>
                <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-3">
                  <StarIcon className="w-6 h-6" />
                  Demo ansehen
                </button>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">300%</div>
                <div className="text-gray-600">Mehr qualifizierte Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600 mb-2">2-3h</div>
                <div className="text-gray-600">Zeitersparnis täglich</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Whitelabel anpassbar</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alles was Sie brauchen, an einem Ort
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Plattform vereint alle wichtigen Tools für erfolgreiches Lead-Management 
              in einer benutzerfreundlichen Oberfläche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="professional-card group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was unsere Berater sagen
            </h2>
            <p className="text-xl text-gray-600">
              Erfahrungen von PMA-Beratern, die bereits mit unserer Plattform arbeiten
            </p>
          </div>

          <div className="relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="professional-card text-center max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                &quot;{testimonials[currentSlide].text}&quot;
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentSlide].role}
                </div>
              </div>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit durchzustarten?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit Ihrer eigenen Lead- & Marketingplattform 
            und revolutionieren Sie Ihr Beratungsgeschäft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <PlayCircleIcon className="w-6 h-6" />
              Jetzt starten
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-3">
              <CheckCircleIcon className="w-6 h-6" />
              Kostenlose Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">PMA Lead- & Marketingplattform</h3>
            <p className="text-gray-400 mb-6">
              DSGVO-konformes Hosting in der EU • Support & Schulungen inklusive
            </p>
            <div className="border-t border-gray-700 pt-8 text-gray-400">
              <p>&copy; 2024 PMA Platform. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 