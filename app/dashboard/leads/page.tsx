'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  UserGroupIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  status: 'hot' | 'warm' | 'cold' | 'new' | 'contacted' | 'qualified' | 'converted'
  source: string
  category: string
  score: number
  lastContact: string
  created: string
  notes: string
  company?: string
  value: number
  nextAction: string
  assignedTo: string
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    hot: { bg: 'bg-red-100', text: 'text-red-800', label: 'Heiß' },
    warm: { bg: 'bg-orange-100', text: 'text-orange-800', label: 'Warm' },
    cold: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Kalt' },
    new: { bg: 'bg-green-100', text: 'text-green-800', label: 'Neu' },
    contacted: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Kontaktiert' },
    qualified: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Qualifiziert' },
    converted: { bg: 'bg-emerald-100', text: 'text-emerald-800', label: 'Konvertiert' }
  }
  
  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.new
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  )
}

function LeadScore({ score }: { score: number }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    if (score >= 40) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }
  
  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(score)}`}>
      {score}/100
    </div>
  )
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: 'Anna Müller',
      email: 'anna.mueller@email.com',
      phone: '+49 151 1234567',
      status: 'hot',
      source: 'Facebook Ads',
      category: 'Altersvorsorge',
      score: 85,
      lastContact: '2024-01-20',
      created: '2024-01-18',
      notes: 'Sehr interessiert an Riester-Rente. Möchte Beratungstermin nächste Woche.',
      company: 'Müller GmbH',
      value: 2500,
      nextAction: 'Beratungstermin vereinbaren',
      assignedTo: 'Max Mustermann'
    },
    {
      id: 2,
      name: 'Thomas Weber',
      email: 'thomas.weber@email.com',
      phone: '+49 152 9876543',
      status: 'warm',
      source: 'Google Ads',
      category: 'Baufinanzierung',
      score: 72,
      lastContact: '2024-01-19',
      created: '2024-01-17',
      notes: 'Sucht Baufinanzierung für Einfamilienhaus. Budget 450.000 €.',
      value: 3200,
      nextAction: 'Finanzierungsvorschlag erstellen',
      assignedTo: 'Max Mustermann'
    },
    {
      id: 3,
      name: 'Sarah Schmidt',
      email: 'sarah.schmidt@email.com',
      phone: '+49 170 5555444',
      status: 'new',
      source: 'Instagram',
      category: 'PKV',
      score: 45,
      lastContact: '',
      created: '2024-01-20',
      notes: 'Kontaktformular ausgefüllt. Noch keine Rückmeldung erhalten.',
      value: 1800,
      nextAction: 'Erstkontakt per E-Mail',
      assignedTo: 'Max Mustermann'
    },
    {
      id: 4,
      name: 'Michael König',
      email: 'michael.koenig@email.com',
      phone: '+49 160 7777888',
      status: 'qualified',
      source: 'Empfehlung',
      category: 'Lebensversicherung',
      score: 92,
      lastContact: '2024-01-19',
      created: '2024-01-15',
      notes: 'Beratungstermin erfolgreich. Wartet auf Angebot.',
      company: 'König Consulting',
      value: 4500,
      nextAction: 'Angebot übermitteln',
      assignedTo: 'Max Mustermann'
    },
    {
      id: 5,
      name: 'Lisa Wagner',
      email: 'lisa.wagner@email.com',
      phone: '+49 175 3333222',
      status: 'cold',
      source: 'LinkedIn',
      category: 'Altersvorsorge',
      score: 28,
      lastContact: '2024-01-18',
      created: '2024-01-14',
      notes: 'Erste Kontaktaufnahme. Geringes Interesse gezeigt.',
      value: 800,
      nextAction: 'Follow-up in 2 Wochen',
      assignedTo: 'Max Mustermann'
    }
  ])

  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedSource, setSelectedSource] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<string>('created')

  const filteredLeads = leads
    .filter(lead => {
      const statusMatch = selectedStatus === 'all' || lead.status === selectedStatus
      const sourceMatch = selectedSource === 'all' || lead.source === selectedSource
      const categoryMatch = selectedCategory === 'all' || lead.category === selectedCategory
      const searchMatch = searchTerm === '' || 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
      
      return statusMatch && sourceMatch && categoryMatch && searchMatch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'score':
          return b.score - a.score
        case 'value':
          return b.value - a.value
        case 'name':
          return a.name.localeCompare(b.name)
        case 'created':
        default:
          return new Date(b.created).getTime() - new Date(a.created).getTime()
      }
    })

  const statusStats = leads.reduce((acc, lead) => {
    acc[lead.status] = (acc[lead.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0)

  const updateLeadStatus = (id: number, newStatus: Lead['status']) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus, lastContact: new Date().toISOString().split('T')[0] } : lead
    ))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Lead-Management</h1>
          <p className="mt-2 text-lg text-gray-600">
            Verwalten und qualifizieren Sie Ihre Leads professionell
          </p>
        </div>
        <div className="mt-4 flex gap-3 md:mt-0 md:ml-4">
          <Link href="/dashboard/leads/import" className="btn-secondary flex items-center gap-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Importieren
          </Link>
          <Link href="/dashboard/leads/create" className="btn-primary flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Neuer Lead
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-primary-500 bg-opacity-10">
              <UserGroupIcon className="h-6 w-6 text-primary-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Gesamt Leads</p>
              <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-red-500 bg-opacity-10">
              <div className="h-6 w-6 text-red-500 font-bold flex items-center justify-center text-sm">H</div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Heiße Leads</p>
              <p className="text-2xl font-bold text-gray-900">{statusStats.hot || 0}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-success-500 bg-opacity-10">
              <CheckCircleIcon className="h-6 w-6 text-success-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Qualifiziert</p>
              <p className="text-2xl font-bold text-gray-900">{statusStats.qualified || 0}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500 bg-opacity-10">
              <CurrencyEuroIcon className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Gesamt Wert</p>
              <p className="text-2xl font-bold text-gray-900">€{totalValue.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <div className="professional-card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Suchen
            </label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
                placeholder="Name, E-Mail, Firma..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="form-select"
            >
              <option value="all">Alle Status</option>
              <option value="new">Neu</option>
              <option value="contacted">Kontaktiert</option>
              <option value="hot">Heiß</option>
              <option value="warm">Warm</option>
              <option value="cold">Kalt</option>
              <option value="qualified">Qualifiziert</option>
              <option value="converted">Konvertiert</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quelle
            </label>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="form-select"
            >
              <option value="all">Alle Quellen</option>
              <option value="Facebook Ads">Facebook Ads</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Empfehlung">Empfehlung</option>
              <option value="Website">Website</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategorie
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              <option value="all">Alle Kategorien</option>
              <option value="Altersvorsorge">Altersvorsorge</option>
              <option value="Baufinanzierung">Baufinanzierung</option>
              <option value="PKV">PKV</option>
              <option value="Lebensversicherung">Lebensversicherung</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sortieren nach
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-select"
            >
              <option value="created">Erstellungsdatum</option>
              <option value="score">Lead-Score</option>
              <option value="value">Wert</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="professional-card">
        <div className="professional-card-header">
          <h3 className="text-lg font-semibold text-gray-900">
            Leads ({filteredLeads.length})
          </h3>
          <div className="flex items-center gap-2">
            <button className="btn-secondary text-sm">
              <FunnelIcon className="w-4 h-4 mr-1" />
              Filter
            </button>
            <Link href="/dashboard/export" className="btn-secondary text-sm">
              Export
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kontakt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wert
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nächste Aktion
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {lead.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {lead.company && `${lead.company} • `}{lead.source}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.email}</div>
                    <div className="text-sm text-gray-500">{lead.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <LeadScore score={lead.score} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    €{lead.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.nextAction}</div>
                    <div className="text-sm text-gray-500">
                      {lead.lastContact ? `Letzter Kontakt: ${new Date(lead.lastContact).toLocaleDateString('de-DE')}` : 'Noch kein Kontakt'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Anrufen"
                      >
                        <PhoneIcon className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="E-Mail senden"
                      >
                        <EnvelopeIcon className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                        title="WhatsApp"
                      >
                        <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      </button>
                      <Link
                        href={`/dashboard/leads/${lead.id}`}
                        className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        title="Details anzeigen"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/dashboard/leads/${lead.id}/edit`}
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        title="Bearbeiten"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <UserGroupIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Keine Leads gefunden
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Passen Sie Ihre Filter an oder erstellen Sie einen neuen Lead.
            </p>
            <div className="mt-6">
              <Link href="/dashboard/leads/create" className="btn-primary">
                <PlusIcon className="w-4 h-4 mr-2" />
                Neuer Lead
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="professional-card"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📞 Heute kontaktieren</h3>
          <div className="space-y-2">
            {leads.filter(lead => lead.status === 'new' || lead.status === 'hot').slice(0, 3).map(lead => (
              <div key={lead.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">{lead.name}</span>
                <div className="flex gap-1">
                  <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                    <PhoneIcon className="h-3 w-3" />
                  </button>
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                    <EnvelopeIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="professional-card"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Follow-up erforderlich</h3>
          <div className="space-y-2">
            {leads.filter(lead => lead.status === 'contacted' || lead.status === 'warm').slice(0, 3).map(lead => (
              <div key={lead.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">{lead.name}</span>
                <span className="text-xs text-gray-500">
                  {lead.lastContact ? new Date(lead.lastContact).toLocaleDateString('de-DE') : 'Kein Datum'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="professional-card"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Top Performer</h3>
          <div className="space-y-2">
            {leads.sort((a, b) => b.score - a.score).slice(0, 3).map(lead => (
              <div key={lead.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">{lead.name}</span>
                <LeadScore score={lead.score} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

import { ArrowDownTrayIcon, CheckCircleIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline' 