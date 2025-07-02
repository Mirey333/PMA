'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  UserGroupIcon,
  MegaphoneIcon,
  ChartBarIcon,
  CurrencyEuroIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
  PlusIcon,
  ArrowRightIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'increase' | 'decrease' | 'neutral'
  icon: React.ComponentType<{ className?: string }>
  color: string
}

function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  const changeColor = {
    increase: 'text-success-600',
    decrease: 'text-danger-600',
    neutral: 'text-gray-500'
  }[changeType]

  const ChangeIcon = changeType === 'increase' ? ArrowTrendingUpIcon : ArrowTrendingDownIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="professional-card"
    >
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center mt-1">
            <ChangeIcon className={`h-4 w-4 ${changeColor} mr-1`} />
            <span className={`text-sm font-medium ${changeColor}`}>{change}</span>
            <span className="text-sm text-gray-500 ml-1">vs. letzte Woche</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface QuickActionProps {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

function QuickAction({ title, description, href, icon: Icon, color }: QuickActionProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="professional-card group cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
              <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
        </div>
      </motion.div>
    </Link>
  )
}

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      title: 'Aktive Leads',
      value: '124',
      change: '+23%',
      changeType: 'increase' as const,
      icon: UserGroupIcon,
      color: 'bg-primary-500'
    },
    {
      title: 'Laufende Kampagnen',
      value: '8',
      change: '+2',
      changeType: 'increase' as const,
      icon: MegaphoneIcon,
      color: 'bg-success-500'
    },
    {
      title: 'Conversion Rate',
      value: '18.5%',
      change: '+5.2%',
      changeType: 'increase' as const,
      icon: ChartBarIcon,
      color: 'bg-warning-500'
    },
    {
      title: 'Umsatz (MTD)',
      value: '€15.240',
      change: '+12.3%',
      changeType: 'increase' as const,
      icon: CurrencyEuroIcon,
      color: 'bg-purple-500'
    }
  ]

  const quickActions = [
    {
      title: 'KI-Vertriebstraining',
      description: 'Verkaufskompetenzen mit KI-Coaching verbessern',
      href: '/dashboard/sales-training',
      icon: AcademicCapIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Neue Kampagne erstellen',
      description: 'Starten Sie eine neue Werbekampagne',
      href: '/dashboard/ads/create',
      icon: PlusIcon,
      color: 'bg-primary-500'
    },
    {
      title: 'Lead-Status prüfen',
      description: 'Aktuelle Leads verwalten und qualifizieren',
      href: '/dashboard/leads',
      icon: UserGroupIcon,
      color: 'bg-success-500'
    },
    {
      title: 'Landingpage erstellen',
      description: 'Neue conversion-optimierte Seite aufsetzen',
      href: '/dashboard/landingpages/create',
      icon: DocumentTextIcon,
      color: 'bg-warning-500'
    },
    {
      title: 'Performance analysieren',
      description: 'Detaillierte Auswertungen und Insights',
      href: '/dashboard/analytics',
      icon: ChartBarIcon,
      color: 'bg-purple-500'
    }
  ]

  const recentLeads = [
    {
      id: 1,
      name: 'Anna Müller',
      email: 'anna.mueller@email.com',
      status: 'Heiß',
      source: 'Facebook Ads',
      created: '2 Std. ago',
      statusColor: 'badge-hot'
    },
    {
      id: 2,
      name: 'Thomas Weber',
      email: 'thomas.weber@email.com',
      status: 'Warm',
      source: 'Google Ads',
      created: '4 Std. ago',
      statusColor: 'badge-warm'
    },
    {
      id: 3,
      name: 'Sarah Schmidt',
      email: 'sarah.schmidt@email.com',
      status: 'Neu',
      source: 'Instagram',
      created: '6 Std. ago',
      statusColor: 'badge-new'
    },
    {
      id: 4,
      name: 'Michael König',
      email: 'michael.koenig@email.com',
      status: 'Kalt',
      source: 'LinkedIn',
      created: '1 Tag ago',
      statusColor: 'badge-cold'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">
              Guten Tag, Max! 👋
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Hier ist Ihre aktuelle Übersicht für {currentTime.toLocaleDateString('de-DE', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link href="/dashboard/export" className="btn-primary flex items-center gap-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Daten exportieren
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Schnellaktionen</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {quickActions.map((action, index) => (
            <QuickAction key={action.title} {...action} />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="professional-card"
        >
          <div className="professional-card-header">
            <h3 className="text-lg font-semibold text-gray-900">Neueste Leads</h3>
            <Link href="/dashboard/leads" className="text-primary-600 hover:text-primary-500 font-medium text-sm flex items-center gap-1">
              Alle anzeigen
              <EyeIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-600">{lead.email}</p>
                  <p className="text-xs text-gray-500">{lead.source} • {lead.created}</p>
                </div>
                <span className={`${lead.statusColor} ml-3`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Campaign Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="professional-card"
        >
          <div className="professional-card-header">
            <h3 className="text-lg font-semibold text-gray-900">Top Kampagnen</h3>
            <Link href="/dashboard/ads" className="text-primary-600 hover:text-primary-500 font-medium text-sm flex items-center gap-1">
              Alle anzeigen
              <EyeIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Altersvorsorge Facebook</p>
                <p className="text-sm text-gray-600">24 Leads • €3.20 CPC</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-success-600">€156.80</p>
                <p className="text-xs text-gray-500">Heute</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Baufinanzierung Google</p>
                <p className="text-sm text-gray-600">18 Leads • €4.15 CPC</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-success-600">€124.50</p>
                <p className="text-xs text-gray-500">Heute</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">PKV Instagram</p>
                <p className="text-sm text-gray-600">12 Leads • €2.90 CPC</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-success-600">€89.40</p>
                <p className="text-xs text-gray-500">Heute</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Activity Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="professional-card"
      >
        <div className="professional-card-header">
          <h3 className="text-lg font-semibold text-gray-900">Aktivitäts-Feed</h3>
          <span className="text-sm text-gray-500">Letzte 24 Stunden</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="p-1 bg-success-100 rounded-full">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">Anna Müller</span> hat das Kontaktformular ausgefüllt
              </p>
              <p className="text-xs text-gray-500">vor 2 Stunden</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-1 bg-primary-100 rounded-full">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Kampagne <span className="font-medium">"Altersvorsorge Facebook"</span> wurde aktiviert
              </p>
              <p className="text-xs text-gray-500">vor 4 Stunden</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-1 bg-warning-100 rounded-full">
              <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Landingpage <span className="font-medium">"Baufinanzierung"</span> wurde erstellt
              </p>
              <p className="text-xs text-gray-500">vor 6 Stunden</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-1 bg-purple-100 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">15 Leads</span> wurden ins PMA-System exportiert
              </p>
              <p className="text-xs text-gray-500">vor 8 Stunden</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 