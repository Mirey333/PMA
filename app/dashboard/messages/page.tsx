'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChatBubbleLeftEllipsisIcon,
  EnvelopeIcon,
  BellIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  PhoneIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClipboardDocumentListIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Template {
  id: string
  name: string
  type: 'whatsapp' | 'email'
  category: string
  subject?: string
  content: string
  usage: number
  conversion: number
  status: 'active' | 'inactive'
}

interface Automation {
  id: string
  name: string
  type: 'whatsapp' | 'email'
  trigger: string
  status: 'active' | 'paused'
  sent: number
  opened: number
  replied: number
}

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'templates' | 'automation' | 'analytics'>('overview')
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'whatsapp' | 'email'>('all')

  const stats = [
    { 
      name: 'Nachrichten versendet', 
      value: '2.847', 
      change: '+12%', 
      icon: ChatBubbleLeftEllipsisIcon,
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    { 
      name: 'Öffnungsrate', 
      value: '78%', 
      change: '+5%', 
      icon: EyeIcon,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    { 
      name: 'Antwortrate', 
      value: '34%', 
      change: '+8%', 
      icon: ChatBubbleLeftEllipsisIcon,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    { 
      name: 'Termine generiert', 
      value: '127', 
      change: '+23%', 
      icon: CheckCircleIcon,
      color: 'text-orange-600',
      bg: 'bg-orange-100'
    }
  ]

  const templates: Template[] = [
    {
      id: '1',
      name: 'Erstkontakt Altersvorsorge',
      type: 'whatsapp',
      category: 'Erstkontakt',
      content: 'Hallo {{name}}! 👋\n\nVielen Dank für Ihr Interesse an unserer Altersvorsorge-Beratung.\n\nGerne zeige ich Ihnen, wie Sie mit nur 150€/Monat eine Rentenlücke von 800€ schließen können.\n\nWann passt Ihnen ein kurzes 15-Min Gespräch? 📞',
      usage: 245,
      conversion: 23,
      status: 'active'
    },
    {
      id: '2',
      name: 'Follow-up Email PKV',
      type: 'email',
      category: 'Follow-up',
      subject: '🏥 Ihre PKV-Anfrage: 300€ monatlich sparen',
      content: 'Liebe/r {{name}},\n\nvielen Dank für Ihr Interesse an einem PKV-Wechsel.\n\nWie besprochen, hier Ihre persönlichen Vorteile:\n✅ 300€ weniger monatliche Beiträge\n✅ Bessere Leistungen als bisher\n✅ Sofortiger Wechsel möglich\n\nSoll ich Ihnen ein unverbindliches Angebot zusammenstellen?\n\nBeste Grüße,\nIhr PMA-Berater',
      usage: 178,
      conversion: 31,
      status: 'active'
    },
    {
      id: '3',
      name: 'Baufinanzierung Reminder',
      type: 'whatsapp',
      category: 'Nachfassen',
      content: 'Hi {{name}}! 🏠\n\nErinnerung: Unser Gespräch über Ihre Baufinanzierung.\n\nDie Zinsen steigen weiter - aktuell bei {{current_rate}}%.\n\nSollen wir Ihren Antrag diese Woche noch finalisieren?\n\nLG, {{advisor_name}}',
      usage: 89,
      conversion: 45,
      status: 'active'
    },
    {
      id: '4',
      name: 'Willkommenssequenz',
      type: 'email',
      category: 'Onboarding',
      subject: 'Willkommen! Ihre nächsten Schritte zur finanziellen Freiheit',
      content: 'Herzlich Willkommen {{name}}!\n\nSchön, dass Sie sich für unsere Beratung entschieden haben.\n\nIn den nächsten Tagen erhalten Sie:\n📧 Tag 1: Ihre persönliche Analyse\n📧 Tag 3: Top 3 Spartipps\n📧 Tag 7: Ihr Beratungstermin\n\nFreue mich auf unser Gespräch!\n\n{{advisor_name}}',
      usage: 456,
      conversion: 67,
      status: 'active'
    }
  ]

  const automations: Automation[] = [
    {
      id: '1',
      name: 'Lead-Willkommenssequenz',
      type: 'email',
      trigger: 'Neuer Lead',
      status: 'active',
      sent: 1247,
      opened: 892,
      replied: 234
    },
    {
      id: '2',
      name: 'WhatsApp Follow-up',
      type: 'whatsapp',
      trigger: 'Email nicht geöffnet (3 Tage)',
      status: 'active',
      sent: 456,
      opened: 387,
      replied: 123
    },
    {
      id: '3',
      name: 'Termin-Reminder',
      type: 'whatsapp',
      trigger: 'Termin morgen',
      status: 'active',
      sent: 234,
      opened: 234,
      replied: 89
    },
    {
      id: '4',
      name: 'No-Show Nachfassung',
      type: 'email',
      trigger: 'Termin nicht wahrgenommen',
      status: 'paused',
      sent: 67,
      opened: 23,
      replied: 8
    }
  ]

  const recentMessages = [
    {
      id: '1',
      type: 'whatsapp',
      contact: 'Maria Schmidt',
      message: 'Kann ich den Termin auf morgen verschieben?',
      time: 'vor 5 Min',
      status: 'unread'
    },
    {
      id: '2',
      type: 'email',
      contact: 'Thomas Müller',
      message: 'Unterlagen zur Baufinanzierung erhalten',
      time: 'vor 12 Min',
      status: 'read'
    },
    {
      id: '3',
      type: 'whatsapp',
      contact: 'Anna Weber',
      message: 'Vielen Dank für die Beratung! Sehr hilfreich.',
      time: 'vor 28 Min',
      status: 'replied'
    }
  ]

  const filteredTemplates = templates.filter(template => 
    selectedChannel === 'all' || template.type === selectedChannel
  )

  const filteredAutomations = automations.filter(automation =>
    selectedChannel === 'all' || automation.type === selectedChannel
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary mb-4">💬 Nachrichten-Zentrale</h1>
          <p className="text-slate-600">WhatsApp & Email Marketing für PMA-Berater</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-button-secondary">
            <CogIcon className="w-5 h-5 mr-2" />
            Kanäle verbinden
          </button>
          <button className="glass-button-primary">
            <PlusIcon className="w-5 h-5 mr-2" />
            Nachricht erstellen
          </button>
        </div>
      </div>

      {/* Channel Filter */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-800">📊 Kommunikationskanäle</h2>
          <div className="flex gap-2">
            {[
              { id: 'all', name: 'Alle Kanäle', icon: '📱' },
              { id: 'whatsapp', name: 'WhatsApp', icon: '📱' },
              { id: 'email', name: 'Email', icon: '📧' }
            ].map((channel) => (
              <button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedChannel === channel.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {channel.icon} {channel.name}
              </button>
            ))}
          </div>
        </div>

        {/* Channel Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">WhatsApp Business</h3>
                <p className="text-sm text-green-600">Verbunden</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <EnvelopeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Email (SMTP)</h3>
                <p className="text-sm text-blue-600">Verbunden</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.name}</div>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
              <span className="text-sm text-slate-500 ml-1">vs. letzter Monat</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="glass-card">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', name: 'Übersicht', icon: ChartBarIcon },
              { id: 'templates', name: 'Templates', icon: DocumentTextIcon },
              { id: 'automation', name: 'Automatisierungen', icon: SparklesIcon },
              { id: 'analytics', name: 'Analytics', icon: ChartBarIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Messages */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">📬 Aktuelle Nachrichten</h3>
                  <div className="space-y-3">
                    {recentMessages.map((message) => (
                      <div key={message.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                        <div className={`p-2 rounded-lg ${
                          message.type === 'whatsapp' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {message.type === 'whatsapp' ? (
                            <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                          ) : (
                            <EnvelopeIcon className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-800">{message.contact}</p>
                          <p className="text-sm text-slate-600">{message.message}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500">{message.time}</p>
                          <div className={`w-2 h-2 rounded-full mt-1 ${
                            message.status === 'unread' ? 'bg-red-500' :
                            message.status === 'replied' ? 'bg-green-500' : 'bg-slate-300'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">⚡ Schnellaktionen</h3>
                  <div className="space-y-3">
                    <button className="w-full glass-button-primary p-4 flex items-center gap-3">
                      <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">WhatsApp Broadcast</p>
                        <p className="text-sm opacity-75">An alle aktiven Leads</p>
                      </div>
                    </button>
                    <button className="w-full glass-button-secondary p-4 flex items-center gap-3">
                      <EnvelopeIcon className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Email-Kampagne</p>
                        <p className="text-sm opacity-75">Neues Template verwenden</p>
                      </div>
                    </button>
                    <button className="w-full glass-button-secondary p-4 flex items-center gap-3">
                      <ClockIcon className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Nachricht planen</p>
                        <p className="text-sm opacity-75">Für später vormerken</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">📝 Nachrichten-Templates</h3>
                <button className="glass-button-primary">
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Neues Template
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-1 rounded text-xs font-medium ${
                          template.type === 'whatsapp' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {template.type === 'whatsapp' ? '📱 WhatsApp' : '📧 Email'}
                        </div>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {template.category}
                        </span>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        template.status === 'active' ? 'bg-green-500' : 'bg-slate-300'
                      }`}></div>
                    </div>

                    <h4 className="font-semibold text-slate-800 mb-2">{template.name}</h4>
                    {template.subject && (
                      <p className="text-sm font-medium text-slate-700 mb-2">Betreff: {template.subject}</p>
                    )}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{template.content}</p>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span>{template.usage}x verwendet</span>
                      <span>{template.conversion}% Conversion</span>
                    </div>

                    <div className="flex gap-2">
                      <button className="glass-button-secondary text-sm py-2 px-3">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        Vorschau
                      </button>
                      <button className="glass-button-secondary text-sm py-2 px-3">
                        <PencilIcon className="w-4 h-4 mr-1" />
                        Bearbeiten
                      </button>
                      <button className="glass-button-secondary text-sm py-2 px-3">
                        <ClipboardDocumentListIcon className="w-4 h-4 mr-1" />
                        Verwenden
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Automation Tab */}
          {activeTab === 'automation' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">🤖 Automatisierungen</h3>
                <button className="glass-button-primary">
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Neue Automatisierung
                </button>
              </div>

              <div className="space-y-4">
                {filteredAutomations.map((automation) => (
                  <div key={automation.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          automation.type === 'whatsapp' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {automation.type === 'whatsapp' ? (
                            <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                          ) : (
                            <EnvelopeIcon className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{automation.name}</h4>
                          <p className="text-sm text-slate-600">Trigger: {automation.trigger}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          automation.status === 'active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {automation.status === 'active' ? (
                            <PlayIcon className="w-4 h-4" />
                          ) : (
                            <PauseIcon className="w-4 h-4" />
                          )}
                          {automation.status === 'active' ? 'Aktiv' : 'Pausiert'}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-800">{automation.sent}</div>
                        <div className="text-sm text-slate-600">Versendet</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{automation.opened}</div>
                        <div className="text-sm text-slate-600">Geöffnet</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{automation.replied}</div>
                        <div className="text-sm text-slate-600">Geantwortet</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="glass-button-secondary text-sm">
                        <PencilIcon className="w-4 h-4 mr-1" />
                        Bearbeiten
                      </button>
                      <button className="glass-button-secondary text-sm">
                        <ChartBarIcon className="w-4 h-4 mr-1" />
                        Statistiken
                      </button>
                      <button className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
                        automation.status === 'active'
                          ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}>
                        {automation.status === 'active' ? (
                          <>
                            <PauseIcon className="w-4 h-4 mr-1 inline" />
                            Pausieren
                          </>
                        ) : (
                          <>
                            <PlayIcon className="w-4 h-4 mr-1 inline" />
                            Aktivieren
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-800">📊 Nachrichten-Analytics</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h4 className="font-semibold text-slate-800 mb-4">Channel Performance</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">WhatsApp</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">78% Öffnungsrate</p>
                        <p className="text-sm text-slate-600">1.245 Nachrichten</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Email</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">45% Öffnungsrate</p>
                        <p className="text-sm text-slate-600">1.602 Emails</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h4 className="font-semibold text-slate-800 mb-4">Beste Templates</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Willkommenssequenz</span>
                      <span className="font-semibold text-green-600">67% Conversion</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Baufinanzierung Reminder</span>
                      <span className="font-semibold text-green-600">45% Conversion</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Follow-up Email PKV</span>
                      <span className="font-semibold text-blue-600">31% Conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 