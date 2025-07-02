'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'

interface SidebarItemProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  pathname: string
}

function SidebarItem({ href, icon: Icon, label, pathname }: SidebarItemProps) {
  const isActive = pathname === href || pathname.startsWith(`${href}/`)
  
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-500'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </Link>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Anzeigen-Tool', href: '/dashboard/ads', icon: MegaphoneIcon },
    { name: 'Landingpages', href: '/dashboard/landingpages', icon: DocumentTextIcon },
    { name: 'Lead-Management', href: '/dashboard/leads', icon: UserGroupIcon },
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
    { name: 'Export', href: '/dashboard/export', icon: ArrowDownTrayIcon },
    { name: 'Einstellungen', href: '/dashboard/settings', icon: CogIcon },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-primary-600">PMA Platform</h1>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <SidebarItem
                key={item.name}
                href={item.href}
                icon={item.icon}
                label={item.name}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col bg-white border-r border-gray-200 shadow-sm">
          <div className="flex h-16 items-center px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-primary-600">PMA Platform</h1>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <SidebarItem
                key={item.name}
                href={item.href}
                icon={item.icon}
                label={item.name}
                pathname={pathname}
              />
            ))}
          </nav>
          
          {/* User Profile Section */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Max Mustermann</p>
                <p className="text-xs text-gray-500">PMA-Berater</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="border-r border-gray-200 pr-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
                <div className="lg:hidden ml-4">
                  <h1 className="text-lg font-semibold text-gray-900">PMA Platform</h1>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="h-6 w-px bg-gray-200" />
                <div className="flex items-center">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <div className="ml-2 hidden sm:block">
                    <p className="text-sm font-medium text-gray-700">Max Mustermann</p>
                    <p className="text-xs text-gray-500">PMA-Berater</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 