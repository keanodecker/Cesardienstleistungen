# Website-Audit Prompt für Claude (Browser / Computer Use)

Kopiere diesen Prompt vollständig in eine Claude-Sitzung mit Browser-Zugriff
(z. B. Claude Computer Use, Claude mit Playwright-Tool, oder ein Browser-Extension-Chat).

---

## Prompt

Du bist ein Website-Auditor für die Seite **https://cesardienstleistungen-pmkd4o7e0-keanodeckers-projects.vercel.app** (oder die Live-Domain).

Gehe **jede einzelne Leistungs-Detailseite** durch. Die Seiten befinden sich unter:

### Zu prüfende URLs:
- /leistungen/fuersorge/regelmaessiger-besuch
- /leistungen/fuersorge/erledigungen
- /leistungen/fuersorge/reinigungen-besorgungen
- /leistungen/familie/erbschaftsabwicklung
- /leistungen/familie/trauerfall-beerdigung
- /leistungen/familie/besuche-ferne-verwandte
- /leistungen/begleitservice/ausfluege
- /leistungen/begleitservice/urlaubsbegleitung
- /leistungen/begleitservice/fahrservice
- /leistungen/baudienstleistungen/entkernung-wohnungsbereitschaft
- /leistungen/baudienstleistungen/sanierungen
- /leistungen/baudienstleistungen/bodenbelaege-streichen
- /leistungen/baudienstleistungen/treppen-tueren-moebel
- /leistungen/baudienstleistungen/umzuege-entruempelung
- /leistungen/baudienstleistungen/alters-barrierefreies-wohnen
- /leistungen/event/auf-abbau
- /leistungen/event/bedienung-thekenpersonal
- /leistungen/event/planung

### Für jede Seite:

1. **Lade-Check**: Öffne die Seite vollständig. Warte 3 Sekunden. Prüfe dann jeden `<img>`-Tag:
   - Ist `naturalWidth === 0` oder `naturalHeight === 0`? → Bild lädt NICHT
   - Hat das Bild einen kaputten Alt-Text (alt-Text sichtbar statt Bild)? → Bild lädt NICHT
   - Notiere: Seiten-URL + Position des Bildes (Hero, Galerie 1/2/3)

2. **Inhalt-Check**: Schau dir jedes geladene Bild an und beurteile:
   - Passt es thematisch zur Leistung der Seite?
   - Ist es professionell und für eine Dienstleistungswebsite geeignet?
   - Zeigt es etwas, das für das Thema falsch oder irreführend ist?
   - Bewertung: ✅ Passt | ⚠️ Fragwürdig | ❌ Falsch/unpassend

3. **Generelles UI-Check**:
   - Lädt die Seite korrekt (kein 404, kein weißer Bildschirm)?
   - Funktionieren Buttons und Links (z. B. "Zurück zu [Kategorie]")?
   - Sieht das Layout auf Desktop (1280px) gut aus?

### Ergebnis-Format:

Erstelle eine tabellarische Zusammenfassung:

| Seite | Bild-Position | Status | Problem/Anmerkung |
|-------|--------------|--------|-------------------|
| regelmaessiger-besuch | Hero | ✅ | Pflegerin besucht Seniorin |
| regelmaessiger-besuch | Galerie 1 | ❌ | Lädt nicht |
| trauerfall-beerdigung | Galerie 2 | ⚠️ | Zeigt Strandsunset – passt nicht gut |
| ... | ... | ... | ... |

Gib am Ende eine priorisierte Liste der **dringendsten Fixes** aus:
1. Bilder die gar nicht laden (höchste Priorität)
2. Bilder mit falschem Inhalt
3. Bilder die geladen sind aber verbesserungswürdig sind

### Zusätzlich prüfen:
- Kontaktformular auf /kontakt: Funktioniert der Submit-Button (visuell)?
- Cookie-Banner: Erscheint beim ersten Besuch?
- Footer: Sind alle Links klickbar (Impressum, Datenschutz, cesarsicherheit.de)?
- Navigation: Funktioniert das Leistungen-Dropdown-Menü?

---

*Hinweis: Dies ist eine geschäftliche Dienstleistungswebsite (Haushalts- und Pflegedienste, Baudienstleistungen, Eventservice) in Deutschland. Bilder sollten professionell, vertrauenswürdig und dem deutschsprachigen Markt angemessen sein.*
