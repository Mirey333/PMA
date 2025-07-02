'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  MegaphoneIcon,
  CurrencyEuroIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

interface CampaignData {
  name: string
  platform: string
  category: string
  budget: number
  duration: number
  targetAudience: {
    ageMin: number
    ageMax: number
    gender: string
    interests: string[]
    location: string
  }
  adContent: {
    headline: string
    description: string
    callToAction: string
    imageUrl: string
  }
  landingPageId: string
}

export default function CreateCampaignPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [campaignData, setCampaignData] = useState<CampaignData>({
    name: '',
    platform: '',
    category: '',
    budget: 100,
    duration: 7,
    targetAudience: {
      ageMin: 25,
      ageMax: 65,
      gender: 'alle',
      interests: [],
      location: 'Deutschland'
    },
    adContent: {
      headline: '',
      description: '',
      callToAction: 'Jetzt informieren',
      imageUrl: ''
    },
    landingPageId: ''
  })

  const steps = [
    { id: 1, name: 'Grundeinstellungen', icon: MegaphoneIcon },
    { id: 2, name: 'Budget & Laufzeit', icon: CurrencyEuroIcon },
    { id: 3, name: 'Zielgruppe', icon: UserGroupIcon },
    { id: 4, name: 'Anzeigeninhalt', icon: GlobeAltIcon },
    { id: 5, name: 'Überprüfung', icon: CheckCircleIcon }
  ]

  const platforms = [
    { id: 'facebook', name: 'Facebook', description: 'Erreichen Sie Ihre Zielgruppe über Facebook Ads' },
    { id: 'google', name: 'Google Ads', description: 'Schalten Sie Anzeigen in den Google-Suchergebnissen' },
    { id: 'instagram', name: 'Instagram', description: 'Visuelles Marketing über Instagram Stories und Feed' },
    { id: 'youtube', name: 'YouTube', description: 'Video-Werbung auf der größten Video-Plattform' }
  ]

  const categories = [
    { id: 'altersvorsorge', name: 'Altersvorsorge', description: 'Riester, Rürup, private Rente' },
    { id: 'immobilien', name: 'Baufinanzierung', description: 'Immobilienkredite und Hypotheken' },
    { id: 'krankenversicherung', name: 'Private Krankenversicherung', description: 'PKV-Beratung und Wechsel' },
    { id: 'lebensversicherung', name: 'Lebensversicherung', description: 'Kapital- und Risikolebensversicherung' }
  ]

  const adTemplates = {
    altersvorsorge: [
      {
        headline: '🏠 Sichere Altersvorsorge ab 50€/Monat',
        description: 'Staatlich geförderte Vorsorge mit bis zu 175€ Zulagen pro Jahr. Jetzt kostenlose Beratung anfordern!',
        callToAction: 'Kostenlos beraten lassen'
      },
      {
        headline: '💰 Riester-Rente: Bis zu 600€ geschenkt',
        description: 'Nutzen Sie die maximalen staatlichen Zulagen für Ihre Altersvorsorge. Persönliche Beratung vor Ort.',
        callToAction: 'Zulagen sichern'
      }
    ],
    immobilien: [
      {
        headline: '🏡 Traumhaus finanzieren ab 0,5% Zinsen',
        description: 'Günstige Baufinanzierung mit persönlicher Beratung. Vergleichen Sie über 500 Banken kostenlos.',
        callToAction: 'Finanzierung prüfen'
      }
    ],
    krankenversicherung: [
      {
        headline: '⚕️ PKV: Bessere Leistungen, weniger Kosten',
        description: 'Wechseln Sie in die private Krankenversicherung und sparen Sie bis zu 300€ monatlich.',
        callToAction: 'PKV-Check starten'
      }
    ]
  }

  const interests = [
    'Finanzplanung', 'Investitionen', 'Immobilien', 'Versicherungen', 'Sparen',
    'Altersvorsorge', 'Familie', 'Selbstständigkeit', 'Beratung', 'Sicherheit'
  ]

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      // Hier würde die API-Anfrage zur Kampagnen-Erstellung erfolgen
      toast.success('Kampagne erfolgreich erstellt!')
      router.push('/dashboard/ads')
    } catch (error) {
      toast.error('Fehler beim Erstellen der Kampagne')
    }
  }

  const updateCampaignData = (field: string, value: any) => {
    setCampaignData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const updateNestedData = (parent: string, field: string, value: any) => {
    setCampaignData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof CampaignData] as any,
        [field]: value
      }
    }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kampagnenname *
              </label>
              <input
                type="text"
                value={campaignData.name}
                onChange={(e) => updateCampaignData('name', e.target.value)}
                className="form-input"
                placeholder="z.B. Altersvorsorge Facebook Kampagne"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Plattform auswählen *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    onClick={() => updateCampaignData('platform', platform.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      campaignData.platform === platform.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="font-medium text-gray-900">{platform.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Kategorie auswählen *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => updateCampaignData('category', category.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      campaignData.category === category.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tagesbudget (€) *
              </label>
              <input
                type="number"
                value={campaignData.budget}
                onChange={(e) => updateCampaignData('budget', Number(e.target.value))}
                className="form-input"
                min="1"
                step="1"
              />
              <p className="text-sm text-gray-500 mt-1">
                Empfohlen: €50-200 pro Tag für optimale Ergebnisse
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Laufzeit (Tage) *
              </label>
              <input
                type="number"
                value={campaignData.duration}
                onChange={(e) => updateCampaignData('duration', Number(e.target.value))}
                className="form-input"
                min="1"
                max="90"
              />
              <p className="text-sm text-gray-500 mt-1">
                Gesamtbudget: €{(campaignData.budget * campaignData.duration).toLocaleString()}
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">💡 Budget-Tipp</h3>
              <p className="text-sm text-blue-800">
                Starten Sie mit einem kleineren Budget und erhöhen Sie es bei guten Ergebnissen. 
                Eine Laufzeit von 7-14 Tagen ist ideal für erste Tests.
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alter von
                </label>
                <input
                  type="number"
                  value={campaignData.targetAudience.ageMin}
                  onChange={(e) => updateNestedData('targetAudience', 'ageMin', Number(e.target.value))}
                  className="form-input"
                  min="18"
                  max="65"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alter bis
                </label>
                <input
                  type="number"
                  value={campaignData.targetAudience.ageMax}
                  onChange={(e) => updateNestedData('targetAudience', 'ageMax', Number(e.target.value))}
                  className="form-input"
                  min="18"
                  max="80"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Geschlecht
              </label>
              <select
                value={campaignData.targetAudience.gender}
                onChange={(e) => updateNestedData('targetAudience', 'gender', e.target.value)}
                className="form-select"
              >
                <option value="alle">Alle</option>
                <option value="männlich">Männlich</option>
                <option value="weiblich">Weiblich</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Standort
              </label>
              <input
                type="text"
                value={campaignData.targetAudience.location}
                onChange={(e) => updateNestedData('targetAudience', 'location', e.target.value)}
                className="form-input"
                placeholder="z.B. München, Bayern, Deutschland"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interessen
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {interests.map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={campaignData.targetAudience.interests.includes(interest)}
                      onChange={(e) => {
                        const newInterests = e.target.checked
                          ? [...campaignData.targetAudience.interests, interest]
                          : campaignData.targetAudience.interests.filter(i => i !== interest)
                        updateNestedData('targetAudience', 'interests', newInterests)
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 4:
        const templates = adTemplates[campaignData.category as keyof typeof adTemplates] || []
        
        return (
          <div className="space-y-6">
            {templates.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Vorlage auswählen (optional)
                </label>
                <div className="space-y-3">
                  {templates.map((template, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        updateNestedData('adContent', 'headline', template.headline)
                        updateNestedData('adContent', 'description', template.description)
                        updateNestedData('adContent', 'callToAction', template.callToAction)
                      }}
                      className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-all"
                    >
                      <h4 className="font-medium text-gray-900">{template.headline}</h4>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                        {template.callToAction}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Überschrift *
              </label>
              <input
                type="text"
                value={campaignData.adContent.headline}
                onChange={(e) => updateNestedData('adContent', 'headline', e.target.value)}
                className="form-input"
                placeholder="Aufmerksamkeitsstarke Überschrift"
                maxLength={60}
              />
              <p className="text-sm text-gray-500 mt-1">
                {campaignData.adContent.headline.length}/60 Zeichen
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Beschreibung *
              </label>
              <textarea
                value={campaignData.adContent.description}
                onChange={(e) => updateNestedData('adContent', 'description', e.target.value)}
                className="form-textarea"
                rows={4}
                placeholder="Beschreiben Sie Ihr Angebot überzeugend..."
                maxLength={150}
              />
              <p className="text-sm text-gray-500 mt-1">
                {campaignData.adContent.description.length}/150 Zeichen
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Call-to-Action *
              </label>
              <select
                value={campaignData.adContent.callToAction}
                onChange={(e) => updateNestedData('adContent', 'callToAction', e.target.value)}
                className="form-select"
              >
                <option value="Jetzt informieren">Jetzt informieren</option>
                <option value="Kostenlos beraten lassen">Kostenlos beraten lassen</option>
                <option value="Angebot anfordern">Angebot anfordern</option>
                <option value="Mehr erfahren">Mehr erfahren</option>
                <option value="Termin vereinbaren">Termin vereinbaren</option>
              </select>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-900 mb-4">
                ✅ Kampagne bereit zum Start!
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Grundeinstellungen</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Name: {campaignData.name}</li>
                    <li>Plattform: {platforms.find(p => p.id === campaignData.platform)?.name}</li>
                    <li>Kategorie: {categories.find(c => c.id === campaignData.category)?.name}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Budget & Laufzeit</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Tagesbudget: €{campaignData.budget}</li>
                    <li>Laufzeit: {campaignData.duration} Tage</li>
                    <li>Gesamtbudget: €{(campaignData.budget * campaignData.duration).toLocaleString()}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Zielgruppe</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Alter: {campaignData.targetAudience.ageMin}-{campaignData.targetAudience.ageMax} Jahre</li>
                    <li>Geschlecht: {campaignData.targetAudience.gender}</li>
                    <li>Standort: {campaignData.targetAudience.location}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Anzeigeninhalt</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Überschrift: {campaignData.adContent.headline}</li>
                    <li>CTA: {campaignData.adContent.callToAction}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">📊 Geschätzte Performance</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-blue-800">Reichweite:</span>
                  <div className="font-semibold text-blue-900">15.000 - 45.000</div>
                </div>
                <div>
                  <span className="text-blue-800">Erwartete Klicks:</span>
                  <div className="font-semibold text-blue-900">200 - 600</div>
                </div>
                <div>
                  <span className="text-blue-800">Potentielle Leads:</span>
                  <div className="font-semibold text-blue-900">20 - 60</div>
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
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Neue Kampagne erstellen</h1>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= step.id 
                  ? 'bg-primary-600 border-primary-600 text-white' 
                  : 'border-gray-300 text-gray-500'
              }`}>
                {currentStep > step.id ? (
                  <CheckCircleIcon className="w-6 h-6" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${
                  currentStep > step.id ? 'bg-primary-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="professional-card mb-8"
      >
        <div className="professional-card-header">
          <h2 className="text-xl font-semibold text-gray-900">
            {steps[currentStep - 1].name}
          </h2>
        </div>
        
        {renderStep()}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`btn-secondary flex items-center gap-2 ${
            currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Zurück
        </button>
        
        {currentStep < steps.length ? (
          <button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && (!campaignData.name || !campaignData.platform || !campaignData.category)) ||
              (currentStep === 4 && (!campaignData.adContent.headline || !campaignData.adContent.description))
            }
            className="btn-primary flex items-center gap-2"
          >
            Weiter
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="btn-success flex items-center gap-2"
          >
            <CheckCircleIcon className="w-4 h-4" />
            Kampagne erstellen
          </button>
        )}
      </div>
    </div>
  )
} 