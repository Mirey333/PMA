'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  PlusIcon,
  EyeIcon,
  PlayIcon,
  PauseIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CurrencyEuroIcon,
  UserGroupIcon,
  SparklesIcon,
  VideoCameraIcon,
  PhotoIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Campaign {
  id: number
  name: string
  platform: string
  status: 'läuft' | 'pausiert' | 'entwurf'
  budget: number
  ausgegeben: number
  interessenten: number
  klicks: number
  erfolg: 'sehr gut' | 'gut' | 'okay' | 'schlecht'
  created: string
  einfach: boolean
}

interface AdsTemplate {
  id: number
  titel: string
  plattform: string
  typ: string
  anzeigentext: string
  zielgruppe: string
  ctr: number
  costPerLead: number
  verwendungen: number
  erfolgsrate: number
  kategorie: string
}

function StatusIcon({ status }: { status: string }) {
  if (status === 'läuft') return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
  if (status === 'pausiert') return <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
  return <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
}

function ErfolgsBadge({ erfolg }: { erfolg: string }) {
  const config = {
    'sehr gut': { bg: 'bg-green-100', text: 'text-green-800', emoji: '🎉', label: 'Läuft super!' },
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

export default function AdsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: 'Altersvorsorge für Familien',
      platform: 'Facebook',
      status: 'läuft',
      budget: 300,
      ausgegeben: 180,
      interessenten: 24,
      klicks: 156,
      erfolg: 'sehr gut',
      created: '15.01.2024',
      einfach: true
    },
    {
      id: 2,
      name: 'Hausfinanzierung leicht erklärt',
      platform: 'Instagram',
      status: 'läuft',
      budget: 200,
      ausgegeben: 95,
      interessenten: 12,
      klicks: 89,
      erfolg: 'gut',
      created: '12.01.2024',
      einfach: true
    },
    {
      id: 3,
      name: 'Krankenversicherung Wechsel',
      platform: 'Google',
      status: 'pausiert',
      budget: 150,
      ausgegeben: 45,
      interessenten: 3,
      klicks: 23,
      erfolg: 'schlecht',
      created: '10.01.2024',
      einfach: false
    }
  ])

  const [showHelp, setShowHelp] = useState(false)
  const [showAdTemplates, setShowAdTemplates] = useState(false)

  const [adsTemplates] = useState<AdsTemplate[]>([
    {
      id: 1,
      titel: 'Altersvorsorge Familien-Anzeige',
      plattform: 'Facebook',
      typ: 'Bild-Post',
      anzeigentext: '💰 Sparen Sie richtig für Ihre Familie?\n\n✅ Kostenlose Altersvorsorge-Analyse\n✅ Staatliche Förderung optimal nutzen\n✅ Unverbindliche Beratung vom Experten\n\n👨‍👩‍👧‍👦 Sichern Sie Ihre Familie ab - Jetzt kostenloses Gespräch vereinbaren!',
      zielgruppe: 'Familien 25-45 Jahre',
      ctr: 3.8,
      costPerLead: 12.50,
      verwendungen: 89,
      erfolgsrate: 94,
      kategorie: 'Altersvorsorge'
    },
    {
      id: 2,
      titel: 'Baufinanzierung Instagram Story',
      plattform: 'Instagram',
      typ: 'Story',
      anzeigentext: '🏠 Ihr Traumhaus wartet!\n\n💡 So funktioniert Baufinanzierung:\n• Eigenkapital checken\n• Förderungen nutzen\n• Zinsen vergleichen\n\nSwipe up für kostenlosen Finanzierungs-Check! 👆',
      zielgruppe: 'Paare 25-40 Jahre',
      ctr: 4.2,
      costPerLead: 15.30,
      verwendungen: 67,
      erfolgsrate: 87,
      kategorie: 'Baufinanzierung'
    },
    {
      id: 3,
      titel: 'PKV Google Textanzeige',
      plattform: 'Google',
      typ: 'Textanzeige',
      anzeigentext: 'Private Krankenversicherung Vergleich\nBis zu 40% sparen bei besseren Leistungen. Kostenlose Beratung vom Experten. Sofortiger Vergleich aller Tarife.',
      zielgruppe: 'Gutverdiener 30-55 Jahre',
      ctr: 2.9,
      costPerLead: 18.90,
      verwendungen: 54,
      erfolgsrate: 79,
      kategorie: 'Krankenversicherung'
    },
    {
      id: 4,
      titel: 'Riester-Rente Facebook Video',
      plattform: 'Facebook',
      typ: 'Video',
      anzeigentext: '🎥 Riester-Rente: Lohnt sich das noch?\n\nIn diesem Video erfahren Sie:\n✅ Wann Riester sich lohnt\n✅ Welche Alternativen es gibt\n✅ Wie Sie staatliche Zulagen maximieren\n\n💬 Kostenlose Beratung vereinbaren!',
      zielgruppe: 'Arbeitnehmer 25-50 Jahre',
      ctr: 5.1,
      costPerLead: 9.80,
      verwendungen: 43,
      erfolgsrate: 91,
      kategorie: 'Altersvorsorge'
    },
    {
      id: 5,
      titel: 'Lebensversicherung LinkedIn',
      plattform: 'LinkedIn',
      typ: 'Sponsored Post',
      anzeigentext: '⚡ Lebensversicherung optimieren\n\nViele zahlen zu viel für zu wenig Leistung. Als Finanzexperte helfe ich Ihnen dabei:\n\n• Bestehende Verträge analysieren\n• Einsparpotentiale aufdecken\n• Bessere Alternativen finden\n\nKostenloses Beratungsgespräch vereinbaren.',
      zielgruppe: 'Berufstätige 30-55 Jahre',
      ctr: 2.3,
      costPerLead: 22.40,
      verwendungen: 31,
      erfolgsrate: 73,
      kategorie: 'Lebensversicherung'
    },
    {
      id: 6,
      titel: 'Universelle Finanzberatung',
      plattform: 'Facebook',
      typ: 'Karussell-Anzeige',
      anzeigentext: '📊 Kompletter Finanz-Check\n\n🔍 Wo stehen Sie finanziell?\n• Altersvorsorge\n• Versicherungen\n• Investments\n• Immobilien\n\n💡 Kostenlose 360° Analyse sichern!',
      zielgruppe: 'Erwachsene 28-60 Jahre',
      ctr: 3.4,
      costPerLead: 16.70,
      verwendungen: 78,
      erfolgsrate: 85,
      kategorie: 'Finanzberatung'
    }
  ])

  const einfacheVorschlaege = [
    {
      typ: 'Facebook Post',
      titel: '💰 "Warum Sparen allein nicht reicht"',
      beschreibung: 'Einfacher Post der erklärt, warum man mehr als nur sparen sollte',
      zielgruppe: 'Familien 25-45 Jahre',
      erfolgsChance: 'Sehr hoch',
      icon: PhotoIcon,
      farbe: 'text-blue-500'
    },
    {
      typ: 'Instagram Story',
      titel: '🏠 "In 3 Schritten zum Eigenheim"',
      beschreibung: 'Kurze Story die zeigt, wie Hausbau finanzierung funktioniert',
      zielgruppe: 'Junge Paare',
      erfolgsChance: 'Hoch',
      icon: VideoCameraIcon,
      farbe: 'text-pink-500'
    },
    {
      typ: 'Google Anzeige',
      titel: '⚕️ "PKV: Besser versichert, weniger zahlen"',
      beschreibung: 'Textanzeige für Leute die nach Krankenversicherung suchen',
      zielgruppe: 'Gutverdiener 30+',
      erfolgsChance: 'Mittel',
      icon: DocumentTextIcon,
      farbe: 'text-green-500'
    }
  ]

  const gesamtStats = {
    budget: campaigns.reduce((sum, c) => sum + c.budget, 0),
    ausgegeben: campaigns.reduce((sum, c) => sum + c.ausgegeben, 0),
    interessenten: campaigns.reduce((sum, c) => sum + c.interessenten, 0),
    aktivKampagnen: campaigns.filter(c => c.status === 'läuft').length
  }

  const toggleKampagne = (id: number) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === id 
        ? { ...campaign, status: campaign.status === 'läuft' ? 'pausiert' : 'läuft' }
        : campaign
    ))
  }

  return (
    <div className="space-y-8">
      {/* Einfacher Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient-primary mb-4">📢 Ihre Werbeanzeigen</h1>
        <p className="text-lg text-slate-600 mb-6">
          Hier finden Sie alle Ihre Werbeanzeigen. Ganz einfach erstellen, verwalten und verbessern.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/dashboard/ads/simple-creator" className="glass-button-primary px-8 py-4 text-lg flex items-center gap-3">
            <SparklesIcon className="w-6 h-6" />
            Neue Anzeige erstellen
          </Link>
          <button 
            onClick={() => setShowAdTemplates(!showAdTemplates)}
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
            <h3 className="text-lg font-semibold">💡 Wie funktionieren Werbeanzeigen?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-medium mb-2">1️⃣ Anzeige erstellen</div>
              <div className="text-slate-600">Wählen Sie ein Thema (z.B. Altersvorsorge) und wir helfen Ihnen dabei</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-medium mb-2">2️⃣ Budget festlegen</div>
              <div className="text-slate-600">Entscheiden Sie, wie viel Sie ausgeben möchten (schon ab 50€)</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="font-medium mb-2">3️⃣ Interessenten gewinnen</div>
              <div className="text-slate-600">Ihre Anzeige läuft automatisch und bringt Ihnen neue Kunden</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Best Performance Vorlagen */}
      {showAdTemplates && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <FireIcon className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-xl font-bold text-gradient">🔥 Best Performance Anzeigen-Vorlagen</h2>
              <p className="text-slate-600 text-sm">Diese Anzeigen haben bei anderen PMA-Beratern besonders viele Interessenten gebracht</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adsTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">
                      {template.plattform === 'Facebook' ? '👥' : 
                       template.plattform === 'Instagram' ? '📸' : 
                       template.plattform === 'Google' ? '🔍' : 
                       template.plattform === 'LinkedIn' ? '💼' : '📱'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">{template.titel}</h3>
                      <div className="text-xs text-slate-600">{template.plattform} • {template.typ}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">€{template.costPerLead}</div>
                    <div className="text-xs text-slate-600">pro Interessent</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 mb-4 text-sm">
                  <div className="font-medium text-slate-800 mb-2">📝 Anzeigentext:</div>
                  <div className="text-slate-600 whitespace-pre-line text-xs leading-relaxed max-h-20 overflow-hidden">
                    {template.anzeigentext}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-4">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{template.verwendungen}x</div>
                    <div className="text-slate-600">Verwendet</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-600">{template.ctr}%</div>
                    <div className="text-slate-600">Klickrate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{template.erfolgsrate}%</div>
                    <div className="text-slate-600">Erfolgsrate</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-slate-700 mb-2">
                    <span className="font-medium">🎯 Zielgruppe:</span> {template.zielgruppe}
                  </div>
                  <div className="text-xs text-slate-700">
                    <span className="font-medium">📂 Kategorie:</span> {template.kategorie}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 text-xs bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    Vorlage verwenden
                  </button>
                  <button className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Volltext anzeigen
                  </button>
                </div>

                {template.costPerLead < 15 && (
                  <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <FireIcon className="w-4 h-4 text-green-500" />
                    <div className="text-xs text-green-700 font-medium">Sehr günstig pro Lead!</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <LightBulbIcon className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-blue-800">💡 So nutzen Sie die Vorlagen</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-blue-700">
                <div className="font-medium mb-1">1️⃣ Vorlage auswählen</div>
                <div>Wählen Sie eine Vorlage, die zu Ihrem Thema passt</div>
              </div>
              <div className="text-blue-700">
                <div className="font-medium mb-1">2️⃣ Text anpassen</div>
                <div>Ändern Sie Namen, Telefonnummer und Details zu Ihrem Unternehmen</div>
              </div>
              <div className="text-blue-700">
                <div className="font-medium mb-1">3️⃣ Anzeige schalten</div>
                <div>Budget festlegen und Anzeige auf der gewählten Plattform starten</div>
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
          <CurrencyEuroIcon className="w-10 h-10 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">€{gesamtStats.budget}</div>
          <div className="text-sm text-slate-600">Ihr Gesamt-Budget</div>
          <div className="text-xs text-green-600 mt-1">€{gesamtStats.ausgegeben} bereits ausgegeben</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 text-center"
        >
          <UserGroupIcon className="w-10 h-10 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">{gesamtStats.interessenten}</div>
          <div className="text-sm text-slate-600">Neue Interessenten</div>
          <div className="text-xs text-blue-600 mt-1">Menschen die Interesse zeigten</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 text-center"
        >
          <MegaphoneIcon className="w-10 h-10 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">{gesamtStats.aktivKampagnen}</div>
          <div className="text-sm text-slate-600">Laufende Anzeigen</div>
          <div className="text-xs text-purple-600 mt-1">Anzeigen die gerade arbeiten</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 text-center"
        >
          <ChartBarIcon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-800">
            {gesamtStats.interessenten > 0 ? Math.round((gesamtStats.interessenten / gesamtStats.ausgegeben) * 10) : 0}€
          </div>
          <div className="text-sm text-slate-600">Pro Interessent</div>
          <div className="text-xs text-orange-600 mt-1">So viel kostet ein Lead</div>
        </motion.div>
      </div>

      {/* Einfache Content-Vorschläge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <SparklesIcon className="w-8 h-8 text-purple-500" />
            <div>
              <h2 className="text-xl font-bold text-gradient">✨ Anzeigen-Ideen für Sie</h2>
              <p className="text-slate-600 text-sm">Bewährte Anzeigen, die gut funktionieren</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {einfacheVorschlaege.map((vorschlag, index) => {
            const Icon = vorschlag.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Icon className={`w-6 h-6 ${vorschlag.farbe}`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{vorschlag.typ}</div>
                    <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                      vorschlag.erfolgsChance === 'Sehr hoch' ? 'bg-green-100 text-green-700' :
                      vorschlag.erfolgsChance === 'Hoch' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {vorschlag.erfolgsChance} Erfolgschance
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {vorschlag.titel}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{vorschlag.beschreibung}</p>
                
                <div className="text-xs text-slate-500 mb-4">
                  🎯 Zielgruppe: {vorschlag.zielgruppe}
                </div>
                
                <button className="w-full glass-button-primary py-2 text-sm">
                  Anzeige erstellen
                </button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Vereinfachte Kampagnen-Liste */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <h2 className="text-xl font-bold text-gradient mb-6">📋 Ihre laufenden Anzeigen</h2>
        
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <StatusIcon status={campaign.status} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{campaign.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span>📱 {campaign.platform}</span>
                      <span>📅 seit {campaign.created}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <ErfolgsBadge erfolg={campaign.erfolg} />
                  <button
                    onClick={() => toggleKampagne(campaign.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      campaign.status === 'läuft' 
                        ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                        : 'bg-green-100 text-green-600 hover:bg-green-200'
                    }`}
                    title={campaign.status === 'läuft' ? 'Anzeige pausieren' : 'Anzeige starten'}
                  >
                    {campaign.status === 'läuft' ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-slate-800">€{campaign.budget}</div>
                  <div className="text-xs text-slate-600">Budget</div>
                  <div className="text-xs text-green-600">€{campaign.ausgegeben} ausgegeben</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-600">{campaign.interessenten}</div>
                  <div className="text-xs text-slate-600">Interessenten</div>
                  <div className="text-xs text-slate-500">Neue Kontakte</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-600">{campaign.klicks}</div>
                  <div className="text-xs text-slate-600">Klicks</div>
                  <div className="text-xs text-slate-500">Anzeige angeklickt</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-purple-600">
                    {campaign.ausgegeben > 0 ? Math.round(campaign.ausgegeben / Math.max(campaign.interessenten, 1)) : 0}€
                  </div>
                  <div className="text-xs text-slate-600">Pro Interessent</div>
                  <div className="text-xs text-slate-500">Kosten je Lead</div>
                </div>
              </div>

              {campaign.erfolg === 'schlecht' && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />
                  <div className="text-sm">
                    <div className="font-medium text-red-800">Diese Anzeige braucht Hilfe</div>
                    <div className="text-red-600">Wenig Interessenten für das Budget. Soll ich Verbesserungsvorschläge machen?</div>
                  </div>
                  <button className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200">
                    Tipps anzeigen
                  </button>
                </div>
              )}

              {campaign.erfolg === 'sehr gut' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <div className="text-sm text-green-700">
                    <span className="font-medium">Super! Diese Anzeige läuft sehr gut.</span> Möchten Sie das Budget erhöhen?
                  </div>
                  <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">
                    Budget erhöhen
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {campaigns.length === 0 && (
          <div className="text-center py-12">
            <MegaphoneIcon className="mx-auto h-16 w-16 text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Noch keine Anzeigen erstellt
            </h3>
            <p className="text-slate-600 mb-6">
              Erstellen Sie Ihre erste Werbeanzeige und gewinnen Sie neue Kunden.
            </p>
            <Link href="/dashboard/ads/simple-creator" className="glass-button-primary px-6 py-3">
              Erste Anzeige erstellen
            </Link>
          </div>
        )}
      </motion.div>

      {/* Performance Auswertung */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <ChartBarIcon className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold text-gradient">📊 Performance-Auswertung</h2>
            <p className="text-slate-600 text-sm">Welche Anzeigen laufen am besten und welche brauchen Hilfe</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Best Performer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-green-800">🎉 Top-Performer</h3>
            </div>
            
            {campaigns
              .filter(c => c.erfolg === 'sehr gut')
              .sort((a, b) => {
                const aEffizienz = a.ausgegeben > 0 ? a.interessenten / a.ausgegeben : 0
                const bEffizienz = b.ausgegeben > 0 ? b.interessenten / b.ausgegeben : 0
                return bEffizienz - aEffizienz
              })
              .slice(0, 2)
              .map((campaign, index) => {
                const kostenProLead = campaign.ausgegeben > 0 ? Math.round(campaign.ausgegeben / Math.max(campaign.interessenten, 1)) : 0
                const budgetVerbrauch = Math.round((campaign.ausgegeben / campaign.budget) * 100)
                
                return (
                  <div key={campaign.id} className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-green-800">{campaign.name}</h4>
                        <div className="text-sm text-green-600">📱 {campaign.platform}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">{campaign.interessenten}</div>
                        <div className="text-xs text-green-600">Interessenten</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-green-700">€{kostenProLead}</div>
                        <div className="text-green-600 text-xs">pro Lead</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-700">{budgetVerbrauch}%</div>
                        <div className="text-green-600 text-xs">Budget genutzt</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-700">{Math.round((campaign.interessenten / campaign.klicks) * 100) || 0}%</div>
                        <div className="text-green-600 text-xs">Conversion</div>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-2 bg-green-100 rounded text-sm text-green-800">
                      <strong>💡 Warum läuft das so gut:</strong> Niedrige Kosten pro Lead und hohe Conversion-Rate
                    </div>
                    
                    <div className="mt-2 flex gap-2">
                      <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                        Budget erhöhen
                      </button>
                      <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                        Ähnliche Anzeige erstellen
                      </button>
                    </div>
                  </div>
                )
              })}
              
            {campaigns.filter(c => c.erfolg === 'sehr gut').length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-sm">Noch keine Top-Performer</div>
                <div className="text-xs">Ihre Anzeigen brauchen noch etwas Zeit</div>
              </div>
            )}
          </div>

                     {/* Worst Performer */}
           <div className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
               <h3 className="text-lg font-semibold text-red-800">😔 Brauchen Hilfe</h3>
             </div>
             
             {campaigns
               .filter(c => c.erfolg === 'schlecht')
               .sort((a, b) => {
                 const aEffizienz = a.ausgegeben > 0 ? a.interessenten / a.ausgegeben : 0
                 const bEffizienz = b.ausgegeben > 0 ? b.interessenten / b.ausgegeben : 0
                 return aEffizienz - bEffizienz // Schlechteste zuerst
               })
               .slice(0, 2)
               .map((campaign, index) => {
                 const kostenProLead = campaign.ausgegeben > 0 ? Math.round(campaign.ausgegeben / Math.max(campaign.interessenten, 1)) : 0
                 const budgetVerbrauch = Math.round((campaign.ausgegeben / campaign.budget) * 100)
                 
                 return (
                   <div key={campaign.id} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                     <div className="flex items-start justify-between mb-3">
                       <div>
                         <h4 className="font-semibold text-red-800">{campaign.name}</h4>
                         <div className="text-sm text-red-600">📱 {campaign.platform}</div>
                       </div>
                       <div className="text-right">
                         <div className="text-2xl font-bold text-red-700">{campaign.interessenten}</div>
                         <div className="text-xs text-red-600">Interessenten</div>
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-3 gap-3 text-sm">
                       <div className="text-center">
                         <div className="font-bold text-red-700">€{kostenProLead}</div>
                         <div className="text-red-600 text-xs">pro Lead</div>
                       </div>
                       <div className="text-center">
                         <div className="font-bold text-red-700">{budgetVerbrauch}%</div>
                         <div className="text-red-600 text-xs">Budget genutzt</div>
                       </div>
                       <div className="text-center">
                         <div className="font-bold text-red-700">{Math.round((campaign.interessenten / campaign.klicks) * 100) || 0}%</div>
                         <div className="text-red-600 text-xs">Conversion</div>
                       </div>
                     </div>
                     
                     <div className="mt-3 p-2 bg-red-100 rounded text-sm text-red-800">
                       <strong>⚠️ Das Problem:</strong> {kostenProLead > 15 ? 'Zu teurer Lead-Preis' : campaign.interessenten < 5 ? 'Zu wenig Interessenten' : 'Niedrige Conversion-Rate'}
                     </div>
                     
                     <div className="mt-2 flex gap-2">
                       <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                         Anzeige pausieren
                       </button>
                       <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                         Verbesserungsplan
                       </button>
                     </div>
                   </div>
                 )
               })}
               
             {campaigns.filter(c => c.erfolg === 'schlecht').length === 0 && (
               <div className="text-center py-8 text-slate-500">
                 <div className="text-4xl mb-2">👍</div>
                 <div className="text-sm">Alle Anzeigen laufen gut!</div>
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
               Anzeigen mit weniger als €12 pro Lead sind meist sehr profitabel. 
               Erhöhen Sie bei diesen das Budget um 50%.
             </p>
           </div>
           
           <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-purple-100 rounded-lg">
                 <ChartBarIcon className="w-5 h-5 text-purple-600" />
               </div>
               <h3 className="font-semibold text-purple-800">📈 Durchschnitt</h3>
             </div>
             <p className="text-sm text-purple-700">
               Ihre durchschnittlichen Kosten pro Lead: €{Math.round(gesamtStats.ausgegeben / Math.max(gesamtStats.interessenten, 1))}
               <br />
               <span className="text-xs">Branchenschnitt: €15-20</span>
             </p>
           </div>
           
           <div className="bg-green-50 border border-green-200 rounded-lg p-4">
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-green-100 rounded-lg">
                 <CheckCircleIcon className="w-5 h-5 text-green-600" />
               </div>
               <h3 className="font-semibold text-green-800">🎯 Empfehlung</h3>
             </div>
             <p className="text-sm text-green-700">
               {campaigns.filter(c => c.erfolg === 'sehr gut').length > 0 
                 ? 'Fokussieren Sie sich auf Ihre Top-Performer und pausieren Sie schlechte Anzeigen.'
                 : 'Lassen Sie Ihre Anzeigen noch 1-2 Wochen laufen, bevor Sie Änderungen vornehmen.'
               }
             </p>
           </div>
         </div>
       </motion.div>

       {/* Vereinfachte Kampagnen-Liste */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.6 }}
         className="glass-card p-6"
       >
         <h2 className="text-xl font-bold text-gradient mb-6">📋 Ihre laufenden Anzeigen</h2>
         
         <div className="space-y-4">
           {campaigns.map((campaign, index) => (
             <motion.div
               key={campaign.id}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.7 + index * 0.1 }}
               className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
             >
               <div className="flex items-start justify-between mb-4">
                 <div className="flex items-center gap-4">
                   <StatusIcon status={campaign.status} />
                   <div>
                     <h3 className="text-lg font-semibold text-slate-800">{campaign.name}</h3>
                     <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                       <span>📱 {campaign.platform}</span>
                       <span>📅 seit {campaign.created}</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3">
                   <ErfolgsBadge erfolg={campaign.erfolg} />
                   <button
                     onClick={() => toggleKampagne(campaign.id)}
                     className={`p-2 rounded-lg transition-colors ${
                       campaign.status === 'läuft' 
                         ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                         : 'bg-green-100 text-green-600 hover:bg-green-200'
                     }`}
                     title={campaign.status === 'läuft' ? 'Anzeige pausieren' : 'Anzeige starten'}
                   >
                     {campaign.status === 'läuft' ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                   </button>
                 </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-slate-50 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-slate-800">€{campaign.budget}</div>
                   <div className="text-xs text-slate-600">Budget</div>
                   <div className="text-xs text-green-600">€{campaign.ausgegeben} ausgegeben</div>
                 </div>
                 <div className="bg-slate-50 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-green-600">{campaign.interessenten}</div>
                   <div className="text-xs text-slate-600">Interessenten</div>
                   <div className="text-xs text-slate-500">Neue Kontakte</div>
                 </div>
                 <div className="bg-slate-50 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-blue-600">{campaign.klicks}</div>
                   <div className="text-xs text-slate-600">Klicks</div>
                   <div className="text-xs text-slate-500">Anzeige angeklickt</div>
                 </div>
                 <div className="bg-slate-50 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-purple-600">
                     {campaign.ausgegeben > 0 ? Math.round(campaign.ausgegeben / Math.max(campaign.interessenten, 1)) : 0}€
                   </div>
                   <div className="text-xs text-slate-600">Pro Interessent</div>
                   <div className="text-xs text-slate-500">Kosten je Lead</div>
                 </div>
               </div>

               {campaign.erfolg === 'schlecht' && (
                 <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                   <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />
                   <div className="text-sm">
                     <div className="font-medium text-red-800">Diese Anzeige braucht Hilfe</div>
                     <div className="text-red-600">Wenig Interessenten für das Budget. Soll ich Verbesserungsvorschläge machen?</div>
                   </div>
                   <button className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200">
                     Tipps anzeigen
                   </button>
                 </div>
               )}

               {campaign.erfolg === 'sehr gut' && (
                 <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                   <CheckCircleIcon className="w-5 h-5 text-green-500" />
                   <div className="text-sm text-green-700">
                     <span className="font-medium">Super! Diese Anzeige läuft sehr gut.</span> Möchten Sie das Budget erhöhen?
                   </div>
                   <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">
                     Budget erhöhen
                   </button>
                 </div>
               )}
             </motion.div>
           ))}
         </div>

         {campaigns.length === 0 && (
           <div className="text-center py-12">
             <MegaphoneIcon className="mx-auto h-16 w-16 text-slate-400 mb-4" />
             <h3 className="text-lg font-medium text-slate-900 mb-2">
               Noch keine Anzeigen erstellt
             </h3>
             <p className="text-slate-600 mb-6">
               Erstellen Sie Ihre erste Werbeanzeige und gewinnen Sie neue Kunden.
             </p>
             <Link href="/dashboard/ads/simple-creator" className="glass-button-primary px-6 py-3">
               Erste Anzeige erstellen
             </Link>
           </div>
         )}
       </motion.div>
     </div>
   )
} 