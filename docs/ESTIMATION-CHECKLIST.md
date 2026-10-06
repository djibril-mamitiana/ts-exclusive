# Suivi de l'estimation (68 jours) : tâche par tâche

Légende : **Fait** = livré et testé. **À configurer** = livré, il manque une information du client.

## Sprint 0 : Cadrage du projet (9 j)
| Tâche | État | Où |
|---|---|---|
| Apprentissage de Nuxt et Node.js | Fait | Projet Nuxt 4 / Nitro |
| Configuration des environnements | Fait | `.env.example`, Vercel, Neon, GitHub |
| Analyse des besoins et spécifications | Fait | Arborescence, plaquette, visuels du client analysés |
| Architecture et base de données | Fait | `docs/ARCHITECTURE.md`, `server/plugins/init-db.ts` |
| Product Backlog et planification des sprints | Fait | `docs/BACKLOG.md` |

## Sprint 1 : Identité visuelle et interface (8 j)
| Tâche | État | Où |
|---|---|---|
| Analyse de l'identité visuelle | Fait | `docs/DESIGN.md` |
| Wireframes | Fait (schémas simples) | `docs/wireframes-desktop.svg`, `wireframes-mobile.svg` |
| Maquettes desktop et mobile | Fait | Site en ligne, desktop et mobile |
| Éléments graphiques | Fait | Logo (2 versions), icônes, photographies |
| Intégration, documentation, Sprint Review | Fait | `docs/DESIGN.md` |

## Sprint 2 : Authentification et administration (6 j)
| Tâche | État | Où |
|---|---|---|
| API Node.js et authentification par rôles | Fait | `server/utils/auth.ts`, `/api/admin/*` |
| Gestion des utilisateurs (Admin, Éditeur) | Fait | `/admin/utilisateurs` |
| Tableau de bord admin | Fait | `/admin` |
| Paramètres du site | Fait | `/admin/parametres` |

## Sprint 3 : Accueil (8 j)
| Tâche | État | Où |
|---|---|---|
| Menu, footer, boutons Devis / WhatsApp | Fait | `SiteHeader.vue`, layout `default.vue` |
| Hero et section promesse | Fait | Hero, piliers, introduction |
| Sections Services et Pourquoi TS EXCLUSIVE | Fait | Mosaïque de services, section « Why TS EXCLUSIVE » (accueil et à propos) |
| Sections Destinations, Partners et FAQ | Fait | Explorateur de destinations avec carte, partenaires, FAQ |
| Section Témoignages | Fait, **à configurer** | Affichée dès qu'un témoignage est ajouté dans l'admin (aucun inventé) |
| Intégration responsive | Fait | Mobile, tablette, desktop |

## Sprint 4 : Services (10 j)
| Tâche | État | Où |
|---|---|---|
| CRUD des services | Fait | `/admin/services` (FR et EN) |
| Pages Executive, Private Transfer, Corporate, Event, Delegation, Long-Term | Fait | `/services/:slug` |
| Parcours Airport Transfer | Fait | Étapes Aéroport, Accueil, Bagages, Véhicule, Hôtel |
| Page Corporate (4 formules) | Fait | `/corporate` |
| Page Hospitality et Devenir partenaire | Fait | `/hospitality` |
| Page Events & Protocol | Fait | `/evenements` |

## Sprint 5 : Flotte (5 j)
| Tâche | État | Où |
|---|---|---|
| CRUD catégories et véhicules | Fait | `/admin/flotte` |
| Page Fleet par usage | Fait | `/flotte` avec filtre par catégorie |
| Bouton demander la disponibilité | Fait | Formulaire pré-rempli avec le véhicule |

## Sprint 6 : Demande de devis et contact (10 j)
| Tâche | État | Où |
|---|---|---|
| Liste des demandes avec statuts | Fait | `/admin/devis` |
| Détail, notes internes, export CSV | Fait | `/admin/devis` |
| Formulaire de demande de devis | Fait | `/contact` |
| Validation et anti-spam | Fait | Champ piège, contrôles serveur |
| Emails de confirmation et notification | Fait, **à configurer** | Nécessite `SMTP_*` et `MAIL_TO` sur Vercel |

## Sprint 7 : Gestion de contenu (7 j)
| Tâche | État | Où |
|---|---|---|
| Témoignages et FAQ | Fait | `/admin/temoignages`, `/admin/faq` |
| Partenaires et destinations | Fait | `/admin/partenaires`, `/admin/destinations` |
| Textes de la page d'accueil | Fait | `/admin/textes` (accueil et sous-titres des pages, FR et EN) |
| Images et documents | Fait | `/admin/mediatheque` et envoi direct dans les fiches |
| Affichage des contenus | Fait | Le site lit tout depuis la base |

## Sprint 8 : Langues, SEO et performance (5 j)
| Tâche | État | Où |
|---|---|---|
| Site en français et anglais | Fait | Pages sous `/en`, contenus traduits depuis l'admin |
| SEO | Fait | Balises, hreflang, `sitemap.xml`, `robots.txt`, données structurées |
| Optimisation des performances | Fait | Images redimensionnées et chargées à la demande, animations `transform` / `opacity` |

Les tâches « Tests, debug et Sprint Review » de chaque sprint correspondent aux tests réalisés en cours de route (pages, API, rôles, formulaire, mobile).
