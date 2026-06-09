
export const leistungenData = [
  {
    id: 'fuersorge',
    slug: 'fuersorge',
    name: 'Fürsorge für Jung & Alt',
    description: 'Wir unterstützen Sie im Alltag, damit Sie oder Ihre Angehörigen ein sorgenfreies Leben führen können. Vertrauen und Zuverlässigkeit stehen bei uns an erster Stelle.',
    image: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=800&q=80',
    applicationAreas: [
      'Privathaushalte',
      'Seniorenbetreuung zu Hause',
      'Unterstützung im betreuten Wohnen',
      'Krankenhausnachsorge',
      'Entlastung pflegender Angehöriger'
    ],
    subcategories: [
      {
        slug: 'regelmaessiger-besuch',
        name: 'Regelmäßiger Besuch & nach dem Rechten schauen',
        description: 'Wir besuchen Sie oder Ihre Angehörigen regelmäßig, leisten Gesellschaft und stellen sicher, dass alles in Ordnung ist. Dies gibt Sicherheit und beugt Einsamkeit vor.',
        image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
        layoutType: 'emotional',
        callout: 'Regelmäßige Besuche geben Sicherheit – für Sie und für Ihre Familie.',
        extraImages: [
          'https://images.unsplash.com/photo-1559127544-3c7ac7e8e3e8?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1517677208171-0bc6132f1a26?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Feste Besuchszeiten', text: 'Verlässliche Termine, die sich nach Ihren Wünschen richten – täglich, wöchentlich oder nach Bedarf.' },
          { title: 'Gesellschaft & Gespräch', text: 'Wir sind da – zum Reden, Zuhören und einfach um gemeinsam Zeit zu verbringen.' },
          { title: 'Lagecheck & Meldung', text: 'Nach jedem Besuch informieren wir Angehörige über den aktuellen Stand.' },
          { title: 'Vertraute Gesichter', text: 'Wann immer möglich schicken wir dieselbe Person, damit echtes Vertrauen entsteht.' },
        ]
      },
      {
        slug: 'erledigungen',
        name: 'Erledigen von Außen- & Innen-Anfälligkeiten',
        description: 'Von der Organisation des Haushalts bis hin zu kleinen Reparaturen oder der Koordination von Handwerkern – wir kümmern uns um die alltäglichen Herausforderungen.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Kein Auftrag ist zu klein – wir kümmern uns.',
        extraImages: [
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Haushaltsorganisation', text: 'Koordination aller anfallenden Aufgaben im und ums Haus.' },
          { number: '02', title: 'Kleine Reparaturen', text: 'Glühbirne, Wasserhahn, Tür – wir erledigen die kleinen Dinge, die sich anhäufen.' },
          { number: '03', title: 'Handwerker-Koordination', text: 'Wir beauftragen, begleiten und kontrollieren Fachbetriebe für Sie.' },
          { number: '04', title: 'Behördengänge', text: 'Anträge, Formulare, Ämter – wir begleiten oder übernehmen für Sie.' },
        ]
      },
      {
        slug: 'reinigungen-besorgungen',
        name: 'Reinigungen & Besorgungen',
        description: 'Wir übernehmen den wöchentlichen Einkauf, Apothekenbesuche und sorgen für ein sauberes, gepflegtes Zuhause, in dem Sie sich wohlfühlen.',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
        layoutType: 'emotional',
        callout: 'Ein gepflegtes Zuhause ist mehr als Sauberkeit – es ist Lebensqualität.',
        extraImages: [
          'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Wöchentlicher Einkauf', text: 'Einkaufsliste aufnehmen, einkaufen, liefern und einräumen – alles aus einer Hand.' },
          { title: 'Apothekenbesuche', text: 'Rezepte einlösen, Medikamente holen – zuverlässig und pünktlich.' },
          { title: 'Haushaltsreinigung', text: 'Regelmäßige Grundreinigung oder punktuelle Hilfe – nach Ihrem Bedarf.' },
          { title: 'Wäsche & Bügelservice', text: 'Waschen, trocknen, bügeln und verräumen – wir kümmern uns.' },
        ]
      }
    ]
  },
  {
    id: 'familie',
    slug: 'familie',
    name: 'Familie',
    description: 'In schwierigen Zeiten oder bei komplexen familiären Angelegenheiten stehen wir Ihnen diskret und professionell zur Seite.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    applicationAreas: [
      'Nachlassverwaltung',
      'Trauerbegleitung',
      'Organisation von Familienzusammenkünften',
      'Unterstützung bei Behördengängen',
      'Betreuung von Verwandten auf Distanz'
    ],
    subcategories: [
      {
        slug: 'erbschaftsabwicklung',
        name: 'Erbschaftsabwicklung & Übernahme von Erbe',
        description: 'Wir unterstützen Sie bei der Sichtung, Sortierung und Abwicklung von Nachlässen. Diskret, strukturiert und mit dem nötigen Feingefühl.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Ein Nachlass ist mehr als Papier – wir behandeln ihn mit der nötigen Würde.',
        extraImages: [
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Sichtung & Inventar', text: 'Systematische Erfassung aller Gegenstände, Dokumente und Wertgegenstände.' },
          { number: '02', title: 'Behördliche Formalitäten', text: 'Ummeldungen, Kündigungen, Behördengänge – wir übernehmen den Papierkram.' },
          { number: '03', title: 'Wohnungsauflösung', text: 'Professionelle, diskrete Räumung und Übergabe der Immobilie.' },
          { number: '04', title: 'Übergabe & Dokumentation', text: 'Lückenlose Nachverfolgung und Übergabe an Erben oder Behörden.' },
        ]
      },
      {
        slug: 'trauerfall-beerdigung',
        name: 'Begleitung im Trauerfall & Beerdigungsorganisation',
        description: 'In den schwersten Momenten nehmen wir Ihnen organisatorische Lasten ab, koordinieren Termine und begleiten Sie professionell durch diese schwere Zeit.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
        layoutType: 'sensitive',
        callout: 'In den schwersten Momenten des Lebens müssen Sie nicht alleine stark sein.',
        extraImages: [
          'https://images.unsplash.com/photo-UrAKbpKnak8?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-4KFp5QJIGyA?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Einfühlsame Begleitung', text: 'Wir sind an Ihrer Seite – menschlich, diskret und professionell.' },
          { title: 'Komplette Koordination', text: 'Alle Behördengänge, Bestattungsunternehmen, Termine und Formalitäten.' },
          { title: 'Trauerfeier-Organisation', text: 'Redner, Blumen, Catering, Räumlichkeiten – wir organisieren die würdevolle Verabschiedung.' },
          { title: 'Entlastung der Familie', text: 'Damit Sie sich auf das Wesentliche konzentrieren können: Abschied nehmen und trauern.' },
        ]
      },
      {
        slug: 'besuche-ferne-verwandte',
        name: 'Besuche bei fernen Verwandten',
        description: 'Wenn Sie selbst nicht vor Ort sein können, übernehmen wir regelmäßige Besuche bei Ihren Liebsten und halten Sie stets auf dem Laufenden.',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
        layoutType: 'emotional',
        callout: 'Distanz muss keine Entfremdung bedeuten.',
        extraImages: [
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1543165796-5426273eaab3?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Regelmäßige Besuche', text: 'Wir besuchen Ihre Angehörigen nach einem festen Rhythmus – verlässlich und persönlich.' },
          { title: 'Aktueller Bericht', text: 'Nach jedem Besuch erhalten Sie eine ehrliche Rückmeldung über Wohlbefinden und Alltag.' },
          { title: 'Kleine Besorgungen', text: 'Blumen, Einkäufe, Lieblingsgebäck – wir bringen mit, was Freude macht.' },
          { title: 'Notfallkontakt', text: 'Im Ernstfall sind wir sofort erreichbar und koordinieren das Nötige.' },
        ]
      }
    ]
  },
  {
    id: 'begleitservice',
    slug: 'begleitservice',
    name: 'Begleitservice',
    description: 'Bleiben Sie mobil und aktiv. Wir begleiten Sie sicher an Ihr Ziel und sorgen für angenehme Gesellschaft.',
    image: 'https://images.unsplash.com/photo-1581326002021-ba3f4abd127e?auto=format&fit=crop&w=800&q=80',
    applicationAreas: [
      'Tagesausflüge und Freizeitaktivitäten',
      'Urlaubsreisen (In- und Ausland)',
      'Arzt- und Behördenbesuche',
      'Einkaufsbegleitung',
      'Kulturelle Veranstaltungen'
    ],
    subcategories: [
      {
        slug: 'ausfluege',
        name: 'Ausflüge & Tagesausflüge',
        description: 'Genießen Sie unbeschwerte Ausflüge in die Natur oder in die Stadt. Wir organisieren die Route, den Transport und begleiten Sie den gesamten Tag.',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        layoutType: 'active',
        callout: 'Das Leben wartet draußen – wir bringen Sie hin.',
        extraImages: [
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Planung & Route', text: 'Wir planen den Ausflug nach Ihren Wünschen – Ziel, Tempo und Pausen inklusive.' },
          { title: 'Transport', text: 'Abholung und Rückbringung von Tür zu Tür – bequem und zuverlässig.' },
          { title: 'Persönliche Begleitung', text: 'Wir sind den ganzen Tag dabei – als Unterstützung und angenehme Gesellschaft.' },
          { title: 'Gastronomie & Tickets', text: 'Tischreservierungen, Eintrittskarten, alle Buchungen übernehmen wir.' },
        ]
      },
      {
        slug: 'urlaubsbegleitung',
        name: 'Urlaubsbegleitung',
        description: 'Verreisen Sie sicher und entspannt. Unsere professionelle Begleitung unterstützt Sie bei der Reiseplanung, vor Ort und bei allen Aktivitäten.',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        layoutType: 'active',
        callout: 'Verreisen ohne Sorgen – wir sind an Ihrer Seite, von der Planung bis zur Heimkehr.',
        extraImages: [
          'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Reiseplanung', text: 'Hotel, Transport, Aktivitäten – wir kümmern uns um alle Buchungen im Voraus.' },
          { title: 'Begleitung vor Ort', text: 'Wir sind durchgehend dabei und unterstützen bei allem, was gebraucht wird.' },
          { title: 'Medizinische Vorsorge', text: 'Medikamentenmanagement, Arzttermine vor Ort – wir behalten den Überblick.' },
          { title: 'Notfallmanagement', text: 'Im Notfall agieren wir ruhig und schnell – auf Deutsch und in der Landessprache.' },
        ]
      },
      {
        slug: 'fahrservice',
        name: 'Fahrservice',
        description: 'Zuverlässiger und komfortabler Transport zu Ärzten, Therapien oder privaten Verabredungen – inklusive persönlicher Begleitung bis zur Tür.',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142351b5?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Pünktlich, sicher, persönlich – nicht nur ein Fahrdienst.',
        extraImages: [
          'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Abholung von zu Hause', text: 'Wir kommen pünktlich zu Ihnen – von der Haustür bis zum Zielort.' },
          { number: '02', title: 'Begleitung zum Termin', text: 'Wir warten, begleiten ins Gebäude und stehen bei Bedarf mit Rat und Tat zur Seite.' },
          { number: '03', title: 'Sicherer Rücktransport', text: 'Nach dem Termin bringen wir Sie sicher und entspannt nach Hause.' },
          { number: '04', title: 'Flexibel buchbar', text: 'Einmalig oder als Dauerlösung – wir richten uns nach Ihrem Rhythmus.' },
        ]
      }
    ]
  },
  {
    id: 'baudienstleistungen',
    slug: 'baudienstleistungen',
    name: 'Baudienstleistungen',
    description: 'Von der ersten Idee bis zur schlüsselfertigen Übergabe. Wir koordinieren alle Gewerke für Ihr Bauprojekt.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    applicationAreas: [
      'Wohnungssanierungen',
      'Gewerbliche Räumlichkeiten',
      'Umzüge und Haushaltsauflösungen',
      'Renovierung vor Vermietung/Verkauf',
      'Modernisierung von Altbauten'
    ],
    subcategories: [
      {
        slug: 'entkernung-wohnungsbereitschaft',
        name: 'Von Entkernung bis Wohn-/Mietbereitschaft',
        description: 'Wir übernehmen den kompletten Prozess: Vom fachgerechten Rückbau und der Entkernung bis hin zur schlüsselfertigen Übergabe der renovierten Räume.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Ein Auftrag. Ein Ansprechpartner. Alles aus einer Hand.',
        extraImages: [
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Bestandsaufnahme', text: 'Wir analysieren den Ist-Zustand und erstellen einen realistischen Zeit- und Kostenplan.' },
          { number: '02', title: 'Entkernung & Abriss', text: 'Fachgerechter Rückbau, Entsorgung und Vorbereitung der Räume.' },
          { number: '03', title: 'Gewerke-Koordination', text: 'Elektriker, Sanitär, Trockenbau – wir koordinieren alle Fachbetriebe.' },
          { number: '04', title: 'Schlüsselfertige Übergabe', text: 'Endreinigung, Abnahme und Übergabe – einzugsbereit und dokumentiert.' },
        ]
      },
      {
        slug: 'sanierungen',
        name: 'Sanierungen',
        description: 'Professionelle Sanierungsarbeiten für Bäder, Küchen oder ganze Immobilien. Wir koordinieren alle beteiligten Gewerke für einen reibungslosen Ablauf.',
        image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Aus alt mach neu – mit Qualität, die bleibt.',
        extraImages: [
          'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Bad- & Küchensanierung', text: 'Vollständige Erneuerung inklusive Fliesen, Installationen und Einbauten.' },
          { number: '02', title: 'Leitungen & Technik', text: 'Elektrik, Wasserinstallation und Heizung auf aktuellem Standard.' },
          { number: '03', title: 'Trockenlegung & Schimmel', text: 'Fachgerechte Behandlung von Feuchtigkeitsschäden und Schimmelbefall.' },
          { number: '04', title: 'Qualitätskontrolle', text: 'Wir kontrollieren jeden Arbeitsschritt und nehmen erst ab, wenn alles stimmt.' },
        ]
      },
      {
        slug: 'bodenbelaege-streichen',
        name: 'Bodenbeläge & Streichen',
        description: 'Verlegung von hochwertigen Bodenbelägen (Parkett, Laminat, Vinyl) sowie professionelle Maler- und Tapezierarbeiten für ein neues Raumgefühl.',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Neue Böden, frische Farben – Ihr Zuhause in neuem Glanz.',
        extraImages: [
          'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Parkett & Laminat', text: 'Verlegung von Massivparkett, Laminat und Vinyl – sauber und termingerecht.' },
          { number: '02', title: 'Fliesen', text: 'Bad, Küche, Flur – präzise Fliesenarbeiten in jedem Format.' },
          { number: '03', title: 'Malerarbeiten', text: 'Wände, Decken, Türen – professionell gestrichen oder tapeziert.' },
          { number: '04', title: 'Untergrundvorbereitung', text: 'Schleifen, Spachteln, Grundieren – die Basis für ein dauerhaftes Ergebnis.' },
        ]
      },
      {
        slug: 'treppen-tueren-moebel',
        name: 'Treppen, Türen & Möbel-Projekte',
        description: 'Aufarbeitung von Holztreppen, Einbau neuer Innentüren und maßgeschneiderte Möbelmontage durch erfahrene Handwerker.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Details machen den Unterschied – in Handwerk und Qualität.',
        extraImages: [
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Treppenaufarbeitung', text: 'Schleifen, Lackieren, neue Stufen – Holztreppen wie neu in wenigen Tagen.' },
          { number: '02', title: 'Innentüren & Zargen', text: 'Einbau neuer Türen inklusive Zargen und Beschläge.' },
          { number: '03', title: 'Möbelmontage', text: 'IKEA, Maßmöbel oder Küchenmontage – präzise und schnell.' },
          { number: '04', title: 'Schränke & Einbauten', text: 'Individuelle Einbaulösungen für mehr Stauraum und Ordnung.' },
        ]
      },
      {
        slug: 'umzuege-entruempelung',
        name: 'Umzüge & Entrümpelung',
        description: 'Schnell, sauber und stressfrei. Wir übernehmen die schwere Arbeit bei Wohnungswechsel, Haushaltsauflösung oder Eilräumung.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        layoutType: 'practical',
        callout: 'Ihr Umzug ohne Stress – wir tragen die Last.',
        extraImages: [
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { number: '01', title: 'Umzugsplanung', text: 'Zeitplan, Materialien, Fahrzeuge – wir organisieren alles im Voraus.' },
          { number: '02', title: 'Ein- & Auspacken', text: 'Auf Wunsch packen wir ein, transportieren und räumen am Zielort ein.' },
          { number: '03', title: 'Haushaltsauflösung', text: 'Komplette Räumung mit Entsorgung, Weitergabe und Reinigung.' },
          { number: '04', title: 'Eilräumung', text: 'Schnelle Lösung bei Todesfall, Kündigung oder dringendem Bedarf.' },
        ]
      },
      {
        slug: 'alters-barrierefreies-wohnen',
        name: 'Alters- & barrierefreies Wohnen',
        description: 'Wir passen Ihren Wohnraum an Ihre Bedürfnisse an – für mehr Sicherheit und Komfort. Barrierefreie Bäder, Rampen, Handläufe, Treppenlifte und rollstuhlgerechte Anpassungen aus einer Hand.',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
        layoutType: 'emotional',
        callout: 'Ihr Zuhause soll sicher bleiben – ein Leben lang.',
        extraImages: [
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Barrierefreies Bad', text: 'Bodengleiche Dusche, Haltegriffe, erhöhte WC-Sitze – sicher und komfortabel.' },
          { title: 'Rampen & Handläufe', text: 'Innen und außen – für sicheres Gehen und Fahren mit dem Rollstuhl.' },
          { title: 'Treppenlifte', text: 'Installation und Wartung von Treppenliften für innen und außen.' },
          { title: 'Fördermittel-Beratung', text: 'Wir informieren über Zuschüsse von Pflegekassen und KfW.' },
        ]
      }
    ]
  },
  {
    id: 'event',
    slug: 'event',
    name: 'Event',
    description: 'Machen Sie Ihre Veranstaltung zu einem vollen Erfolg. Wir kümmern uns um die Details im Hintergrund.',
    image: 'https://images.unsplash.com/photo-1677981316539-d2464643b1c8?auto=format&fit=crop&w=800&q=80',
    applicationAreas: [
      'Firmenfeiern und Jubiläen',
      'Private Feste (Hochzeiten, Geburtstage)',
      'Messen und Ausstellungen',
      'Konzert- und Kulturveranstaltungen',
      'Catering-Unterstützung'
    ],
    subcategories: [
      {
        slug: 'auf-abbau',
        name: 'Auf- & Abbau',
        description: 'Zuverlässiger Auf- und Abbau von Event-Infrastruktur, Bühnen, Bestuhlung und Dekoration. Wir sorgen dafür, dass alles rechtzeitig bereitsteht.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
        layoutType: 'active',
        callout: 'Wenn der Vorhang aufgeht, ist alles bereit.',
        extraImages: [
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Pünktlicher Aufbau', text: 'Zuverlässige Lieferung und Montage – Ihr Event startet ohne Stress.' },
          { title: 'Bühne & Technik', text: 'Bühnenelemente, Beschallung, Licht – aufgebaut nach Plan und Zeitplan.' },
          { title: 'Bestuhlung & Dekoration', text: 'Von der Stuhlreihe bis zur Tischdekoration – wir richten ein.' },
          { title: 'Schneller Abbau', text: 'Diskreter, schneller Abbau nach der Veranstaltung – der Ort bleibt makellos.' },
        ]
      },
      {
        slug: 'bedienung-thekenpersonal',
        name: 'Bedienung & Thekenpersonal',
        description: 'Erfahrenes, freundliches Servicepersonal für den reibungslosen Ablauf Ihrer Veranstaltung – vom Empfang bis zum Barbetrieb.',
        image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=800&q=80',
        layoutType: 'active',
        callout: 'Gute Stimmung fängt beim Service an.',
        extraImages: [
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Empfang & Einlass', text: 'Freundliche Begrüßung, Garderobe und Check-in – der erste Eindruck zählt.' },
          { title: 'Tischservice', text: 'Erfahrenes Personal für Menüs, Getränke und alle Gästewünsche am Tisch.' },
          { title: 'Bar & Cocktails', text: 'Professionelles Thekenpersonal für Cocktails, Wein und Softdrinks.' },
          { title: 'Flexibler Einsatz', text: 'Kleine Feier oder Großveranstaltung – wir stellen das passende Team zusammen.' },
        ]
      },
      {
        slug: 'planung',
        name: 'Planung',
        description: 'Unterstützung bei der Konzeption und Logistik Ihres Events. Wir bringen Struktur in Ihre Ideen und koordinieren die Umsetzung.',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
        layoutType: 'active',
        callout: 'Ihre Idee. Unser Plan. Ihr Erfolg.',
        extraImages: [
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        ],
        highlights: [
          { title: 'Konzept & Briefing', text: 'Wir erfassen Ihre Wünsche, das Budget und die Rahmenbedingungen – dann entwickeln wir ein Konzept.' },
          { title: 'Location & Lieferanten', text: 'Wir empfehlen und koordinieren Räumlichkeiten, Catering und Technik.' },
          { title: 'Zeitplan & Ablauf', text: 'Minuten-genaue Ablaufplanung damit der Event reibungslos läuft.' },
          { title: 'Vor-Ort-Koordination', text: 'Am Tag selbst behalten wir den Überblick – Sie genießen Ihr Event.' },
        ]
      }
    ]
  },
];
