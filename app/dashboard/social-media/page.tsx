'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShareIcon,
  PlusIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowPathIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  CalendarDaysIcon,
  FireIcon,
  SparklesIcon,
  ClockIcon,
  UserGroupIcon,
  PhotoIcon,
  VideoCameraIcon,
  PlayIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface SocialPost {
  id: number
  plattform: string
  typ: 'post' | 'reel' | 'video' | 'story'
  inhalt: string
  bild?: string
  status: 'geplant' | 'veröffentlicht' | 'entwurf'
  likes: number
  kommentare: number
  shares: number
  reichweite: number
  engagement: number
  erfolgsrate: number
  created: string
  zeitpunkt: string
  zielgruppe: string
  performance: 'sehr gut' | 'gut' | 'okay' | 'schlecht'
}

interface BestTemplate {
  id: number
  titel: string
  plattform: string
  typ: string
  vorlage: string
  engagement: number
  kategorie: string
  verwendungen: number
  erfolgsrate: number
}

function PlattformIcon({ plattform }: { plattform: string }) {
  const icons = {
    'Instagram': '📸',
    'Facebook': '👥', 
    'TikTok': '🎵',
    'LinkedIn': '💼',
    'YouTube': '📹',
    'Twitter': '🐦',
    'WhatsApp': '💬'
  }
  return <span className="text-lg">{icons[plattform as keyof typeof icons] || '📱'}</span>
}

function StatusBadge({ status }: { status: string }) {
  const config = {
    'geplant': { bg: 'bg-blue-100', text: 'text-blue-800', emoji: '📅', label: 'Geplant' },
    'veröffentlicht': { bg: 'bg-green-100', text: 'text-green-800', emoji: '✅', label: 'Live' },
    'entwurf': { bg: 'bg-gray-100', text: 'text-gray-800', emoji: '📝', label: 'Entwurf' }
  }
  
  const c = config[status as keyof typeof config] || config.entwurf
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} flex items-center gap-1`}>
      <span>{c.emoji}</span>
      {c.label}
    </span>
  )
}

function PerformanceBadge({ performance }: { performance: string }) {
  const config = {
    'sehr gut': { bg: 'bg-green-100', text: 'text-green-800', emoji: '🚀', label: 'Top Performance!' },
    'gut': { bg: 'bg-blue-100', text: 'text-blue-800', emoji: '👍', label: 'Gut gelaufen' },
    'okay': { bg: 'bg-yellow-100', text: 'text-yellow-800', emoji: '⚠️', label: 'Durchschnitt' },
    'schlecht': { bg: 'bg-red-100', text: 'text-red-800', emoji: '😔', label: 'Wenig Reaktion' }
  }
  
  const c = config[performance as keyof typeof config] || config.okay
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} flex items-center gap-1`}>
      <span>{c.emoji}</span>
      {c.label}
    </span>
  )
}

