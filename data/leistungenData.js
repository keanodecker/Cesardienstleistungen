
export const leistungenData = [
  {
    id: 'fuersorge',
    slug: 'fuersorge',
    name: 'Fürsorge für Jung & Alt',
    description: 'Wir unterstützen Sie im Alltag, damit Sie oder Ihre Angehörigen ein sorgenfreies Leben führen können. Vertrauen und Zuverlässigkeit stehen bei uns an erster Stelle.',
    image: 'https://images.unsplash.com/photo-1666885181337-d960518575e7?auto=format&fit=crop&w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'erledigungen',
        name: 'Erledigen von Außen- & Innen-Anfälligkeiten',
        description: 'Von der Organisation des Haushalts bis hin zu kleinen Reparaturen oder der Koordination von Handwerkern – wir kümmern uns um die alltäglichen Herausforderungen.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'reinigungen-besorgungen',
        name: 'Reinigungen & Besorgungen',
        description: 'Wir übernehmen den wöchentlichen Einkauf, Apothekenbesuche und sorgen für ein sauberes, gepflegtes Zuhause, in dem Sie sich wohlfühlen.',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'familie',
    slug: 'familie',
    name: 'Familie',
    description: 'In schwierigen Zeiten oder bei komplexen familiären Angelegenheiten stehen wir Ihnen diskret und professionell zur Seite.',
    image: 'https://images.unsplash.com/photo-1698795635774-b077032941f0?auto=format&fit=crop&w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'trauerfall-beerdigung',
        name: 'Begleitung im Trauerfall & Beerdigungsorganisation',
        description: 'In den schwersten Momenten nehmen wir Ihnen organisatorische Lasten ab, koordinieren Termine und begleiten Sie professionell.',
        image: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'besuche-ferne-verwandte',
        name: 'Besuche bei fernen Verwandten',
        description: 'Wenn Sie selbst nicht vor Ort sein können, übernehmen wir regelmäßige Besuche bei Ihren Liebsten und halten Sie stets auf dem Laufenden.',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'urlaubsbegleitung',
        name: 'Urlaubsbegleitung',
        description: 'Verreisen Sie sicher und entspannt. Unsere professionelle Begleitung unterstützt Sie bei der Reiseplanung, vor Ort und bei allen Aktivitäten.',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'fahrservice',
        name: 'Fahrservice',
        description: 'Zuverlässiger und komfortabler Transport zu Ärzten, Therapien oder privaten Verabredungen – inklusive persönlicher Begleitung bis zur Tür.',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'baudienstleistungen',
    slug: 'baudienstleistungen',
    name: 'Baudienstleistungen',
    description: 'Von der ersten Idee bis zur schlüsselfertigen Übergabe. Wir koordinieren alle Gewerke für Ihr Bauprojekt.',
    image: 'https://images.unsplash.com/photo-1702948545240-b44e3c1b86f4?auto=format&fit=crop&w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'sanierungen',
        name: 'Sanierungen',
        description: 'Professionelle Sanierungsarbeiten für Bäder, Küchen oder ganze Immobilien. Wir koordinieren alle beteiligten Gewerke für einen reibungslosen Ablauf.',
        image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'bodenbelaege-streichen',
        name: 'Bodenbeläge & Streichen',
        description: 'Verlegung von hochwertigen Bodenbelägen (Parkett, Laminat, Vinyl) sowie professionelle Maler- und Tapezierarbeiten für ein neues Raumgefühl.',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'treppen-tueren-moebel',
        name: 'Treppen, Türen & Möbel-Projekte',
        description: 'Aufarbeitung von Holztreppen, Einbau neuer Innentüren und maßgeschneiderte Möbelmontage durch erfahrene Handwerker.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'umzuege-entruempelung',
        name: 'Umzüge & Entrümpelung',
        description: 'Schnell, sauber und stressfrei. Wir übernehmen die schwere Arbeit bei Wohnungswechsel, Haushaltsauflösung oder Eilräumung.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'alters-barrierefreies-wohnen',
        name: 'Alters- & barrierefreies Wohnen',
        description: 'Wir passen Ihren Wohnraum an Ihre Bedürfnisse an – für mehr Sicherheit und Komfort. Barrierefreie Bäder, Rampen, Handläufe, Treppenlifte und rollstuhlgerechte Anpassungen aus einer Hand.',
        image: '/barrierefreies-wohnen.webp'
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
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'bedienung-thekenpersonal',
        name: 'Bedienung & Thekenpersonal',
        description: 'Erfahrenes, freundliches Servicepersonal für den reibungslosen Ablauf Ihrer Veranstaltung – vom Empfang bis zum Barbetrieb.',
        image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=800&q=80'
      },
      {
        slug: 'planung',
        name: 'Planung',
        description: 'Unterstützung bei der Konzeption und Logistik Ihres Events. Wir bringen Struktur in Ihre Ideen und koordinieren die Umsetzung.',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
];
