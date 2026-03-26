// ============================================================
//  IMPORTIA GLOBAL — app.js
// ============================================================

const CAT_LABELS = {
  es: {
    all: 'Todos los Productos',
    iphone: 'iPhone',
    samsung: 'Samsung',
    airpods: 'AirPods',
    cables: 'Cables',
    cargadores: 'Cargadores',
    ipad: 'iPad',
    watch: 'Apple Watch',
    fundas: 'Fundas',
    protectores: 'Protectores de Pantalla',
  },
  en: {
    all: 'All Products',
    iphone: 'iPhone',
    samsung: 'Samsung',
    airpods: 'AirPods',
    cables: 'Cables',
    cargadores: 'Chargers',
    ipad: 'iPad',
    watch: 'Apple Watch',
    fundas: 'Cases',
    protectores: 'Screen Protectors',
  }
};

const TRANSLATIONS = {
  es: {
    nav_products: 'Productos',
    nav_shop: 'Tienda',
    nav_faq: 'FAQ',
    nav_whatsapp: 'WhatsApp',
    nav_contact: 'Contacto',

    hero_eyebrow: 'Tech Premium · Importado · Garantía Real',
    hero_title: 'El futuro<br><span class="hero_title-accent">en tus manos</span>',
    hero_subtitle: 'iPhone, AirPods, Samsung, iPad y más — al precio más competitivo del mercado argentino, con stock verificado y envío a todo el país.',
    hero_explore: 'Explorar',
    stat_clients: 'Clientes satisfechos',
    stat_original: 'Productos originales',
    stat_support: 'Soporte WhatsApp',
    stat_installments: 'Cuotas sin interés',
    cat_title: 'Categorías',
    sort_title: 'Ordenar por',
    sort_relevance: 'Relevancia',
    sort_price_asc: 'Precio: menor a mayor',
    sort_price_desc: 'Precio: mayor a menor',
    sort_name: 'Nombre A–Z',
    breadcrumb_start: 'Inicio',
    search_placeholder: 'Buscar productos...',
    empty_state_title: 'No se encontraron productos',

    empty_state_text: 'Intentá con otra categoría o término de búsqueda.',
    faq_title: 'Preguntas <span>Frecuentes</span>',
    footer_text: 'Productos tech premium con garantía real y los mejores precios del mercado argentino.',
    footer_nav: 'Navegación',
    footer_follow: 'Seguinos',
    location: 'Ubicación',
    hours: 'Lun–Sáb · Cita previa',
    contact_title: 'Contactanos',
    contact_sub: 'Estamos disponibles en nuestras redes para ayudarte con cualquier consulta.',
    wa_handle: 'Chateá con nosotros',
    wa_cta: 'Escribinos →',
    ig_handle: '@importia.ar',
    ig_cta: 'Seguinos →',
    tt_handle: '@importiaglobal',
    tt_cta: 'Seguinos →',
    yt_handle: 'Reviews y unboxings',
    yt_cta: 'Suscribite →',
    fb_handle: 'Importia',
    fb_cta: 'Visitanos →',
    x_handle: 'Novedades al instante',
    x_cta: 'Seguinos →',
    developed_by: 'Desarrollado por',
    price_label: 'Efectivo',
    qty_label: 'Cantidad',
    total: 'Total',
    buy_wa: 'Comprar por WhatsApp',
    check_stock: 'Consultar disponibilidad',
    disclaimer: '✅ Stock verificado · 🔒 Pago 100% seguro · 📦 Embalaje premium',
    tab_desc: '📝 Descripción',
    tab_specs: '⚙️ Ficha Técnica',
    delivery_info: 'Envío gratis a CABA · Llega en 24–48 hs'
  },
  en: {
    nav_products: 'Products',
    nav_shop: 'Shop',
    nav_faq: 'FAQ',
    nav_whatsapp: 'WhatsApp',
    nav_contact: 'Contact',

    hero_eyebrow: 'Tech Premium · Imported · Real Warranty',
    hero_title: 'The future<br><span class="hero_title-accent">in your hands</span>',
    hero_subtitle: 'iPhone, AirPods, Samsung, iPad and more — at the most competitive price in the Argentine market, with verified stock and nationwide shipping.',
    hero_explore: 'Explore',
    stat_clients: 'Satisfied customers',
    stat_original: 'Original products',
    stat_support: 'WhatsApp Support',
    stat_installments: 'Interest-free installments',
    cat_title: 'Categories',
    sort_title: 'Sort by',
    sort_relevance: 'Relevance',
    sort_price_asc: 'Price: low to high',
    sort_price_desc: 'Price: high to low',
    sort_name: 'Name A–Z',
    breadcrumb_start: 'Home',
    search_placeholder: 'Search products...',
    empty_state_title: 'No products found',

    empty_state_text: 'Try another category or search term.',
    faq_title: 'Frequently <span>Asked Questions</span>',
    footer_text: 'Premium tech products with real warranty and the best prices in the Argentine market.',
    footer_nav: 'Navigation',
    footer_follow: 'Follow us',
    location: 'Location',
    hours: 'Mon–Sat · By appointment',
    contact_title: 'Contact us',
    contact_sub: 'We are available on our social media to help you with any questions.',
    wa_handle: 'Chat with us',
    wa_cta: 'Message us →',
    ig_handle: '@importia.ar',
    ig_cta: 'Follow us →',
    tt_handle: '@importiaglobal',
    tt_cta: 'Follow us →',
    yt_handle: 'Reviews & unboxings',
    yt_cta: 'Subscribe →',
    fb_handle: 'Importia',
    fb_cta: 'Visit us →',
    x_handle: 'Instant news',
    x_cta: 'Follow us →',
    developed_by: 'Developed by',
    price_label: 'Cash',
    qty_label: 'Quantity',
    total: 'Total',
    buy_wa: 'Buy via WhatsApp',
    check_stock: 'Check Availability',
    disclaimer: '✅ Stock verified · 🔒 100% Secure Payment · 📦 Premium Packaging',
    tab_desc: '📝 Description',
    tab_specs: '⚙️ Tech Specs',
    delivery_info: 'Free shipping to CABA · Arrives in 24–48 hs'
  }
};

