'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeftIcon,
  SparklesIcon,
  VideoCameraIcon,
  PhotoIcon,
  DocumentTextIcon,
  ClockIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  ShareIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface ContentTemplate {
  id: string
  type: 'reel' | 'video' | 'post' | 'story'
  title: string
  description: string
  platform: string[]
  category: string
  engagement: number
  difficulty: 'Einfach' | 'Mittel' | 'Fortgeschritten'
  duration: string
  trending: boolean
  preview: string
}

interface GeneratedContent {
  id: string
  type: 'reel' | 'video' | 'post' | 'story'
  title: string
  content: string
  platform: string
  hashtags: string[]
  estimatedReach: number
  estimatedEngagement: number
  aiScore: number
}

export default function AIContentGenerator() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([])

  const contentTypes = [
    { id: 'reel', name: 'Instagram Reels', icon: VideoCameraIcon, color: 'text-pink-500', bg: 'bg-pink-100' },
    { id: 'video', name: 'YouTube Videos', icon: PlayIcon, color: 'text-red-500', bg: 'bg-red-100' },
    { id: 'post', name: 'Social Posts', icon: PhotoIcon, color: 'text-blue-500', bg: 'bg-blue-100' },
    { id: 'story', name: 'Stories', icon: ClockIcon, color: 'text-orange-500', bg: 'bg-orange-100' }
  ]

  const platforms = [
    { id: 'instagram', name: 'Instagram', emoji: '📸', color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', emoji: '📘', color: 'bg-blue-500' },
    { id: 'youtube', name: 'YouTube', emoji: '▶️', color: 'bg-red-500' },
    { id: 'tiktok', name: 'TikTok', emoji: '🎵', color: 'bg-black' },
    { id: 'linkedin', name: 'LinkedIn', emoji: '💼', color: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter', emoji: '🐦', color: 'bg-sky-500' }
  ]

  const categories = [
    'Altersvorsorge', 'Baufinanzierung', 'Krankenversicherung', 
    'Lebensversicherung', 'Geldanlage', 'Steuerberatung'
  ]

  const contentTemplates: ContentTemplate[] = [
    {
      id: '1',
      type: 'reel',
      title: '🎯 "3 Altersvorsorge-Mythen aufgeklärt"',
      description: 'Kurzes Reel mit visuellen Fakten-Checkern und einprägsamen Hooks',
      platform: ['instagram', 'tiktok'],
      category: 'Altersvorsorge',
      engagement: 85,
      difficulty: 'Einfach',
      duration: '15-30s',
      trending: true,
      preview: 'Mythos 1: "Rente reicht aus" ❌\nFakt: Rentenlücke durchschnittlich 800€ ✅\n\nMythos 2: "Zu spät für Vorsorge" ❌\nFakt: Auch mit 50 noch rentabel ✅'
    },
    {
      id: '2',
      type: 'video',
      title: '🏠 "Baufinanzierung in 60 Sekunden erklärt"',
      description: 'Animiertes Erklärvideo mit Beispielrechnung und Call-to-Action',
      platform: ['youtube', 'facebook'],
      category: 'Baufinanzierung',
      engagement: 72,
      difficulty: 'Mittel',
      duration: '60s',
      trending: false,
      preview: 'Schritt 1: Eigenkapital ermitteln (20%)\nSchritt 2: Finanzierungsbedarf berechnen\nSchritt 3: Zinssatz vergleichen\nErgebnis: Traumhaus finanziert! 🏡'
    },
    {
      id: '3',
      type: 'post',
      title: '💡 "5 PKV-Vorteile, die Sie kennen sollten"',
      description: 'Karussell-Post mit Infografiken und Swipe-durch Inhalten',
      platform: ['linkedin', 'facebook', 'instagram'],
      category: 'Krankenversicherung',
      engagement: 64,
      difficulty: 'Einfach',
      duration: 'Statisch',
      trending: false,
      preview: 'Slide 1: Kürzere Wartezeiten ⏰\nSlide 2: Chefarztbehandlung 👨‍⚕️\nSlide 3: Bessere Leistungen 🌟\nSlide 4: Beitragsrückerstattung 💰\nSlide 5: Jetzt wechseln! 📞'
    },
    {
      id: '4',
      type: 'story',
      title: '⏰ "Letzte Chance: Riester-Zulagen 2024"',
      description: 'Urgency-Story mit interaktiven Elementen und Countdown',
      platform: ['instagram', 'facebook'],
      category: 'Altersvorsorge',
      engagement: 91,
      difficulty: 'Fortgeschritten',
      duration: '24h',
      trending: true,
      preview: '⏰ NUR NOCH 3 TAGE!\n🎁 Bis zu 175€ Zulagen\n💰 + 4% Steuervorteil\n📞 Jetzt sichern!'
    },
    {
      id: '5',
      type: 'reel',
      title: '💰 "Geld sparen vs. Geld anlegen"',
      description: 'Vergleichsvideo mit Split-Screen Effekt',
      platform: ['instagram', 'tiktok', 'youtube'],
      category: 'Geldanlage',
      engagement: 78,
      difficulty: 'Mittel',
      duration: '30s',
      trending: true,
      preview: 'Links: 1000€ auf Sparbuch = 1010€ nach 1 Jahr\nRechts: 1000€ investiert = 1070€ nach 1 Jahr\nFazit: Inflation macht Sparbuch zum Verlustgeschäft!'
    },
    {
      id: '6',
      type: 'video',
      title: '📊 "Steuer-Hack: So sparen Sie 2000€"',
      description: 'Tutorial-Video mit Schritt-für-Schritt Anleitung',
      platform: ['youtube', 'linkedin'],
      category: 'Steuerberatung',
      engagement: 66,
      difficulty: 'Fortgeschritten',
      duration: '2-3min',
      trending: false,
      preview: '1. Riester-Rente: 2100€ Steuerersparnis\n2. Betriebsrente: 1000€ weniger Steuern\n3. Handwerkerkosten: 1200€ absetzen\nGesamt: Bis zu 4300€ sparen!'
    }
  ]

  const mockGeneratedContent: GeneratedContent[] = [
    {
      id: 'gen1',
      type: 'reel',
      title: '🚀 PKV-Wechsel in 3 Schritten',
      content: '💡 PKV-Wechsel leicht gemacht!\n\n✅ Schritt 1: Aktuelle Police prüfen\n✅ Schritt 2: Angebote vergleichen  \n✅ Schritt 3: Beratungstermin buchen\n\n💰 Bis zu 300€/Monat sparen!\n\n#PKV #Krankenversicherung #Sparen #Beratung #Gesundheit',
      platform: 'instagram',
      hashtags: ['#PKV', '#Krankenversicherung', '#Sparen', '#Beratung', '#Gesundheit'],
      estimatedReach: 15000,
      estimatedEngagement: 1200,
      aiScore: 94
    },
    {
      id: 'gen2',
      type: 'post',
      title: '🏡 Baufinanzierung: Die 5 größten Fehler',
      content: '🚨 Diese 5 Baufinanzierungs-Fehler kosten Sie Tausende!\n\n❌ Fehler 1: Zu wenig Eigenkapital\n❌ Fehler 2: Nur eine Bank fragen\n❌ Fehler 3: Nebenkosten vergessen\n❌ Fehler 4: Zu kurze Zinsbindung\n❌ Fehler 5: Ohne Beratung entscheiden\n\n✅ Professionelle Beratung spart im Schnitt 50.000€!\n\nKostenlose Erstberatung vereinbaren 👆',
      platform: 'facebook',
      hashtags: ['#Baufinanzierung', '#Immobilien', '#Beratung', '#Hauskredit', '#Sparen'],
      estimatedReach: 8500,
      estimatedEngagement: 680,
      aiScore: 89
    }
  ]

  const filteredTemplates = contentTemplates.filter(template => {
    const typeMatch = selectedType === 'all' || template.type === selectedType
    const platformMatch = selectedPlatform === 'all' || template.platform.includes(selectedPlatform)
    const categoryMatch = selectedCategory === 'all' || template.category === selectedCategory
    return typeMatch && platformMatch && categoryMatch
  })

  const generateContent = async (templateId: string) => {
    setIsGenerating(true)
    // Simuliere KI-Generierung
    setTimeout(() => {
      setGeneratedContent([...mockGeneratedContent])
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="glass-nav">
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <Link href="/dashboard/ads" className="glass-button-secondary p-3">
                <ArrowLeftIcon className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gradient">🤖 KI-Content Generator</h1>
                <p className="text-slate-600 text-sm">Erstellen Sie viral-ready Content in Sekunden</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">KI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-width py-8">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="glass-card p-6 text-center">
            <FireIcon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient-primary">127</div>
            <div className="text-slate-600 text-sm">Generierte Contents</div>
          </div>
          <div className="glass-card p-6 text-center">
            <ArrowTrendingUpIcon className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient-primary">2.4M</div>
            <div className="text-slate-600 text-sm">Gesamt-Reichweite</div>
          </div>
          <div className="glass-card p-6 text-center">
            <BoltIcon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient-primary">94%</div>
            <div className="text-slate-600 text-sm">Ø KI-Score</div>
          </div>
          <div className="glass-card p-6 text-center">
            <StarIcon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient-primary">12</div>
            <div className="text-slate-600 text-sm">Viral Contents</div>
          </div>
        </motion.div>

        {/* Content Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gradient mb-6">🎯 Content-Typ wählen</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {contentTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                    selectedType === type.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${type.bg} mx-auto mb-4 w-fit`}>
                    <Icon className={`w-8 h-8 ${type.color}`} />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{type.name}</h3>
                  <p className="text-sm text-slate-600">
                    {type.id === 'reel' && 'Kurze, virale Videos'}
                    {type.id === 'video' && 'Längere Erklärinhalte'}
                    {type.id === 'post' && 'Statische Beiträge'}
                    {type.id === 'story' && '24h temporäre Inhalte'}
                  </p>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-700">Plattform:</label>
              <select 
                value={selectedPlatform} 
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="glass-input text-sm"
              >
                <option value="all">Alle Plattformen</option>
                {platforms.map(platform => (
                  <option key={platform.id} value={platform.id}>
                    {platform.emoji} {platform.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-700">Kategorie:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="glass-input text-sm"
              >
                <option value="all">Alle Kategorien</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => {
                setSelectedType('all')
                setSelectedPlatform('all')
                setSelectedCategory('all')
              }}
              className="glass-button-secondary text-sm"
            >
              <ArrowPathIcon className="w-4 h-4 mr-2" />
              Filter zurücksetzen
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Templates */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-gradient mb-6">📝 Content-Vorlagen</h2>
              <div className="space-y-4">
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {template.type === 'reel' && <VideoCameraIcon className="w-5 h-5 text-pink-500" />}
                          {template.type === 'video' && <PlayIcon className="w-5 h-5 text-red-500" />}
                          {template.type === 'post' && <PhotoIcon className="w-5 h-5 text-blue-500" />}
                          {template.type === 'story' && <ClockIcon className="w-5 h-5 text-orange-500" />}
                          <span className="text-xs font-medium text-slate-600 uppercase bg-slate-100 px-2 py-1 rounded-full">
                            {template.type}
                          </span>
                        </div>
                        {template.trending && (
                          <span className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                            <FireIcon className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-600">{template.engagement}% Engagement</span>
                        <div className={`w-3 h-3 rounded-full ${template.engagement >= 80 ? 'bg-green-500' : template.engagement >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{template.title}</h3>
                    <p className="text-slate-600 mb-4">{template.description}</p>

                    <div className="bg-slate-50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">📝 Content-Vorschau:</h4>
                      <p className="text-sm text-slate-600 whitespace-pre-line">{template.preview}</p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>📂 {template.category}</span>
                        <span>⏱️ {template.duration}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          template.difficulty === 'Einfach' ? 'bg-green-100 text-green-700' :
                          template.difficulty === 'Mittel' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {template.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      {template.platform.map((platform) => (
                        <span key={platform} className="text-xs px-2 py-1 bg-slate-100 rounded-full">
                          {platforms.find(p => p.id === platform)?.emoji} {platforms.find(p => p.id === platform)?.name}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => generateContent(template.id)}
                      disabled={isGenerating}
                      className="w-full glass-button-primary py-3 flex items-center justify-center gap-2"
                    >
                      <SparklesIcon className="w-5 h-5" />
                      {isGenerating ? 'Generiere Content...' : 'Mit KI generieren'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Generated Content & Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">⚡ Schnellaktionen</h3>
              <div className="space-y-3">
                <button className="w-full glass-button-primary py-3 flex items-center gap-3">
                  <SparklesIcon className="w-5 h-5" />
                  Batch-Generierung
                </button>
                <button className="w-full glass-button-secondary py-3 flex items-center gap-3">
                  <DocumentTextIcon className="w-5 h-5" />
                  Eigene Vorlage
                </button>
                <button className="w-full glass-button-secondary py-3 flex items-center gap-3">
                  <ShareIcon className="w-5 h-5" />
                  Direkt posten
                </button>
              </div>
            </motion.div>

            {/* AI Generation Status */}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SparklesIcon className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">🤖 KI arbeitet...</h3>
                  <p className="text-sm text-slate-600 mb-4">Content wird generiert und optimiert</p>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse w-3/4"></div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Generated Content */}
            {generatedContent.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold text-slate-800 mb-4">✨ Generierter Content</h3>
                <div className="space-y-4">
                  {generatedContent.map((content) => (
                    <div key={content.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-slate-800">{content.title}</h4>
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">{content.aiScore}%</span>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 rounded p-3 mb-3">
                        <p className="text-sm text-slate-700 whitespace-pre-line">{content.content}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
                        <span>👁️ {content.estimatedReach.toLocaleString()} Reichweite</span>
                        <span>❤️ {content.estimatedEngagement} Engagement</span>
                      </div>
                      
                                             <div className="flex gap-2">
                         <button className="glass-button-secondary p-2 text-xs">
                           <EyeIcon className="w-4 h-4" />
                         </button>
                         <button className="glass-button-secondary p-2 text-xs">
                           <ArrowDownTrayIcon className="w-4 h-4" />
                         </button>
                         <button className="glass-button-primary p-2 text-xs flex-1">
                           <ShareIcon className="w-4 h-4 mr-1" />
                           Posten
                         </button>
                       </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">💡 Content-Tipps</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Posten Sie zu optimalen Zeiten für Ihre Zielgruppe</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Nutzen Sie relevante Hashtags für bessere Reichweite</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Antworten Sie schnell auf Kommentare</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Testen Sie verschiedene Content-Formate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 