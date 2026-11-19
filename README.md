# TS EXCLUSIVE

Site vitrine bilingue (FR / EN) avec espace administrateur. Nuxt 4, Node.js, PostgreSQL (Neon).

- Code source : https://github.com/gingerrhr-ui/ts-exclusive
- Site en ligne : https://velys-group.com (espace de gestion : `/admin`)

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
- Images du site : remplacement de toutes les images affichées (pages, menu, logos, flotte, services, destinations) avec retour à l'image d'origine
- Médiathèque : envoi d'images (stockées en base, 4 Mo max ; les grandes photos sont réduites automatiquement avant l'envoi)
- Utilisateurs : rôles Administrateur (accès complet) et Éditeur (contenu et devis)
- Paramètres : téléphone, WhatsApp, email, adresse, réseaux sociaux

## Compilation et déploiement

    npm run build                    # compilation et minification (Nuxt, Vite, Nitro) vers le dossier .output
    node .output/server/index.mjs

`npm run build` compile le projet pour la production : le JavaScript est minifié (42 fichiers, 372 Ko, soit 126 Ko en brotli), les feuilles de style du site sont fusionnées en un fichier minifié (81 Ko), le HTML est compact et le serveur Nitro est empaqueté dans `.output`. Les SVG de `public/` sont minifiés avec SVGO et les images de la médiathèque sont servies en WebP à la largeur utile.

Le projet est déployé sur **Hostinger**. Le serveur écoute sur le port 3000 (variable `PORT`). Penser à définir toutes les variables d'environnement sur l'hébergeur.

## Documentation

Voir le dossier `docs/` : cahier des charges (`CAHIER-DES-CHARGES.docx`), architecture, backlog, identité visuelle, wireframes et suivi tâche par tâche de l'estimation.
