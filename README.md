# PMA Lead- & Marketingplattform

## 🚀 All-in-One Whitelabel-Lösung für PMA-Berater

Eine vollständig whitelabel-basierte Komplettlösung zur eigenständigen Leadgenerierung, -qualifizierung und strukturierten Übergabe an das zentrale PMA-System.

![PMA Platform](https://via.placeholder.com/800x400?text=PMA+Lead+%26+Marketing+Platform)

## ✨ Features

### 🎯 Leadgenerierung über integriertes Anzeigen-Tool
- Integration mit Facebook, Instagram, Google & YouTube
- Kuratierte Bibliothek erprobter Anzeigen-Vorlagen
- Schritt-für-Schritt-Anleitung zur Kampagnen-Einrichtung
- Automatische Performance-Optimierung

### 📄 Landingpage-Vorlagen
- Professionelle, conversion-optimierte Templates
- Themenfelder: Altersvorsorge, Baufinanzierung, PKV
- DSGVO-konform mit Double-Opt-In
- Individuell anpassbar auf persönliches Branding

### 🤖 Automatisierte Lead-Kommunikation
- Intelligente Nachrichtenabfolge (E-Mail, WhatsApp, SMS)
- KI-gestützte Textvorschläge
- Automatisierte Follow-ups mit Eskalationslogik
- Personalisierte Nachrichten

### 📊 Lead-Qualifizierung & Kategorisierung
- Automatische Bewertung nach Relevanz und Beratungsbedarf
- Kategorisierung (Heiß / Warm / Kalt)
- Visualisierte Sales-Pipeline
- Lead-Scoring-System

### 📤 Strukturierte Übergabe ins PMA-System
- Automatisierter CSV-Export
- Standardisiertes Datenformat
- Zeitgesteuerte Exports
- Nahtlose CRM-Integration

### 🎨 Whitelabel-Design
- Vollständig individualisierbar
- Eigenes Branding (Farben, Logos, Texte)
- Responsive Design
- Mobile-First Ansatz

## 🛠 Technische Umsetzung

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion
- **Icons**: Heroicons
- **Charts**: Chart.js / Recharts
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## 📁 Projektstruktur

```
PMA/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard-Bereich
│   │   ├── ads/                # Anzeigen-Tool
│   │   │   ├── create/         # Kampagnen-Erstellung
│   │   │   └── page.tsx        # Kampagnen-Übersicht
│   │   ├── leads/              # Lead-Management
│   │   │   └── page.tsx        # Lead-Übersicht
│   │   ├── landingpages/       # Landingpage-Builder
│   │   ├── analytics/          # Analytics & Insights
│   │   ├── export/             # Datenexport
│   │   ├── settings/           # Einstellungen
│   │   ├── layout.tsx          # Dashboard-Layout
│   │   └── page.tsx            # Dashboard-Hauptseite
│   ├── globals.css             # Globale Styles
│   ├── layout.tsx              # Root-Layout
│   └── page.tsx                # Landing-Page
├── components/                  # Wiederverwendbare Komponenten
├── lib/                        # Utilities & Services
├── public/                     # Statische Assets
├── tailwind.config.js          # Tailwind-Konfiguration
├── next.config.js              # Next.js-Konfiguration
├── package.json                # Dependencies
└── README.md                   # Dokumentation
```

## 🚀 Installation & Setup

### 1. Dependencies installieren
```bash
npm install
```

### 2. Entwicklungsserver starten
```bash
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

### 3. Produktionsversion erstellen
```bash
npm run build
npm start
```

## 🎨 Design-System

### Farbpalette
- **Primary**: #3b82f6 (Blau)
- **Success**: #22c55e (Grün)
- **Warning**: #f59e0b (Orange)
- **Danger**: #ef4444 (Rot)
- **Gray**: #6b7280 (Grau)

### Komponenten
- **Professional Cards**: Moderne Card-Designs
- **Button-Varianten**: Primary, Secondary, Success, Danger
- **Form-Elemente**: Einheitliche Input-Styles
- **Status-Badges**: Farbkodierte Zustandsanzeigen
- **Animationen**: Smooth Transitions mit Framer Motion

## 📊 Dashboard-Module

### 1. **Hauptdashboard**
- KPI-Übersicht (Leads, Kampagnen, Conversion, Umsatz)
- Schnellaktionen
- Neueste Aktivitäten
- Top-Performance-Kampagnen

### 2. **Anzeigen-Tool**
- Kampagnen-Übersicht
- Performance-Statistiken
- Plattform-Integration (Facebook, Google, Instagram, YouTube)
- Template-Bibliothek
- Schritt-für-Schritt Kampagnen-Erstellung

### 3. **Lead-Management**
- Lead-Übersicht mit erweiterten Filtern
- Lead-Scoring und Kategorisierung
- Kommunikations-History
- Automatisierte Follow-ups
- Pipeline-Visualisierung

### 4. **Landingpage-Builder**
- Template-Auswahl
- Drag & Drop Editor
- A/B-Testing
- Conversion-Tracking
- Mobile-Optimierung

### 5. **Analytics & Insights**
- Performance-Dashboards
- ROI-Analysen
- Conversion-Funnels
- Trend-Analysen
- Custom Reports

### 6. **Export-System**
- CSV-Export-Funktionen
- Automatisierte Exports
- Custom Datenformate
- PMA-System Integration
- Backup-Funktionen

## 🔧 Konfiguration

### Whitelabel-Anpassungen
```javascript
// app/config/branding.js
export const brandingConfig = {
  companyName: "Ihr Firmenname",
  primaryColor: "#3b82f6",
  logo: "/logo.png",
  favicon: "/favicon.ico",
  contactInfo: {
    email: "kontakt@ihre-domain.de",
    phone: "+49 XXX XXXXXXX"
  }
}
```

### API-Integration
```javascript
// app/config/api.js
export const apiConfig = {
  pmaSystemUrl: "https://pma-system.example.com",
  exportEndpoint: "/api/export",
  leadSyncInterval: 24 * 60 * 60 * 1000 // 24 Stunden
}
```

## 📈 Performance-Features

- **Server-Side Rendering** mit Next.js
- **Optimierte Bilder** mit next/image
- **Code-Splitting** für bessere Ladezeiten
- **Progressive Web App** Ready
- **SEO-Optimiert** mit Meta-Tags
- **Mobile-First** Responsive Design

## 🔒 Sicherheit & DSGVO

- **DSGVO-konforme** Datenverarbeitung
- **Hosting in der EU**
- **Sichere API-Endpunkte**
- **Verschlüsselte Datenübertragung**
- **Datenschutz-by-Design**

## 🎯 Vorteile für PMA-Berater

✅ **Alles an einem Ort**: Werbung, Landingpage, Leadmanagement & Datenübergabe  
✅ **Kein technisches Know-how erforderlich**  
✅ **Professionelles Auftreten** mit eigenem Branding  
✅ **Maximale Effizienz** durch automatisierte Prozesse  
✅ **Entlastung** durch strukturierte Workflows  
✅ **Skalierbarkeit** für wachsende Anforderungen  

## 📞 Support & Schulungen

- **Umfassende Dokumentation**
- **Video-Tutorials**
- **Live-Schulungen**
- **Persönlicher Support**
- **Community-Forum**

## 🔄 Updates & Roadmap

### Nächste Features
- [ ] KI-basierte Lead-Bewertung
- [ ] WhatsApp Business Integration
- [ ] Advanced Analytics Dashboard
- [ ] Mobile App
- [ ] CRM-Integrationen (Salesforce, HubSpot)

## 📝 Lizenz

Diese Software ist für PMA-Berater lizenziert. Alle Rechte vorbehalten.

---

**Entwickelt für maximale Effizienz im Lead-Management** 🚀

Für Support und Fragen: [support@pma-platform.de](mailto:support@pma-platform.de) 