const products = [

  // ══════════════ iPHONE ══════════════
  {
    id: 1, name: 'iPhone 17 Pro Max', storage: '256GB', price: 2059200,
    category: 'iphone', badge: 'Nuevo',
    desc: 'El iPhone más avanzado de la historia. Chip A19 Pro de 3 nm, sistema de cámaras Pro rediseñado con sensor principal de 48 MP, pantalla Super Retina XDR ProMotion 120 Hz y estructura de titanio de grado aeroespacial.',
    desc_en: 'The most advanced iPhone ever. A19 Pro 3nm chip, redesigned Pro camera system with 48MP main sensor, Super Retina XDR ProMotion 120Hz display, and aerospace-grade titanium structure.',
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
    specs_en: [
      {
        section: 'Design', items: [
          { label: 'Material', value: 'Grade 5 Titanium + Ceramic Shield Glass' },
          { label: 'Dimensions', value: '163.0 × 77.6 × 8.25 mm' },
          { label: 'Weight', value: '227 g' },
          { label: 'Colors', value: 'Natural, Space Black, White, Desert' },
        ]
      },
      {
        section: 'Display', items: [
          { label: 'Type', value: 'Super Retina XDR OLED ProMotion' },
          { label: 'Size', value: '6.9"' },
          { label: 'Resolution', value: '2868 × 1320 px — 460 ppi' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptive (LTPO)' },
          { label: 'Brightness', value: 'Up to 2000 nits (peak outdoor)' },
        ]
      },
      {
        section: 'Performance', items: [
          { label: 'Chip', value: 'Apple A19 Pro (3 nm)' },
          { label: 'CPU', value: '6 cores (2 P + 4 E)' },
          { label: 'GPU', value: '6 cores' },
          { label: 'Neural Engine', value: '16 cores' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Storage', value: '256 GB NVMe' },
        ]
      },
      {
        section: 'Cameras', items: [
          { label: 'Main', value: '48 MP, f/1.78, OIS, variable aperture' },
          { label: 'Ultra Wide', value: '12 MP, f/2.2, 120°' },
          { label: 'Telephoto', value: '12 MP, f/2.8, 5x optical zoom' },
          { label: 'Front', value: '12 MP TrueDepth, f/1.9' },
          { label: 'Video', value: 'ProRes 4K@120fps, Log HDR' },
        ]
      },
      {
        section: 'Connectivity', items: [
          { label: 'Networks', value: '5G Sub-6GHz / mmWave + Wi-Fi 7 + BT 5.3' },
          { label: 'Port', value: 'USB-C (USB 3 — up to 20 Gbps)' },
          { label: 'NFC', value: 'Yes — Apple Pay, UWB Chip U2' },
          { label: 'Satellite', value: 'Emergency SOS via satellite' },
        ]
      },
      {
        section: 'Battery', items: [
          { label: 'Capacity', value: '4685 mAh Li-Ion' },
          { label: 'Fast Charge', value: '27W (0→50% in 30 min)' },
          { label: 'Wireless', value: 'MagSafe 25W / Qi 7.5W' },
          { label: 'Battery Life', value: 'Up to 33 hours video playback' },
        ]
      },
    ],
  },
  {
    id: 2, name: 'iPhone 17 Pro Max', storage: '512GB', price: 2433600,
    category: 'iphone', badge: 'Nuevo',
    desc: 'Versión 512 GB ideal para creadores de contenido. Graba video ProRes 4K@120fps directamente al almacenamiento interno sin limitaciones.',
    desc_en: '512 GB version ideal for content creators. Records ProRes 4K@120fps video directly to internal storage without limitations.',
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
    specs_en: [
      {
        section: 'Design', items: [
          { label: 'Material', value: 'Grade 5 Titanium + Ceramic Shield Glass' },
          { label: 'Dimensions', value: '163.0 × 77.6 × 8.25 mm' },
          { label: 'Weight', value: '227 g' },
        ]
      },
      {
        section: 'Performance', items: [
          { label: 'Chip', value: 'Apple A19 Pro (3 nm)' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Storage', value: '512 GB NVMe' },
        ]
      },
      {
        section: 'Display', items: [
          { label: 'Type', value: 'Super Retina XDR OLED ProMotion' },
          { label: 'Size', value: '6.9" — 460 ppi' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptive' },
        ]
      },
      {
        section: 'Cameras', items: [
          { label: 'Main', value: '48 MP, 5x optical zoom' },
          { label: 'Video', value: 'ProRes 4K@120fps — no storage limits' },
        ]
      },
      {
        section: 'Battery', items: [
          { label: 'Battery Life', value: 'Up to 33 hours video playback' },
          { label: 'Fast Charge', value: '27W — 0→50% in 30 min' },
        ]
      },
    ],
  },
  {
    id: 3, name: 'iPhone 17 Pro Max', storage: '1TB', price: 2808000,
    category: 'iphone', badge: 'Nuevo',
    desc: '1 TB de almacenamiento interno — el máximo disponible. Para profesionales que necesitan grabar horas de video ProRes sin compromisos.',
    desc_en: '1 TB of internal storage — the maximum available. For professionals who need to record hours of ProRes video without compromise.',
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
    specs_en: [
      {
        section: 'Design', items: [
          { label: 'Material', value: 'Grade 5 Titanium + Ceramic Shield Glass' },
          { label: 'Weight', value: '227 g' },
        ]
      },
      {
        section: 'Performance', items: [
          { label: 'Chip', value: 'Apple A19 Pro (3 nm)' },
          { label: 'RAM', value: '8 GB LPDDR5X' },
          { label: 'Storage', value: '1 TB NVMe — maximum available' },
        ]
      },
      {
        section: 'Display', items: [
          { label: 'Type', value: 'Super Retina XDR OLED ProMotion 6.9"' },
          { label: 'Refresh Rate', value: '1 – 120 Hz adaptive' },
        ]
      },
      {
        section: 'Video Pro', items: [
          { label: 'Format', value: 'Apple ProRes + Log HDR + Dolby Vision' },
          { label: 'Max Resolution', value: '4K@120fps — no space limits' },
          { label: 'Editing', value: 'Native Final Cut Camera' },
        ]
      },
      {
        section: 'Battery', items: [
          { label: 'Battery Life', value: 'Up to 33 hours video playback' },
          { label: 'Fast Charge', value: '27W MagSafe' },
        ]
      },
    ],
  },

  // ══════════════ CABLES ══════════════
  {
    id: 4, name: 'Cable iPhone Lightning', storage: 'USB a Lightning', price: 5000,
    category: 'cables', badge: 'Nuevo',
    desc: 'Cable original Apple USB-A a Lightning de 1 metro. Compatible con todos los modelos de iPhone del 5 hasta el 14, iPad, iPod y accesorios Lightning. Ideal para carga y sincronización de datos.',
    desc_en: 'Original Apple USB-A to Lightning cable 1 meter. Compatible with all iPhone models from 5 to 14, iPad, iPod, and Lightning accessories. Ideal for charging and data synchronization.',
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
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Connector A', value: 'USB-A (Type-A)' },
          { label: 'Connector B', value: 'Lightning' },
          { label: 'Length', value: '1 meter' },
          { label: 'Max Power', value: '12W' },
          { label: 'Data Speed', value: 'USB 2.0 — up to 480 Mbps' },
        ]
      },
      {
        section: 'Compatibility', items: [
          { label: 'iPhone', value: 'iPhone 5 – iPhone 14 (all models)' },
          { label: 'iPad', value: 'iPad Air, iPad mini, iPad (gen 1–9)' },
          { label: 'iPod', value: 'iPod touch, iPod nano, iPod shuffle' },
          { label: 'Certification', value: 'MFi Certified (Made for iPhone/iPad)' },
        ]
      },
      {
        section: 'Material', items: [
          { label: 'Cable', value: 'Braided interior with TPE cover' },
          { label: 'Connectors', value: 'Anodized aluminum' },
          { label: 'Color', value: 'White' },
        ]
      },
    ],
  },
  {
    id: 5, name: 'Cable iPhone USB-C', storage: 'Tipo C a Tipo C', price: 5000,
    category: 'cables', badge: 'Nuevo',
    desc: 'Cable USB-C a USB-C de 1m compatible con iPhone 15 en adelante, iPad Pro, MacBook y casi cualquier dispositivo moderno. Soporta carga rápida de hasta 60W y transferencia de datos USB 3.1.',
    desc_en: '1m USB-C to USB-C cable compatible with iPhone 15 and later, iPad Pro, MacBook and almost any modern device. Supports fast charging up to 60W and USB 3.1 data transfer.',
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
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Connector A', value: 'USB-C (Type-C)' },
          { label: 'Connector B', value: 'USB-C (Type-C)' },
          { label: 'Length', value: '1 meter' },
          { label: 'Max Power', value: '60W Power Delivery (PD)' },
          { label: 'Data Speed', value: 'USB 3.1 Gen 2 — up to 10 Gbps' },
          { label: 'Certification', value: 'USB-IF Certified' },
        ]
      },
      {
        section: 'Compatibility', items: [
          { label: 'iPhone', value: 'iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max and later' },
          { label: 'iPad Pro', value: 'iPad Pro M1, M2, M4 (USB-C)' },
          { label: 'MacBook', value: 'MacBook Air and Pro (all USB-C models)' },
          { label: 'Android', value: 'Samsung, Pixel, OnePlus (universal USB-C)' },
        ]
      },
      {
        section: 'Material', items: [
          { label: 'Cable', value: 'Premium braided nylon' },
          { label: 'Connectors', value: 'Aluminum + 24k gold-plated contacts' },
          { label: 'Color', value: 'White / Gray' },
        ]
      },
    ],
  },

  {
    id: 6, name: 'Cable iPhone Pro', storage: 'Tipo C a Lightning', price: 5000,
    category: 'cables', badge: 'Nuevo',
    desc: 'Cable USB-C a Lightning de 1m con soporte para carga rápida compatible con adaptadores Apple de 20W, 30W, 61W o superior. El cable estándar incluido con iPhone 13 y 14.',
    desc_en: '1m USB-C to Lightning cable with fast charge support compatible with Apple 20W, 30W, 61W or higher adapters. The standard cable included with iPhone 13 and 14.',
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
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Connector A', value: 'USB-C (Type-C)' },
          { label: 'Connector B', value: 'Lightning' },
          { label: 'Length', value: '1 meter' },
          { label: 'Max Power', value: '20W (iPhone fast charge)' },
          { label: 'Data Speed', value: 'USB 2.0 — up to 480 Mbps' },
        ]
      },
      {
        section: 'Compatibility', items: [
          { label: 'iPhone', value: 'iPhone 8 – iPhone 14 Pro Max' },
          { label: 'iPad', value: 'iPad with Lightning connector' },
          { label: 'AirPods', value: 'AirPods Pro (1st gen.), AirPods (2nd & 3rd gen.)' },
          { label: 'Certificación', value: 'MFi Apple Certified' },
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
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Connector A', value: 'USB-C (Type-C)' },
          { label: 'Connector B', value: 'Lightning' },
          { label: 'Length', value: '1 meter' },
          { label: 'Max Power', value: '20W (iPhone fast charge)' },
          { label: 'Data Speed', value: 'USB 2.0 — up to 480 Mbps' },
        ]
      },
      {
        section: 'Compatibility', items: [
          { label: 'iPhone', value: 'iPhone 8 – iPhone 14 Pro Max' },
          { label: 'iPad', value: 'iPad with Lightning connector' },
          { label: 'AirPods', value: 'AirPods Pro (1st gen.), AirPods (2nd & 3rd gen.)' },
          { label: 'Certification', value: 'MFi Apple Certified' },
        ]
      },
      {
        section: 'Material', items: [
          { label: 'Braided nylon mesh', value: 'High resistance anodized aluminum' },
          { label: 'Color', value: 'White' },
        ]
      },
    ],
  },

  // ══════════════ SAMSUNG ══════════════
  {
    id: 7, name: 'Samsung Galaxy S24 Ultra', storage: '256GB', price: 1720000,
    category: 'samsung', badge: 'Nuevo',
    desc: 'El Samsung Galaxy S24 Ultra es el celular más potente de la línea Galaxy S, diseñado para usuarios exigentes que buscan rendimiento extremo, cámaras profesionales y funciones avanzadas de inteligencia artificial. Está construido con titanio, lo que lo hace más resistente y premium, y tiene una pantalla grande de 6.8" con calidad QHD+ y brillo altísimo. Su punto más fuerte es el sistema de cámaras, liderado por un sensor principal de 200 MP, acompañado por múltiples lentes con zoom óptico avanzado. Además, incorpora el procesador Snapdragon 8 Gen 3 for Galaxy, optimizado para rendimiento y eficiencia, junto con herramientas de Galaxy AI (traducción en tiempo real, edición inteligente de fotos, etc.).',
    desc_en: 'The Samsung Galaxy S24 Ultra is the most powerful phone in the Galaxy S line, designed for demanding users seeking extreme performance, professional cameras, and advanced artificial intelligence features. It is built with titanium, making it more resistant and premium, and features a large 6.8" display with QHD+ quality and extremely high brightness. Its strongest point is the camera system, led by a 200 MP main sensor, accompanied by multiple lenses with advanced optical zoom. Additionally, it incorporates the Snapdragon 8 Gen 3 for Galaxy processor, optimized for performance and efficiency, along with Galaxy AI tools (real-time translation, intelligent photo editing, etc.).',
    img: 'IMAGENES/SAMSUNG/S24 ULTRA/1- portada.png',
    imgs: [
      'IMAGENES/SAMSUNG/S24 ULTRA/1- portada.png',
      'IMAGENES/SAMSUNG/S24 ULTRA/2.png',
      'IMAGENES/SAMSUNG/S24 ULTRA/3.png',
      'IMAGENES/SAMSUNG/S24 ULTRA/4.png',
      'IMAGENES/SAMSUNG/S24 ULTRA/5.png'
    ],

    specs: [
      {
        section: 'Características', items: [
          { label: 'Pantalla', value: '6.8" Dynamic AMOLED 2X' },
          { label: 'Resolución', value: 'QHD+ (≈1440 x 3088 px)' },
          { label: 'Frecuencia', value: '1 Hz — 120 Hz adaptativa' },
          { label: 'Brillo', value: 'Hasta 2600 nits' },
          { label: 'Material', value: 'Titanio + Gorilla Armor' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Procesador', value: 'Snapdragon 8 Gen 3 for Galaxy' },
          { label: 'GPU', value: 'Adreno 750' },
          { label: 'RAM', value: '12 GB' },
          { label: 'Almacenamiento', value: '256 GB / 512 GB / 1 TB' },
          { label: 'Sistema Operativo', value: 'Android 14 + One UI' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Cámara principal', value: '200 MP (gran angular)' },
          { label: 'Cámaras adicionales', value: '12 MP ultra gran angular + 10 MP (3x) + 50 MP (5x)' },
          { label: 'Zoom', value: 'Óptico 3x y 5x / digital hasta 100x' },
          { label: 'Cámara frontal', value: '12 MP' },
          { label: 'Video', value: 'Hasta 8K' },
        ]
      },
      {
        section: 'Batería y Otros', items: [
          { label: 'Batería', value: '5000 mAh' },
          { label: 'Carga', value: '45W (cable) / 15W inalámbrica' },
          { label: 'Conectividad', value: '5G, Wi-Fi 7, Bluetooth, NFC' },
          { label: 'Resistencia', value: 'IP68 (agua y polvo)' },
          { label: 'Dimensiones', value: '162.3 x 79 x 8.6 mm' },
          { label: 'Peso', value: '232 g' },
          { label: 'Extras', value: 'S Pen integrado' },
        ]
      },
    ],
    specs_en: [
      {
        section: 'Key Features', items: [
          { label: 'Display', value: '6.8" Dynamic AMOLED 2X' },
          { label: 'Resolution', value: 'QHD+ (≈1440 x 3088 px)' },
          { label: 'Material', value: 'Titanium + Gorilla Armor' },
          { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
          { label: 'RAM', value: '12 GB' },
        ]
      },
      {
        section: 'Camera & Battery', items: [
          { label: 'Main Camera', value: '200 MP' },
          { label: 'Zoom', value: 'Optical 3x & 5x' },
          { label: 'Battery', value: '5000 mAh with 45W Fast Charging' },
          { label: 'Extra', value: 'Integrated S Pen' },
        ]
      },
    ],
  },

  {
    id: 8, name: 'Samsung Z Flip 7', storage: '256GB', price: 1432800,
    category: 'samsung', badge: 'Nuevo',
    desc: 'Redefiní tu estilo con el Galaxy Z Flip7. El nuevo Galaxy Z Flip7 llega para romper los límites de lo que un smartphone puede hacer. Con un diseño más delgado y sofisticado que nunca, este dispositivo combina la elegancia de un accesorio de moda con la potencia de un procesador de última generación.',
    desc_en: 'Redefine your style with the Galaxy Z Flip7. The new Galaxy Z Flip7 arrives to break the boundaries of what a smartphone can do. With a thinner and more sophisticated design than ever, this device combines the elegance of a fashion accessory with the power of a next-generation processor.',
    img: 'IMAGENES/SAMSUNG/Galaxy Z Flip7/1 PORTADA.png',
    imgs: [
      'IMAGENES/SAMSUNG/Galaxy Z Flip7/1 PORTADA.png',
      'IMAGENES/SAMSUNG/Galaxy Z Flip7/2.png',
      'IMAGENES/SAMSUNG/Galaxy Z Flip7/3.png',
      'IMAGENES/SAMSUNG/Galaxy Z Flip7/4.png'
    ],

    specs: [
      {
        section: 'Diseño y Durabilidad', items: [
          { label: 'Resistencia', value: 'Marco de Armor Aluminum y Gorilla Glass Victus 2' },
          { label: 'Sistema Operativo', value: 'Android con One UI (Optimizado para plegables)' },
          { label: 'Colores', value: 'Blue Shadow, Jetblack, Coralred y Mint (Exclusivo)' },
        ]
      },
      {
        section: 'Pantallas', items: [
          { label: 'Pantalla Principal', value: '6.9" Dynamic AMOLED 2X (21:9)' },
          { label: 'Pantalla Cubierta', value: '4.1" FlexWindow de borde a borde' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Procesador', value: 'Octa-Core de alto rendimiento optimizado para AI' },
          { label: 'Memoria RAM', value: '12 GB LPDDR5X' },
          { label: 'Almacenamiento', value: '256 GB / 512 GB (UFS 4.0)' },
          { label: 'Seguridad', value: 'Sensor de huellas lateral y Samsung Knox' },
        ]
      },
      {
        section: 'Cámaras', items: [
          { label: 'Cámara Principal', value: 'Dual: 50 MP (Gran Angular) + 12 MP (Ultra Wide)' },
          { label: 'Cámara Frontal', value: '10 MP (en pantalla interna)' },
          { label: 'Tecnología', value: 'ProVisual Engine, Nightography' },
        ]
      },
      {
        section: 'Batería y Conexión', items: [
          { label: 'Batería', value: '4.300 mAh (Carga rápida e inalámbrica)' },
          { label: 'Autonomía', value: 'Hasta 31 horas de reproducción de video' },
          { label: 'Conectividad', value: '5G, Wi-Fi 6E/7, Bluetooth 5.3, NFC' },
        ]
      },
    ],
    specs_en: [
      {
        section: 'Design & Durability', items: [
          { label: 'Resistance', value: 'Armor Aluminum Frame & Gorilla Glass Victus 2' },
          { label: 'Operating System', value: 'Android with One UI (Optimized for foldables)' },
          { label: 'Colors', value: 'Blue Shadow, Jetblack, Coralred & Mint (Exclusive)' },
        ]
      },
      {
        section: 'Displays', items: [
          { label: 'Main Display', value: '6.9" Dynamic AMOLED 2X (21:9)' },
          { label: 'Cover Screen', value: '4.1" Edge-to-edge FlexWindow' },
        ]
      },
      {
        section: 'Performance', items: [
          { label: 'Processor', value: 'High-performance Octa-Core optimized for AI' },
          { label: 'RAM', value: '12 GB LPDDR5X' },
          { label: 'Storage', value: '256 GB / 512 GB (UFS 4.0)' },
          { label: 'Security', value: 'Side fingerprint sensor and Samsung Knox' },
        ]
      },
      {
        section: 'Cameras', items: [
          { label: 'Main Camera', value: 'Dual: 50 MP (Wide) + 12 MP (Ultra Wide)' },
          { label: 'Front Camera', value: '10 MP (on internal screen)' },
          { label: 'Technology', value: 'ProVisual Engine, Nightography' },
        ]
      },
      {
        section: 'Battery & Connectivity', items: [
          { label: 'Battery', value: '4,300 mAh (Fast & Wireless charging)' },
          { label: 'Battery Life', value: 'Up to 31 hours of video playback' },
          { label: 'Connectivity', value: '5G, Wi-Fi 6E/7, Bluetooth 5.3, NFC' },
        ]
      },
    ],
  },

  {
    id: 9, name: 'Samsung Z Fold 7', storage: '512GB', price: 2440800,
    category: 'samsung', badge: 'Nuevo',
    desc: 'El Galaxy Z Fold7 representa la cúspide de la innovación en smartphones plegables de Samsung. Rediseñado desde cero para ser más ligero, delgado y ergonómico, ofrece una experiencia de uso transformadora. Con un despliegue de 8.0" y el revolucionario chip Snapdragon 8 Elite, es la herramienta definitiva para la productividad y el gaming de nueva generación.',
    desc_en: 'The Galaxy Z Fold7 represents the pinnacle of innovation in Samsung foldable smartphones. Redesigned from the ground up to be lighter, thinner, and more ergonomic, it offers a transformative user experience. With an 8.0" display and the revolutionary Snapdragon 8 Elite chip, it is the ultimate tool for next-generation productivity and gaming.',
    img: 'IMAGENES/SAMSUNG/Galaxy Z Fold7/1- PORTADA (2).png',
    imgs: [
      'IMAGENES/SAMSUNG/Galaxy Z Fold7/1- PORTADA (2).png',
      'IMAGENES/SAMSUNG/Galaxy Z Fold7/2.png',
      'IMAGENES/SAMSUNG/Galaxy Z Fold7/3.png',
      'IMAGENES/SAMSUNG/Galaxy Z Fold7/4.png'
    ],

    specs: [
      {
        section: 'Ficha Técnica', items: [
          { label: 'Modelo', value: 'SM-F966B (Galaxy Z Fold7)' },
          { label: 'Procesador', value: 'Qualcomm Snapdragon 8 Elite (Octa-core up to 4.47 GHz)' },
          { label: 'Puntos clave', value: 'Potencia sin precedentes + Inteligencia Artificial avanzada' },
          { label: 'Memoria RAM', value: '12 GB' },
          { label: 'Almacenamiento', value: '512 GB' },
          { label: 'Sistema Operativo', value: 'Android 15 con One UI' },
        ]
      },
      {
        section: 'Pantallas Revolucionarias', items: [
          { label: 'Principal (8")', value: '8.0" Foldable Dynamic LTPO AMOLED 2X (2184 x 1968 px)' },
          { label: 'Cubierta (6.3")', value: '6.3" Dynamic AMOLED 2X (Relación 21:9)' },
          { label: 'Uso', value: 'Experiencia cómoda tanto plegado como desplegado' },
        ]
      },
      {
        section: 'Cámara Ultra de 200 MP', items: [
          { label: 'Sensor Principal', value: '200 Megapíxeles (Heredado de la línea Ultra)' },
          { label: 'Configuración', value: 'Triple: 200 MP + Tele 10 MP + Ultra Wide 12 MP' },
          { label: 'Motor', value: 'ProVisual Engine (Fotos realistas con poca luz)' },
        ]
      },
      {
        section: 'Galaxy AI', items: [
          { label: 'IA Integrada', value: 'Traducción en tiempo real, Edición fotográfica avanzada' },
          { label: 'Productividad', value: 'Now Brief: Resúmenes de información personalizados' },
        ]
      },
      {
        section: 'Batería y Dimensiones', items: [
          { label: 'Batería', value: '4400 mAh (Li-Po) con Carga rápida USB-C' },
          { label: 'Peso', value: '216 gramos (Más ligero que generaciones anteriores)' },
          { label: 'Cerrado', value: '158.4 mm x 72.8 mm x 8.9 mm' },
          { label: 'SIM', value: 'Nano SIM + eSIM' },
        ]
      },
    ],
    specs_en: [
      {
        section: 'Technical Specs', items: [
          { label: 'Model', value: 'SM-F966B (Galaxy Z Fold7)' },
          { label: 'Processor', value: 'Qualcomm Snapdragon 8 Elite (Octa-core up to 4.47 GHz)' },
          { label: 'RAM', value: '12 GB' },
          { label: 'Storage', value: '512 GB' },
        ]
      },
      {
        section: 'Displays', items: [
          { label: 'Main', value: '8.0" Foldable Dynamic LTPO AMOLED 2X' },
          { label: 'Cover', value: '6.3" Dynamic AMOLED 2X' },
        ]
      },
      {
        section: 'Cameras', items: [
          { label: 'Main', value: '200 MP Triple Camera' },
          { label: 'Selfie', value: 'Double 10 MP Front' },
        ]
      },
    ],
  },


  // ══════════════ iPAD ══════════════
  {
    id: 10, name: 'iPad Pro M4', storage: '256GB', price: 1368000,
    category: 'ipad', badge: 'Nuevo',
    desc: 'El iPad más delgado y potente con el nuevo chip M4. Pantalla Tandem OLED para negros perfectos, conectividad 5G opcional y soporte para el nuevo Apple Pencil Pro. Redefine lo que es posible en una tablet.',
    desc_en: 'The thinnest and most powerful iPad with the new M4 chip. Tandem OLED display for perfect blacks, optional 5G connectivity and support for the new Apple Pencil Pro. Redefines what is possible in a tablet.',
    img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-13-2024-1.jpg',
    imgs: ['https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-13-2024-1.jpg'],

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
    specs_en: [
      {
        section: 'Design', items: [
          { label: 'Material', value: '100% recycled aluminum + nano-textured glass' },
          { label: 'Dimensions', value: '281.8 × 215.9 × 5.1 mm' },
          { label: 'Weight', value: '579 g (Wi-Fi) — thinnest iPad ever' },
          { label: 'Colors', value: 'Silver / Space Gray' },
        ]
      },
      {
        section: 'Display', items: [
          { label: 'Type', value: 'Ultra Retina XDR OLED (tandem two-layer)' },
          { label: 'Size', value: '13"' },
          { label: 'Resolution', value: '2752 × 2064 px — 264 ppi' },
          { label: 'Brightness', value: '1000 nits (standard) / 1600 nits (HDR)' },
          { label: 'ProMotion', value: 'Adaptive 1–120 Hz' },
          { label: 'Color', value: 'P3 Wide Color, True Tone, anti-reflective' },
        ]
      },
      {
        section: 'Performance', items: [
          { label: 'Chip', value: 'Apple M4 (3 nm, 10-core CPU)' },
          { label: 'CPU', value: '4 P-cores + 6 E-cores' },
          { label: 'GPU', value: '10-core' },
          { label: 'Neural Engine', value: '16-core — 38 TOPS' },
          { label: 'RAM', value: '16 GB LPDDR5X' },
          { label: 'Storage', value: '256 GB (options up to 2 TB)' },
        ]
      },
      {
        section: 'Cameras', items: [
          { label: 'Rear', value: '12 MP, f/1.8, 4ch LiDAR optical zoom' },
          { label: 'Front', value: '12 MP TrueDepth (landscape orientation)' },
          { label: 'Video', value: '4K@60fps with cinematic stabilization' },
        ]
      },
      {
        section: 'Connectivity', items: [
          { label: 'Port', value: 'Thunderbolt 4 / USB 4 — up to 40 Gbps' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: '5.3' },
          { label: 'Apple Pencil', value: 'Pro (new generation, sold separately)' },
        ]
      },
      {
        section: 'Battery', items: [
          { label: 'Battery Life', value: 'Up to 10 hours of use' },
          { label: 'Charging', value: '45W USB-C / Magic Keyboard compatible' },
        ]
      },
    ],
  },

  // ══════════════ APPLE WATCH ══════════════
  {
    id: 11, name: 'Apple Watch Ultra 3', storage: '49mm', price: 1368000,
    category: 'watch', badge: 'Nuevo',
    desc: 'El Apple Watch Ultra 3 es el smartwatch más avanzado y resistente de Apple, pensado para usuarios exigentes, deportistas y aventureros. Está construido con titanio de grado 5, lo que le da una gran durabilidad sin sacrificar diseño premium. Su punto fuerte es la combinación de pantalla ultra brillante (hasta 3000 nits), autonomía extendida y sensores avanzados para salud, entrenamiento y exploración (como profundímetro y GPS de doble frecuencia). Además, incorpora el chip S10, que mejora el rendimiento y la eficiencia.',
    desc_en: 'Apple Watch Ultra 3 is Apple\'s most advanced and rugged smartwatch, designed for demanding users, athletes, and adventurers. It’s built with Grade 5 titanium, giving it great durability without sacrificing premium design. Its strong point is the combination of an ultra-bright display (up to 3000 nits), extended battery life, and advanced health, training, and exploration sensors (like depth gauge and dual-frequency GPS). Additionally, it features the S10 chip, which improves performance and efficiency.',
    img: 'IMAGENES/Apple Watch/1- portada.png',
    imgs: [
      'IMAGENES/Apple Watch/1- portada.png',
      'IMAGENES/Apple Watch/2.png',
      'IMAGENES/Apple Watch/ChatGPT Image Mar 26, 2026, 01_13_44 PM (1).png'
    ],

    specs: [
      {
        section: 'Diseño y Resistencia', items: [
          { label: 'Material', value: 'Titanio grado 5' },
          { label: 'Tamaño de caja', value: '49 mm' },
          { label: 'Peso', value: '~61.6 g' },
          { label: 'Resistencia al agua', value: 'Hasta 100 m' },
          { label: 'Buceo', value: 'Hasta 40 m (certificado)' },
          { label: 'Certificación', value: 'MIL-STD 810H + IP6X' },
        ]
      },
      {
        section: 'Pantalla', items: [
          { label: 'Tipo', value: 'Retina OLED LTPO3 siempre activa' },
          { label: 'Resolución', value: '422 x 514 px (326 ppi)' },
          { label: 'Brillo', value: 'Hasta 3000 nits' },
        ]
      },
      {
        section: 'Rendimiento', items: [
          { label: 'Chip', value: 'S10 (doble núcleo 64 bits)' },
          { label: 'Neural Engine', value: '4 núcleos' },
          { label: 'Almacenamiento', value: '64 GB' },
          { label: 'Sistema operativo', value: 'watchOS' },
        ]
      },
      {
        section: 'Sensores y Salud', items: [
          { label: 'Salud', value: 'ECG, sueño, oxígeno, ritmo cardíaco, apnea' },
          { label: 'Sensores', value: 'FC, SpO2, temp., ECG, altímetro, brújula, giroscopio' },
          { label: 'Especiales', value: 'Profundímetro + temperatura del agua' },
          { label: 'GPS', value: 'Doble frecuencia (L1 + L5)' },
          { label: 'Seguridad', value: 'SOS, detección de caídas y choques' },
        ]
      },
      {
        section: 'Batería y Conexión', items: [
          { label: 'Batería', value: 'Hasta 42 h (72 h ahorro)' },
          { label: 'Carga rápida', value: '80% en ~45 min' },
          { label: 'Conectividad', value: 'Wi-Fi, Bluetooth 5.3, 5G/LTE' },
        ]
      },
    ],
    specs_en: [
      {
        section: 'Design & Durability', items: [
          { label: 'Material', value: 'Grade 5 Titanium' },
          { label: 'Case Size', value: '49 mm' },
          { label: 'Resistance', value: 'Water up to 100m / IP6X' },
        ]
      },
      {
        section: 'Display', items: [
          { label: 'Type', value: 'Always-on Retina OLED LTPO3' },
          { label: 'Brightness', value: 'Up to 3000 nits' },
        ]
      },
      {
        section: 'Performance', items: [
          { label: 'Chip', value: 'S10 (64-bit dual core)' },
          { label: 'Storage', value: '64 GB' },
        ]
      },
      {
        section: 'Connectivity', items: [
          { label: 'Cellular', value: 'LTE + UMTS (with SIM or dual eSIM)' },
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4 + 5 GHz' },
          { label: 'Bluetooth', value: '5.3' },
          { label: 'Ultra Wideband', value: 'U2 Chip — Precision Finding' },
        ]
      },
      {
        section: 'Battery', items: [
          { label: 'Battery Life', value: 'Up to 42h (72h low power mode)' },
          { label: 'Fast Charge', value: '80% in ~45 min' },
        ]
      },
    ],
  },

  // ══════════════ AirPods ══════════════
  {
    id: 12, name: 'AirPods Pro 2da Gen', storage: 'USB-C', price: 35000,
    category: 'airpods', badge: 'Oferta',
    desc: 'Los AirPods más avanzados. Cancelación activa de ruido hasta 2× más efectiva que la 1ª gen, Audio Adaptativo inteligente, volumen táctil con deslizamiento y chip H2 para el audio más inmersivo con audio espacial personalizado.',
    desc_en: 'The most advanced AirPods. Active noise cancellation up to 2× more effective than 1st gen, intelligent Adaptive Audio, touch volume swipe and H2 chip for the most immersive audio with personalized spatial audio.',
    img: 'IMAGENES/AURICULARES/importia_full_res_1773547371138.png',

    imgs: [
      'IMAGENES/AURICULARES/importia_full_res_1773547371138.png',
      'IMAGENES/AURICULARES/27f3b309-f9ab-4731-b8cf-9219441fc697.png',
      'IMAGENES/AURICULARES/ChatGPT Image 15 mar 2026, 12_06_11 p.m..png',
      'IMAGENES/AURICULARES/ChatGPT resol 16-9.png',
      'IMAGENES/AURICULARES/ded32eac-29ad-4aca-986f-86a8dd2c590f.png',
      'IMAGENES/AURICULARES/importia_full_res_1773584182730.png'
    ],
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
    specs_en: [
      {
        section: 'Audio', items: [
          { label: 'Chip', value: 'Apple H2' },
          { label: 'Custom Driver', value: '11 mm low distortion' },
          { label: 'Amplifier', value: 'Custom high dynamic + AAC processor' },
          { label: 'Spatial Audio', value: 'Personalized with head tracking' },
          { label: 'Listening Modes', value: 'Active ANC / Transparency / Adaptive' },
        ]
      },
      {
        section: 'Noise Cancellation', items: [
          { label: 'ANC', value: 'Up to 2× more than AirPods Pro 1st gen' },
          { label: 'Microphones', value: '2 adaptive microphones per AirPod' },
          { label: 'Transparency', value: 'Conversational Awareness — automatically lowers volume when speaking' },
        ]
      },
      {
        section: 'Controls', items: [
          { label: 'Touch', value: 'Swipe on stem for volume' },
          { label: 'Force Sensor', value: 'Press for pause / track / ANC' },
          { label: 'Detection', value: 'Skin sensor + motion accelerometer' },
          { label: 'Siri', value: 'Announcements / replies without lifting iPhone' },
        ]
      },
      {
        section: 'Battery', items: [
          { label: 'AirPods (ANC on)', value: 'Up to 6 hours' },
          { label: 'With Case', value: 'Up to 30 total hours' },
          { label: 'Fast Charge', value: '5 min → 1 hour of audio' },
          { label: 'Case Charging', value: 'USB-C + MagSafe + Qi + Apple Watch' },
        ]
      },
      {
        section: 'Connectivity', items: [
          { label: 'Bluetooth', value: '5.3 — easy connection between Apple devices' },
          { label: 'Resistance', value: 'IP54 — AirPods and case water resistant' },
          { label: 'Location', value: 'Precision with U1 chip (Find My)' },
        ]
      },
    ],
  },

  // ══════════════ CARGADORES ══════════════
  {
    id: 13, name: 'Batery Pack 5000 Amp', storage: 'MagSafe Compatible', price: 25000,
    category: 'cargadores', badge: 'Nuevo',
    desc: 'La batería externa oficial de Apple para iPhone con soporte MagSafe. Se acopla magnéticamente para una carga inalámbrica rápida y segura.',
    desc_en: 'The official Apple MagSafe Battery Pack. It snaps on magnetically for safe and secure wireless charging on the go.',
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
        section: 'Especificaciones', items: [
          { label: 'Capacidad', value: '5000 mAh' },
          { label: 'Conector', value: 'USB-C (para carga propia)' },
          { label: 'Potencia', value: 'Hasta 15W (enchufada) / 5W (portable)' },
          { label: 'Compatibilidad', value: 'iPhone 12 en adelante' },
        ]
      },
    ],
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Capacity', value: '5000 mAh' },
          { label: 'Connector', value: 'USB-C (for charging itself)' },
          { label: 'Power', value: 'Up to 15W (plugged) / 5W (portable)' },
          { label: 'Compatibility', value: 'iPhone 12 and later' },
        ]
      },
    ],
  },
  {
    id: 14, name: 'Cabezal 20w (pata redonda)', storage: 'Apple Power Adapter', price: 45000,
    category: 'cargadores', badge: 'Nuevo',
    desc: 'Adaptador de corriente USB-C oficial de Apple. Proporciona una carga rápida y eficiente en casa, en la oficina o mientras viajas.',
    desc_en: 'Official Apple 20W USB-C Power Adapter. Provides fast, efficient charging at home, in the office, or on the go.',
    img: 'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/1- portada.png',
    imgs: [
      'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/1- portada.png',
      'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/2.png',
      'IMAGENES/CARGADORES/Cabezal 20w (pata redonda)/1-1/3.png'
    ],



    specs: [
      {
        section: 'Especificaciones', items: [
          { label: 'Potencia', value: '20W' },
          { label: 'Conector', value: 'USB-C' },
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
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Power', value: '20W' },
          { label: 'Connector', value: 'USB-C' },
          { label: 'Cable Included', value: 'Yes' },
          { label: 'Energy Efficiency', value: 'A+++' },
        ]
      },
    ],
  },

  {

    id: 15, name: 'Cargador Original MagSafe', storage: '15W Wireless', price: 35000,
    category: 'cargadores', badge: 'Nuevo',
    desc: 'El cargador MagSafe original permite una carga inalámbrica rápida con gran facilidad. Sus imanes perfectamente alineados se fijan a tu iPhone.',
    desc_en: 'The Apple MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach to your iPhone and provide faster wireless charging.',
    img: 'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/1-portada.png',
    imgs: [
      'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/1-portada.png',
      'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/2.png',
      'IMAGENES/CARGADORES/Cargador inalambrico magsafe/1-1/3.png'
    ],



    specs: [
      {
        section: 'Especificaciones', items: [
          { label: 'Conector', value: 'USB-C integrado' },
          { label: 'Potencia Inal.', value: 'Hasta 15W' },
          { label: 'Largo cable', value: '1 metro' },
          { label: 'Compatibilidad', value: 'iPhone 12 en adelante' },
        ]
      },
    ],
    specs_en: [
      {
        section: 'Specifications', items: [
          { label: 'Connector', value: 'Integrated USB-C' },
          { label: 'Wireless Power', value: 'Up to 15W' },
          { label: 'Cable Length', value: '1 meter' },
          { label: 'Compatibility', value: 'iPhone 12 and later' },
        ]
      },
    ],
  },
];