function EngagementAnzeige({ engagement }: { engagement: number }) {
  const getColor = () => {
    if (engagement >= 8) return 'text-green-600 bg-green-100'
    if (engagement >= 5) return 'text-orange-600 bg-orange-100'
    if (engagement >= 2) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }
  
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getColor()}`}>
      {engagement}% Engagement
    </div>
  )
}

export default function SocialMediaPage() {
  const [showHelp, setShowHelp] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('alle')
  const [showTemplates, setShowTemplates] = useState(false)
  
  const [posts] = useState<SocialPost[]>([
    {
      id: 1,
      plattform: 'Instagram',
      typ: 'reel',
      inhalt: '5 Spartipps für Ihre Altersvorsorge 💰 Thread ⬇️',
      status: 'veröffentlicht',
      likes: 1247,
      kommentare: 89,
      shares: 156,
      reichweite: 8430,
      engagement: 12.4,
      erfolgsrate: 95,
      created: '2024-01-20',
      zeitpunkt: '2024-01-20 18:00',
      zielgruppe: 'Berufstätige 25-45',
      performance: 'sehr gut'
    },
    {
      id: 2,
      plattform: 'LinkedIn',
      typ: 'post',
      inhalt: 'Warum 90% der Deutschen bei der Altersvorsorge einen Fehler machen',
      status: 'veröffentlicht',
      likes: 534,
      kommentare: 67,
      shares: 89,
      reichweite: 3420,
      engagement: 8.7,
      erfolgsrate: 78,
      created: '2024-01-19',
      zeitpunkt: '2024-01-19 09:00',
      zielgruppe: 'Fachkräfte 30-50',
      performance: 'gut'
    },
    {
      id: 3,
      plattform: 'Facebook',
      typ: 'video',
      inhalt: 'Baufinanzierung einfach erklärt - In nur 3 Minuten!',
      status: 'geplant',
      likes: 0,
      kommentare: 0,
      shares: 0,
      reichweite: 0,
      engagement: 0,
      erfolgsrate: 85,
      created: '2024-01-21',
      zeitpunkt: '2024-01-22 15:30',
      zielgruppe: 'Familien 28-45',
      performance: 'gut'
    },
    {
      id: 4,
      plattform: 'TikTok',
      typ: 'video',
      inhalt: 'Mit diesem Trick sparen Sie 500€ im Monat! #geldtipps',
      status: 'entwurf',
      likes: 0,
      kommentare: 0,
      shares: 0,
      reichweite: 0,
      engagement: 0,
      erfolgsrate: 72,
      created: '2024-01-21',
      zeitpunkt: '',
      zielgruppe: 'Junge Erwachsene 18-35',
      performance: 'okay'
    }
  ])

  const [bestTemplates] = useState<BestTemplate[]>([
    {
      id: 1,
      titel: '5 Spartipps für [Thema] Thread',
      plattform: 'Instagram',
      typ: 'Reel',
      vorlage: '5 [Thema]-Tipps die jeder kennen sollte 💰\n\n1️⃣ [Tipp 1]\n2️⃣ [Tipp 2]\n3️⃣ [Tipp 3]\n4️⃣ [Tipp 4]\n5️⃣ [Tipp 5]\n\n💬 Welcher Tipp war neu für Sie?\n\n#[hashtags]',
      engagement: 12.4,
      kategorie: 'Bildung',
      verwendungen: 23,
      erfolgsrate: 89
    },
    {
      id: 2,
      titel: 'Warum 90% bei [Thema] Fehler machen',
      plattform: 'LinkedIn',
      typ: 'Post',
      vorlage: 'Warum 90% der [Zielgruppe] bei [Thema] einen großen Fehler machen:\n\n❌ Das Problem: [Problem beschreiben]\n\n✅ Die Lösung: [Lösung erklären]\n\n💡 Mein Tipp: [Praktischen Rat geben]\n\nKennen Sie das Problem auch?',
      engagement: 8.7,
      kategorie: 'Aufklärung',
      verwendungen: 18,
      erfolgsrate: 82
    },
    {
      id: 3,
      titel: '[Thema] einfach erklärt Video',
      plattform: 'Facebook',
      typ: 'Video',
      vorlage: '[Komplexes Thema] einfach erklärt - In nur 3 Minuten! 🎯\n\n📍 Was Sie lernen:\n• [Punkt 1]\n• [Punkt 2] \n• [Punkt 3]\n\n👇 Schauen Sie bis zum Ende für den Bonus-Tipp!\n\n#[hashtags]',
      engagement: 6.8,
      kategorie: 'Erklärung',
      verwendungen: 15,
      erfolgsrate: 75
    },
    {
      id: 4,
      titel: 'Geld-Spar-Trick für TikTok',
      plattform: 'TikTok',
      typ: 'Video',
      vorlage: 'Mit diesem Trick sparen Sie [Betrag] im Monat! 💰\n\n✨ So gehts:\n1. [Schritt 1]\n2. [Schritt 2]\n3. [Schritt 3]\n\n⚡ Probieren Sie es aus!\n\n#geldtipps #sparen #lifehack',
      engagement: 15.2,
      kategorie: 'Lifehack',
      verwendungen: 31,
      erfolgsrate: 91
    },
    {
      id: 5,
      titel: 'Vorher/Nachher Erfolgsgeschichte',
      plattform: 'Instagram',
      typ: 'Post',
      vorlage: '🔥 ERFOLGSGESCHICHTE eines Kunden:\n\nVORHER:\n❌ [Alte Situation]\n❌ [Probleme]\n\nNACHHER:\n✅ [Neue Situation]\n✅ [Verbesserungen]\n\n💰 Ersparnis: [Betrag]\n\n📞 Auch Sie wollen so sparen?',
      engagement: 9.3,
      kategorie: 'Erfolg',
      verwendungen: 12,
      erfolgsrate: 87
    },
    {
      id: 6,
      titel: 'Mythos vs. Wahrheit Aufklärung',
      plattform: 'LinkedIn',
      typ: 'Post',
      vorlage: '🚨 MYTHOS vs. WAHRHEIT bei [Thema]:\n\n🔴 MYTHOS: "[Falscher Glaube]"\n\n✅ WAHRHEIT: [Korrekte Information]\n\n💡 Die Realität: [Detaillierte Erklärung]\n\n❓ Sind Sie auch darauf reingefallen?',
      engagement: 7.9,
      kategorie: 'Aufklärung',
      verwendungen: 19,
      erfolgsrate: 84
    }
  ])

  const filteredPosts = selectedPlatform === 'alle' 
    ? posts 
    : posts.filter(post => post.plattform === selectedPlatform)

  const gesamtStats = {
    allePosts: posts.length,
    veröffentlicht: posts.filter(p => p.status === 'veröffentlicht').length,
    geplant: posts.filter(p => p.status === 'geplant').length,
    gesamtReichweite: posts.reduce((sum, p) => sum + p.reichweite, 0),
    durchschnittEngagement: Math.round(posts.reduce((sum, p) => sum + p.engagement, 0) / posts.length * 10) / 10,
    topPlattform: 'Instagram'
  }

  return (
    <div className="space-y-8">
      {/* Einfacher Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient-primary mb-4">📱 Social Media Manager</h1>
        <p className="text-lg text-slate-600 mb-6">
          Erstellen Sie professionelle Beiträge für alle sozialen Netzwerke - mit KI-Unterstützung und Best Performance Vorlagen.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/dashboard/social-media/create" className="glass-button-primary px-8 py-4 text-lg flex items-center gap-3">
            <SparklesIcon className="w-6 h-6" />
            KI-Post erstellen
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
            <h3 className="text-lg font-semibold">💡 So funktioniert Social Media Marketing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-medium mb-2">📝 Entwurf</div>
              <div className="text-slate-600">Idee sammeln, Text schreiben, noch nicht veröffentlicht</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="font-medium mb-2">📅 Geplant</div>
              <div className="text-slate-600">Fertig erstellt, wird automatisch zur gewünschten Zeit veröffentlicht</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-medium mb-2">✅ Live</div>
              <div className="text-slate-600">Online und sammelt Likes, Kommentare und Shares</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="font-medium mb-2">📊 Auswerten</div>
              <div className="text-slate-600">Schauen welche Posts gut ankommen und lernen</div>
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
              <p className="text-slate-600 text-sm">Diese Vorlagen haben besonders gut funktioniert - kopieren und anpassen!</p>
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
                  <div className="flex items-center gap-3">
                    <PlattformIcon plattform={template.plattform} />
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">{template.titel}</h3>
                      <div className="text-xs text-slate-600">{template.plattform} • {template.typ}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{template.engagement}%</div>
                    <div className="text-xs text-slate-600">Engagement</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 mb-4 text-sm">
                  <div className="font-medium text-slate-800 mb-2">📝 Vorlage:</div>
                  <div className="text-slate-600 whitespace-pre-line text-xs leading-relaxed">
                    {template.vorlage.length > 120 
                      ? template.vorlage.substring(0, 120) + '...' 
                      : template.vorlage
                    }
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-4">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{template.verwendungen}x</div>
                    <div className="text-slate-600">Verwendet</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{template.erfolgsrate}%</div>
                    <div className="text-slate-600">Erfolgsrate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-600">{template.kategorie}</div>
                    <div className="text-slate-600">Kategorie</div>
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

                {template.engagement >= 10 && (
                  <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <FireIcon className="w-4 h-4 text-green-500" />
                    <div className="text-xs text-green-700 font-medium">Top Performer!</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Übersichtliche Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 text-center"
        >
          <ShareIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.allePosts}</div>
          <div className="text-xs text-slate-600">Alle Posts</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 text-center"
        >
          <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.veröffentlicht}</div>
          <div className="text-xs text-slate-600">Live Posts</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 text-center"
        >
          <CalendarDaysIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.geplant}</div>
          <div className="text-xs text-slate-600">Geplant</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 text-center"
        >
          <UserGroupIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.gesamtReichweite.toLocaleString()}</div>
          <div className="text-xs text-slate-600">Gesamt Reichweite</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-4 text-center"
        >
          <ChartBarIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-slate-800">{gesamtStats.durchschnittEngagement}%</div>
          <div className="text-xs text-slate-600">Ø Engagement</div>
        </motion.div>
      </div>

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
            <p className="text-slate-600 text-sm">Welche Posts haben am besten funktioniert und welche brauchen Verbesserung</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Best Performer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-green-800">🚀 Best Performer</h3>
            </div>
            
            {posts
              .filter(p => p.status === 'veröffentlicht' && p.engagement >= 8)
              .sort((a, b) => b.engagement - a.engagement)
              .slice(0, 2)
              .map((post) => (
                <div key={post.id} className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <PlattformIcon plattform={post.plattform} />
                      <div>
                        <h4 className="font-semibold text-green-800 text-sm">{post.plattform}</h4>
                        <div className="text-xs text-green-600">{post.typ}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-700">{post.engagement}%</div>
                      <div className="text-xs text-green-600">Engagement</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-green-800 mb-3 bg-green-100 rounded p-2">
                    "{post.inhalt.substring(0, 80)}..."
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-green-700">{post.likes}</div>
                      <div className="text-green-600">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{post.kommentare}</div>
                      <div className="text-green-600">Kommentare</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{post.shares}</div>
                      <div className="text-green-600">Shares</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{post.reichweite.toLocaleString()}</div>
                      <div className="text-green-600">Reichweite</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-green-100 rounded text-sm text-green-800">
                    <strong>💡 Warum so erfolgreich:</strong> Hohe Interaktion und relevanter Content für die Zielgruppe
                  </div>
                  
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                      Als Vorlage speichern
                    </button>
                    <button className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full hover:bg-green-300">
                      Ähnlichen Post erstellen
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Needs Improvement */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-red-800">⚠️ Verbesserung möglich</h3>
            </div>
            
            {posts
              .filter(p => p.status === 'veröffentlicht' && p.engagement < 5)
              .sort((a, b) => a.engagement - b.engagement)
              .slice(0, 2)
              .map((post) => (
                <div key={post.id} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <PlattformIcon plattform={post.plattform} />
                      <div>
                        <h4 className="font-semibold text-red-800 text-sm">{post.plattform}</h4>
                        <div className="text-xs text-red-600">{post.typ}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-red-700">{post.engagement}%</div>
                      <div className="text-xs text-red-600">Engagement</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-red-800 mb-3 bg-red-100 rounded p-2">
                    "{post.inhalt.substring(0, 80)}..."
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-red-700">{post.likes}</div>
                      <div className="text-red-600">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700">{post.kommentare}</div>
                      <div className="text-red-600">Kommentare</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700">{post.shares}</div>
                      <div className="text-red-600">Shares</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-700">{post.reichweite.toLocaleString()}</div>
                      <div className="text-red-600">Reichweite</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-red-100 rounded text-sm text-red-800">
                    <strong>⚠️ Mögliche Probleme:</strong> Geringe Interaktion, eventuell falsche Zielgruppe oder Posting-Zeit
                  </div>
                  
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                      Mit KI verbessern
                    </button>
                    <button className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full hover:bg-red-300">
                      Neue Version erstellen
                    </button>
                  </div>
                </div>
              ))}
              
            {posts.filter(p => p.status === 'veröffentlicht' && p.engagement < 5).length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-2">🎉</div>
                <div className="text-sm">Alle Posts performen gut!</div>
                <div className="text-xs">Keine problematischen Posts gefunden</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Plattform-Filter und Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gradient">📱 Ihre Social Media Posts</h2>
          <div className="flex items-center gap-4">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="alle">Alle Plattformen</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="YouTube">YouTube</option>
              <option value="Twitter">Twitter</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <PlattformIcon plattform={post.plattform} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{post.plattform}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span>📝 {post.typ}</span>
                      <span>👥 {post.zielgruppe}</span>
                      {post.zeitpunkt && <span>🕐 {new Date(post.zeitpunkt).toLocaleDateString('de-DE')}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <StatusBadge status={post.status} />
                  {post.status === 'veröffentlicht' && <PerformanceBadge performance={post.performance} />}
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="text-slate-800 mb-2">"{post.inhalt}"</div>
                {post.bild && (
                  <div className="text-xs text-slate-600">📷 Bild angehängt</div>
                )}
              </div>

              {post.status === 'veröffentlicht' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-slate-800">{post.likes}</div>
                    <div className="text-xs text-slate-600 flex items-center justify-center gap-1">
                      <HeartIcon className="w-3 h-3" />
                      Likes
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{post.kommentare}</div>
                    <div className="text-xs text-slate-600 flex items-center justify-center gap-1">
                      <ChatBubbleLeftEllipsisIcon className="w-3 h-3" />
                      Kommentare
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{post.shares}</div>
                    <div className="text-xs text-slate-600 flex items-center justify-center gap-1">
                      <ArrowPathIcon className="w-3 h-3" />
                      Shares
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{post.reichweite.toLocaleString()}</div>
                    <div className="text-xs text-slate-600">Reichweite</div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors" title="Bearbeiten">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  {post.status === 'entwurf' && (
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors" title="Veröffentlichen">
                      <CheckCircleIcon className="w-4 h-4" />
                    </button>
                  )}
                  <button className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors" title="Duplizieren">
                    <ArrowPathIcon className="w-4 h-4" />
                  </button>
                </div>
                
                {post.status === 'veröffentlicht' && (
                  <EngagementAnzeige engagement={post.engagement} />
                )}
              </div>

              {post.engagement >= 10 && post.status === 'veröffentlicht' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <FireIcon className="w-5 h-5 text-green-500" />
                  <div className="text-sm text-green-700">
                    <span className="font-medium">Viral Hit!</span> Dieser Post läuft sehr gut - ähnliche erstellen!
                  </div>
                  <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">
                    Als Vorlage speichern
                  </button>
                </div>
              )}

              {post.status === 'geplant' && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-blue-500" />
                  <div className="text-sm text-blue-700">
                    <span className="font-medium">Geplant für:</span> {new Date(post.zeitpunkt).toLocaleDateString('de-DE')} um {new Date(post.zeitpunkt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200">
                    Zeit ändern
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <ShareIcon className="mx-auto h-16 w-16 text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Noch keine Posts vorhanden
            </h3>
            <p className="text-slate-600 mb-6">
              Erstellen Sie Ihren ersten Social Media Post mit KI-Unterstützung.
            </p>
            <Link href="/dashboard/social-media/create" className="glass-button-primary px-6 py-3">
              Ersten Post erstellen
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  )
} 