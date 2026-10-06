export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/site.css'],
  pageTransition: { name: 'ts-page', mode: 'out-in' },
  routeRules: { '/admin/**': { ssr: false } },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    authSecret: process.env.AUTH_SECRET,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    mailFrom: process.env.MAIL_FROM,
    mailTo: process.env.MAIL_TO,
    public: { siteUrl: process.env.SITE_URL || 'http://localhost:3000' }
  },
  hooks: {
    // Duplique toutes les pages publiques sous /en pour la version anglaise
    'pages:extend'(pages) {
      const copies = pages
        .filter(p => !p.path.startsWith('/admin'))
        .map(p => ({ ...p, name: `en-${p.name}`, path: '/en' + (p.path === '/' ? '' : p.path) }))
      pages.push(...copies)
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'TS EXCLUSIVE | Executive & Private Mobility',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0c2646' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap' }
      ]
    }
  }
})
