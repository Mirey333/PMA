'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeftIcon,
  EyeIcon,
  CheckIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function CreateLandingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    template: '',
    headline: '',
    subheadline: '',
    description: '',
    buttonText: 'Jetzt beraten lassen',
    email: '',
    phone: '',
    company: '',
    primaryColor: '#3B82F6'
  })

  const templates = [
    {
      id: 'retirement',
      name: 'Altersvorsorge Beratung',
      description: 'Speziell für Rentenberatung und Altersvorsorge optimiert',
      category: 'Rente & Vorsorge',
      conversionRate: 8.5
    },
    {
      id: 'home-financing',
      name: 'Baufinanzierung Experte',
      description: 'Perfekt für Immobilienfinanzierung und Baudarlehen',
      category: 'Immobilien',
      conversionRate: 7.8
    },
    {
      id: 'health-insurance',
      name: 'Private Krankenversicherung',
      description: 'Optimiert für PKV-Beratung und Vergleiche',
      category: 'Gesundheit',
      conversionRate: 6.9
    }
  ]

  const steps = [
    { id: 1, name: 'Template wählen' },
    { id: 2, name: 'Inhalte anpassen' },
    { id: 3, name: 'Design anpassen' },
    { id: 4, name: 'Veröffentlichen' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Template auswählen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`professional-card cursor-pointer border-2 transition-all ${
                    formData.template === template.id 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('template', template.id)}
                >
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <PhotoIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      <span className="text-xs bg-success-100 text-success-800 px-2 py-1 rounded-full">
                        {template.conversionRate}% CVR
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{template.description}</p>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{template.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Inhalte anpassen</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name der Landing Page *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="z.B. Altersvorsorge Beratung München"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hauptüberschrift *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="z.B. Sichere Altersvorsorge für Ihre Zukunft"
                    value={formData.headline}
                    onChange={(e) => handleInputChange('headline', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unterüberschrift
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="z.B. Professionelle Beratung für Ihre finanzielle Sicherheit"
                    value={formData.subheadline}
                    onChange={(e) => handleInputChange('subheadline', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    rows={4}
                    className="form-input"
                    placeholder="Beschreiben Sie Ihre Leistungen und Vorteile..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="ihre@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Telefonnummer
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+49 123 456789"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Firmenname
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ihre Firma / Ihr Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.buttonText}
                    onChange={(e) => handleInputChange('buttonText', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Design anpassen</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primärfarbe
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      className="h-10 w-16 rounded border border-gray-300"
                      value={formData.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-input flex-1"
                      value={formData.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo hochladen
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <PhotoIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Klicken Sie hier oder ziehen Sie Ihr Logo hinein
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG bis zu 2MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <EyeIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Live Vorschau</p>
                  <p className="text-sm text-gray-500">
                    Hier sehen Sie eine Vorschau ihrer Landing Page
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Zusammenfassung & Veröffentlichen</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="professional-card">
                  <h4 className="font-medium text-gray-900 mb-3">Zusammenfassung</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{formData.name || 'Nicht angegeben'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Template:</span>
                      <span className="font-medium">
                        {templates.find(t => t.id === formData.template)?.name || 'Nicht gewählt'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Headline:</span>
                      <span className="font-medium truncate ml-2">
                        {formData.headline || 'Nicht angegeben'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">E-Mail:</span>
                      <span className="font-medium">{formData.email || 'Nicht angegeben'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="btn btn-secondary flex-1">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    Vorschau
                  </button>
                  <button className="btn btn-primary flex-1">
                    Veröffentlichen
                  </button>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <CheckIcon className="h-16 w-16 text-success-500 mx-auto mb-4" />
                  <p className="text-gray-900 font-medium">Bereit zur Veröffentlichung!</p>
                  <p className="text-sm text-gray-500">
                    Ihre Landing Page ist konfiguriert und kann online gehen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/landingpages">
            <button className="btn btn-secondary">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Zurück
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Neue Landing Page erstellen</h1>
            <p className="text-lg text-gray-600">
              Erstellen Sie eine conversion-optimierte Landing Page
            </p>
          </div>
        </div>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="professional-card"
      >
        <div className="px-6 py-4">
          <nav>
            <ol className="flex items-center space-x-8">
              {steps.map((step) => (
                <li key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full border-2 ${
                    step.id < currentStep 
                      ? 'bg-primary-600 border-primary-600' 
                      : step.id === currentStep
                      ? 'border-primary-600 bg-white'
                      : 'border-gray-300 bg-white'
                  }`}>
                    {step.id < currentStep ? (
                      <CheckIcon className="h-4 w-4 text-white" />
                    ) : (
                      <span className={`text-sm font-medium ${
                        step.id === currentStep ? 'text-primary-600' : 'text-gray-500'
                      }`}>
                        {step.id}
                      </span>
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    step.id <= currentStep ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </motion.div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="professional-card"
      >
        <div className="p-6">
          {renderStepContent()}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-between"
      >
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Zurück
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
          disabled={currentStep === 4 || (currentStep === 1 && !formData.template)}
          className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === 4 ? 'Fertig' : 'Weiter'}
        </button>
      </motion.div>
    </div>
  )
} 