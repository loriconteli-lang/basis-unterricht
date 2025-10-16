import React from 'react';
import type { WebApp, Feature } from './types';

// Custom Illustrations
const LessonObservationIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#e0f2fe', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#dbeafe', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path d="M25,10 C22.79,10 21,11.79 21,14 L21,86 C21,88.21 22.79,90 25,90 L75,90 C77.21,90 79,88.21 79,86 L79,40 L55,10 L25,10 Z" fill="url(#grad1)" stroke="#9ca3af" strokeWidth="1.5"/>
    <path d="M55,10 L55,36 C55,38.21 56.79,40 59,40 L79,40" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
    <g transform="translate(30, 45)">
      <line x1="0" y1="5" x2="30" y2="5" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="15" x2="40" y2="15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="25" x2="25" y2="25" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <circle cx="68" cy="68" r="18" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5"/>
    <path d="M78 78 L85 85" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M68,60 v8 h8" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Feature Icons Lesson Observation
const IconFileText: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);
const IconDownload: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);
const IconFolder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

export const WEB_APPS: WebApp[] = [
  { id: 'lesson-observation', url: 'https://basis-unterricht.base44.app', icon: LessonObservationIllustration },
];

const lessonObservationFeaturesDe: Feature[] = [
    { icon: IconFileText, title: 'Strukturierte Beobachtung', text: 'Erfassen Sie Beobachtungen systematisch und effizient anhand praxisorientierter Dimensionen.' },
    { icon: IconDownload, title: 'Automatisierte PDF-Berichte', text: 'Erstellen Sie mit einem Klick professionelle, detaillierte Berichte für Feedbackgespräche.' },
    { icon: IconFolder, title: 'Einfache Datenverwaltung', text: 'Organisieren Sie alle Beobachtungen sicher und übersichtlich in einer persönlichen Ordnerstruktur.' },
];

const lessonObservationFeaturesEn: Feature[] = [
    { icon: IconFileText, title: 'Structured Observation', text: 'Systematically and efficiently capture observations based on practice-oriented dimensions.' },
    { icon: IconDownload, title: 'Automated PDF Reports', text: 'Create professional, detailed reports for feedback discussions with a single click.' },
    { icon: IconFolder, title: 'Simple Data Management', text: 'Organize all observations securely and clearly in a personal folder structure.' },
];