// ════════════════════════════
//  Helpers
// ════════════════════════════
const fmtPrice = n => '$ ' + n.toLocaleString('es-AR');

const getImgPath = (src) => {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  return src.split('/').map(segment => encodeURIComponent(segment)).join('/');
};


function updateCounts() {
  const lang = currentLang || 'es';
  Object.keys(CAT_LABELS[lang]).forEach(cat => {
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
let currentLang = 'es';

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeLabel();
}

function updateThemeLabel() {
  const label = document.getElementById('theme-label');
  if (!label) return;
  const isLight = document.body.classList.contains('light-theme');
  if (currentLang === 'es') {
    label.textContent = isLight ? 'Modo Claro' : 'Modo Oscuro';
  } else {
    label.textContent = isLight ? 'Light Mode' : 'Dark Mode';
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.id === `lang-${lang}`));

  // Update UI texts
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (t[key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  updateThemeLabel();


  // Specifically translate products nav
  const navItems = document.querySelectorAll('.hnav');
  if (navItems[0]) navItems[0].textContent = t.nav_products;
  if (navItems[1]) navItems[1].textContent = t.nav_faq;
  if (navItems[2]) navItems[2].textContent = t.nav_contact;

  // Translate sidebar titles
  const sidebarTitles = document.querySelectorAll('.sidebar__title');
  if (sidebarTitles[0]) sidebarTitles[0].textContent = t.cat_title;
  if (sidebarTitles[1]) sidebarTitles[1].textContent = t.sort_title;

  // Translate sort items
  const sortItems = document.querySelectorAll('.sort-item');
  if (sortItems[0]) sortItems[0].textContent = t.sort_relevance;
  if (sortItems[1]) sortItems[1].textContent = t.sort_price_asc;
  if (sortItems[2]) sortItems[2].textContent = t.sort_price_desc;
  if (sortItems[3]) sortItems[3].textContent = t.sort_name;

  // Update categories labels in sidebar
  document.querySelectorAll('.cat-item').forEach(btn => {
    const cat = btn.dataset.category;
    const icon = btn.querySelector('.cat-item__icon')?.outerHTML || '';
    const count = btn.querySelector('.cat-item__count')?.outerHTML || '';
    btn.innerHTML = `${icon} ${CAT_LABELS[lang][cat]} ${count}`;
  });

  // Update mobile cats
  document.querySelectorAll('.mcat').forEach(btn => {
    const cat = btn.dataset.category;
    const label = btn.querySelector('.mcat__label');
    if (label) {
      label.textContent = CAT_LABELS[lang][cat];
    } else {
      btn.textContent = CAT_LABELS[lang][cat];
    }
  });


  // Update hero
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) heroTitle.innerHTML = t.hero_title;
  const heroSubtitle = document.querySelector('.hero__subtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitle;
  const heroEyebrow = document.querySelector('.hero__eyebrow');
  if (heroEyebrow) {
    const dot = heroEyebrow.querySelector('.hero__dot')?.outerHTML || '';
    heroEyebrow.innerHTML = `${dot} ${t.hero_eyebrow}`;
  }

  // Update page title / breadcrumb
  updateCounts();
  initMobileCatsScroll();
}

function initMobileCatsScroll() {
  const container = document.getElementById('mobile-cats');
  const rightArrow = document.getElementById('cats-hint');
  const leftArrow = document.getElementById('cats-left');
  if (!container) return;

  const updateArrows = () => {
    // Right arrow visibility
    const scrollEnd = container.scrollWidth - container.clientWidth;
    if (rightArrow) {
      const isAtEnd = container.scrollLeft >= scrollEnd - 20;
      rightArrow.style.opacity = isAtEnd ? '0' : '1';
      rightArrow.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    }
    // Left arrow visibility
    if (leftArrow) {
      const isAtStart = container.scrollLeft <= 20;
      leftArrow.style.opacity = isAtStart ? '0' : '1';
      leftArrow.style.pointerEvents = isAtStart ? 'none' : 'auto';
    }
  };

  container.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
}

/**
 * Handle manual button scroll for categories
 */
function scrollCats(dir) {
  const container = document.getElementById('mobile-cats');
  if (!container) return;
  const amount = 200; // px to scroll
  container.scrollBy({
    left: dir === 'right' ? amount : -amount,
    behavior: 'smooth'
  });
}



function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (lb && img) {
    img.src = src;
    lb.style.display = 'flex';
    setTimeout(() => lb.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('open');
    setTimeout(() => { lb.style.display = 'none'; }, 300);
    if (!document.getElementById('pmodal-overlay').classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }
}


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
  if (countEl) {
    if (currentLang === 'es') {
      countEl.textContent = `${list.length} producto${list.length !== 1 ? 's' : ''}`;
    } else {
      countEl.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
    }
  }


  if (!list.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';

  grid.innerHTML = list.map(p => {
    const encoded = encodeURIComponent(JSON.stringify(p));
    const badgeClass = p.badge === 'Oferta' ? 'pcard__badge--sale' : 'pcard__badge--new';
    const mediaHtml = p.video
      ? `<video autoplay muted loop playsinline class="pcard__video">
                 <source src="${getImgPath(p.video)}" type="video/mp4">
               </video>`

      : `<img src="${getImgPath(p.img)}" alt="${p.name}" class="pcard__img" loading="lazy">`;




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
                <p class="pcard__cat">${CAT_LABELS[currentLang][p.category] || p.category}</p>
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
  const label = CAT_LABELS[currentLang][cat] || cat;
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

  if (searchTerm) {
    if (bc) bc.textContent = currentLang === 'es' ? `Búsqueda: "${searchTerm}"` : `Search: "${searchTerm}"`;
    if (pt) pt.textContent = currentLang === 'es' ? `Resultados para "${searchTerm}"` : `Results for "${searchTerm}"`;
    // Scroll to results if something was typed
    scrollToShop();
  } else {
    if (bc) bc.textContent = CAT_LABELS[currentLang][currentCat];
    if (pt) pt.textContent = CAT_LABELS[currentLang][currentCat];
  }
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
  document.getElementById('pmodal-cat').textContent = CAT_LABELS[currentLang][p.category] || p.category;
  document.getElementById('pmodal-title').textContent = p.name;
  document.getElementById('pmodal-storage').textContent = p.storage;
  document.getElementById('pmodal-price').textContent = fmtPrice(p.price);
  document.getElementById('pmodal-qty').textContent = 1;

  // Badge
  const badge = document.getElementById('pmodal-badge');
  badge.textContent = p.badge;
  badge.className = 'pmodal__img-badge ' + (p.badge === 'Oferta' ? 'sale' : 'new');

  // ── Description ──
  document.getElementById('pmodal-desc').textContent = (currentLang === 'en' ? p.desc_en : p.desc) || '';

  // ── Specs → rendered as sections with tables ──
  const specsEl = document.getElementById('pmodal-specs');
  const specs = (currentLang === 'en' ? p.specs_en : p.specs);
  if (specs && specs.length) {
    specsEl.innerHTML = specs.map(sec => `
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
  const wrap = document.getElementById('pmodal-main-img-wrap');
  const thumbsEl = document.getElementById('pmodal-thumbs');
  const allMedia = [];
  (p.imgs || [p.img]).forEach((src, i) => allMedia.push({ type: 'img', src, i }));
  if (p.video) allMedia.push({ type: 'video', src: p.video, i: allMedia.length });

  // Render main scrollable items
  wrap.innerHTML = allMedia.map(m => `
    <div class="pmodal__gallery-item" ondblclick="openLightbox('${getImgPath(m.src)}')">
      ${m.type === 'video'
      ? `<video src="${getImgPath(m.src)}" class="pmodal__main-video" autoplay muted loop playsinline></video>`
      : `<img src="${getImgPath(m.src)}" class="pmodal__main-img" alt="${p.name}">`
    }
    </div>
  `).join('');




  // Render thumbnails
  thumbsEl.innerHTML = allMedia.map(m =>
    m.type === 'video'
      ? `<div class="pmodal__thumb pmodal__thumb--video" onclick="switchMedia(${m.i})" title="Video">▶</div>`
      : `<div class="pmodal__thumb" onclick="switchMedia(${m.i})">
            <img src="${m.src}" alt="" loading="lazy">
         </div>`
  ).join('');

  document.getElementById('pmodal').dataset.allMedia = JSON.stringify(allMedia);
  wrap.scrollLeft = 0;
  updateThumbActiveOnScroll();

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
  const wrap = document.getElementById('pmodal-main-img-wrap');
  if (wrap) {
    wrap.scrollTo({ left: wrap.offsetWidth * idx, behavior: 'smooth' });
  }
}

function updateThumbActiveOnScroll() {
  const wrap = document.getElementById('pmodal-main-img-wrap');
  if (!wrap || wrap.offsetWidth === 0) {
    // If not yet visible, fallback: first one is active
    const thumbs = document.querySelectorAll('.pmodal__thumb');
    if (thumbs.length && !document.querySelector('.pmodal__thumb.active')) {
      thumbs[0].classList.add('active');
    }
    return;
  }
  const index = Math.round(wrap.scrollLeft / wrap.offsetWidth);
  const thumbs = document.querySelectorAll('.pmodal__thumb');
  thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
}



function closePModal() {
  document.getElementById('pmodal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  document.querySelectorAll('.pmodal__main-video').forEach(v => v.pause());
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
  const outer = document.querySelector('.social-marquee-outer');
  const track = document.getElementById('social-marquee-track');
  if (!track || !outer) return;

  const initialContent = track.innerHTML;
  // Use 3 sets for circular scroll
  track.innerHTML = initialContent + initialContent + initialContent;

  const setWidth = track.scrollWidth / 3;
  outer.scrollLeft = setWidth;

  const baseSpeed = 1.0;
  let currentSpeed = baseSpeed;
  let isPressed = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let lastX = 0;
  let lastTime = Date.now();
  let velocity = 0;
  let isHovered = false;
  let isVisible = false;

  const cards = track.querySelectorAll('.social-card');
  cards.forEach(card => {
    card.setAttribute('draggable', 'false');
  });

  // Handle pointer/mouse events properly on links
  track.addEventListener('dragstart', (e) => e.preventDefault());

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.1 });
  observer.observe(outer);

  const onStart = (e) => {
    isPressed = true;
    lastX = e.clientX;
    scrollLeftStart = outer.scrollLeft;
    lastTime = Date.now();
    velocity = 0;

    if (outer.setPointerCapture) {
      outer.setPointerCapture(e.pointerId);
    }

    outer.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
    document.body.classList.add('is-marquee-dragging');
  };

  const onMove = (e) => {
    if (!isPressed) return;

    // Crucial for mobile: prevent horizontal page scroll while dragging disc
    if (e.cancelable) e.preventDefault();

    const currentX = e.clientX;
    const delta = lastX - currentX;
    outer.scrollLeft += delta;

    const now = Date.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = velocity * 0.2 + (delta / dt) * 0.8;
    }

    lastX = currentX;
    lastTime = now;
    handleLoop();
  };

  const onEnd = () => {
    if (!isPressed) return;
    isPressed = false;
    outer.style.cursor = 'grab';
    document.body.style.userSelect = '';
    document.body.classList.remove('is-marquee-dragging');
    currentSpeed = velocity * 16.6;
  };

  outer.addEventListener('pointerdown', onStart);
  outer.addEventListener('pointermove', onMove);
  outer.addEventListener('pointerup', onEnd);
  outer.addEventListener('pointercancel', onEnd);

  outer.addEventListener('mouseenter', () => { isHovered = true; });
  outer.addEventListener('mouseleave', () => { isHovered = false; });

  function handleLoop() {
    // Jump BEFORE hitting hard edges (0 or maxScroll)
    // for seamless circular scroll in both directions
    const margin = setWidth * 0.3;

    if (outer.scrollLeft >= setWidth * 2 - margin) {
      outer.scrollLeft -= setWidth;
    } else if (outer.scrollLeft <= margin) {
      outer.scrollLeft += setWidth;
    }
  }

  function step() {
    if (isVisible) {
      if (!isPressed) {
        outer.scrollLeft += currentSpeed;

        if (!isHovered) {
          // Rulemanes: extremely low friction
          currentSpeed *= 0.9998;

          // return to base movement only when almost stopped
          if (Math.abs(currentSpeed) < 0.1) {
            currentSpeed += (baseSpeed - currentSpeed) * 0.005;
          }
        } else {
          currentSpeed *= 0.85;
          if (Math.abs(currentSpeed) < 0.01) currentSpeed = 0;
        }

        handleLoop();
      }

      // Proximity logic
      const outerRect = outer.getBoundingClientRect();
      const centerX = outerRect.left + outerRect.width / 2;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(centerX - cardCenter);
        const proximity = Math.max(0, 1 - (dist / (outerRect.width / 1.5)));
        card.style.setProperty('--proximity', proximity.toFixed(3));

        if (proximity > 0.85) card.classList.add('is-active');
        else card.classList.remove('is-active');
      });
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
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
  // Init Theme
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }
  updateThemeLabel();

  // Init Language
  const savedLang = localStorage.getItem('lang') || 'es';
  setLanguage(savedLang);

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
