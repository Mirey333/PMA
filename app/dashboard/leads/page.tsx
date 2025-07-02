'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  UserGroupIcon,
  PlusIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  CurrencyEuroIcon,
  CalendarDaysIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  status: 'neu' | 'kontaktiert' | 'interessiert' | 'kunde'
  source: string
  category: string
  erfolgswahrscheinlichkeit: number
  lastContact: string
  created: string
  notes: string
  company?: string
  wert: number
  nextAction: string
  qualitaet: 'sehr gut' | 'gut' | 'okay' | 'schlecht'
}

function StatusIcon({ status }: { status: string }) {
  if (status === 'neu') return <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
  if (status === 'kontaktiert') return <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
  if (status === 'interessiert') return <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
  if (status === 'kunde') return <div className="w-3 h-3 bg-green-500 rounded-full"></div>
  return <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
}

function StatusBadge({ status }: { status: string }) {
  const config = {
    'neu': { bg: 'bg-blue-100', text: 'text-blue-800', emoji: '🆕', label: 'Neu' },
    'kontaktiert': { bg: 'bg-yellow-100', text: 'text-yellow-800', emoji: '📞', label: 'Kontaktiert' },
    'interessiert': { bg: 'bg-orange-100', text: 'text-orange-800', emoji: '🔥', label: 'Interessiert' },
    'kunde': { bg: 'bg-green-100', text: 'text-green-800', emoji: '🎉', label: 'Kunde geworden' }
  }
  
  const c = config[status as keyof typeof config] || config.neu
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} flex items-center gap-1`}>
      <span>{c.emoji}</span>
      {c.label}
    </span>
  )
}

function QualitaetsBadge({ qualitaet }: { qualitaet: string }) {
  const config = {
    'sehr gut': { bg: 'bg-green-100', text: 'text-green-800', emoji: '🌟', label: 'Top-Interessent!' },
    'gut': { bg: 'bg-blue-100', text: 'text-blue-800', emoji: '👍', label: 'Guter Kontakt' },
    'okay': { bg: 'bg-yellow-100', text: 'text-yellow-800', emoji: '⚠️', label: 'Geht so' },
    'schlecht': { bg: 'bg-red-100', text: 'text-red-800', emoji: '😔', label: 'Wenig Interesse' }
  }
  
  const c = config[qualitaet as keyof typeof config] || config.okay
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} flex items-center gap-1`}>
      <span>{c.emoji}</span>
      {c.label}
    </span>
  )
}

