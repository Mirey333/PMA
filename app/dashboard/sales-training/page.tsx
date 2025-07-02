'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon, 
  MicrophoneIcon, 
  DocumentTextIcon, 
  AcademicCapIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  ChartBarIcon,
  UserIcon,
  BoltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function SalesTraining() {
  const [isTraining, setIsTraining] = useState(false)
  const [activeScript, setActiveScript] = useState(0)
  const [selectedModule, setSelectedModule] = useState('overview')

  const trainingModules = [
    {
      id: 'scripts',
      title: 'Skript-Portal',
      description: 'Bewährte Verkaufsscripts für alle Situationen',
      icon: '📋',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-training',
      title: 'KI-Training',
      description: 'Personalisiertes Coaching mit KI-Feedback',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'roleplay',
      title: 'Rollenspiele',
      description: 'Realistische Verkaufsgespräche simulieren',
      icon: '🎭',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'analytics',
      title: 'Performance',
      description: 'Detaillierte Analyse Ihrer Fortschritte',
      icon: '📊',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const salesScripts = [
    {
      title: 'Erstkontakt - Telefonakquise',
      category: 'Akquise',
      difficulty: 'Beginner',
      duration: '3-5 Min.',
      description: 'Professioneller Eröffnungsscript für die erste Kontaktaufnahme mit potenziellen PMA-Kunden.',
      script: `Guten Tag [Name], hier ist [Ihr Name] von [Ihr Unternehmen]. 

Ich rufe Sie an, weil ich in den letzten Wochen mehrere Mandanten dabei unterstützt habe, ihre Finanzplanung zu optimieren und dabei durchschnittlich 15-20% mehr Rendite zu erzielen.

Da Sie als [Beruf/Unternehmer] sicherlich auch Interesse an einer professionellen Finanzstrategie haben, würde ich gerne kurz mit Ihnen sprechen...

Hätten Sie 2-3 Minuten Zeit für mich?`
    },
    {
      title: 'Einwandbehandlung - "Zu teuer"',
      category: 'Einwände',
      difficulty: 'Fortgeschritten',
      duration: '2-3 Min.',
      description: 'Professionelle Behandlung des Preiseinwands mit Wertargumentation.',
      script: `Ich verstehe Ihre Bedenken bezüglich der Investition völlig.

Lassen Sie mich das einmal so erklären: Wenn Sie heute 1.000€ in unsere Beratung investieren und dadurch in den nächsten Jahren 15.000€ mehr Rendite erzielen - ist das dann teuer oder günstig?

Unsere Mandanten sparen im Durchschnitt bereits im ersten Jahr das 3-fache unserer Beratungskosten ein. 

Die Frage ist nicht, ob Sie sich die Beratung leisten können, sondern ob Sie es sich leisten können, OHNE unsere Expertise zu bleiben...`
    },
    {
      title: 'Abschluss - Vertragsunterzeichnung',
      category: 'Closing',
      difficulty: 'Fortgeschritten',
      duration: '5-7 Min.',
      description: 'Systematisches Closing mit Alternativ-Technik für den finalen Vertragsabschluss.',
      script: `Basierend auf unserem Gespräch sehe ich zwei optimale Wege für Sie:

Option A: Wir starten mit unserem Premium-Paket und optimieren Ihre gesamte Finanzstrategie in den nächsten 90 Tagen.

Option B: Wir beginnen mit dem Basis-Paket und fokussieren uns zunächst auf Ihre wichtigsten 3 Finanzbausteine.

Was spricht Sie mehr an - der schnelle, umfassende Ansatz oder möchten Sie erstmal mit den Grundlagen beginnen?`
    }
  ]

  const trainingStats = [
    { label: 'Trainings absolviert', value: '12', change: '+3 diese Woche' },
    { label: 'Durchschnittliche Bewertung', value: '4.8/5', change: '+0.2 zum Vormonat' },
    { label: 'Gesprächszeit verbessert', value: '-18%', change: 'Effizienzsteigerung' },
    { label: 'Abschlussquote', value: '34%', change: '+12% zum Vormonat' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="glass-nav">
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="glass-button-secondary p-3">
                <ArrowLeftIcon className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gradient">KI-Vertriebstraining</h1>
                <p className="text-slate-600 text-sm">Professionelle Verkaufskompetenzen entwickeln</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">KI-Trainer aktiv</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-width py-8">
        {/* Training Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {trainingStats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-gradient-primary mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-emerald-600 font-medium">{stat.change}</div>
            </div>
          ))}
        </motion.div>

        {/* Module Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-2 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {trainingModules.map((module) => (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`p-4 rounded-xl transition-all duration-300 text-left ${
                  selectedModule === module.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'hover:bg-slate-100'
                }`}
              >
                <div className="text-2xl mb-2">{module.icon}</div>
                <h3 className="font-semibold mb-1">{module.title}</h3>
                <p className={`text-sm ${
                  selectedModule === module.id ? 'text-blue-100' : 'text-slate-600'
                }`}>
                  {module.description}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {selectedModule === 'scripts' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card p-8 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <DocumentTextIcon className="w-8 h-8 text-blue-500" />
                    <div>
                      <h2 className="text-2xl font-bold text-gradient">Skript-Portal</h2>
                      <p className="text-slate-600">Bewährte Scripts für jeden Verkaufsschritt</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {salesScripts.map((script, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl border transition-all cursor-pointer ${
                          activeScript === index
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        onClick={() => setActiveScript(index)}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-1">{script.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-slate-600">
                              <span className="px-2 py-1 bg-slate-100 rounded-full">{script.category}</span>
                              <span>{script.difficulty}</span>
                              <span>{script.duration}</span>
                            </div>
                          </div>
                          <PlayIcon className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4">{script.description}</p>
                        
                        {activeScript === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="border-t pt-4"
                          >
                            <h4 className="font-semibold mb-3 text-slate-800">Script:</h4>
                            <div className="bg-white p-4 rounded-lg text-slate-700 whitespace-pre-line">
                              {script.script}
                            </div>
                            <div className="flex gap-3 mt-4">
                              <button className="glass-button-primary px-4 py-2 text-sm flex items-center gap-2">
                                <MicrophoneIcon className="w-4 h-4" />
                                Mit KI üben
                              </button>
                              <button className="glass-button-secondary px-4 py-2 text-sm">
                                Script anpassen
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {selectedModule === 'ai-training' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AcademicCapIcon className="w-8 h-8 text-purple-500" />
                    <div>
                      <h2 className="text-2xl font-bold text-gradient">KI-Verkaufstrainer</h2>
                      <p className="text-slate-600">Personalisiertes Coaching mit KI-Feedback</p>
                    </div>
                  </div>

                  <div className="text-center py-12">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MicrophoneIcon className="w-16 h-16 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {isTraining ? 'Training läuft...' : 'Bereit für Ihr Training?'}
                    </h3>
                    
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      {isTraining 
                        ? 'Sprechen Sie natürlich. Die KI analysiert Ihre Wortwahl, Tonfall und Gesprächsführung in Echtzeit.'
                        : 'Starten Sie ein personalisiertes Verkaufstraining. Die KI simuliert verschiedene Kundentypen und gibt Ihnen sofortiges Feedback.'
                      }
                    </p>

                    <div className="flex justify-center gap-4">
                      {!isTraining ? (
                        <button
                          onClick={() => setIsTraining(true)}
                          className="glass-button-primary px-8 py-4 flex items-center gap-3"
                        >
                          <PlayIcon className="w-6 h-6" />
                          Training starten
                        </button>
                      ) : (
                        <div className="flex gap-3">
                          <button className="glass-button-secondary px-6 py-3 flex items-center gap-2">
                            <PauseIcon className="w-5 h-5" />
                            Pause
                          </button>
                          <button
                            onClick={() => setIsTraining(false)}
                            className="bg-red-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-red-600 transition-colors"
                          >
                            <StopIcon className="w-5 h-5" />
                            Beenden
                          </button>
                        </div>
                      )}
                    </div>

                    {isTraining && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200"
                      >
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-700 font-medium">KI-Trainer hört zu...</span>
                        </div>
                        <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full animate-pulse w-3/4"></div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {selectedModule === 'overview' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-gradient mb-6">Willkommen beim KI-Vertriebstraining</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Nutzen Sie modernste KI-Technologie, um Ihre Verkaufskompetenzen systematisch zu verbessern. 
                    Unsere Plattform bietet personalisiertes Training, bewährte Scripts und detaillierte Performance-Analysen.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-slate-200 rounded-xl">
                      <BoltIcon className="w-10 h-10 text-yellow-500 mb-4" />
                      <h3 className="font-semibold text-slate-800 mb-2">Schneller Einstieg</h3>
                      <p className="text-slate-600 text-sm">Beginnen Sie mit bewährten Scripts und ersten KI-Trainingseinheiten</p>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-xl">
                      <ChartBarIcon className="w-10 h-10 text-blue-500 mb-4" />
                      <h3 className="font-semibold text-slate-800 mb-2">Fortschritt verfolgen</h3>
                      <p className="text-slate-600 text-sm">Detaillierte Analysen zeigen Ihre Verbesserungen und Erfolgsmuster</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">Schnellaktionen</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setSelectedModule('ai-training')}
                  className="w-full glass-button-primary py-3 flex items-center gap-3"
                >
                  <MicrophoneIcon className="w-5 h-5" />
                  KI-Training starten
                </button>
                <button 
                  onClick={() => setSelectedModule('scripts')}
                  className="w-full glass-button-secondary py-3 flex items-center gap-3"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  Scripts durchsuchen
                </button>
              </div>
            </motion.div>

            {/* Recent Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">Letzte Erfolge</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <div className="text-sm">
                    <div className="font-medium text-slate-800">Einwandbehandlung</div>
                    <div className="text-slate-600">Bewertung: 4.8/5</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500" />
                  <div className="text-sm">
                    <div className="font-medium text-slate-800">Closing-Techniken</div>
                    <div className="text-slate-600">Verbesserung: +15%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Training Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">💡 Tipp des Tages</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Üben Sie täglich 10-15 Minuten mit der KI. Kurze, regelmäßige Sessions sind 
                effektiver als lange, seltene Trainingseinheiten.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 