'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon, 
  ArrowDownTrayIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ChartBarIcon,
  CurrencyEuroIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function ExportPage() {
  const [selectedDataType, setSelectedDataType] = useState('leads')
  const [selectedDateRange, setSelectedDateRange] = useState('last30days')
  const [selectedFormat, setSelectedFormat] = useState('csv')
  const [isExporting, setIsExporting] = useState(false)
  const [exportHistory, setExportHistory] = useState([
    {
      id: 1,
      type: 'Leads',
      date: '2024-01-20',
      time: '14:30',
      status: 'completed',
      records: 124,
      filename: 'leads_export_20240120.csv'
    },
    {
      id: 2,
      type: 'Kampagnen',
      date: '2024-01-19',
      time: '09:15',
      status: 'completed',
      records: 8,
      filename: 'campaigns_export_20240119.csv'
    },
    {
      id: 3,
      type: 'Analytics',
      date: '2024-01-18',
      time: '16:45',
      status: 'completed',
      records: 450,
      filename: 'analytics_export_20240118.csv'
    }
  ])

  const dataTypes = [
    {
      id: 'leads',
      title: 'Lead-Daten',
      description: 'Vollständige Lead-Information mit Kontaktdaten, Status und Bewertungen',
      icon: UserGroupIcon,
      color: 'bg-blue-500',
      fields: ['Name', 'E-Mail', 'Telefon', 'Status', 'Lead-Score', 'Quelle', 'Kategorie', 'Wert', 'Erstellungsdatum', 'Letzter Kontakt', 'Notizen']
    },
    {
      id: 'campaigns',
      title: 'Kampagnen-Daten',
      description: 'Performance-Daten aller Werbekampagnen mit KPIs und Ausgaben',
      icon: MegaphoneIcon,
      color: 'bg-green-500',
      fields: ['Kampagnen-Name', 'Plattform', 'Status', 'Budget', 'Ausgaben', 'Klicks', 'Impressions', 'CPC', 'CTR', 'Leads', 'Conversion-Rate']
    },
    {
      id: 'analytics',
      title: 'Analytics-Daten',
      description: 'Detaillierte Performance-Analysen und Statistiken',
      icon: ChartBarIcon,
      color: 'bg-purple-500',
      fields: ['Datum', 'Website-Besucher', 'Seitenaufrufe', 'Bounce-Rate', 'Verweildauer', 'Traffic-Quelle', 'Conversions', 'Revenue']
    },
    {
      id: 'financial',
      title: 'Finanz-Daten',
      description: 'Umsätze, Provisionen und finanzielle KPIs',
      icon: CurrencyEuroIcon,
      color: 'bg-orange-500',
      fields: ['Datum', 'Lead-Wert', 'Provision', 'Umsatz', 'ROI', 'ROAS', 'Kosten', 'Gewinn']
    }
  ]

  const dateRanges = [
    { id: 'last7days', label: 'Letzte 7 Tage' },
    { id: 'last30days', label: 'Letzte 30 Tage' },
    { id: 'last90days', label: 'Letzte 90 Tage' },
    { id: 'lastYear', label: 'Letztes Jahr' },
    { id: 'thisMonth', label: 'Dieser Monat' },
    { id: 'lastMonth', label: 'Letzter Monat' },
    { id: 'custom', label: 'Benutzerdefiniert' }
  ]

  const exportFormats = [
    { id: 'csv', label: 'CSV (Excel)', description: 'Kompatibel mit Excel und anderen Tabellenkalkulationen' },
    { id: 'xlsx', label: 'Excel (XLSX)', description: 'Native Excel-Datei mit Formatierung' },
    { id: 'json', label: 'JSON', description: 'Strukturiertes Datenformat für APIs' },
    { id: 'pdf', label: 'PDF Report', description: 'Formatierter Bericht zum Drucken' }
  ]

  const handleExport = async () => {
    setIsExporting(true)
    
    // Simuliere Export-Prozess
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Simuliere Download
    const selectedType = dataTypes.find(type => type.id === selectedDataType)
    const timestamp = new Date().toISOString().split('T')[0]
    const filename = `${selectedDataType}_export_${timestamp}.${selectedFormat}`
    
    // Füge zur Export-Historie hinzu
    const newExport = {
      id: exportHistory.length + 1,
      type: selectedType?.title || '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
      status: 'completed',
      records: Math.floor(Math.random() * 500) + 50,
      filename
    }
    
    setExportHistory([newExport, ...exportHistory])
    setIsExporting(false)
    
    // Simuliere Datei-Download
    const element = document.createElement('a')
    const csvContent = generateSampleCSV(selectedDataType)
    const file = new Blob([csvContent], { type: 'text/csv' })
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const generateSampleCSV = (dataType: string) => {
    switch (dataType) {
      case 'leads':
        return `Name,E-Mail,Telefon,Status,Lead-Score,Quelle,Kategorie,Wert,Erstellungsdatum
Anna Müller,anna.mueller@email.com,+49 151 1234567,hot,85,Facebook Ads,Altersvorsorge,2500,2024-01-18
Thomas Weber,thomas.weber@email.com,+49 152 9876543,warm,72,Google Ads,Baufinanzierung,3200,2024-01-17
Sarah Schmidt,sarah.schmidt@email.com,+49 170 5555444,new,45,Instagram,PKV,1800,2024-01-20`
      
      case 'campaigns':
        return `Kampagnen-Name,Plattform,Status,Budget,Ausgaben,Klicks,Impressions,CPC,CTR,Leads
PMA Altersvorsorge Q1,Facebook,active,5000,3240,842,15420,3.85,5.46,23
Baufinanzierung Zielgruppe A,Google,active,3000,2180,456,8920,4.78,5.11,18
PKV Premium Campaign,Instagram,paused,2000,890,178,4560,5.00,3.90,8`
      
      case 'analytics':
        return `Datum,Website-Besucher,Seitenaufrufe,Bounce-Rate,Verweildauer,Traffic-Quelle,Conversions
2024-01-20,245,680,45.2%,02:34,Facebook,12
2024-01-19,189,523,38.7%,03:12,Google,15
2024-01-18,267,734,41.9%,02:45,Instagram,8`
      
      default:
        return 'Keine Daten verfügbar'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="glass-nav">
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="glass-button-secondary p-3">
                <ArrowLeftIcon className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Daten-Export</h1>
                <p className="text-slate-600 text-sm">Exportieren Sie Ihre Daten für das PMA-System</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-slate-700">DSGVO-konform</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-width py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Export Configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Data Type Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-gradient mb-6">1. Datentyp auswählen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dataTypes.map((dataType) => (
                  <div
                    key={dataType.id}
                    className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedDataType === dataType.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => setSelectedDataType(dataType.id)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${dataType.color} rounded-xl flex items-center justify-center`}>
                        <dataType.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{dataType.title}</h3>
                        <p className="text-sm text-slate-600">{dataType.description}</p>
                      </div>
                    </div>
                    
                    {selectedDataType === dataType.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="border-t pt-4"
                      >
                        <h4 className="font-medium text-slate-800 mb-2">Exportierte Felder:</h4>
                        <div className="flex flex-wrap gap-2">
                          {dataType.fields.map((field, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {field}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Date Range Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-gradient mb-6">2. Zeitraum festlegen</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {dateRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedDateRange(range.id)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      selectedDateRange === range.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
              
              {selectedDateRange === 'custom' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 grid grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Von</label>
                    <input type="date" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Bis</label>
                    <input type="date" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Format Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-gradient mb-6">3. Export-Format wählen</h2>
              <div className="space-y-3">
                {exportFormats.map((format) => (
                  <div
                    key={format.id}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedFormat === format.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-800">{format.label}</h3>
                        <p className="text-sm text-slate-600">{format.description}</p>
                      </div>
                      {selectedFormat === format.id && (
                        <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Export Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-gradient mb-4">Export starten</h2>
              <p className="text-slate-600 mb-8">
                Ihre Daten werden sicher exportiert und automatisch heruntergeladen.
              </p>
              
              <button
                onClick={handleExport}
                disabled={isExporting}
                className={`glass-button-primary px-12 py-4 text-lg flex items-center justify-center gap-3 mx-auto ${
                  isExporting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isExporting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Exportiere...
                  </>
                ) : (
                  <>
                    <ArrowDownTrayIcon className="w-6 h-6" />
                    Jetzt exportieren
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Export Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">📋 Export-Zusammenfassung</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-slate-600">Datentyp:</span>
                  <div className="font-medium text-slate-800">
                    {dataTypes.find(type => type.id === selectedDataType)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-slate-600">Zeitraum:</span>
                  <div className="font-medium text-slate-800">
                    {dateRanges.find(range => range.id === selectedDateRange)?.label}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-slate-600">Format:</span>
                  <div className="font-medium text-slate-800">
                    {exportFormats.find(format => format.id === selectedFormat)?.label}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Export History */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">🕒 Letzte Exports</h3>
              <div className="space-y-3">
                {exportHistory.slice(0, 5).map((export_item) => (
                  <div key={export_item.id} className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-800">{export_item.type}</span>
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-xs text-slate-600">
                      {export_item.date} um {export_item.time}
                    </div>
                    <div className="text-xs text-slate-600">
                      {export_item.records} Datensätze
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Help & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">💡 Hinweise</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Alle Exports sind DSGVO-konform</span>
                </div>
                <div className="flex items-start gap-2">
                  <DocumentTextIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>CSV-Format ist mit allen PMA-Systemen kompatibel</span>
                </div>
                <div className="flex items-start gap-2">
                  <ClockIcon className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Automatische Exports können eingerichtet werden</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 