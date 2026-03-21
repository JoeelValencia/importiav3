// ============================================================
//  IMPORTIA GLOBAL — app.js
// ============================================================

const CAT_LABELS = {
  all: 'Todos los Productos',
  iphone: 'iPhone',
  samsung: 'Samsung',
  airpods: 'AirPods',
  cables: 'Cables',
  cargadores: 'Cargadores',
  ipad: 'iPad',
  watch: 'Apple Watch',
};

const products = [

  // ══════════════ iPHONE ══════════════
  {
    id: 1, name: 'iPhone 17 Pro Max', storage: '256GB', price: 2059200,
    category: 'iphone', badge: 'Nuevo',
    desc: 'El iPhone más avanzado de la historia. Chip A19 Pro de 3 nm, sistema de cámaras Pro rediseñado con sensor principal de 48 MP, pantalla Super Retina XDR ProMotion 120 Hz y estructura de titanio de grado aeroespacial.',
    img: 'https://www.importcaballito.com.ar/products/iphone-17-pro-max-256.png',
    imgs: ['https://www.importcaballito.com.ar/products/iphone-17-pro-max-256.png'],
    specs: [
      {
        section: 'Diseño', items: [
          { label: 'Material', value: 'Titanio Grado 5 + Vidrio Ceramic Shield' },
          { label: 'Dimensiones', value: '163.0 × 77.6 × 8.25 mm' },
          { label: 'Peso', value: '227 g' },
          { label: 'Colores', value: 'Natural, Negro Sideral, Blanco, Desierto' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'Super Retina XDR OLED ProMotion' },
          { label: 'Tamaño', value: '6.9"' },
          { label: 'Resolución', value: '2868 × 1320 px — 460 ppi' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptativo (LTPO)' },
          { label: 'Brillo', value: 'Hasta 2000 nits (pico exterior)' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Apple A19 Pro (3 nm)' },
          { label: 'CPU', value: '6 núcleos (2 P + 4 E)' },
          { label: 'GPU', value: '6 núcleos' },
          { label: 'Neural Engine', value: '16 núcleos' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '256 GB NVMe' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Principal', value: '48 MP, f/1.78, OIS, apertura variable' },
          { label: 'Ultra Angular', value: '12 MP, f/2.2, 120°' },
          { label: 'Teleobjetivo', value: '12 MP, f/2.8, zoom óptico 5×' },
          { label: 'Frontal', value: '12 MP TrueDepth, f/1.9' },
          { label: 'Video', value: 'ProRes 4K@120fps, Log HDR' },
        ]
      },
      {
        section: 'Conectividad', items: [
          { label: 'Redes', value: '5G Sub-6GHz / mmWave + Wi-Fi 7 + BT 5.3' },
          { label: 'Puerto', value: 'USB-C (USB 3 — hasta 20 Gbps)' },
          { label: 'NFC', value: 'Sí — Apple Pay, UWB Chip U2' },
          { label: 'Satélite', value: 'Emergencias vía satélite' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Capacidad', value: '4685 mAh Li-Ion' },
          { label: 'Carga rápida', value: '27W (0→50% en 30 min)' },
          { label: 'Carga inalámbrica', value: 'MagSafe 25W / Qi 7.5W' },
          { label: 'Autonomía', value: 'Hasta 33 hs reproducción video' },
        ]
      },
    ],
  },
  {
    id: 2, name: 'iPhone 17 Pro Max', storage: '512GB', price: 2433600,
    category: 'iphone', badge: 'Nuevo',
    desc: 'Versión 512 GB ideal para creadores de contenido. Graba video ProRes 4K@120fps directamente al almacenamiento interno sin limitaciones.',
    img: 'https://www.importcaballito.com.ar/products/iphone-17-pro-max-512.png',
    imgs: ['https://www.importcaballito.com.ar/products/iphone-17-pro-max-512.png'],
    specs: [
      {
        section: 'Diseño', items: [
          { label: 'Material', value: 'Titanio Grado 5 + Vidrio Ceramic Shield' },
          { label: 'Dimensiones', value: '163.0 × 77.6 × 8.25 mm' },
          { label: 'Peso', value: '227 g' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Apple A19 Pro (3 nm)' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '512 GB NVMe' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'Super Retina XDR OLED ProMotion' },
          { label: 'Tamaño', value: '6.9" — 460 ppi' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptativo' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Principal', value: '48 MP, zoom óptico 5×' },
          { label: 'Video', value: 'ProRes 4K@120fps — sin límite de almacenamiento' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Autonomía', value: 'Hasta 33 hs reproducción video' },
          { label: 'Carga rápida', value: '27W — 0→50% en 30 min' },
        ]
      },
    ],
  },
  {
    id: 3, name: 'iPhone 17 Pro Max', storage: '1TB', price: 2808000,
    category: 'iphone', badge: 'Nuevo',
    desc: '1 TB de almacenamiento interno — el máximo disponible. Para profesionales que necesitan grabar horas de video ProRes sin compromisos.',
    img: 'https://www.importcaballito.com.ar/products/iphone-17-pro-max-1tb.png',
    imgs: ['https://www.importcaballito.com.ar/products/iphone-17-pro-max-1tb.png'],
    specs: [
      {
        section: 'Diseño', items: [
          { label: 'Material', value: 'Titanio Grado 5 + Vidrio Ceramic Shield' },
          { label: 'Peso', value: '227 g' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Apple A19 Pro (3 nm)' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '1 TB NVMe — máximo disponible' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'Super Retina XDR OLED ProMotion 6.9"' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptativo' },
        ]
      },
      {
        section: 'Video Pro', items: [
          { label: 'Formato', value: 'Apple ProRes + Log HDR + Dolby Vision' },
          { label: 'Resolución máx.', value: '4K@120fps — sin límites de espacio' },
          { label: 'Edición', value: 'Final Cut Camera nativa' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Autonomía', value: 'Hasta 33 hs reproducción video' },
          { label: 'Carga rápida', value: '27W MagSafe' },
        ]
      },
    ],
  },

  // ══════════════ CABLES ══════════════
  {
    id: 4, name: 'Cable iPhone Lightning', storage: 'USB a Lightning', price: 5000,
    category: 'cables', badge: 'Nuevo',
    desc: 'Cable original Apple USB-A a Lightning de 1 metro. Compatible con todos los modelos de iPhone del 5 hasta el 14, iPad, iPod y accesorios Lightning. Ideal para carga y sincronización de datos.',
    img: 'IMAGENES/CABLES/cable iphone usb a Ligtning/portada .png',
    imgs: ['IMAGENES/CABLES/cable iphone usb a Ligtning/portada .png'],
    specs: [
      {
        section: 'Especificaciones', items: [
          { label: 'Conector A', value: 'USB-A (Type-A)' },
          { label: 'Conector B', value: 'Lightning' },
          { label: 'Longitud', value: '1 metro' },
          { label: 'Potencia máx.', value: '12W' },
          { label: 'Velocidad datos', value: 'USB 2.0 — hasta 480 Mbps' },
        ]
      },
      {
        section: 'Compatibilidad', items: [
          { label: 'iPhone', value: 'iPhone 5 – iPhone 14 (todos los modelos)' },
          { label: 'iPad', value: 'iPad Air, iPad mini, iPad (gen 1–9)' },
          { label: 'iPod', value: 'iPod touch, iPod nano, iPod shuffle' },
          { label: 'Certificación', value: 'MFi Certified (Made for iPhone/iPad)' },
        ]
      },
      {
        section: 'Material', items: [
          { label: 'Cable', value: 'Trenzado interior con cubierta TPE' },
          { label: 'Conectores', value: 'Aluminio anodizado' },
          { label: 'Color', value: 'Blanco' },
        ]
      },
    ],
  },
  {
    id: 5, name: 'Cable iPhone USB-C', storage: 'Tipo C a Tipo C', price: 5000,
    category: 'cables', badge: 'Nuevo',
    desc: 'Cable USB-C a USB-C de 1m compatible con iPhone 15 en adelante, iPad Pro, MacBook y casi cualquier dispositivo moderno. Soporta carga rápida de hasta 60W y transferencia de datos USB 3.1.',
    img: 'IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/PORTADA.png',
    imgs: ['IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/PORTADA.png',
      'IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/1.png',
      'IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/2.jpg'],
    specs: [
      {
        section: 'Especificaciones', items: [
          { label: 'Conector A', value: 'USB-C (Type-C)' },
          { label: 'Conector B', value: 'USB-C (Type-C)' },
          { label: 'Longitud', value: '1 metro' },
          { label: 'Potencia máx.', value: '60W Power Delivery (PD)' },
          { label: 'Velocidad datos', value: 'USB 3.1 Gen 2 — hasta 10 Gbps' },
          { label: 'Certificación', value: 'USB-IF Certified' },
        ]
      },
      {
        section: 'Compatibilidad', items: [
          { label: 'iPhone', value: 'iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max en adelante' },
          { label: 'iPad Pro', value: 'iPad Pro M1, M2, M4 (USB-C)' },
          { label: 'MacBook', value: 'MacBook Air y Pro (todos los modelos USB-C)' },
          { label: 'Android', value: 'Samsung, Pixel, OnePlus (USB-C universal)' },
        ]
      },
      {
        section: 'Material', items: [
          { label: 'Cable', value: 'Nylon trenzado premium' },
          { label: 'Conectores', value: 'Aluminio + contactos chapados en oro 24k' },
          { label: 'Color', value: 'Blanco / Gris' },
        ]
      },
    ],
  },
  {
    id: 6, name: 'Cable iPhone Pro', storage: 'Tipo C a Lightning', price: 5000,
    category: 'cables', badge: 'Nuevo',
    desc: 'Cable USB-C a Lightning de 1m con soporte para carga rápida compatible con adaptadores Apple de 20W, 30W, 61W o superior. El cable estándar incluido con iPhone 13 y 14.',
    img: 'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/1.0 PORTADA.png',
    imgs: ['IMAGENES/CABLES/Cable iphone Tipo C a ligthning/1.0 PORTADA.png',
      'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/3.2.png',
      'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/5.3.png'],
    specs: [
      {
        section: 'Especificaciones', items: [
          { label: 'Conector A', value: 'USB-C (Type-C)' },
          { label: 'Conector B', value: 'Lightning' },
          { label: 'Longitud', value: '1 metro' },
          { label: 'Potencia máx.', value: '20W (carga rápida iPhone)' },
          { label: 'Velocidad datos', value: 'USB 2.0 — hasta 480 Mbps' },
        ]
      },
      {
        section: 'Compatibilidad', items: [
          { label: 'iPhone', value: 'iPhone 8 – iPhone 14 Pro Max' },
          { label: 'iPad', value: 'iPad con conector Lightning' },
          { label: 'AirPods', value: 'AirPods Pro (1ª gen.), AirPods (2ª y 3ª gen.)' },
          { label: 'Certificación', value: 'MFi Certified Apple' },
        ]
      },
      {
        section: 'Material', items: [
          { label: 'Cable', value: 'malla de nylon trenzada' },
          { label: 'Conectores', value: 'Aluminio anodizado de alta resistencia' },
          { label: 'Color', value: 'Blanco' },
        ]
      },
    ],
  },

  // ══════════════ SAMSUNG ══════════════
  {
    id: 7, name: 'Samsung Galaxy S24', storage: '128GB', price: 980000,
    category: 'samsung', badge: 'Nuevo',
    desc: 'El Galaxy S24 redefine el smartphone inteligente. Con Galaxy AI integrada, el Snapdragon 8 Gen 3 y la cámara más versátil de la línea S, este equipo es el compañero perfecto para el día a día exigente.',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/us/2401/gallery/us-galaxy-s24-s928-sm-s928bzwbxaa-thumb-539559124',
    imgs: ['https://images.samsung.com/is/image/samsung/p6pim/us/2401/gallery/us-galaxy-s24-s928-sm-s928bzwbxaa-thumb-539559124'],
    specs: [
      {
        section: 'Diseño', items: [
          { label: 'Material', value: 'Armor Aluminum + Corning Gorilla Glass Victus 2' },
          { label: 'Dimensiones', value: '147.0 × 70.6 × 7.6 mm' },
          { label: 'Peso', value: '167 g' },
          { label: 'Resistencia', value: 'IP68 — agua hasta 1.5m / 30 min' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'Dynamic AMOLED 2X' },
          { label: 'Tamaño', value: '6.2"' },
          { label: 'Resolución', value: '2340 × 1080 px — 416 ppi' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptativo' },
          { label: 'Brillo', value: 'Hasta 2600 nits (pico)' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Snapdragon 8 Gen 3 for Galaxy (3 nm)' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '128 GB UFS 4.0' },
          { label: 'Galaxy AI', value: 'Circle to Search, Interpreter, Chat Assist' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Principal', value: '50 MP, f/1.8, OIS, PDAF' },
          { label: 'Ultra Angular', value: '12 MP, f/2.2, 120°' },
          { label: 'Teleobjetivo', value: '10 MP, f/2.4, zoom óptico 3×' },
          { label: 'Frontal', value: '12 MP, f/2.2, autofoco' },
          { label: 'Video', value: '8K@30fps, 4K@60fps' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Capacidad', value: '4000 mAh' },
          { label: 'Carga rápida', value: '25W (0→50% en 30 min)' },
          { label: 'Carga inalámbrica', value: 'Qi 15W / PowerShare 4.5W' },
        ]
      },
    ],
  },
  {
    id: 8, name: 'Samsung Z Flip 7', storage: '256GB', price: 1432800,
    category: 'samsung', badge: 'Nuevo',
    desc: 'El Z Flip 7 es el smartphone plegable más elegante del mercado. Se pliega para caber en cualquier bolsillo y se abre para revelar una pantalla AMOLED de 6.7". Cover Screen de 4.1" para notificaciones y selfies sin abrir el teléfono.',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554628/us-galaxy-zflip7-f766-547880088',
    imgs: ['https://images.samsung.com/is/image/samsung/p6pim/us/feature/554628/us-galaxy-zflip7-f766-547880088'],
    specs: [
      {
        section: 'Diseño Plegable', items: [
          { label: 'Bisagra', value: 'FlexHinge de última generación (250k pliegues)' },
          { label: 'Abierto', value: '165.1 × 71.9 × 6.9 mm' },
          { label: 'Cerrado', value: '85.1 × 71.9 × 14.2 mm' },
          { label: 'Peso', value: '187 g' },
          { label: 'Resistencia', value: 'IPX8 — agua hasta 1.5m / 30 min' },
        ]
      },
      {
        section: 'Pantallas', items: [
          { label: 'Principal', value: '6.7" FHD+ Dynamic AMOLED 2X, 120 Hz' },
          { label: 'Cover Screen', value: '4.1" Super AMOLED, 60 Hz — apps nativas' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Snapdragon 8 Gen 3 for Galaxy' },
          { label: 'RAM', value: '12 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '256 GB UFS 4.0' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Principal', value: '50 MP, f/1.8, OIS — Modo FlexCam' },
          { label: 'Ultra Angular', value: '12 MP, f/2.2' },
          { label: 'Frontal', value: '10 MP, f/2.2' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Capacidad', value: '4000 mAh' },
          { label: 'Carga rápida', value: '25W cableada / 15W inalámbrica' },
        ]
      },
    ],
  },
  {
    id: 9, name: 'Samsung Z Fold 7', storage: '256GB', price: 2440800,
    category: 'samsung', badge: 'Nuevo',
    desc: 'El Galaxy Z Fold 7 es el smartphone-tablet definitivo. Con una pantalla interna de 7.6" y el rendimiento del Snapdragon 8 Gen 3, ofrece una experiencia multitarea sin igual. Compatible con S Pen para máxima productividad.',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554117/us-galaxy-z-fold7-f966-547879983',
    imgs: ['https://images.samsung.com/is/image/samsung/p6pim/us/feature/554117/us-galaxy-z-fold7-f966-547879983'],
    specs: [
      {
        section: 'Diseño Plegable', items: [
          { label: 'Abierto', value: '154.9 × 129.9 × 5.6 mm (el más delgado)' },
          { label: 'Cerrado', value: '154.9 × 67.1 × 12.1 mm' },
          { label: 'Peso', value: '239 g' },
          { label: 'Resistencia', value: 'IPX8' },
        ]
      },
      {
        section: 'Pantallas', items: [
          { label: 'Principal (interna)', value: '7.6" QXGA+ Dynamic AMOLED 2X, 120 Hz' },
          { label: 'Cover Screen', value: '6.3" FHD+ Dynamic AMOLED 2X, 120 Hz' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Snapdragon 8 Gen 3 for Galaxy (3 nm)' },
          { label: 'RAM', value: '12 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '256 GB UFS 4.0' },
          { label: 'S Pen', value: 'Compatible (se vende por separado)' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Principal', value: '50 MP, f/1.8, OIS' },
          { label: 'Teleobjetivo', value: '10 MP, f/4.9, zoom óptico 5×' },
          { label: 'Frontal externa', value: '10 MP, f/2.2' },
          { label: 'Frontal bajo pantalla', value: '4 MP (invisible en la pantalla)' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Capacidad', value: '4400 mAh' },
          { label: 'Carga rápida', value: '25W cableada / 15W inalámbrica' },
        ]
      },
    ],
  },

  // ══════════════ iPAD ══════════════
  {
    id: 10, name: 'iPad Pro M4', storage: '256GB', price: 1368000,
    category: 'ipad', badge: 'Nuevo',
    desc: 'El iPad Pro más fino y potente de la historia. Con pantalla Ultra Retina XDR OLED de doble capa y chip M4, es indistinguible de una pantalla de estudio profesional. La herramienta definitiva para creativos y profesionales.',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-m4-finish-unselect-202405?wid=5120&hei=2880&fmt=jpeg&qlt=70',
    imgs: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-m4-finish-unselect-202405?wid=5120&hei=2880&fmt=jpeg&qlt=70'],
    specs: [
      {
        section: 'Diseño', items: [
          { label: 'Material', value: 'Aluminio 100% reciclado + vidrio nano-textured' },
          { label: 'Dimensiones', value: '281.8 × 215.9 × 5.1 mm' },
          { label: 'Peso', value: '579 g (Wi-Fi) — el iPad más fino ever' },
          { label: 'Colores', value: 'Plata / Gris Espacial' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'Ultra Retina XDR OLED (doble capa tandem)' },
          { label: 'Tamaño', value: '13"' },
          { label: 'Resolución', value: '2752 × 2064 px — 264 ppi' },
          { label: 'Brillo', value: '1000 nits (estándar) / 1600 nits (HDR)' },
          { label: 'ProMotion', value: 'Adaptativo 1–120 Hz' },
          { label: 'Color', value: 'P3 Wide Color, True Tone, antirreflejo' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Apple M4 (3 nm, 10 núcleos CPU)' },
          { label: 'CPU', value: '4 núcleos P + 6 núcleos E' },
          { label: 'GPU', value: '10 núcleos' },
          { label: 'Neural Engine', value: '16 núcleos — 38 TOPS' },
          { label: 'RAM', value: '16 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '256 GB (opciones hasta 2 TB)' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Trasera', value: '12 MP, f/1.8, zoom óptico 4ch LiDAR' },
          { label: 'Frontal', value: '12 MP TrueDepth (orientación horizontal)' },
          { label: 'Video', value: '4K@60fps con estabilización cinemática' },
        ]
      },
      {
        section: 'Conectividad', items: [
          { label: 'Puerto', value: 'Thunderbolt 4 / USB 4 — hasta 40 Gbps' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: '5.3' },
          { label: 'Apple Pencil', value: 'Pro (nueva generación, se vende por separado)' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Autonomía', value: 'Hasta 10 horas de uso' },
          { label: 'Carga', value: '45W USB-C / compatible Magic Keyboard' },
        ]
      },
    ],
  },

  // ══════════════ APPLE WATCH ══════════════
  {
    id: 11, name: 'Apple Watch Ultra 3', storage: '49mm', price: 1368000,
    category: 'watch', badge: 'Nuevo',
    desc: 'Diseñado para atletas extremos y aventureros. Carcasa de titanio de grado aeroespacial, pantalla plana de zafiro, GPS de doble frecuencia y hasta 72 horas de batería en modo Normal. El reloj más resistente y completo de Apple.',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=jpeg&qlt=70',
    imgs: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=jpeg&qlt=70'],
    specs: [
      {
        section: 'Diseño', items: [
          { label: 'Carcasa', value: 'Titanio aeroespacial Grado 5' },
          { label: 'Crystal', value: 'Zafiro plano de alta resistencia (100% flat)' },
          { label: 'Tamaño carcasa', value: '49 mm' },
          { label: 'Resistencia', value: 'IP6X polvo + ISO 22810 (agua 100m)' },
          { label: 'MIL-STD', value: '810H — temperatura, impacto, vibración' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'LTPO OLED siempre activa' },
          { label: 'Tamaño', value: '49 mm' },
          { label: 'Resolución', value: '410 × 502 px — 338 ppi' },
          { label: 'Brillo', value: 'Hasta 3000 nits' },
        ]
      },
      {
        section: 'Salud y Fitness', items: [
          { label: 'GPS', value: 'L1 + L5 dual frecuencia — Precision Finding' },
          { label: 'Frecuencia cardíaca', value: 'Continua + ECG (electrocardiograma)' },
          { label: 'Oxígeno en sangre', value: 'Sensor SpO2' },
          { label: 'Temperatura', value: 'Sensor de muñeca + superficial' },
          { label: 'Profundímetro', value: 'Sí — hasta 40m (con app Oceanic+)' },
          { label: 'Sirena de emergencia', value: '86 dB a 1 metro' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'Apple S9 SiP (64 bits, Neural Engine)' },
          { label: 'RAM', value: '1 GB' },
          { label: 'Almacenamiento', value: '64 GB' },
        ]
      },
      {
        section: 'Conectividad', items: [
          { label: 'Cellular', value: 'LTE + UMTS (con SIM o eSIM dual)' },
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4 + 5 GHz' },
          { label: 'Bluetooth', value: '5.3' },
          { label: 'Ultra Wideband', value: 'Chip U2 — Precision Finding' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'Normal', value: 'Hasta 72 horas' },
          { label: 'Ahorro energía', value: 'Hasta 60 horas (watchOS Overdrive)' },
          { label: 'Carga', value: 'MagSafe — 0→80% en 60 min' },
        ]
      },
    ],
  },

  // ══════════════ AirPods ══════════════
  {
    id: 12, name: 'AirPods Pro 2da Gen', storage: 'USB-C', price: 35000,
    category: 'airpods', badge: 'Oferta',
    desc: 'Los AirPods más avanzados. Cancelación activa de ruido hasta 2× más efectiva que la 1ª gen, Audio Adaptativo inteligente, volumen táctil con deslizamiento y chip H2 para el audio más inmersivo con audio espacial personalizado.',
    img: 'IMAGENES/AURICULARES/importia_full_res_1773547371138.png',
    imgs: ['IMAGENES/AURICULARES/importia_full_res_1773547371138.png'],
    video: 'IMAGENES/AURICULARES/PORTADA airpods pro 2.mp4',
    specs: [
      {
        section: 'Audio', items: [
          { label: 'Chip', value: 'Apple H2' },
          { label: 'Driver custom', value: '11 mm de baja distorsión' },
          { label: 'Amplificador', value: 'Custom de alta dinámica + procesador AAC' },
          { label: 'Audio espacial', value: 'Personalizado con seguimiento de cabeza' },
          { label: 'Modos de escucha', value: 'ANC activo / Transparencia / Auto-adaptativo' },
        ]
      },
      {
        section: 'Cancelación de Ruido', items: [
          { label: 'ANC', value: 'Hasta 2× más que AirPods Pro 1ª gen' },
          { label: 'Micrófonos', value: '2 micrófonos adaptables por AirPod' },
          { label: 'Transparencia', value: 'Conversational Awareness — baja el volumen automáticamente al hablar' },
        ]
      },
      {
        section: 'Controles', items: [
          { label: 'Táctil', value: 'Deslizamiento en el vástago para volumen' },
          { label: 'Force Sensor', value: 'Presionar para pausa / pista / ANC' },
          { label: 'Detección', value: 'Sensor de piel + acelerómetro de movimiento' },
          { label: 'Siri', value: 'Anuncios / respuestas sin levantar el iPhone' },
        ]
      },
      {
        section: 'Batería', items: [
          { label: 'AirPods (ANC on)', value: 'Hasta 6 horas' },
          { label: 'Con estuche', value: 'Hasta 30 horas totales' },
          { label: 'Carga rápida', value: '5 min → 1 hora de audio' },
          { label: 'Carga estuche', value: 'USB-C + MagSafe + Qi + Apple Watch' },
        ]
      },
      {
        section: 'Conectividad', items: [
          { label: 'Bluetooth', value: '5.3 — conexión fácil entre dispositivos Apple' },
          { label: 'Resistencia', value: 'IP54 — AirPods y estuche resistentes al agua' },
          { label: 'Localización', value: 'Precisión con chip U1 (Encuentra mi)' },
        ]
      },
    ],
  },

  // ══════════════ CARGADORES ══════════════
  {
    id: 13, name: 'Batery Pack 5000 Amp', storage: 'MagSafe Compatible', price: 25000,
    category: 'cargadores', badge: 'Nuevo',
    desc: 'Batería externa magnética de 5000 mAh. Cuenta con tipo de conector USB-C, voltaje de entrada y salida de 20W. Largo del cable de 1m. Tiene 1 puerto de carga. Compatible con Apple y cuenta con protección contra sobrecarga.',
    img: 'IMAGENES/CARGADORES/Batery pack 5000 Amp/1-1/portada.png',
    imgs: [
      'IMAGENES/CARGADORES/Batery pack 5000 Amp/1-1/portada.png',
      'IMAGENES/CARGADORES/Batery pack 5000 Amp/1-1/1.png',
      'IMAGENES/CARGADORES/Batery pack 5000 Amp/1-1/2.png',
      'IMAGENES/CARGADORES/Batery pack 5000 Amp/1-1/3.png',
      'IMAGENES/CARGADORES/Batery pack 5000 Amp/1-1/Gemini_Generated_Image_t2z96xt2z96xt2z9.png'
    ],
    specs: [
      {
        section: 'Características principales', items: [
          { label: 'Marca', value: 'Apple' },
          { label: 'Modelo', value: 'A2347' },
          { label: 'Modelo alfanumérico', value: 'MVV3ZM' },
          { label: 'Tipo de conector', value: 'USB-C' },
          { label: 'Color', value: 'Blanco' },
        ]
      },
      {
        section: 'Otros', items: [
          { label: 'Tipo de cargador', value: 'De pared' },
          { label: 'Tipo de velocidad de carga', value: 'Rápida' },
          { label: 'Tipo de uso', value: 'Celular' },
          { label: 'Marcas compatibles', value: 'Apple' },
          { label: 'Modelos compatibles', value: 'iPad Air, iPad Pro, iPhone 8, iPhone, iPhone 17, iPhone 16 pro max' },
          { label: 'Voltaje de entrada', value: '110/220V' },
          { label: 'Voltaje de salida', value: '20W' },
          { label: 'Tipo de batería', value: 'Li-ion' },
          { label: 'Capacidad de la batería', value: '5000 mAh' },
          { label: 'Incluye cable', value: 'No' },
          { label: 'Cantidad de puertos de carga', value: '1' },
          { label: 'Largo del cable', value: '1 m' },
          { label: 'Protección contra sobrecarga', value: 'Sí' },
          { label: 'Es inalámbrico', value: 'No' },
        ]
      },
    ],
  },
  {
    id: 14, name: 'Cabezal 20w (pata redonda)', storage: 'Apple Power Adapter', price: 45000,
    category: 'cargadores', badge: 'Nuevo',
    desc: 'Adaptador de corriente USB-C de 20W original Apple con patas redondas (Norma IRAM). Cuenta con tipo de conector USB-C, el voltaje de entrada es de 20W y el voltaje de salida es de 20W. El largo del cable es de 1m y tiene 1 puerto de carga. Es compatible con Apple y cuenta con protección contra sobrecarga.',
    img: 'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/1- portada.png',
    imgs: [
      'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/1- portada.png',
      'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/2.png',
      'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/3.png'
    ],
    specs: [
      {
        section: 'Características principales', items: [
          { label: 'Marca', value: 'Apple' },
          { label: 'Modelo', value: 'A2347' },
          { label: 'Modelo alfanumérico', value: 'MVV3ZM' },
          { label: 'Tipo de conector', value: 'USB-C' },
          { label: 'Color', value: 'Blanco' },
        ]
      },
      {
        section: 'Otros', items: [
          { label: 'Tipo de cargador', value: 'De pared' },
          { label: 'Tipo de velocidad de carga', value: 'Rápida' },
          { label: 'Tipo de uso', value: 'Celular' },
          { label: 'Marcas compatibles', value: 'Apple' },
          { label: 'Modelos compatibles', value: 'iPad Air, iPad Pro, iPhone 8, iPhone, iPhone 17, iPhone 16 pro max' },
          { label: 'Voltaje de entrada', value: '110/220V' },
          { label: 'Voltaje de salida', value: '20W' },
          { label: 'Tipo de batería', value: 'Li-ion' },
          { label: 'Incluye cable', value: 'No' },
          { label: 'Cantidad de puertos de carga', value: '1' },
          { label: 'Largo del cable', value: '1 m' },
          { label: 'Protección contra sobrecarga', value: 'Sí' },
          { label: 'Es inalámbrico', value: 'No' },
        ]
      },
    ],
  },
  {
    id: 15, name: 'Cargador Para Iphone Magsafe', storage: 'Premium Magnetic Charger', price: 35000,
    category: 'cargadores', badge: 'Nuevo',
    desc: 'CARGA MAGNÉTICA SIN INTERRUPCIONES. Experimenta la nueva era de energía con nuestro Cargador Inalámbrico para iphone MagSafe nivel Premium. Ideal para usuarios exigentes de iPhone 12 en adelante, este sistema Magnético se adhiere firmemente al dorso de tu equipo, permitiendo una Carga Rápida continua de 20W. Al usar esta tecnología de Inducción, proteges el puerto de carga físico contra el desgaste. Compatible con fundas MagSafe, ofrece una conexión Segura y certificada estilo Qi.',
    img: 'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/1-portada.png',
    imgs: [
      'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/1-portada.png',
      'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/2.png',
      'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/3.png'
    ],
    specs: [
      {
        section: 'Ficha Técnica', items: [
          { label: 'Marca', value: 'GLSG IMPORTACIONES' },
          { label: 'Modelo', value: 'PREMIUM ORIGINAL' },
          { label: 'Conector', value: 'USB-C' },
          { label: 'Color', value: 'Blanco' },
          { label: 'Tipo de cargador', value: 'Inalámbrico' },
          { label: 'Velocidad', value: 'Super rápida' },
          { label: 'Uso', value: 'Celular' },
          { label: 'Marcas compatibles', value: 'Apple, iPhone, iPad' },
          { label: 'Voltaje entrada', value: '220V' },
          { label: 'Voltaje salida', value: '20W' },
          { label: 'Incluye cable', value: 'Sí' },
          { label: 'Eficiencia energética', value: 'A+++' },
        ]
      },
      {
        section: 'Características', items: [
          { label: 'Tecnología', value: 'Magnética MagSafe / Qi Certified' },
          { label: 'Material', value: 'Aleación de Aluminio y ABS' },
          { label: 'Largo cable', value: '1 Metro reforzado' },
          { label: 'Ideal para', value: 'Gaming y Streaming sin cables molestos' },
        ]
      }
    ],
  },
];

// ════════════════════════════
//  Helpers
// ════════════════════════════
const fmtPrice = n => '$ ' + n.toLocaleString('es-AR');

function updateCounts() {
  Object.keys(CAT_LABELS).forEach(cat => {
    const count = cat === 'all'
      ? products.length
      : products.filter(p => p.category === cat).length;
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  });
}

// ════════════════════════════
//  State
// ════════════════════════════
let currentCat = 'all';
let currentSort = 'price-asc';
let searchTerm = '';

function getProductList() {
  let list = currentCat === 'all' ? [...products] : products.filter(p => p.category === currentCat);
  if (searchTerm) {
    const s = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(s) ||
      p.storage.toLowerCase().includes(s) ||
      (p.desc || '').toLowerCase().includes(s)
    );
  }
  switch (currentSort) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
  }
  return list;
}

// ════════════════════════════
//  Render
// ════════════════════════════
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('empty-state');
  const list = getProductList();

  const countEl = document.getElementById('result-count');
  if (countEl) countEl.textContent = `${list.length} producto${list.length !== 1 ? 's' : ''}`;

  if (!list.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';

  grid.innerHTML = list.map(p => {
    const encoded = encodeURIComponent(JSON.stringify(p));
    const badgeClass = p.badge === 'Oferta' ? 'pcard__badge--sale' : 'pcard__badge--new';
    const mediaHtml = p.video
      ? `<video autoplay muted loop playsinline class="pcard__video">
                 <source src="${encodeURI(p.video)}" type="video/mp4">
               </video>`
      : `<img src="${p.img}" alt="${p.name}" class="pcard__img" loading="lazy">`;

    return `
        <article class="pcard" role="button" tabindex="0"
            onclick="openProductModal(JSON.parse(decodeURIComponent('${encoded}')))"
            onkeydown="if(event.key==='Enter')openProductModal(JSON.parse(decodeURIComponent('${encoded}')))">

            <span class="pcard__badge ${badgeClass}">${p.badge}</span>

            <div class="pcard__img-wrap">
                ${mediaHtml}
                <div class="pcard__quick"><span>Ver detalle →</span></div>
            </div>

            <div class="pcard__body">
                <p class="pcard__cat">${CAT_LABELS[p.category] || p.category}</p>
                <h3 class="pcard__name">${p.name}</h3>
                <p class="pcard__storage">${p.storage}</p>
            </div>

            <div class="pcard__footer">
                <div class="pcard__price-row">
                    <span class="pcard__plabel">Efectivo</span>
                    <span class="pcard__price">${fmtPrice(p.price)}</span>
                </div>
            </div>

            <button class="pcard__btn"
                onclick="event.stopPropagation(); openProductModal(JSON.parse(decodeURIComponent('${encoded}')))">
                Comprar Ahora
            </button>
        </article>`;
  }).join('');
}

// ════════════════════════════
//  Category / Sort / Search
// ════════════════════════════
function setCategory(cat) {
  currentCat = cat;
  document.querySelectorAll('.cat-item').forEach(el => el.classList.toggle('active', el.dataset.category === cat));
  document.querySelectorAll('.mcat').forEach(el => el.classList.toggle('active', el.dataset.category === cat));
  const label = CAT_LABELS[cat] || cat;
  const bc = document.getElementById('breadcrumb-cat');
  const pt = document.getElementById('page-title');
  if (bc) bc.textContent = label;
  if (pt) pt.textContent = label;
  renderProducts();
}

function sortProducts(type, btn) {
  currentSort = type;
  document.querySelectorAll('.sort-item').forEach(el => el.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

function handleSearch(val) {
  searchTerm = val.trim();
  currentCat = 'all';
  document.querySelectorAll('.cat-item, .mcat').forEach(el =>
    el.classList.toggle('active', el.dataset.category === 'all'));
  const bc = document.getElementById('breadcrumb-cat');
  const pt = document.getElementById('page-title');
  if (bc) bc.textContent = searchTerm ? `Búsqueda: "${searchTerm}"` : 'Todos los Productos';
  if (pt) pt.textContent = searchTerm ? `Resultados para "${searchTerm}"` : 'Todos los Productos';
  renderProducts();
}

// ════════════════════════════════════════
//  Product Detail Modal
// ════════════════════════════════════════
let modalProduct = null;
let modalQty = 1;

function openProductModal(p) {
  modalProduct = p;
  modalQty = 1;

  // ── Header info ──
  document.getElementById('pmodal-cat').textContent = CAT_LABELS[p.category] || p.category;
  document.getElementById('pmodal-title').textContent = p.name;
  document.getElementById('pmodal-storage').textContent = p.storage;
  document.getElementById('pmodal-price').textContent = fmtPrice(p.price);
  document.getElementById('pmodal-qty').textContent = 1;

  // Badge
  const badge = document.getElementById('pmodal-badge');
  badge.textContent = p.badge;
  badge.className = 'pmodal__img-badge ' + (p.badge === 'Oferta' ? 'sale' : 'new');

  // ── Description ──
  document.getElementById('pmodal-desc').textContent = p.desc || '';

  // ── Specs → rendered as sections with tables ──
  const specsEl = document.getElementById('pmodal-specs');
  if (p.specs && p.specs.length) {
    specsEl.innerHTML = p.specs.map(sec => `
            <div class="spec-section">
                <h4 class="spec-section__title">${sec.section}</h4>
                <table class="spec-table">
                    ${sec.items.map(item => `
                        <tr>
                            <td class="spec-table__label">${item.label}</td>
                            <td class="spec-table__value">${item.value}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
        `).join('');
    specsEl.style.display = 'block';
    document.getElementById('pmodal-specs-wrap').style.display = 'block';
  } else {
    specsEl.innerHTML = '';
    specsEl.style.display = 'none';
    document.getElementById('pmodal-specs-wrap').style.display = 'none';
  }

  // ── Gallery ──
  const thumbsEl = document.getElementById('pmodal-thumbs');
  const allMedia = [];
  (p.imgs || [p.img]).forEach((src, i) => allMedia.push({ type: 'img', src, i }));
  if (p.video) allMedia.push({ type: 'video', src: p.video, i: allMedia.length });

  thumbsEl.innerHTML = allMedia.map(m =>
    m.type === 'video'
      ? `<div class="pmodal__thumb pmodal__thumb--video ${m.i === 0 ? 'active' : ''}"
                    onclick="switchMedia(${m.i})" title="Video">▶</div>`
      : `<div class="pmodal__thumb ${m.i === 0 ? 'active' : ''}" onclick="switchMedia(${m.i})">
                    <img src="${m.src}" alt="" loading="lazy">
               </div>`
  ).join('');

  document.getElementById('pmodal').dataset.allMedia = JSON.stringify(allMedia);
  switchMedia(0);

  updateModalTotal();
  updateModalWA();

  // ── Show modal ──
  const overlay = document.getElementById('pmodal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scroll info panel to top
  const info = document.getElementById('pmodal-info-scroll');
  if (info) info.scrollTop = 0;
}

function switchMedia(idx) {
  const modal = document.getElementById('pmodal');
  const allMedia = JSON.parse(modal.dataset.allMedia || '[]');
  const item = allMedia[idx];
  if (!item) return;

  const imgEl = document.getElementById('pmodal-main-img');
  const videoEl = document.getElementById('pmodal-main-video');
  document.querySelectorAll('.pmodal__thumb').forEach((t, i) => t.classList.toggle('active', i === idx));

  if (item.type === 'video') {
    imgEl.style.display = 'none';
    videoEl.style.display = 'block';
    videoEl.innerHTML = `<source src="${encodeURI(item.src)}" type="video/mp4">`;
    videoEl.load(); videoEl.play();
  } else {
    videoEl.style.display = 'none';
    videoEl.pause();
    imgEl.style.display = 'block';
    imgEl.src = item.src;
    imgEl.alt = modalProduct?.name || '';
  }
}

function closePModal() {
  document.getElementById('pmodal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  const videoEl = document.getElementById('pmodal-main-video');
  if (videoEl) videoEl.pause();
}

function changeQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('pmodal-qty').textContent = modalQty;
  updateModalTotal();
  updateModalWA();
}

function updateModalTotal() {
  if (!modalProduct) return;
  document.getElementById('pmodal-total').textContent = fmtPrice(modalProduct.price * modalQty);
}

function updateModalWA() {
  if (!modalProduct) return;
  const total = modalProduct.price * modalQty;
  const msg = `Hola! Quiero comprar ${modalQty}x *${modalProduct.name}* (${modalProduct.storage}) por *${fmtPrice(total)}*. ¿Tienen stock?`;
  const url = `https://wa.me/message/5H2NAGZ7RIJ6C1?text=${encodeURIComponent(msg)}`;
  document.getElementById('pmodal-wa-btn').href = url;
  document.getElementById('pmodal-wa2-btn').href = `https://wa.me/message/5H2NAGZ7RIJ6C1?text=${encodeURIComponent(
    `Hola, quiero consultar disponibilidad de: ${modalProduct.name} ${modalProduct.storage}`
  )}`;
}

// ════════════════════════════════════════
//  UI HELPERS & NAVIGATION
// ════════════════════════════════════════
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  if (!bar) return;
  const isVisible = bar.classList.toggle('search-bar--visible');
  if (isVisible) {
    const input = document.getElementById('search-input');
    if (input) input.focus();
  } else {
    clearSearch();
  }
}

function clearSearch() {
  const input = document.getElementById('search-input');
  const bar = document.getElementById('search-bar');
  if (input) input.value = '';
  handleSearch('');
  if (bar) bar.classList.remove('search-bar--visible');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToShop() {
  const shop = document.getElementById('shop');
  if (shop) shop.scrollIntoView({ behavior: 'smooth' });
}

function switchTab(tab) {
  const pDesc = document.getElementById('panel-desc');
  const pSpecs = document.getElementById('panel-specs');
  const tDesc = document.getElementById('tab-desc');
  const tSpecs = document.getElementById('tab-specs');

  if (pDesc) pDesc.style.display = tab === 'desc' ? 'block' : 'none';
  if (pSpecs) pSpecs.style.display = tab === 'specs' ? 'block' : 'none';
  if (tDesc) {
    tDesc.classList.toggle('active', tab === 'desc');
    tDesc.setAttribute('aria-selected', tab === 'desc');
  }
  if (tSpecs) {
    tSpecs.classList.toggle('active', tab === 'specs');
    tSpecs.setAttribute('aria-selected', tab === 'specs');
  }
}

// ════════════════════════════════════════
//  SOCIAL MARQUEE INIT
// ════════════════════════════════════════
function initSocialMarquee() {
  const track = document.getElementById('social-marquee-track');
  if (!track) return;

  const content = track.innerHTML;
  // Clone multiple times for a truly infinite feel
  track.innerHTML = content + content + content + content;

  const trackWidth = track.scrollWidth;
  const duration = trackWidth / 130; // Constant speed
  track.style.animationDuration = `${duration}s`;

  // — Spotlight central effect —
  const cards = track.querySelectorAll('.social-card');
  const outer = document.querySelector('.social-marquee-outer');

  function updateHighlights() {
    if (!outer) return;
    const outerRect = outer.getBoundingClientRect();
    const centerX = outerRect.left + outerRect.width / 2;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const dist = Math.abs(centerX - cardCenter);

      // Higher proximity = stronger highlight
      const proximity = Math.max(0, 1 - (dist / (outerRect.width / 1.5)));

      // We use CSS custom properties for a performance boost
      card.style.setProperty('--proximity', proximity.toFixed(3));

      // If close to center, add active class for specific styles
      if (proximity > 0.8) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });

    requestAnimationFrame(updateHighlights);
  }

  requestAnimationFrame(updateHighlights);
}

// ════════════════════════════════════════
//  Interactive Zoom (Desktop & Mobile)
// ════════════════════════════════════════
function initZoom() {
  const wrap = document.getElementById('pmodal-main-img-wrap');
  const img = document.getElementById('pmodal-main-img');

  if (!wrap || !img) return;

  const handleZoom = (clientX, clientY) => {
    // Only zoom if the image is visible (not video)
    if (img.style.display === 'none') return;

    requestAnimationFrame(() => {
      const rect = wrap.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width * 100;
      const y = (clientY - rect.top) / rect.height * 100;

      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(2.3)';
    });
  };

  const resetZoom = () => {
    requestAnimationFrame(() => {
      img.style.transformOrigin = 'center center';
      img.style.transform = 'scale(1)';
    });
  };

  // Mouse move inside wrap
  wrap.addEventListener('mousemove', (e) => handleZoom(e.clientX, e.clientY));
  wrap.addEventListener('mouseleave', resetZoom);

  // Touch version (Single touch)
  wrap.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      handleZoom(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  wrap.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      handleZoom(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  wrap.addEventListener('touchend', resetZoom);
}

// ════════════════════════════
//  INIT
// ════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  updateCounts();
  renderProducts();
  initSocialMarquee();
  initZoom();

  // Category listeners
  document.querySelectorAll('.cat-item').forEach(btn =>
    btn.addEventListener('click', () => setCategory(btn.dataset.category)));
  document.querySelectorAll('.mcat').forEach(btn =>
    btn.addEventListener('click', () => setCategory(btn.dataset.category)));

  // Global Scroll (Header shadow)
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) header.classList.toggle('header--scrolled', window.scrollY > 10);
  });

  // Global Keys (ESC)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closePModal();
      clearSearch();
    }
  });

  // Mobile Tabs Active State
  document.querySelectorAll('.mtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mtab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