const privacyContentDe = `Stand: Oktober 2025

Wir freuen uns über Ihr Interesse an unserer Web-Applikation BASIS-Unterricht.
Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
In dieser Datenschutzerklärung informieren wir Sie darüber, wie wir Personendaten bearbeiten, wenn Sie unsere Website oder Web-App nutzen.

1. Verantwortliche Stelle

Verantwortlich für die Datenbearbeitung im Sinne des Datenschutzgesetzes (DSG):
Lorenzo Conte
Schützenhausstrasse 40
8750 Glarus
📧 E-Mail: lori@conte.li

2. Grundsätze der Datenbearbeitung

Wir bearbeiten Personendaten im Einklang mit dem Schweizer Datenschutzgesetz (DSG).
Die Bearbeitung erfolgt nach Treu und Glauben, verhältnismässig und zweckgebunden.
Es werden nur jene Daten erhoben und bearbeitet, die für den jeweiligen Zweck erforderlich sind.

3. Erhebung und Bearbeitung von Personendaten

Wir bearbeiten Personendaten insbesondere in folgenden Fällen:
- wenn Sie unsere Web-App BASIS-Unterricht oder die dazugehörige Website nutzen,
- wenn Sie ein Benutzerkonto erstellen oder sich anmelden,
- wenn Sie Daten im Rahmen von Beobachtungen, Bewertungen oder Berichten eingeben,
- wenn Sie mit uns in Kontakt treten (z. B. per E-Mail).

Die dabei bearbeiteten Personendaten können je nach Nutzung umfassen:
- Identifikationsdaten: Name, Vorname, E-Mail-Adresse, Benutzername, Rolle (z. B. Schulleitung, Lehrperson),
- Nutzungsdaten: Zeitpunkt des Logins, IP-Adresse, Browserinformationen,
- Inhaltsdaten: Beobachtungsnotizen, Evaluationsdaten, Kommentare oder hochgeladene Dateien,
- Kommunikationsdaten: Mitteilungen, Anfragen, Feedback.

4. Zweck der Datenbearbeitung

Personendaten werden ausschliesslich zu folgenden Zwecken bearbeitet:
- Bereitstellung und Betrieb der Web-App,
- Verwaltung von Benutzerkonten,
- Verarbeitung von Unterrichtsbeobachtungen und Auswertungen,
- Verbesserung der App-Funktionalität und Benutzerfreundlichkeit,
- Bearbeitung von Support- oder Kontaktanfragen,
- Sicherstellung der Stabilität, Nachvollziehbarkeit und Sicherheit der Anwendung.
Eine Bearbeitung zu anderen Zwecken erfolgt nur, wenn sie gesetzlich erlaubt oder ausdrücklich von Ihnen genehmigt ist.

5. Datensicherheit

Wir treffen angemessene technische und organisatorische Massnahmen (TOM), um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
Dazu gehören insbesondere:
- verschlüsselte Datenübertragung (HTTPS / TLS),
- gesicherte Serverstandorte mit Zugangskontrollen,
- rollenbasierte Benutzerrechte,
- regelmässige Sicherheits-Updates und Backups,
- Zugriff nur durch autorisierte Personen,
- automatische Löschung personenbezogener Daten nach Wegfall des Bearbeitungszwecks.
Unsere Sicherheitsmassnahmen werden laufend überprüft und dem Stand der Technik angepasst.

6. Speicherung und Löschung

Personendaten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
Nach Ablauf dieser Fristen werden die Daten gelöscht oder anonymisiert.
Technische Logdaten und Sicherungskopien werden in der Regel nach 30 bis 90 Tagen automatisch gelöscht.

7. Weitergabe von Daten an Dritte

Personendaten werden nicht an Dritte verkauft oder weitergegeben.
Eine Weitergabe erfolgt nur, wenn sie:
- zur Erfüllung des Vertragszwecks notwendig ist (z. B. Hosting, Wartung oder Support durch beauftragte Dienstleister),
- gesetzlich vorgeschrieben ist, oder
- Sie ausdrücklich eingewilligt haben.
Alle beauftragten Dienstleister sind vertraglich zur Vertraulichkeit und Einhaltung des Datenschutzes verpflichtet.

8. Datenübermittlung ins Ausland

Sofern Personendaten in Länder ausserhalb der Schweiz übermittelt werden, erfolgt dies nur:
- in Staaten mit einem vom Bundesrat anerkannten angemessenen Datenschutzniveau, oder
- auf Grundlage geeigneter vertraglicher Garantien (z. B. Standardvertragsklauseln).
Eine Liste der Länder mit anerkanntem Datenschutzniveau finden Sie auf der Website des Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB).

9. Rechte der betroffenen Personen

Sie haben gemäss Datenschutzgesetz folgende Rechte:
- Auskunft: Sie können Auskunft darüber verlangen, welche Daten wir über Sie bearbeiten.
- Berichtigung: Sie können die Korrektur unrichtiger oder unvollständiger Daten verlangen.
- Löschung: Sie können die Löschung Ihrer Daten beantragen, sofern keine gesetzlichen Pflichten dagegensprechen.
- Einschränkung/Widerspruch: Sie können bestimmten Bearbeitungen widersprechen.
- Datenherausgabe: Sie haben das Recht, Ihre Daten in einem gängigen elektronischen Format zu erhalten.
Anfragen zu diesen Rechten richten Sie bitte an:
📧 lori@conte.li
Wir behalten uns vor, zur Identifikation einen geeigneten Nachweis (z. B. Kopie eines amtlichen Ausweises) zu verlangen.

10. Protokollierung und Analyse

Zur Sicherstellung des Betriebs werden technische Protokolldaten (Logs) erfasst, etwa Zeitpunkt des Zugriffs, IP-Adresse, Browsertyp und Fehlermeldungen.
Diese Informationen dienen ausschliesslich der Systemstabilität, Sicherheit und Fehlersuche.
Es werden keine personenbezogenen Profile erstellt und kein Tracking zu Werbezwecken durchgeführt.

11. Änderungen dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung jederzeit anpassen.
Massgeblich ist jeweils die auf der Website veröffentlichte Version mit dem aktuellen Stand-Datum.

12. Kontakt

Lorenzo Conte
Schützenhausstrasse 40
8750 Glarus
📧 lori@conte.li`;

export const TEXTS = {
  de: {
    dashboardTitle: 'Digitale Werkzeuge für eine effiziente Schulleitung',
    dashboardSubtitle: 'Optimieren Sie Ihre Prozesse und gewinnen Sie wertvolle Zeit für pädagogische Führung.',
    launchButton: 'Starten',
    appNames: {
      'lesson-observation': 'BASIS Unterricht: professionelle Unterrichsbeobachtungen',
    },
    appDescriptions: {
      'lesson-observation': lessonObservationFeaturesDe,
    },
    privacyLink: '🛡️ Datenschutzerklärung',
    privacyTitle: 'Datenschutzerklärung',
    privacyContent: privacyContentDe,
  },
  en: {
    dashboardTitle: 'Digital Tools for Efficient School Management',
    dashboardSubtitle: 'Optimize your processes and gain valuable time for educational leadership.',
    launchButton: 'Launch',
    appNames: {
      'lesson-observation': 'BASIS Teaching: Professional Lesson Observations',
    },
    appDescriptions: {
      'lesson-observation': lessonObservationFeaturesEn,
    },
    privacyLink: '🛡️ Privacy Policy',
    privacyTitle: 'Privacy Policy',
    privacyContent: 'The privacy policy is currently only available in German. An English translation will be provided soon.',
  },
};
