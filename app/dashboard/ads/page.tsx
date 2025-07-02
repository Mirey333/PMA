'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CurrencyEuroIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Campaign {
  id: number
  name: string
  platform: 'facebook' | 'google' | 'instagram' | 'youtube'
  status: 'active' | 'paused' | 'draft'
  budget: number
  spent: number
  impressions: number
  clicks: number
  leads: number
  cpc: number
  ctr: number
  created: string
  category: string
}

function PlatformBadge({ platform }: { platform: string }) {
  const platformConfig = {
    facebook: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Facebook' },
    google: { bg: 'bg-red-100', text: 'text-red-800', label: 'Google' },
    instagram: { bg: 'bg-pink-100', text: 'text-pink-800', label: 'Instagram' },
    youtube: { bg: 'bg-red-100', text: 'text-red-800', label: 'YouTube' }
  }
  
  const config = platformConfig[platform as keyof typeof platformConfig] || platformConfig.facebook
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    active: { bg: 'bg-success-100', text: 'text-success-800', label: 'Aktiv' },
    paused: { bg: 'bg-warning-100', text: 'text-warning-800', label: 'Pausiert' },
    draft: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Entwurf' }
  }
  
  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.draft
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  )
}

export default function AdsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: 'Altersvorsorge Facebook Kampagne',
      platform: 'facebook',
      status: 'active',
      budget: 500,
      spent: 342.50,
      impressions: 15420,
      clicks: 234,
      leads: 24,
      cpc: 3.20,
      ctr: 1.52,
      created: '2024-01-15',
      category: 'Altersvorsorge'
    },
    {
      id: 2,
      name: 'Baufinanzierung Google Ads',
      platform: 'google',
      status: 'active',
      budget: 800,
      spent: 624.30,
      impressions: 8750,
      clicks: 185,
      leads: 18,
      cpc: 4.15,
      ctr: 2.11,
      created: '2024-01-12',
      category: 'Immobilien'
    },
    {
      id: 3,
      name: 'PKV Instagram Stories',
      platform: 'instagram',
      status: 'paused',
      budget: 300,
      spent: 89.40,
      impressions: 5230,
      clicks: 67,
      leads: 12,
      cpc: 2.90,
      ctr: 1.28,
      created: '2024-01-10',
      category: 'Krankenversicherung'
    },
    {
      id: 4,
      name: 'Riester YouTube Kampagne',
      platform: 'youtube',
      status: 'draft',
      budget: 400,
      spent: 0,
      impressions: 0,
      clicks: 0,
      leads: 0,
      cpc: 0,
      ctr: 0,
      created: '2024-01-18',
      category: 'Altersvorsorge'
    }
  ])

  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredCampaigns = campaigns.filter(campaign => {
    const platformMatch = selectedPlatform === 'all' || campaign.platform === selectedPlatform
    const statusMatch = selectedStatus === 'all' || campaign.status === selectedStatus
    return platformMatch && statusMatch
  })

  const totalStats = campaigns.reduce((acc, campaign) => ({
    totalBudget: acc.totalBudget + campaign.budget,
    totalSpent: acc.totalSpent + campaign.spent,
    totalLeads: acc.totalLeads + campaign.leads,
    totalClicks: acc.totalClicks + campaign.clicks
  }), { totalBudget: 0, totalSpent: 0, totalLeads: 0, totalClicks: 0 })

  const toggleCampaignStatus = (id: number) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === id 
        ? { ...campaign, status: campaign.status === 'active' ? 'paused' : 'active' }
        : campaign
    ))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Anzeigen-Tool</h1>
          <p className="mt-2 text-lg text-gray-600">
            Verwalten Sie Ihre Werbekampagnen auf allen Plattformen
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link href="/dashboard/ads/create" className="btn-primary flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Neue Kampagne
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
              <CurrencyEuroIcon className="h-6 w-6 text-primary-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Gesamt Budget</p>
              <p className="text-2xl font-bold text-gray-900">€{totalStats.totalBudget.toLocaleString()}</p>
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
            <div className="p-3 rounded-lg bg-warning-500 bg-opacity-10">
              <ChartBarIcon className="h-6 w-6 text-warning-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Ausgegeben</p>
              <p className="text-2xl font-bold text-gray-900">€{totalStats.totalSpent.toLocaleString()}</p>
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
              <UserGroupIcon className="h-6 w-6 text-success-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Generierte Leads</p>
              <p className="text-2xl font-bold text-gray-900">{totalStats.totalLeads}</p>
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
              <MegaphoneIcon className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Klicks gesamt</p>
              <p className="text-2xl font-bold text-gray-900">{totalStats.totalClicks.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="professional-card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plattform
            </label>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="form-select"
            >
              <option value="all">Alle Plattformen</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="form-select"
            >
              <option value="all">Alle Status</option>
              <option value="active">Aktiv</option>
              <option value="paused">Pausiert</option>
              <option value="draft">Entwurf</option>
            </select>
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="professional-card">
        <div className="professional-card-header">
          <h3 className="text-lg font-semibold text-gray-900">
            Kampagnen ({filteredCampaigns.length})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kampagne
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plattform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget / Ausgegeben
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leads
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <motion.tr
                  key={campaign.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {campaign.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {campaign.category}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <PlatformBadge platform={campaign.platform} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={campaign.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>€{campaign.budget.toLocaleString()}</div>
                    <div className="text-gray-500">€{campaign.spent.toLocaleString()} ausgegeben</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>CPC: €{campaign.cpc.toFixed(2)}</div>
                    <div className="text-gray-500">CTR: {campaign.ctr}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {campaign.leads} Leads
                    </div>
                    <div className="text-sm text-gray-500">
                      {campaign.clicks} Klicks
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => toggleCampaignStatus(campaign.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          campaign.status === 'active'
                            ? 'text-warning-600 hover:bg-warning-50'
                            : 'text-success-600 hover:bg-success-50'
                        }`}
                        title={campaign.status === 'active' ? 'Pausieren' : 'Aktivieren'}
                      >
                        {campaign.status === 'active' ? (
                          <PauseIcon className="h-4 w-4" />
                        ) : (
                          <PlayIcon className="h-4 w-4" />
                        )}
                      </button>
                      
                      <Link
                        href={`/dashboard/ads/${campaign.id}`}
                        className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        title="Details anzeigen"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </Link>
                      
                      <Link
                        href={`/dashboard/ads/${campaign.id}/edit`}
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        title="Bearbeiten"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </Link>
                      
                      <button
                        className="p-2 text-danger-600 hover:bg-danger-50 rounded-lg transition-colors"
                        title="Löschen"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <MegaphoneIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Keine Kampagnen gefunden
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Erstellen Sie Ihre erste Werbekampagne.
            </p>
            <div className="mt-6">
              <Link href="/dashboard/ads/create" className="btn-primary">
                <PlusIcon className="w-4 h-4 mr-2" />
                Neue Kampagne
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 