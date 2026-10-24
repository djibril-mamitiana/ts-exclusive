# Architecture TS EXCLUSIVE

Code source : https://github.com/gingerrhr-ui/ts-exclusive · Site en ligne : https://ts-exclusive.vercel.app

## Stack
- **Front et serveur :** Nuxt 4 (Vue 3, rendu serveur) avec Nitro (Node.js).
- **Base de données :** PostgreSQL (Neon), accès par `pg`. Les tables sont créées au démarrage (`server/plugins/init-db.ts`) ; les contenus fournis par le client sont appliqués une seule fois (voir « Migrations de contenu »).
- **Authentification :** sessions signées (JWT HS256 avec `jose`, cookie httpOnly 7 jours), mots de passe hachés avec scrypt.
- **Emails :** nodemailer, activé uniquement si les variables SMTP sont définies.
- **Mouvement :** `lenis` (défilement fluide) et deux plugins maison, sans autre bibliothèque d'animation.
- **Hébergement :** Vercel, déploiement automatique à chaque `git push` sur `main`.
- **Langues :** français et anglais sans module externe (voir « Langues »).

## Dossiers
| Dossier | Rôle |
|---|---|
| `app/pages` | Pages publiques (FR à la racine, EN sous `/en`) et `app/pages/admin` |
| `app/components` | Site : en-tête et menu, mosaïque et tuiles de services, bloc conciergerie, tuile flotte, catalogue flotte, explorateur de destinations, formulaire de devis, appel final. Admin : CRUD générique, carte d'image, sélecteur de médiathèque |
| `app/layouts` | `default` (site) et `admin` |
| `app/i18n` | Textes FR/EN (`messages.ts`) et liste des textes modifiables (`editable.ts`) |
| `app/composables/useSite.ts` | Réglages, textes, contenu, images (`useImg`), langue (`useLang`), lien WhatsApp, SEO |
| `app/utils` | `images.ts` (images par défaut et liste des emplacements `imageSlots`), `services.ts` (numérotation, service à part, découpage des textes), `madagascar.ts` (contour et villes de la carte), `prepareImage.ts` (réduction des photos avant envoi) |
| `app/plugins` | `motion.ts` (`v-reveal`, `v-parallax`, `v-count`) et `fx.client.ts` (défilement fluide, titres mot à mot, parcours, rideau de pages) |
| `app/assets/css` | Feuilles du site, appliquées dans l'ordre : `site.css`, `site2.css`, `site3.css`, `site4.css` (design actuel et or accentué, dernière feuille) ; `admin.css`, `admin2.css`, `admin3.css` pour l'administration |
| `server/api` | API publique (`content`, `settings`, `texts`, `images`, `media/:id`, `quotes`) et API admin (`/api/admin/*`) |
| `server/routes` | `sitemap.xml` et `robots.txt` |
| `server/utils` | Base de données, authentification, emails, traductions de départ, contenus finaux du client |
| `public` | Logos (`img/logo.svg`, `img/logo-light.svg`, PNG), icône du site (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`), photos de la flotte (`img/fleet`), photo du hero |

## Routes publiques
`/`, `/services`, `/services/:slug`, `/flotte`, `/destinations`, `/corporate`, `/hospitality`, `/evenements`, `/a-propos`, `/tarifs`, `/contact`, plus les mêmes sous `/en`. `/sitemap.xml` et `/robots.txt`.

## Administration (`/admin`)
Tableau de bord, demandes de devis, **images du site** (`/admin/images`), flotte, services, offres et prix, destinations, partenaires, témoignages, FAQ, textes du site, médiathèque, utilisateurs, coordonnées. Les pages d'administration ne sont pas rendues côté serveur (`routeRules`).

## Base de données
| Table | Contenu |
|---|---|
| `users` | Comptes admin / éditeur (email, hash du mot de passe, rôle) |
| `settings` | Téléphone, WhatsApp, email, adresse, réseaux sociaux |
| `services` | Services (titre, sous-titre, accroche, description, liste, note, clôture, bouton, icône, image, case « service à part », ordre, traduction EN) |
| `offers` | Offres (nom, prix affiché s'il est renseigné, options, mise en avant) |
| `vehicles` | Flotte (catégorie, accroche, description, passagers, bagages, usage, image, fond noir, traduction EN) |
| `destinations` | Destinations (nom, image, description, traduction EN) |
| `partners` | Catégories de partenaires et clients |
| `testimonials`, `faqs` | Témoignages et questions fréquentes |
| `quotes` | Demandes de devis (statut, notes internes) |
| `texts` | Textes du site modifiés depuis l'admin (FR et EN) |
| `site_images` | Images des pages choisies depuis l'admin (emplacement, adresse de l'image) |
| `media` | Images téléversées (stockées en base) |
| `migrations` | Repères des contenus appliqués une seule fois |

Les contenus traduisibles ont une colonne `en` (JSON) : le français est la valeur de base, l'anglais la surcharge quand elle est renseignée.

## Langues
- Chaque page existe en français (racine) et en anglais (`/en`) : les routes sont dupliquées par `pages:extend`.
- Les textes fixes sont dans `app/i18n/messages.ts` ; en français tout est en français et en anglais tout est en anglais (seuls TS EXCLUSIVE et les mots malgaches restent identiques).
- Le contenu en base est traduit par la colonne `en`, fusionnée par `/api/content?lang=`.
- Les textes modifiés dans l'admin (table `texts`) remplacent les textes par défaut.

## Images
- Chaque image du site est un **emplacement** défini dans `app/utils/images.ts` (`imageSlots`) avec une image par défaut. L'admin enregistre un remplacement dans `site_images` ; `useImg('home.hero')` renvoie le remplacement s'il existe, sinon l'image par défaut.
- Les images des services, des véhicules et des destinations sont dans leurs tables (colonne `image`) ; les services sans image utilisent une photo par défaut.
- Les images téléversées sont servies par `/api/media/12.jpg` (l'extension permet de reconnaître un détourage PNG ou WebP) avec un cache d'un an.
- Avant l'envoi, le navigateur réduit les grandes photos à 2400 px (JPEG, ou WebP si l'image est transparente) pour rester sous la limite de 4,5 Mo de Vercel ; le serveur refuse au-delà de 4 Mo.
- Supprimer une image de la médiathèque remet les emplacements des pages et des services à leur image par défaut ; elle est refusée tant qu'un véhicule ou une destination l'utilise.

## Migrations de contenu
Les contenus finaux du client sont appliqués une fois, au démarrage, et enregistrés dans `migrations` : `content_v2` (slogan, accroche, valeurs, sept services : `finalContent.ts`), `fleet_v3` (quatre véhicules : `fleetContent.ts`), `content_v3` (`contentV3.ts`), `patch_fr_1` et `patch_fr_2` (corrections de langue : `contentPatches.ts`). Les modifications faites ensuite dans l'admin ne sont jamais écrasées.

## Rôles
- **Administrateur :** accès complet, gestion des comptes.
- **Éditeur :** contenu et devis, sans la gestion des comptes.

## Variables d'environnement
`DATABASE_URL`, `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SITE_URL`, et facultativement `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO` (voir `.env.example`).
