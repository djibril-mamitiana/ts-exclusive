# TS EXCLUSIVE

Site vitrine bilingue (FR / EN) avec espace administrateur. Nuxt 4, Node.js, PostgreSQL (Neon).

## Lancer en local

    npm install
    cp .env.example .env     # puis renseigner les valeurs
    npm run dev              # http://localhost:3000

Au premier démarrage : les tables sont créées, le contenu de départ (services, offres, flotte, FAQ, traductions anglaises)
est inséré et le compte administrateur est créé à partir de ADMIN_EMAIL / ADMIN_PASSWORD.

## Variables d'environnement

| Variable | Rôle |
|---|---|
| DATABASE_URL | Connexion PostgreSQL (Neon) |
| AUTH_SECRET | Clé de signature des sessions (longue chaîne aléatoire) |
| ADMIN_EMAIL / ADMIN_PASSWORD | Premier compte administrateur |
| SITE_URL | URL publique du site (sitemap, SEO, hreflang) |
| SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS | Envoi des emails (facultatif) |
| MAIL_FROM, MAIL_TO | Expéditeur et destinataire des notifications de devis |

Sans SMTP, les demandes de devis sont enregistrées dans l'admin mais aucun email n'est envoyé.

## Pages

Public (FR à la racine, EN sous `/en`) : accueil, services (+ une page par service), flotte, corporate, hospitality,
événements, à propos, tarifs, contact / devis. Sitemap : `/sitemap.xml`, robots : `/robots.txt`.

## Administration (`/admin`)

- Tableau de bord, demandes de devis (statuts, notes internes, export CSV)
- Flotte, services, offres, destinations, partenaires, témoignages, FAQ : édition en français et en anglais
- Textes du site : titres et phrases de l'accueil et des pages, en français et en anglais
- Médiathèque : envoi d'images (stockées en base, 5 Mo max)
- Utilisateurs : rôles Administrateur (accès complet) et Éditeur (contenu et devis)
- Paramètres : téléphone, WhatsApp, email, adresse, réseaux sociaux

## Production

    npm run build
    node .output/server/index.mjs

Le serveur écoute sur le port 3000 (variable `PORT`). Penser à définir toutes les variables d'environnement sur l'hébergeur.

## Documentation

Voir le dossier `docs/` : architecture, backlog, identité visuelle, wireframes et suivi tâche par tâche de l'estimation.
