export interface Project {
  featured: boolean;
  featuredOrder?: number;
  status?: "Finalizado" | "En desarrollo" | "MVP" | "Demo";
  title: string;
  description: string;
  image?: string;
  link?: string;
  category: string;
  technologies: string[];
}

export const projects: Project[] = [

  {
    title: "Dashboard Laikad – v2",
    category: "Sistemas",
    featured: true,
    featuredOrder: 4,
    description:
      "Evolución del panel de campañas con Next.js, enfocada en performance, UX y escalabilidad. Incorpora filtros avanzados, rankings y comunicación en tiempo real para un seguimiento más preciso del tráfico.",
    image: "/projects/optimized/nuevo-front.webp",
    technologies: ["Next.js"],
    link: "https://admin.laikad.com/app/#/app/dashboard/list",
  },
  {
    title: "Dashboard Laikad – v1",
    category: "Sistemas",
    featured: false,
    description:
      "Dashboard de análisis de campañas desarrollado en AngularJS para el monitoreo de clics y métricas clave en tiempo real. Permite visualizar rendimiento de campañas y optimizar decisiones basadas en datos.",
    image: "/projects/optimized/dashh.webp",
    technologies: ["AngularJS"],
  },
  {
    title: "Website Laikad",
    category: "Web",
    featured: false,
    description:
      "Sitio institucional de agencia de marketing digital, orientado a comunicar servicios, propuesta de valor y enfoque basado en análisis de datos y optimización de campañas.",
    link: "https://laikad.com",
    image: "/projects/optimized/laikad-app.webp",
    technologies: ["WordPress"],
  },
  {
    title: "Inspira – Ecosistema Digital de Transformación Personal",
    category: "Web",
    featured: false,
    description:
    "Plataforma web gamificada enfocada en el crecimiento personal y la construcción de hábitos, con contenido educativo, seguimiento de objetivos y mecánicas de motivación. Incorpora inteligencia artificial para enriquecer la interacción y personalizar la experiencia de aprendizaje.",
  link: "https://appinspira.com.mx/",
  image: "/projects/optimized/inspira.webp",
  technologies: ["Inteligencia artificial"],
},
{
    title: "IMPULSA – Plataforma Digital para Negocios y Captación de Leads",
    category: "Web",
    featured: false,
    description:
    "Plataforma web desarrollada para IMPULSA, una agencia enfocada en potenciar negocios mediante soluciones de marketing, desarrollo y diseño digital. El proyecto incluye una Home corporativa, páginas especializadas de Marketing, Desarrollo, Diseño y Proyectos, formularios interactivos de diagnóstico y captación de leads, integración directa con WhatsApp y Google Calendar para agendar reuniones, APIs internas y persistencia de información mediante Prisma y PostgreSQL. La solución fue desarrollada con Next.js, React, TypeScript y Tailwind CSS, con una experiencia responsive optimizada para desktop, tablet y dispositivos móviles, y desplegada en Netlify con configuración de variables de entorno y servicios backend.",
  link: "https://effervescent-pithivier-461217.netlify.app/",
  image: "/projects/optimized/impulsa.webp",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
},
{
    title: "LazaroCode – Soluciones Digitales y Desarrollo de Software",
    category: "Web",
    featured: false,
    description:
    "Proyecto tecnológico enfocado en crear soluciones digitales a medida para empresas, emprendimientos y profesionales. LazaroCode combina desarrollo web y mobile, e-commerce, automatización de procesos, integraciones con sistemas empresariales e inteligencia artificial para transformar necesidades de negocio en productos digitales funcionales. El enfoque abarca desde sitios orientados a captación y ventas hasta plataformas, sistemas de gestión y herramientas personalizadas, acompañando cada proyecto desde la idea inicial hasta su implementación y evolución.",
  link: "https://lazarocode.com/",
  image: "/projects/optimized/lazarocode.webp",
  technologies: [],
},
{
    title: "Mano a Mano – Marketplace Mobile de Servicios",
    category: "Aplicaciones móviles",
    featured: true,
    featuredOrder: 2,
    description:
    "Aplicación móvil desarrollada para Android e iOS que conecta personas que necesitan resolver tareas o contratar servicios con prestadores disponibles en su zona. La plataforma permite explorar servicios sin necesidad de registrarse, buscar por categorías y ubicación, publicar necesidades, enviar solicitudes directas, recibir propuestas, seleccionar prestadores y gestionar acuerdos de trabajo. También incorpora perfiles públicos, reputación y reseñas, disponibilidad y coordinación de horarios, chat entre las partes, notificaciones, soporte y carga de evidencias mediante cámara o galería. La solución fue desarrollada con React Native, Expo y TypeScript, integrada con una arquitectura backend de servicios independientes para autenticación, operaciones principales, chat, notificaciones y procesamiento multimedia, con testing automatizado, QA en dispositivos físicos y preparación de builds para Android e iOS.",
  image: "/projects/optimized/mano-a-mano.webp",
  technologies: ["React Native", "Expo", "TypeScript"],
},
{
    title: "Nexo Charge – Plataforma SaaS de Gestión de Cargadores Eléctricos",
    status: "En desarrollo",
    category: "Sistemas",
    featured: true,
    featuredOrder: 1,
    description:
    "Plataforma SaaS multiempresa desarrollada para Nexo Robótica SRL, orientada a digitalizar la administración y supervisión de redes de carga para vehículos eléctricos. Incluye un portal empresarial para administrar estaciones, cargadores, conectores, tarifas, sesiones, usuarios, reportes, alertas y mantenimiento; un panel de supervisión operativa y comercial; y un portal para conductores con perfiles, consulta de estaciones y escaneo de códigos QR. Desarrollada con Next.js, React, TypeScript, NestJS, PostgreSQL y Keycloak, incorpora autenticación, control de roles y aislamiento de datos entre empresas. La integración OCPP 1.6J con CitrineOS y el procesamiento de telemetría, mediciones de energía y sesiones se encuentran en fase experimental y bajo pruebas de laboratorio; no se presentan como operación productiva confirmada.",
  image: "/projects/optimized/nexo-charge.webp",
  technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Keycloak"],
},

{
    title: "BioCheck – Aplicación Móvil de Control de Asistencia y Reconocimiento Facial",
    category: "Aplicaciones móviles",
    featured: true,
    featuredOrder: 3,
    description:
    "Aplicación móvil empresarial desarrollada con Flutter y FlutterFlow para Android e iOS, orientada a digitalizar el control de asistencia, la gestión de jornadas laborales y la verificación de identidad de empleados. La plataforma incorpora autenticación segura, gestión de sesiones, cuatro tipos de marcaje (entrada y salida laboral, llegada y salida de ubicación), validación de ubicación mediante GPS y geocercas, historial de asistencias con filtros y paginación, y reconocimiento facial mediante captura de video y evaluación de prueba de vida. También integra almacenamiento cifrado de evidencias, sincronización automática de registros offline, prevención de duplicados mediante UUID y comunicación segura con un backend empresarial basado en Odoo 15 y módulos de BioCheck/Argil. El desarrollo incluye APIs personalizadas, pruebas automatizadas, validación funcional en Android y un entorno de testing integrado con el sistema original, manteniendo la preparación de iOS y su distribución como parte de la evolución del proyecto.",
  image: "/projects/optimized/biocheck.webp",
  technologies: ["Flutter", "FlutterFlow", "Odoo 15"],
},


{
    title: "MudarExpress – Plataforma Digital de Mudanzas y Logística",
    category: "Web",
    featured: false,
    description:
    "Plataforma digital diseñada para transformar la experiencia de contratar y planificar una mudanza. La solución presenta rutas y servicios de forma dinámica, con especial foco en traslados entre Patagonia, Buenos Aires, Tierra del Fuego y Ushuaia, además de cobertura nacional e internacional. Incorpora mudanzas compartidas para optimizar espacio y costos, visualización interactiva de recorridos, avisos de oportunidades en ruta, experiencias de clientes y un asistente integrado que acompaña al usuario desde la consulta inicial hasta el contacto con la empresa.",
  image: "/projects/optimized/mudarexpress.webp",
  technologies: [],
  link: "https://sunny-fudge-f43b49.netlify.app/",
},
{
    title: "Groove (Fest-Go)",
    category: "E-commerce",
    featured: true,
    featuredOrder: 5,
    description:
      "Plataforma SaaS para la gestión de eventos y venta de tickets online. Permite crear eventos, administrar tandas de entradas, procesar ventas y validar accesos mediante QR. Diseñada como un sistema escalable, seguro y orientado a alto volumen de usuarios.",
    link: "https://fest-go.com/",
    image: "/projects/optimized/festgo.webp",
    technologies: ["Next.js", "Node.js", "Express", "AWS Cognito"],
  },
  {
    title: "Sistema de Barras Groove (Fest-Go Gest)",
    category: "Sistemas",
    featured: false,
    description:
      "Plataforma web para la gestión integral de barras en eventos, discotecas y festivales. Permite administrar usuarios por rol (Admin y Bartender), productos, stock, gastos y múltiples barras por evento. Incluye generación de tickets con impresión térmica, control de stock por barra, reportes, auditorías y métricas en tiempo real sobre una arquitectura API REST modular.",
    image: "/projects/optimized/bartender.webp",
    technologies: [],
  },
  {
    title: "Fest-Go System Table – API de gestión de restaurantes y barras",
    category: "Sistemas",
    featured: false,
    description:
      "Backend/API REST documentada (OAS 3.0) para la gestión integral de restaurantes y barras en eventos: mesas, pedidos, inventario con proveedores, reservas con CRM, empleados y roles, facturación y reportes. Incluye autenticación JWT (Bearer), auditoría completa, dashboard en tiempo real, reportes PDF/Excel e integración con impresión térmica ESC/POS. Arquitectura modular con NestJS + TypeScript y DynamoDB en AWS, con validación de datos, configuración centralizada y paginación estándar (page/limit) para endpoints de listas.",
    image: "/projects/optimized/sistemabar.webp",
    technologies: ["NestJS", "TypeScript", "DynamoDB", "AWS"],
  },
  {
    title: "App Turística Multiplataforma (Flutter) – MVP",
    status: "MVP",
    category: "Aplicaciones móviles",
    featured: false,
    description:
      "MVP multiplataforma (Android/iOS) desarrollado en Flutter con alta fidelidad a diseño Figma. Incluye 12 pantallas clave (onboarding, login, feed, detalle, mapa, puntos y perfil), navegación fluida, arquitectura escalable, mocks JSON para simular servicios REST, soporte básico ES/EN y criterios mínimos de accesibilidad. Entrega compilable con pruebas funcionales, documentación de build y material de demo (capturas/video).",
    image: "/projects/optimized/aventura.webp",
    technologies: ["Flutter"],
  },
  {
    title: "Ferretería Candelaria – Catálogo B2B en WordPress",
    category: "Web",
    featured: false,
    description:
    "Sitio web corporativo y catálogo digital desarrollado en WordPress para una ferretería, orientado a la presentación de productos, servicios y solicitudes de cotización. El proyecto incluye Home, páginas internas, catálogo WooCommerce, categorías de productos, ficha de producto, formularios, sección de contratistas, shopper virtual, blog, área Mi Cuenta y diseño responsive. Se integraron funcionalidades B2B con B2BKing, catálogo interactivo con DearFlip y gestión de empleos con WP Job Manager, manteniendo una identidad visual profesional y una experiencia optimizada para desktop y mobile.",
  link: "https://nivaxel.site/ferreteriacandelaria/",
  image: "/projects/optimized/ferreteria-candelaria.webp",
  technologies: ["WordPress", "WooCommerce"],
},
{
    title: "Fundación Mujeres Emprendedoras – Plataforma Web y CMS",
    category: "Web",
    featured: true,
    featuredOrder: 6,
    description:
    "Plataforma web institucional desarrollada para la Fundación Mujeres Emprendedoras Santa Fe, orientada a fortalecer su comunidad y centralizar la gestión de contenidos. Incluye sitio público responsive, directorio de socias, capacitaciones, alianzas, colaboradores, proyectos, eventos y beneficios exclusivos, junto con un panel administrativo propio para gestionar la información sin necesidad de modificar código. La solución integra autenticación, base de datos y almacenamiento con Supabase, permisos mediante RLS, gestión dinámica de convenios y descuentos, carga de imágenes, filtros, SEO y despliegue productivo en Netlify.",
  link: "https://fme-santa-fe.netlify.app/",
  image: "/projects/optimized/fme-santa-fe.webp",
  technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
},
{
    title: "Dr. Gabriel Hernández De Rubín – Sitio Web Médico Especializado",
    category: "Web",
    featured: false,
    description:
    "Sitio web profesional desarrollado para un especialista en Angiología, Cirugía Vascular y Endovascular, enfocado en transmitir confianza, autoridad médica y facilitar la captación de pacientes. La plataforma incluye presentación profesional, páginas de padecimientos vasculares, recursos educativos, segunda opinión médica, ubicaciones de consultorios con acceso a Google Maps, contacto directo por WhatsApp, perfil de Doctoralia, participaciones en medios y diseño responsive optimizado para desktop y dispositivos móviles. El proyecto fue desarrollado con Next.js y una arquitectura orientada a rendimiento, claridad de contenidos, accesibilidad y conversión.",
  link: "https://frolicking-entremet-1ad7f8.netlify.app/",
  image: "/projects/optimized/dr-gabriel-hernandez.webp",
  technologies: ["Next.js"],
},
{
    title: "Konekta Hub PR – Comunidad, Recursos y Oportunidades",
    category: "Web",
    featured: false,
    description:
    "Sitio web desarrollado en WordPress para una plataforma orientada a conectar jóvenes con recursos, orientación, comunidad y oportunidades en Puerto Rico. El proyecto incluyó la implementación de la Home y páginas internas siguiendo un Site Map, wireframe y dirección visual previamente aprobados, con navegación completa, sección de noticias con filtrado por categorías, recursos, programas, llamados a la acción y una experiencia responsive optimizada para desktop, tablet y mobile. También se trabajó en identidad visual, jerarquía de contenidos, componentes reutilizables, microinteracciones, navegación mobile y ajustes generales de QA para dejar el sitio funcional y listo para revisión.",
  link: "https://nivaxel.site/konekta/",
  image: "/projects/optimized/konekta-hub-pr.webp",
  technologies: ["WordPress"],
},
  {
    title: "Flash Realty – Plataforma Inmobiliaria",
    category: "Web",
    featured: false,
    description:
    "Sitio web inmobiliario orientado a fortalecer la presencia digital de la marca y generar oportunidades comerciales. La plataforma presenta servicios de venta, alquiler y administración de propiedades, integra secciones de propiedades destacadas, testimonios, preguntas frecuentes, formularios de contacto y accesos directos a canales de comunicación. Diseñada para transmitir confianza, facilitar la navegación y convertir visitantes en potenciales clientes.",
  link: "https://nivaxel.site/flash/",
  image: "/projects/optimized/flash-realty.webp",
  technologies: [],
},
{
    title: "BCM App – Migración de Seguridad Mobile Cordova",
    category: "Aplicaciones móviles",
    featured: false,
    description:
    "Migración de seguridad crítica y modernización de una aplicación móvil empresarial desarrollada en Cordova/PhoneGap para Android e iOS. El proyecto incluyó almacenamiento seguro de credenciales con Secure Storage, refactorización del login y logout, adaptación de flujos críticos de órdenes de trabajo, altas, cambios de domicilio, modificación de conexión y equipamiento. También se optimizó el aprovisionamiento de equipos CPE/ONT, validación de potencia óptica, configuración WiFi, test de velocidad, persistencia de datos entre pantallas e integración con APIs REST del backend BCM, manteniendo la compatibilidad funcional de una app productiva.",
  image: "/projects/optimized/bcm-app.webp",
  technologies: ["Cordova", "PhoneGap"],
},
  {
    title: "Optimización y Deploy de Apps Mobile (Android & iOS)",
    category: "Aplicaciones móviles",
    featured: false,
    description:
      "Proyecto de desarrollo, optimización y estabilización de una aplicación mobile completa para Android e iOS. Incluyó análisis técnico y funcional, mejora de arquitectura, optimización de código y performance, resolución de errores críticos, implementación de buenas prácticas, testing integral (QA), generación de builds optimizados y publicación de releases en Google Play Store y Apple App Store. El resultado fue una app robusta, estable y lista para escalar en producción.",
    image: "/projects/optimized/qi.webp",
    technologies: [],
  },
  {
    title: "Meraki Veterinaria – Web Veterinaria 24 hs",
    category: "Web",
    featured: false,
    description:
    "Sitio web desarrollado para una veterinaria de Santa Fe, enfocado en presentar sus servicios y facilitar el contacto inmediato con clientes. Incluye información institucional, atención de urgencias e internación 24 hs, accesos directos a WhatsApp para consultas y turnos, llamados a la acción y una experiencia responsive optimizada para desktop y dispositivos móviles.",
  link: "https://meraki-veterinaria.pages.dev/",
  image: "/projects/optimized/meraki-veterinaria.webp",
  technologies: [],
},
  {
    title: "Farmacia Marquez City",
    category: "E-commerce",
    featured: false,
    description:
      "E-commerce farmacéutico orientado a la venta online de medicamentos y productos de salud, con catálogo dinámico, carrito de compras, pagos online y gestión de pedidos. Diseñado para ofrecer una experiencia de compra simple, segura y confiable.",
    
    image: "/projects/optimized/farmacia-marquez-city.webp",
    technologies: [],
  },
  {
    title: "Tony Refrigeración – Sitio Web Corporativo y Captación de Clientes",
    category: "Web",
    featured: true,
    featuredOrder: 7,
    description:
    "Diseño y desarrollo integral de un sitio web corporativo para Tony Refrigeración, empresa especializada en refrigeración comercial, cámaras frigoríficas y climatización en Santa Fe, Argentina. La plataforma fue desarrollada con Next.js, React, TypeScript y Tailwind CSS, incorporando una landing page moderna y responsive con presentación de servicios, sectores comerciales, galería visual, información institucional, preguntas frecuentes y llamados a la acción estratégicos. Se implementó una integración directa con WhatsApp mediante mensajes personalizados para cada servicio, facilitando las consultas y solicitudes de presupuesto. El proyecto también incluyó la integración de la identidad visual de la marca, animaciones, optimización SEO, accesibilidad, pruebas responsive y despliegue en Netlify. Adicionalmente, se creó y configuró la página empresarial de Facebook, con portada personalizada, servicios, información comercial y publicaciones orientadas a fortalecer la presencia digital del negocio.",
  link: "https://tonyrefrigeracion.netlify.app/",
  image: "/projects/optimized/tony-refrigeracion.webp",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
},
  {
    title: "Distribuidora El 17 – Sistema de Gestión de Inventario y Ventas",
    category: "Sistemas",
    featured: false,
    description:
    "Sistema web integral desarrollado a medida para digitalizar y centralizar la operación de una distribuidora. La plataforma incluye Punto de Venta (POS) con soporte para lectores de códigos de barras, gestión de productos, categorías, marcas y proveedores, control de stock independiente entre local y depósito, transferencias de mercadería, registro de compras y ventas, lotes y fechas de vencimiento, administración de precios e historial de movimientos. También incorpora autenticación con roles diferenciados para administradores y vendedores, impresión de tickets de venta y etiquetas de precios. Desarrollado con Next.js, React, TypeScript, PostgreSQL y Prisma, con una arquitectura Full Stack orientada a automatizar procesos, mejorar la trazabilidad del inventario y agilizar la operación diaria del negocio.",
  image: "/projects/optimized/distribuidora-el17.webp",
  technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
},
{
    title: "Lady Fashion Fit – Optimización E-commerce en Shopify",
    category: "E-commerce",
    featured: false,
    description:
    "Optimización integral de una tienda Shopify de moda femenina con foco en conversión, experiencia de compra y rendimiento comercial. El proyecto incluyó auditoría del funnel de ventas y checkouts abandonados, optimización de fichas de producto y copywriting orientado a conversión, mejoras de confianza y logística, análisis de reseñas y prueba social, revisión de Shopify Markets y métodos de pago, además de QA mobile-first. También se trabajó sobre estrategias de cross-selling, AOV y optimización del recorrido desde la ficha de producto hasta el checkout.",
  link: "https://ladyfashionfit.com/",
  image: "/projects/optimized/lady-fashion-fit.webp",
  technologies: ["Shopify"],
},
  {
    title: "Nabra MX – E-commerce de Calzado Femenino",
    category: "E-commerce",
    featured: true,
    featuredOrder: 8,
    description:
    "Tienda online desarrollada para una marca mexicana de calzado femenino, enfocada en ofrecer una experiencia de compra moderna, intuitiva y orientada a la conversión. La plataforma incluye catálogo de productos con variantes, carrito de compras, pasarela de pago y cálculo de envíos en tiempo real según la ubicación del cliente. También se trabajó en la optimización del flujo de compra, la navegación del catálogo, el diseño responsive y la administración de productos, pedidos y stock desde una solución escalable y fácil de gestionar.",
  link: "https://nabra.mx/",
  image: "/projects/optimized/nabra-mx.webp",
  technologies: [],
},
  {
    title: "App Android de despacho con QR",
    category: "Aplicaciones móviles",
    featured: false,
    description:
      "Aplicación Android para operaciones logísticas que permite escanear remitos mediante QR, registrar información de despacho y sincronizar datos en tiempo real. Pensada para agilizar procesos y mejorar la trazabilidad.",
    image: "/projects/optimized/formulario.webp",
    technologies: ["Android", "Google Apps Script", "Google Sheets"],
  },
];





















