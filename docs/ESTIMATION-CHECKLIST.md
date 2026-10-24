# Suivi de l'estimation (68 jours) : tâche par tâche

Légende : **Fait** = livré et testé. **À configurer** = livré, il manque une information du client.
Code source : https://github.com/gingerrhr-ui/ts-exclusive · Mise à jour : 24 octobre 2026.

## Sprint 0 : Cadrage du projet (9 j)
| Tâche | État | Où |
|---|---|---|
| Apprentissage de Nuxt et Node.js | Fait | Projet Nuxt 4 / Nitro |
| Configuration des environnements | Fait | `.env.example`, Vercel, Neon, GitHub (gingerrhr-ui/ts-exclusive) |
| Analyse des besoins et spécifications | Fait | Arborescence, plaquette, visuels et contenus finaux du client analysés |
| Architecture et base de données | Fait | `docs/ARCHITECTURE.md`, `server/plugins/init-db.ts` |
| Product Backlog et planification des sprints | Fait | `docs/BACKLOG.md` |

## Sprint 1 : Identité visuelle et interface (8 j)
| Tâche | État | Où |
|---|---|---|
| Analyse de l'identité visuelle | Fait | `docs/DESIGN.md` |
| Wireframes | Fait (schémas simples, refaits le 24 octobre 2026 d'après l'accueil actuel) | `docs/wireframes-desktop.svg`, `wireframes-mobile.svg` |
| Maquettes desktop et mobile | Fait | Site en ligne, desktop et mobile |
| Éléments graphiques | Fait | Logo du client (2 versions SVG, monogramme TS), icônes, photographies |
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
| Hero et section promesse | Fait | Hero (photo, slogan, onglet « Voir les offres », chiffres clés), accroche et trois valeurs |
| Sections Services et valeurs | Fait | Mosaïque de services numérotés avec bouton d'action, bloc conciergerie privée VIP (service à part) ; la section « Pourquoi » a été remplacée par les trois valeurs |
| Sections Destinations, Partners et FAQ | Fait | Explorateur de destinations avec carte de Madagascar, partenaires, FAQ |
| Section Témoignages | Fait, **à configurer** | Affichée dès qu'un témoignage est ajouté dans l'admin (aucun inventé) |
| Intégration responsive | Fait | Mobile, tablette, desktop |

## Sprint 4 : Services (10 j)
| Tâche | État | Où |
|---|---|---|
| CRUD des services | Fait | `/admin/services` (FR et EN) |
| Pages des sept services (transferts aéroportuaires, mobilité exécutive, entreprises, événements, mise à disposition, voyage privé, conciergerie) | Fait | `/services/:slug` |
| Parcours Airport Transfer | Fait | Étapes Aéroport, Accueil, Bagages, Véhicule, Hôtel |
| Page Corporate (4 formules) | Fait | `/corporate` |
| Page Hospitality et Devenir partenaire | Fait | `/hospitality` |
| Page Events & Protocol | Fait | `/evenements` |

## Sprint 5 : Flotte (5 j)
| Tâche | État | Où |
|---|---|---|
| CRUD catégories et véhicules | Fait | `/admin/flotte` |
| Page Fleet par usage | Fait | `/flotte` avec filtre par catégorie ; quatre véhicules du client avec photos détourées |
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
| Images et documents | Fait | `/admin/images` (toutes les images du site), `/admin/mediatheque` et envoi direct dans les fiches |
| Affichage des contenus | Fait | Le site lit tout depuis la base |

## Sprint 8 : Langues, SEO et performance (5 j)
| Tâche | État | Où |
|---|---|---|
| Site en français et anglais | Fait | Pages sous `/en`, contenus traduits depuis l'admin, séparation stricte des deux langues |
| SEO | Fait | Balises, hreflang, `sitemap.xml`, `robots.txt`, données structurées, image de partage modifiable |
| Optimisation des performances | Fait | Images redimensionnées et chargées à la demande, animations `transform` / `opacity` |

Les tâches « Tests, debug et Sprint Review » de chaque sprint correspondent aux tests réalisés en cours de route (pages, API, rôles, formulaire, mobile).

## Évolutions demandées par le client (octobre 2026, hors estimation initiale)
| Tâche | État | Où |
|---|---|---|
| Nouveau design d'après le modèle du client | Fait | `app/assets/css/site4.css`, `docs/DESIGN.md` |
| Contenus finaux (slogan, accroche, trois valeurs, sept services, à propos) en français et en anglais | Fait, **à relire** par le client (traduction anglaise) | `server/utils/finalContent.ts` |
| Flotte finale : quatre véhicules, textes corrigés, photos détourées | Fait | `server/utils/fleetContent.ts`, `public/img/fleet` |
| Accroches percutantes, contenu et bouton d'action par service, conciergerie à part, numérotation des seuls services | Fait | `ServiceTile.vue`, `ServiceBlock.vue`, `ConciergeBand.vue`, `app/utils/services.ts` |
| Séparation stricte du français et de l'anglais | Fait | `app/i18n/messages.ts`, `server/utils/contentPatches.ts` |
| Carte de Madagascar fidèle, section Destinations sans élément coupé | Fait | `app/utils/madagascar.ts`, `DestinationExplorer.vue` |
| Parcours « L'expérience TS » : ronds qui se colorent quand la ligne les atteint | Fait | `app/plugins/fx.client.ts` |
| Nouveau logo du client et doré accentué | Fait | `public/img/logo*.svg`, `public/favicon.svg`, fin de `site4.css` |
| Gestion de toutes les images depuis l'administration | Fait | `/admin/images`, `app/utils/images.ts`, `server/api/images.get.ts`, `server/api/admin/images.put.ts` |
| Page Tarifs sans « À partir de » ; véhicule de la tuile flotte remonté | Fait | `OfferGrid.vue`, `site4.css` |
| Cahier des charges (version 2.5) | Fait | `docs/CAHIER-DES-CHARGES.docx` |
