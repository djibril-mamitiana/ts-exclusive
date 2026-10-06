# Architecture TS EXCLUSIVE

## Stack
- **Front et serveur :** Nuxt 4 (Vue 3, rendu serveur) avec Nitro (Node.js).
- **Base de données :** PostgreSQL (Neon), accès par `pg`. Les tables sont créées au démarrage (`server/plugins/init-db.ts`).
- **Authentification :** sessions signées (JWT HS256, cookie httpOnly 7 jours), mots de passe hachés avec scrypt.
- **Emails :** nodemailer, activé uniquement si les variables SMTP sont définies.
- **Hébergement :** Vercel, déploiement automatique à chaque `git push` sur `main`.

## Dossiers
| Dossier | Rôle |
|---|---|
| `app/pages` | Pages publiques (FR à la racine, EN sous `/en`) et `app/pages/admin` |
| `app/components` | Composants réutilisables (header, mosaïque services, catalogue flotte, formulaire de devis, CRUD admin générique) |
| `app/layouts` | `default` (site) et `admin` |
| `app/i18n` | Textes FR/EN (`messages.ts`) et liste des textes modifiables (`editable.ts`) |
| `app/plugins/motion.ts` | Animations légères : `v-reveal`, `v-parallax` |
| `server/api` | API publique (`content`, `settings`, `texts`, `quotes`) et API admin (`/api/admin/*`) |
| `server/utils` | Base de données, authentification, emails, traductions de départ |

## Routes publiques
`/`, `/services`, `/services/:slug`, `/flotte`, `/destinations`, `/corporate`, `/hospitality`, `/evenements`, `/a-propos`, `/tarifs`, `/contact`, plus les mêmes sous `/en`. `/sitemap.xml` et `/robots.txt`.

## Base de données
| Table | Contenu |
|---|---|
| `users` | Comptes admin / éditeur (email, hash du mot de passe, rôle) |
| `settings` | Téléphone, WhatsApp, email, adresse, réseaux sociaux |
| `services` | Services (titre, sous-titre, description, points inclus, icône, image, ordre, traduction EN) |
| `offers` | Offres et prix de la plaquette |
| `vehicles` | Flotte (catégorie, passagers, bagages, usage, image, traduction EN) |
| `destinations` | Destinations (nom, image, description, traduction EN) |
| `partners` | Catégories de partenaires et clients |
| `testimonials`, `faqs` | Témoignages et questions fréquentes |
| `quotes` | Demandes de devis (statut, notes internes) |
| `texts` | Textes du site modifiés depuis l'admin (FR et EN) |
| `media` | Images téléversées (stockées en base) |

Les contenus traduisibles ont une colonne `en` (JSON) : le français est la valeur de base, l'anglais la surcharge quand elle est renseignée.

## Rôles
- **Administrateur :** accès complet, gestion des comptes.
- **Éditeur :** contenu et devis, sans la gestion des comptes.
