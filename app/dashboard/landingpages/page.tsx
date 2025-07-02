'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  PlusIcon,
  EyeIcon,
  PencilIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  PlayIcon,
  PauseIcon,
  FireIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface LandingPage {
  id: number
  name: string
  template: string
  status: 'active' | 'draft' | 'paused'
  views: number
  conversions: number
  conversionRate: number
  lastModified: string
  url: string
  erfolg: 'sehr gut' | 'gut' | 'okay' | 'schlecht'
}

interface LandingPageTemplate {
  id: number
  titel: string
  kategorie: string
  beschreibung: string
  conversionRate: number
  verwendet: number
  erfolgsrate: number
  industrie: string
  vorschau: string
  features: string[]
}

function StatusIcon({ status }: { status: string }) {
  if (status === 'active') return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
  if (status === 'paused') return <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
  return <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
}

function ErfolgsBadge({ erfolg }: { erfolg: string }) {
  const config = {
    'sehr gut': { bg: 'bg-green-100', text: 'text-green-800', emoji: '🎉', label: 'Top Seite!' },
    'gut': { bg: 'bg-blue-100', text: 'text-blue-800', emoji: '👍', label: 'Läuft gut' },
    'okay': { bg: 'bg-yellow-100', text: 'text-yellow-800', emoji: '⚠️', label: 'Geht so' },
    'schlecht': { bg: 'bg-red-100', text: 'text-red-800', emoji: '😔', label: 'Braucht Hilfe' }
  }
  
  const c = config[erfolg as keyof typeof config] || config.okay
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} flex items-center gap-1`}>
      <span>{c.emoji}</span>
      {c.label}
    </span>
  )
}

export default function LandingPages() {
  const [showHelp, setShowHelp] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  
  const [landingPages] = useState<LandingPage[]>([
    {
      id: 1,
      name: 'Altersvorsorge Beratung',
      template: 'Retirement Planning',
      status: 'active',
      views: 2847,
      conversions: 142,
      conversionRate: 4.99,
      lastModified: '2024-01-15',
      url: 'altersvorsorge-beratung',
      erfolg: 'sehr gut'
    },
    {
      id: 2,
      name: 'Baufinanzierung Experte',
      template: 'Home Financing',
      status: 'active',
      views: 1923,
      conversions: 89,
      conversionRate: 4.63,
      lastModified: '2024-01-14',
      url: 'baufinanzierung-experte',
      erfolg: 'gut'
    },
    {
      id: 3,
      name: 'Private Krankenversicherung',
      template: 'Health Insurance',
      status: 'draft',
      views: 0,
      conversions: 0,
      conversionRate: 0,
      lastModified: '2024-01-13',
      url: 'private-krankenversicherung',
      erfolg: 'schlecht'
    },
    {
      id: 4,
      name: 'Lebensversicherung Check',
      template: 'Life Insurance',
      status: 'paused',
      views: 1456,
      conversions: 67,
      conversionRate: 4.60,
      lastModified: '2024-01-12',
      url: 'lebensversicherung-check',
      erfolg: 'gut'
    }
  ])

  const [bestTemplates] = useState<LandingPageTemplate[]>([
    {
      id: 1,
      titel: 'Altersvorsorge Berater',
      kategorie: 'Finanzberatung',
      beschreibung: 'Hochkonvertierende Seite für Altersvorsorge-Beratung mit Kostenlosem Check-up',
      conversionRate: 6.8,
      verwendet: 47,
      erfolgsrate: 94,
      industrie: 'Versicherung',
      vorschau: 'Kostenloser Altersvorsorge-Check • Sofortige Analyse • Termin in 24h',
      features: ['Kostenloses Beratungsgespräch', 'Sofort-Analyse Tool', 'Termin-Buchung Widget', 'Vertrauens-Siegel']
    },
    {
      id: 2,
      titel: 'Baufinanzierung Experte',
      kategorie: 'Immobilienfinanzierung',
      beschreibung: 'Bewährte Vorlage für Baufinanzierung mit Rechner-Integration',
      conversionRate: 5.9,
      verwendet: 32,
      erfolgsrate: 89,
      industrie: 'Finanzierung',
      vorschau: 'Baufinanzierungs-Rechner • Beste Konditionen • Kostenlose Beratung',
      features: ['Interaktiver Rechner', 'Konditions-Vergleich', 'Video-Testimonials', 'Schnell-Kontakt Formular']
    },
    {
      id: 3,
      titel: 'PKV Vergleichsportal',
      kategorie: 'Krankenversicherung',
      beschreibung: 'Einfache und effektive Seite für PKV-Beratung mit Vergleichstool',
      conversionRate: 4.7,
      verwendet: 28,
      erfolgsrate: 76,
      industrie: 'Versicherung',
      vorschau: 'PKV-Vergleich • Bis zu 40% sparen • Kostenlose Analyse',
      features: ['Vergleichs-Tool', 'Einsparungs-Rechner', 'FAQ Bereich', 'WhatsApp Kontakt']
    },
    {
      id: 4,
      titel: 'Lebensversicherung Check',
      kategorie: 'Lebensversicherung',
      beschreibung: 'Optimierte Vorlage für Lebensversicherungs-Optimierung',
      conversionRate: 5.2,
      verwendet: 19,
      erfolgsrate: 82,
      industrie: 'Versicherung',
      vorschau: 'Lebensversicherung optimieren • Mehr Leistung • Weniger Kosten',
      features: ['Bestands-Check Tool', 'Optimierungs-Potential', 'Vertragsanalyse', 'Termin-Kalender']
    },
    {
      id: 5,
      titel: 'Riester Rente Berater',
      kategorie: 'Altersvorsorge',
      beschreibung: 'Spezialisierte Vorlage für Riester-Renten Beratung mit Förder-Rechner',
      conversionRate: 7.1,
      verwendet: 15,
      erfolgsrate: 91,
      industrie: 'Altersvorsorge',
      vorschau: 'Riester-Förderung sichern • Staatliche Zulagen • Kostenlose Berechnung',
      features: ['Förder-Rechner', 'Zulagen-Optimierung', 'Anbieter-Vergleich', 'Beratungs-Termin']
    },
    {
      id: 6,
      titel: 'Universaler Finanzcheck',
      kategorie: 'Gesamtberatung',
      beschreibung: 'All-in-One Vorlage für umfassende Finanzberatung',
      conversionRate: 4.3,
      verwendet: 41,
      erfolgsrate: 78,
      industrie: 'Finanzberatung',
      vorschau: 'Komplett-Check Ihrer Finanzen • 360° Analyse • Kostenlose Erstberatung',
      features: ['Finanz-Check Tool', '360° Analyse', 'Mehrere Kontakt-Optionen', 'Download-Bereich']
    }
  ])

  const gesamtStats = {
    aktiveSeiten: landingPages.filter(p => p.status === 'active').length,
    gesamtViews: landingPages.reduce((sum, p) => sum + p.views, 0),
    gesamtConversions: landingPages.reduce((sum, p) => sum + p.conversions, 0),
    durchschnittRate: landingPages.filter(p => p.views > 0).reduce((sum, p) => sum + p.conversionRate, 0) / landingPages.filter(p => p.views > 0).length || 0
  }

  return (
    <div className="space-y-8">
      {/* Einfacher Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient-primary mb-4">🌐 Ihre Landing Pages</h1>
        <p className="text-lg text-slate-600 mb-6">
          Hier finden Sie alle Ihre Webseiten. Sehen Sie welche am besten Kunden gewinnen.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/dashboard/landingpages/create" className="glass-button-primary px-8 py-4 text-lg flex items-center gap-3">
            <SparklesIcon className="w-6 h-6" />
            Neue Seite erstellen
          </Link>
          <button 
            onClick={() => setShowTemplates(!showTemplates)}
            className="glass-button-secondary px-6 py-4 flex items-center gap-2"
          >
            <FireIcon className="w-5 h-5" />
            Best Performance Vorlagen
          </button>
          <button 
            onClick={() => setShowHelp(!showHelp)}
            className="glass-button-secondary px-6 py-4 flex items-center gap-2"
          >
            <QuestionMarkCircleIcon className="w-5 h-5" />
            Hilfe
          </button>
        </div>
      </div>

      {/* Hilfe-Box */}
      {showHelp && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass-card p-6 border-l-4 border-blue-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <LightBulbIcon className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-semibold">💡 Was sind Landing Pages?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-medium mb-2">1️⃣ Landing Page = Webseite</div>
              <div className="text-slate-600">Eine spezielle Seite, die Besucher zu Kunden macht</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-medium mb-2">2️⃣ Besucher kommen an</div>
              <div className="text-slate-600">Menschen klicken auf Ihre Werbung und landen hier</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="font-medium mb-2">3️⃣ Werden zu Kunden</div>
              <div className="text-slate-600">Sie füllen ein Formular aus oder rufen Sie an</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Best Performance Vorlagen */}
      {showTemplates && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <FireIcon className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-xl font-bold text-gradient">🔥 Best Performance Vorlagen</h2>
              <p className="text-slate-600 text-sm">Diese Landing Page Vorlagen haben bei anderen PMA-Beratern besonders gut funktioniert</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">{template.titel}</h3>
                    <div className="text-sm text-slate-600">{template.kategorie} • {template.industrie}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{template.conversionRate}%</div>
                    <div className="text-xs text-slate-600">Conversion</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 mb-4">
                  <div className="font-medium text-slate-800 mb-2">💡 Vorschau:</div>
                  <div className="text-slate-600 text-sm mb-3">"{template.vorschau}"</div>
                  <div className="text-xs text-slate-500">{template.beschreibung}</div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-4">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{template.verwendet}x</div>
                    <div className="text-slate-600">Verwendet</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{template.erfolgsrate}%</div>
                    <div className="text-slate-600">Erfolgsrate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-600">{template.conversionRate}%</div>
                    <div className="text-slate-600">Ø Conversion</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-slate-700 mb-2">🔧 Enthalten:</div>
                  <div className="flex flex-wrap gap-1">
                    {template.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    Vorlage verwenden
                  </button>
                  <button className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Vorschau
                  </button>
                </div>

                {template.conversionRate >= 6 && (
                  <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <FireIcon className="w-4 h-4 text-green-500" />
                    <div className="text-xs text-green-700 font-medium">Top Performer!</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <LightBulbIcon className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-blue-800">💡 So funktioniert es</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-blue-700">
                <div className="font-medium mb-1">1️⃣ Vorlage auswählen</div>
                <div>Wählen Sie eine bewährte Vorlage aus Ihrer Branche</div>
              </div>
              <div className="text-blue-700">
                <div className="font-medium mb-1">2️⃣ Anpassen</div>
                <div>Texte, Bilder und Kontaktdaten an Ihr Unternehmen anpassen</div>
              </div>
              <div className="text-blue-700">
                <div className="font-medium mb-1">3️⃣ Veröffentlichen</div>
                <div>Seite live schalten und mit Werbung Besucher generieren</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Übersichtliche Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 text-center"
        >
          <GlobeAltIcon className="w-10 h-10 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">{gesamtStats.aktiveSeiten}</div>
          <div className="text-sm text-slate-600">Aktive Seiten</div>
          <div className="text-xs text-blue-600 mt-1">Arbeiten gerade für Sie</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 text-center"
        >
          <EyeIcon className="w-10 h-10 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">{gesamtStats.gesamtViews.toLocaleString()}</div>
          <div className="text-sm text-slate-600">Besucher</div>
          <div className="text-xs text-green-600 mt-1">Menschen die Ihre Seiten sahen</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 text-center"
        >
          <UserGroupIcon className="w-10 h-10 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">{gesamtStats.gesamtConversions}</div>
          <div className="text-sm text-slate-600">Neue Kunden</div>
          <div className="text-xs text-purple-600 mt-1">Haben Kontakt aufgenommen</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 text-center"
        >
          <ChartBarIcon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">{gesamtStats.durchschnittRate.toFixed(1)}%</div>
          <div className="text-sm text-slate-600">Erfolgsquote</div>
          <div className="text-xs text-orange-600 mt-1">Besucher werden zu Kunden</div>
        </motion.div>
      </div>

      {/* Performance Auswertung */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <ChartBarIcon className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold text-gradient">📊 Performance-Auswertung</h2>
            <p className="text-slate-600 text-sm">Welche Seiten gewinnen am besten Kunden und welche brauchen Hilfe</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Best Performer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-green-800">🎉 Top-Landing Pages</h3>
            </div>
            
            {landingPages
              .filter(p => p.erfolg === 'sehr gut' || (p.erfolg === 'gut' && p.conversionRate > 4.5))
              .sort((a, b) => b.conversionRate - a.conversionRate)
              .slice(0, 2)
              .map((page, index) => (
                <div key={page.id} className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-green-800">{page.name}</h4>
                      <div className="text-sm text-green-600">📄 {page.template}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">{page.conversions}</div>
                      <div className="text-xs text-green-600">Neue Kunden</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-green-700">{page.views.toLocaleString()}</div>
                      <div className="text-green-600 text-xs">Besucher</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{page.conversionRate.toFixed(1)}%</div>
                      <div className="text-green-600 text-xs">Erfolgsquote</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{page.views > 0 ? Math.round(page.views / page.conversions) : 0}</div>
                      <div className="text-green-600 text-xs">Besucher pro Kunde</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-green-100 rounded text-sm text-green-800">
                    <strong>💡 Warum läuft das so gut:</strong> {page.conversionRate > 4.8 ? 'Sehr hohe Erfolgsquote' : 'Viele Besucher werden zu Kunden'}
                  </div>
                  
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                      Mehr Werbung schalten
                    </button>
                    <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                      Ähnliche Seite erstellen
                    </button>
                  </div>
                </div>
              ))}
              
            {landingPages.filter(p => p.erfolg === 'sehr gut').length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-sm">Noch keine Top-Performer</div>
                <div className="text-xs">Ihre Seiten brauchen noch etwas Zeit</div>
              </div>
            )}
          </div>

          {/* Worst Performer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-red-800">😔 Brauchen Verbesserung</h3>
            </div>
            
            {landingPages
              .filter(p => p.erfolg === 'schlecht' || p.conversionRate < 2 || p.views === 0)
              .sort((a, b) => a.conversionRate - b.conversionRate)
              .slice(0, 2)
              .map((page, index) => (
                <div key={page.id} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-red-800">{page.name}</h4>
                      <div className="text-sm text-red-600">📄 {page.template}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-700">{page.conversions}</div>
                      <div className="text-xs text-red-600">Neue Kunden</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-red-700">{page.views.toLocaleString()}</div>
                      <div className="text-red-600 text-xs">Besucher</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700">{page.conversionRate.toFixed(1)}%</div>
                      <div className="text-red-600 text-xs">Erfolgsquote</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700">
                        {page.status === 'draft' ? 'Entwurf' : page.status === 'paused' ? 'Pausiert' : 'Aktiv'}
                      </div>
                      <div className="text-red-600 text-xs">Status</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-red-100 rounded text-sm text-red-800">
                    <strong>⚠️ Das Problem:</strong> {
                      page.views === 0 ? 'Noch keine Besucher - Seite ist im Entwurf' :
                      page.conversionRate < 2 ? 'Sehr niedrige Erfolgsquote' :
                      'Wenig Besucher oder schlechte Conversion'
                    }
                  </div>
                  
                  <div className="mt-2 flex gap-2">
                    {page.status === 'draft' ? (
                      <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                        Seite veröffentlichen
                      </button>
                    ) : (
                      <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                        Seite überarbeiten
                      </button>
                    )}
                    <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                      Verbesserungsplan
                    </button>
                  </div>
                </div>
              ))}
              
            {landingPages.filter(p => p.erfolg === 'schlecht' || p.views === 0).length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-2">👍</div>
                <div className="text-sm">Alle Seiten laufen gut!</div>
                <div className="text-xs">Keine schlechten Performer gefunden</div>
              </div>
            )}
          </div>
        </div>
        
        {/* Performance Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <LightBulbIcon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800">💡 Tipp des Tages</h3>
            </div>
            <p className="text-sm text-blue-700">
              Landing Pages mit über 4% Erfolgsquote sind sehr gut. 
              Investieren Sie mehr Werbebudget in diese Seiten.
            </p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <ChartBarIcon className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-800">📈 Branchenvergleich</h3>
            </div>
            <p className="text-sm text-purple-700">
              Ihre Erfolgsquote: {gesamtStats.durchschnittRate.toFixed(1)}%
              <br />
              <span className="text-xs">Branchenschnitt: 2-5%</span>
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800">🎯 Nächste Schritte</h3>
            </div>
            <p className="text-sm text-green-700">
              {landingPages.filter(p => p.status === 'draft').length > 0 
                ? 'Veröffentlichen Sie zuerst Ihre Entwurfs-Seiten.'
                : landingPages.filter(p => p.erfolg === 'sehr gut').length > 0
                ? 'Schalten Sie mehr Werbung für Ihre Top-Seiten.'
                : 'Optimieren Sie Ihre Seiten für bessere Conversion-Raten.'
              }
            </p>
          </div>
        </div>
      </motion.div>

      {/* Vereinfachte Landing Pages Liste */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-6"
      >
        <h2 className="text-xl font-bold text-gradient mb-6">📋 Alle Ihre Landing Pages</h2>
        
        <div className="space-y-4">
          {landingPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <StatusIcon status={page.status} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{page.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span>📄 {page.template}</span>
                      <span>📅 {new Date(page.lastModified).toLocaleDateString('de-DE')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <ErfolgsBadge erfolg={page.erfolg} />
                  {page.status === 'paused' && (
                    <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Seite aktivieren">
                      <PlayIcon className="w-4 h-4" />
                    </button>
                  )}
                  {page.status === 'active' && (
                    <button className="p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors" title="Seite pausieren">
                      <PauseIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-slate-800">{page.views.toLocaleString()}</div>
                  <div className="text-xs text-slate-600">Besucher</div>
                  <div className="text-xs text-slate-500">Menschen die kamen</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-600">{page.conversions}</div>
                  <div className="text-xs text-slate-600">Neue Kunden</div>
                  <div className="text-xs text-slate-500">Kontakt aufgenommen</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-600">{page.conversionRate.toFixed(1)}%</div>
                  <div className="text-xs text-slate-600">Erfolgsquote</div>
                  <div className="text-xs text-slate-500">Besucher → Kunden</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-purple-600">
                    {page.views > 0 ? Math.round(page.views / Math.max(page.conversions, 1)) : 0}
                  </div>
                  <div className="text-xs text-slate-600">Besucher pro Kunde</div>
                  <div className="text-xs text-slate-500">Effizienz</div>
                </div>
              </div>

              {page.status === 'draft' && (
                <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center gap-3">
                  <ExclamationTriangleIcon className="w-5 h-5 text-gray-500" />
                  <div className="text-sm">
                    <div className="font-medium text-gray-800">Diese Seite ist noch im Entwurf</div>
                    <div className="text-gray-600">Veröffentlichen Sie sie, um Besucher zu bekommen</div>
                  </div>
                  <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200">
                    Jetzt veröffentlichen
                  </button>
                </div>
              )}

              {page.erfolg === 'sehr gut' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <div className="text-sm text-green-700">
                    <span className="font-medium">Hervorragend! Diese Seite funktioniert sehr gut.</span> Schalten Sie mehr Werbung dafür.
                  </div>
                  <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">
                    Mehr Werbung
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {landingPages.length === 0 && (
          <div className="text-center py-12">
            <GlobeAltIcon className="mx-auto h-16 w-16 text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Noch keine Landing Pages erstellt
            </h3>
            <p className="text-slate-600 mb-6">
              Erstellen Sie Ihre erste Landing Page und gewinnen Sie neue Kunden.
            </p>
            <Link href="/dashboard/landingpages/create" className="glass-button-primary px-6 py-3">
              Erste Seite erstellen
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  )
} 