function ErfolgsAnzeige({ wahrscheinlichkeit }: { wahrscheinlichkeit: number }) {
  const getColor = () => {
    if (wahrscheinlichkeit >= 80) return 'text-green-600 bg-green-100'
    if (wahrscheinlichkeit >= 60) return 'text-orange-600 bg-orange-100'
    if (wahrscheinlichkeit >= 40) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }
  
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getColor()}`}>
      {wahrscheinlichkeit}% Erfolgschance
    </div>
  )
}

export default function LeadsPage() {
  const [showHelp, setShowHelp] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  const [leads] = useState<Lead[]>([
    {
      id: 1,
      name: 'Anna Müller',
      email: 'anna.mueller@email.com',
      phone: '+49 151 1234567',
      status: 'interessiert',
      source: 'Facebook Werbung',
      category: 'Altersvorsorge',
      erfolgswahrscheinlichkeit: 85,
      lastContact: '2024-01-20',
      created: '2024-01-18',
      notes: 'Sehr interessiert an Riester-Rente. Möchte Beratungstermin nächste Woche.',
      company: 'Müller GmbH',
      wert: 2500,
      nextAction: 'Beratungstermin vereinbaren',
      qualitaet: 'sehr gut'
    },
    {
      id: 2,
      name: 'Thomas Weber',
      email: 'thomas.weber@email.com',
      phone: '+49 152 9876543',
      status: 'kontaktiert',
      source: 'Google Werbung',
      category: 'Hausfinanzierung',
      erfolgswahrscheinlichkeit: 72,
      lastContact: '2024-01-19',
      created: '2024-01-17',
      notes: 'Sucht Baufinanzierung für Einfamilienhaus. Budget 450.000 €.',
      wert: 3200,
      nextAction: 'Finanzierungsvorschlag erstellen',
      qualitaet: 'gut'
    },
    {
      id: 3,
      name: 'Sarah Schmidt',
      email: 'sarah.schmidt@email.com',
      phone: '+49 170 5555444',
      status: 'neu',
      source: 'Instagram',
      category: 'Krankenversicherung',
      erfolgswahrscheinlichkeit: 45,
      lastContact: '',
      created: '2024-01-20',
      notes: 'Kontaktformular ausgefüllt. Noch keine Rückmeldung erhalten.',
      wert: 1800,
      nextAction: 'Ersten Kontakt herstellen',
      qualitaet: 'okay'
    },
    {
      id: 4,
      name: 'Michael König',
      email: 'michael.koenig@email.com',
      phone: '+49 160 7777888',
      status: 'kunde',
      source: 'Empfehlung',
      category: 'Lebensversicherung',
      erfolgswahrscheinlichkeit: 100,
      lastContact: '2024-01-19',
      created: '2024-01-15',
      notes: 'Vertrag abgeschlossen! Sehr zufriedener Kunde.',
      company: 'König Consulting',
      wert: 4500,
      nextAction: 'Nachbetreuung und Weiterempfehlung',
      qualitaet: 'sehr gut'
    },
    {
      id: 5,
      name: 'Lisa Wagner',
      email: 'lisa.wagner@email.com',
      phone: '+49 175 3333222',
      status: 'kontaktiert',
      source: 'LinkedIn',
      category: 'Altersvorsorge',
      erfolgswahrscheinlichkeit: 28,
      lastContact: '2024-01-18',
      created: '2024-01-14',
      notes: 'Erste Kontaktaufnahme. Geringes Interesse gezeigt.',
      wert: 800,
      nextAction: 'In 2 Wochen nochmal nachfragen',
      qualitaet: 'schlecht'
    }
  ])

  const filteredLeads = leads.filter(lead => 
    searchTerm === '' || 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const gesamtStats = {
    alleInteressenten: leads.length,
    neueInteressenten: leads.filter(l => l.status === 'neu').length,
    heisseInteressenten: leads.filter(l => l.status === 'interessiert').length,
    gewonneneKunden: leads.filter(l => l.status === 'kunde').length,
    gesamtWert: leads.reduce((sum, l) => sum + l.wert, 0),
    durchschnittErfolg: Math.round(leads.reduce((sum, l) => sum + l.erfolgswahrscheinlichkeit, 0) / leads.length)
  }

  return (
    <div className="space-y-8">
      {/* Einfacher Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient-primary mb-4">👥 Ihre Interessenten</h1>
        <p className="text-lg text-slate-600 mb-6">
          Hier finden Sie alle Menschen, die Interesse an Ihren Produkten gezeigt haben.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link href="/dashboard/leads/create" className="glass-button-primary px-8 py-4 text-lg flex items-center gap-3">
            <PlusIcon className="w-6 h-6" />
            Neuen Interessent hinzufügen
          </Link>
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
            <h3 className="text-lg font-semibold">💡 Was sind Interessenten?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-medium mb-2">🆕 Neu</div>
              <div className="text-slate-600">Jemand hat Interesse gezeigt, aber Sie haben noch nicht gesprochen</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="font-medium mb-2">📞 Kontaktiert</div>
              <div className="text-slate-600">Sie haben schon miteinander gesprochen oder geschrieben</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="font-medium mb-2">🔥 Interessiert</div>
              <div className="text-slate-600">Sehr gute Chance auf Abschluss - dranbleiben!</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-medium mb-2">🎉 Kunde</div>
              <div className="text-slate-600">Hat bei Ihnen gekauft - jetzt gut betreuen!</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Übersichtliche Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 text-center"
        >
          <UserGroupIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.alleInteressenten}</div>
          <div className="text-xs text-slate-600">Alle Interessenten</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 text-center"
        >
          <div className="w-8 h-8 text-blue-500 mx-auto mb-2 flex items-center justify-center text-lg">🆕</div>
          <div className="text-xl font-bold text-slate-800">{gesamtStats.neueInteressenten}</div>
          <div className="text-xs text-slate-600">Neue</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 text-center"
        >
          <FireIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.heisseInteressenten}</div>
          <div className="text-xs text-slate-600">Heiße Kontakte</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 text-center"
        >
          <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.gewonneneKunden}</div>
          <div className="text-xs text-slate-600">Neue Kunden</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-4 text-center"
        >
          <CurrencyEuroIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">€{gesamtStats.gesamtWert.toLocaleString()}</div>
          <div className="text-xs text-slate-600">Möglicher Umsatz</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-4 text-center"
        >
          <ChartBarIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.durchschnittErfolg}%</div>
          <div className="text-xs text-slate-600">Ø Erfolgschance</div>
        </motion.div>
      </div>

      {/* Performance Auswertung */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <ChartBarIcon className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold text-gradient">📊 Performance-Auswertung</h2>
            <p className="text-slate-600 text-sm">Welche Interessenten haben die beste Erfolgschance und welche brauchen Aufmerksamkeit</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Best Performer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-green-800">🌟 Top-Interessenten</h3>
            </div>
            
            {leads
              .filter(l => l.qualitaet === 'sehr gut' || l.erfolgswahrscheinlichkeit >= 70)
              .sort((a, b) => b.erfolgswahrscheinlichkeit - a.erfolgswahrscheinlichkeit)
              .slice(0, 2)
              .map((lead) => (
                <div key={lead.id} className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-green-800">{lead.name}</h4>
                      <div className="text-sm text-green-600">💼 {lead.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">{lead.erfolgswahrscheinlichkeit}%</div>
                      <div className="text-xs text-green-600">Erfolgschance</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-green-700">€{lead.wert.toLocaleString()}</div>
                      <div className="text-green-600 text-xs">Möglicher Umsatz</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{lead.source}</div>
                      <div className="text-green-600 text-xs">Herkunft</div>
                    </div>
                    <div className="text-center">
                      <StatusBadge status={lead.status} />
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-green-100 rounded text-sm text-green-800">
                    <strong>💡 Warum so gut:</strong> {lead.erfolgswahrscheinlichkeit >= 80 ? 'Sehr hohe Erfolgschance - schnell handeln!' : 'Gute Qualität - dranbleiben lohnt sich'}
                  </div>
                  
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                      Sofort anrufen
                    </button>
                    <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                      Termin vereinbaren
                    </button>
                  </div>
                </div>
              ))}
              
            {leads.filter(l => l.qualitaet === 'sehr gut').length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-sm">Noch keine Top-Interessenten</div>
                <div className="text-xs">Arbeiten Sie an der Qualität Ihrer Leads</div>
              </div>
            )}
          </div>

          {/* Attention Needed */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-red-800">⚠️ Brauchen Aufmerksamkeit</h3>
            </div>
            
            {leads
              .filter(l => l.status === 'neu' || l.erfolgswahrscheinlichkeit < 50 || l.qualitaet === 'schlecht')
              .sort((a, b) => a.erfolgswahrscheinlichkeit - b.erfolgswahrscheinlichkeit)
              .slice(0, 2)
              .map((lead) => (
                <div key={lead.id} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-red-800">{lead.name}</h4>
                      <div className="text-sm text-red-600">💼 {lead.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-700">{lead.erfolgswahrscheinlichkeit}%</div>
                      <div className="text-xs text-red-600">Erfolgschance</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-red-700">€{lead.wert.toLocaleString()}</div>
                      <div className="text-red-600 text-xs">Möglicher Umsatz</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700">{lead.source}</div>
                      <div className="text-red-600 text-xs">Herkunft</div>
                    </div>
                    <div className="text-center">
                      <StatusBadge status={lead.status} />
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-red-100 rounded text-sm text-red-800">
                    <strong>⚠️ Das Problem:</strong> {
                      lead.status === 'neu' ? 'Noch kein Kontakt hergestellt' :
                      lead.erfolgswahrscheinlichkeit < 30 ? 'Sehr geringe Erfolgschance' :
                      'Interesse scheint gering zu sein'
                    }
                  </div>
                  
                  <div className="mt-2 flex gap-2">
                    {lead.status === 'neu' ? (
                      <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                        Ersten Kontakt herstellen
                      </button>
                    ) : (
                      <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                        Interesse wecken
                      </button>
                    )}
                    <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                      Notizen aktualisieren
                    </button>
                  </div>
                </div>
              ))}
              
            {leads.filter(l => l.status === 'neu' || l.erfolgswahrscheinlichkeit < 50).length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-2">👍</div>
                <div className="text-sm">Alle Interessenten sind gut betreut!</div>
                <div className="text-xs">Keine Problemfälle gefunden</div>
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
              Interessenten mit über 70% Erfolgschance sollten Sie sofort kontaktieren. 
              Die Wahrscheinlichkeit sinkt mit der Zeit!
            </p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <ChartBarIcon className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-800">📈 Ihre Zahlen</h3>
            </div>
            <p className="text-sm text-purple-700">
              Durchschnittliche Erfolgschance: {gesamtStats.durchschnittErfolg}%
              <br />
              <span className="text-xs">Gut sind 60-80%</span>
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
              {leads.filter(l => l.status === 'neu').length > 0 
                ? 'Kontaktieren Sie zuerst alle neuen Interessenten.'
                : leads.filter(l => l.status === 'interessiert').length > 0
                ? 'Konzentrieren Sie sich auf Ihre heißen Kontakte.'
                : 'Generieren Sie neue Interessenten durch Werbung.'
              }
            </p>
          </div>
        </div>
      </motion.div>

      {/* Einfache Suche */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <MagnifyingGlassIcon className="w-6 h-6 text-slate-600" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Interessent suchen (Name, E-Mail, Firma...)"
          />
        </div>

        <h2 className="text-xl font-bold text-gradient mb-6">📋 Alle Ihre Interessenten ({filteredLeads.length})</h2>
        
        <div className="space-y-4">
          {filteredLeads.map((lead, index) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <StatusIcon status={lead.status} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{lead.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span>📧 {lead.email}</span>
                      <span>📞 {lead.phone}</span>
                      {lead.company && <span>🏢 {lead.company}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <QualitaetsBadge qualitaet={lead.qualitaet} />
                  <StatusBadge status={lead.status} />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-slate-800">{lead.erfolgswahrscheinlichkeit}%</div>
                  <div className="text-xs text-slate-600">Erfolgschance</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-600">€{lead.wert.toLocaleString()}</div>
                  <div className="text-xs text-slate-600">Möglicher Umsatz</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-600">{lead.category}</div>
                  <div className="text-xs text-slate-600">Interessiert an</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-purple-600">{lead.source}</div>
                  <div className="text-xs text-slate-600">Herkunft</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 mb-4">
                <div className="text-sm font-medium text-slate-800 mb-1">📝 Nächste Aktion:</div>
                <div className="text-sm text-slate-600">{lead.nextAction}</div>
                {lead.lastContact && (
                  <div className="text-xs text-slate-500 mt-1">
                    Letzter Kontakt: {new Date(lead.lastContact).toLocaleDateString('de-DE')}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors" title="Anrufen">
                  <PhoneIcon className="w-4 h-4" />
                </button>
                <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors" title="E-Mail senden">
                  <EnvelopeIcon className="w-4 h-4" />
                </button>
                <button className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors" title="WhatsApp">
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                </button>
                <Link
                  href={`/dashboard/leads/${lead.id}`}
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors" 
                  title="Details anzeigen"
                >
                  <EyeIcon className="w-4 h-4" />
                </Link>
                
                <div className="ml-auto">
                  <ErfolgsAnzeige wahrscheinlichkeit={lead.erfolgswahrscheinlichkeit} />
                </div>
              </div>

              {lead.erfolgswahrscheinlichkeit >= 80 && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <FireIcon className="w-5 h-5 text-green-500" />
                  <div className="text-sm text-green-700">
                    <span className="font-medium">Heißer Kontakt!</span> Sehr hohe Erfolgschance - sofort handeln!
                  </div>
                  <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">
                    Jetzt anrufen
                  </button>
                </div>
              )}

              {lead.status === 'neu' && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                  <CalendarDaysIcon className="w-5 h-5 text-blue-500" />
                  <div className="text-sm text-blue-700">
                    <span className="font-medium">Neuer Interessent!</span> Kontaktieren Sie ihn innerhalb von 24 Stunden.
                  </div>
                  <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200">
                    Kontakt herstellen
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <UserGroupIcon className="mx-auto h-16 w-16 text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Keine Interessenten gefunden
            </h3>
            <p className="text-slate-600 mb-6">
              Ändern Sie Ihre Suche oder fügen Sie einen neuen Interessenten hinzu.
            </p>
            <Link href="/dashboard/leads/create" className="glass-button-primary px-6 py-3">
              Ersten Interessenten hinzufügen
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  )
} 