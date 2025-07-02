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
  ChartBarIcon
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
}

export default function LandingPages() {
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
      url: 'altersvorsorge-beratung'
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
      url: 'baufinanzierung-experte'
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
      url: 'private-krankenversicherung'
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
      url: 'lebensversicherung-check'
    }
  ])

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      active: 'badge-success',
      draft: 'badge-neutral',
      paused: 'badge-warning'
    }
    const statusTexts = {
      active: 'Aktiv',
      draft: 'Entwurf',
      paused: 'Pausiert'
    }
    return (
      <span className={`${statusClasses[status as keyof typeof statusClasses]} px-2 py-1 text-xs font-medium rounded-full`}>
        {statusTexts[status as keyof typeof statusTexts]}
      </span>
    )
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
          <h1 className="text-3xl font-bold text-gray-900">Landing Pages</h1>
          <p className="mt-2 text-lg text-gray-600">
            Verwalten Sie Ihre conversion-optimierten Landing Pages
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Link href="/dashboard/landingpages/create">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Neue Landing Page
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-primary-500 bg-opacity-10">
              <GlobeAltIcon className="h-6 w-6 text-primary-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Aktive Pages</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-success-500 bg-opacity-10">
              <EyeIcon className="h-6 w-6 text-success-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Gesamt Views</p>
              <p className="text-2xl font-bold text-gray-900">4.770</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-warning-500 bg-opacity-10">
              <ChartBarIcon className="h-6 w-6 text-warning-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversions</p>
              <p className="text-2xl font-bold text-gray-900">231</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="professional-card"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500 bg-opacity-10">
              <ChartBarIcon className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Ø Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">4.84%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Landing Pages Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="professional-card overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Ihre Landing Pages</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name & Template
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zuletzt bearbeitet
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {landingPages.map((page, index) => (
                <motion.tr
                  key={page.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{page.name}</div>
                      <div className="text-sm text-gray-500">{page.template}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(page.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div>{page.views.toLocaleString()} Views</div>
                      <div className="text-xs text-gray-500">
                        {page.conversions} Conversions ({page.conversionRate.toFixed(2)}%)
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(page.lastModified).toLocaleDateString('de-DE')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-gray-400 hover:text-primary-500 transition-colors">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-primary-500 transition-colors">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-primary-500 transition-colors">
                        <DocumentDuplicateIcon className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-danger-500 transition-colors">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
} 