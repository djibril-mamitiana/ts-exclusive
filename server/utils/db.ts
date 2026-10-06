import pg from 'pg'

let pool: pg.Pool | null = null

export function db() {
  if (!pool) {
    const url = useRuntimeConfig().databaseUrl
    if (!url) throw new Error('DATABASE_URL manquant')
    pool = new pg.Pool({ connectionString: url, max: 5, ssl: { rejectUnauthorized: false } })
  }
  return pool
}

export async function query<T = any>(text: string, params: any[] = []): Promise<T[]> {
  const res = await db().query(text, params)
  return res.rows as T[]
}

// Tables gérables depuis l'admin : colonnes autorisées en écriture.
// "en" contient les traductions anglaises ({ champ: valeur }).
export const adminTables: Record<string, { cols: string[]; json?: string[]; order: string }> = {
  vehicles: { cols: ['name', 'category', 'tagline', 'description', 'passengers', 'bags', 'usage', 'image', 'dark_bg', 'sort', 'active', 'en'], json: ['en'], order: 'sort, id' },
  services: { cols: ['slug', 'title', 'subtitle', 'description', 'bullets', 'icon', 'image', 'sort', 'active', 'en'], json: ['bullets', 'en'], order: 'sort, id' },
  offers: { cols: ['name', 'price', 'target', 'options', 'highlight', 'sort', 'active', 'en'], json: ['options', 'en'], order: 'sort, id' },
  testimonials: { cols: ['name', 'role', 'org', 'quote', 'sort', 'active', 'en'], json: ['en'], order: 'sort, id' },
  faqs: { cols: ['question', 'answer', 'sort', 'active', 'en'], json: ['en'], order: 'sort, id' },
  destinations: { cols: ['slug', 'name', 'image', 'description', 'sort', 'active', 'en'], json: ['en'], order: 'sort, id' },
  partners: { cols: ['name', 'sort', 'active', 'en'], json: ['en'], order: 'sort, id' }
}

export const quoteStatuses = ['Nouveau', 'En cours', 'Devis envoyé', 'Accepté', 'Refusé']
