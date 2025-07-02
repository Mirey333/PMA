'use client'

import { useState } from 'react'
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
  UserGroupIcon,
  CurrencyEuroIcon,
  CalendarIcon,
  DocumentArrowDownIcon,
  FunnelIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('leads')

  const periodOptions = [
    { value: '7d', label: 'Letzte 7 Tage' },
    { value: '30d', label: 'Letzte 30 Tage' },
    { value: '90d', label: 'Letzte 90 Tage' },
    { value: '1y', label: 'Letztes Jahr' }
  ]

  const metrics = [
    {
      id: 'leads',
      name: 'Leads',
      value: '1.247',
      change: '+23.5%',
      changeType: 'increase',
      icon: UserGroupIcon,
      color: 'bg-primary-500'
    },
    {
      id: 'campaigns',
      name: 'Kampagnen',
      value: '34',
      change: '+8',
      changeType: 'increase',
      icon: GlobeAltIcon,
      color: 'bg-success-500'
    },
    {
      id: 'conversions',
      name: 'Conversions',
      value: '183',
      change: '+14.7%',
      changeType: 'increase',
      icon: FunnelIcon,
      color: 'bg-warning-500'
    },
    {
      id: 'revenue',
      name: 'Umsatz',
      value: '€47.890',
      change: '+31.2%',
      changeType: 'increase',
      icon: CurrencyEuroIcon,
      color: 'bg-purple-500'
    },
    {
      id: 'ctr',
      name: 'Click-Through-Rate',
      value: '3.84%',
      change: '+0.45%',
      changeType: 'increase',
      icon: ChartBarIcon,
      color: 'bg-blue-500'
    },
    {
      id: 'cpc',
      name: 'Cost per Click',
      value: '€2.14',
      change: '-€0.23',
      changeType: 'decrease',
      icon: CurrencyEuroIcon,
      color: 'bg-green-500'
    }
  ]

  const campaignPerformance = [
    {
      name: 'Altersvorsorge Facebook',
      platform: 'Facebook',
      impressions: 45230,
      clicks: 1847,
      leads: 89,
      ctr: 4.08,
      cpl: 12.34,
      spend: 1098,
      status: 'active'
    },
    {
      name: 'Baufinanzierung Google',
      platform: 'Google Ads',
      impressions: 38450,
      clicks: 1523,
      leads: 72,
      ctr: 3.96,
      cpl: 15.67,
      spend: 1128,
      status: 'active'
    },
    {
      name: 'PKV Instagram',
      platform: 'Instagram',
      impressions: 28930,
      clicks: 1145,
      leads: 45,
      ctr: 3.96,
      cpl: 18.89,
      spend: 850,
      status: 'active'
    },
    {
      name: 'Lebensversicherung YouTube',
      platform: 'YouTube',
      impressions: 52340,
      clicks: 1987,
      leads: 134,
      ctr: 3.79,
      cpl: 11.94,
      spend: 1600,
      status: 'paused'
    }
  ]

  const deviceBreakdown = [
    { device: 'Desktop', percentage: 45.2, leads: 562, color: 'bg-primary-500' },
    { device: 'Mobile', percentage: 38.7, leads: 482, color: 'bg-success-500' },
    { device: 'Tablet', percentage: 16.1, leads: 201, color: 'bg-warning-500' }
  ]

  const topLandingPages = [
    {
      page: 'Altersvorsorge Beratung',
      visits: 3847,
      conversions: 156,
      conversionRate: 4.05,
      bounceRate: 23.4
    },
    {
      page: 'Baufinanzierung Experte',
      visits: 2934,
      conversions: 118,
      conversionRate: 4.02,
      bounceRate: 25.1
    },
    {
      page: 'Private Krankenversicherung',
      visits: 2156,
      conversions: 87,
      conversionRate: 4.04,
      bounceRate: 28.7
    },
    {
      page: 'Lebensversicherung Check',
      visits: 1823,
      conversions: 69,
      conversionRate: 3.78,
      bounceRate: 31.2
    }
  ]

  const leadSources = [
    { source: 'Facebook Ads', leads: 423, percentage: 33.9, color: 'bg-blue-500' },
    { source: 'Google Ads', leads: 367, percentage: 29.4, color: 'bg-red-500' },
    { source: 'Instagram', leads: 289, percentage: 23.2, color: 'bg-pink-500' },
    { source: 'YouTube', leads: 168, percentage: 13.5, color: 'bg-red-600' }
  ]

  const getChangeIcon = (changeType: string) => {
    return changeType === 'increase' ? ArrowTrendingUpIcon : ArrowTrendingDownIcon
  }

  const getChangeColor = (changeType: string) => {
    return changeType === 'increase' ? 'text-success-600' : 'text-danger-600'
  }

  const getPlatformColor = (platform: string) => {
    const colors: { [key: string]: string } = {
      'Facebook': 'bg-blue-100 text-blue-800',
      'Google Ads': 'bg-red-100 text-red-800',
      'Instagram': 'bg-pink-100 text-pink-800',
      'YouTube': 'bg-red-100 text-red-800'
    }
    return colors[platform] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:flex md:items-center md:justify-between"
      >
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
          <p className="mt-2 text-lg text-gray-600">
            Detaillierte Auswertungen Ihrer Marketing-Performance
          </p>
        </div>
        <div className="mt-4 flex space-x-3 md:ml-4 md:mt-0">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="form-select"
          >
            {periodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="btn btn-secondary">
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const ChangeIcon = getChangeIcon(metric.changeType)
          
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="professional-card"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${metric.color} bg-opacity-10`}>
                  <Icon className={`h-6 w-6 ${metric.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    <ChangeIcon className={`h-4 w-4 ${getChangeColor(metric.changeType)} mr-1`} />
                    <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="professional-card"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Performance Trend</h3>
            <div className="flex space-x-2">
              {metrics.slice(0, 4).map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    selectedMetric === metric.id
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {metric.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Performance Chart</p>
              <p className="text-sm text-gray-500">
                Hier würde das interaktive Diagramm für "{metrics.find(m => m.id === selectedMetric)?.name}" angezeigt
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Campaign Performance & Device Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 professional-card"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Kampagnen Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kampagne
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Impressions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    CTR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Leads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    CPL
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaignPerformance.map((campaign, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {campaign.name}
                        </div>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPlatformColor(campaign.platform)}`}>
                          {campaign.platform}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.impressions.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.ctr}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {campaign.leads}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      €{campaign.cpl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="professional-card"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Geräte-Verteilung</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {deviceBreakdown.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${device.color} mr-3`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{device.device}</p>
                      <p className="text-xs text-gray-500">{device.leads} Leads</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {device.percentage}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex space-x-4 text-center">
              <div className="flex-1">
                <ComputerDesktopIcon className="h-8 w-8 text-gray-400 mx-auto mb-1" />
                <p className="text-xs text-gray-500">Desktop</p>
              </div>
              <div className="flex-1">
                <DevicePhoneMobileIcon className="h-8 w-8 text-gray-400 mx-auto mb-1" />
                <p className="text-xs text-gray-500">Mobile</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Landing Pages & Lead Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="professional-card"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Landing Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Seite
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Besuche
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    CVR
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topLandingPages.map((page, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {page.page}
                      </div>
                      <div className="text-xs text-gray-500">
                        Bounce Rate: {page.bounceRate}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {page.visits.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {page.conversions} Conv.
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {page.conversionRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="professional-card"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Lead-Quellen</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {leadSources.map((source, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${source.color} mr-3`}></div>
                      <span className="text-sm font-medium text-gray-900">
                        {source.source}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900">
                        {source.leads}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({source.percentage}%)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Insights & Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="professional-card"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">KI-Insights & Empfehlungen</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="font-medium text-green-900">Starke Performance</h4>
              </div>
              <p className="text-sm text-green-700">
                Ihre Facebook Kampagne "Altersvorsorge" übertrifft den Benchmark um 23%. 
                Erhöhen Sie das Budget um 20% für maximale Reichweite.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <EyeIcon className="h-5 w-5 text-yellow-600 mr-2" />
                <h4 className="font-medium text-yellow-900">Optimierungspotential</h4>
              </div>
              <p className="text-sm text-yellow-700">
                Die Bounce-Rate Ihrer PKV Landing Page ist 28.7%. Optimieren Sie den 
                Above-the-Fold Bereich für bessere Conversion-Raten.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-medium text-blue-900">Mobile Optimierung</h4>
              </div>
              <p className="text-sm text-blue-700">
                38.7% Ihrer Leads kommen von mobilen Geräten. Prüfen Sie die 
                Mobile-Ladezeiten und optimieren Sie für bessere UX.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 