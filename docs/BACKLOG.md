# Product Backlog et planification des sprints

Méthode Scrum. Estimation totale : 68 jours (voir `ESTIMATION TS EXCLUSIVE.xlsx`).
Cérémonies à chaque sprint : Sprint Planning, Daily Scrum, Sprint Review, Rétrospective.

Code source : https://github.com/gingerrhr-ui/ts-exclusive · Mise à jour : 24 octobre 2026.

| Sprint | Module | Objectif | Jours | État |
|---|---|---|---|---|
| 0 | Cadrage du projet | Backlog prêt et environnement installé | 9 | Livré |
| 1 | Identité visuelle et interface | Maquettes validées par le client | 8 | Livré |
| 2 | Authentification et administration | Se connecter et accéder à l'espace admin | 6 | Livré |
| 3 | Accueil | Page d'accueil complète et responsive | 8 | Livré |
| 4 | Services | Toutes les pages services en ligne et modifiables | 10 | Livré |
| 5 | Flotte | Flotte présentée par usage | 5 | Livré |
| 6 | Demande de devis et contact | Recevoir et suivre les demandes | 10 | Livré (emails à configurer) |
| 7 | Gestion de contenu | Modifier le contenu sans développeur | 7 | Livré |
| 8 | Langues, SEO et performance | Site en FR/EN et bien référencé | 5 | Livré |

## Évolutions demandées par le client après les sprints 0 à 8
Travail réalisé en octobre 2026 à la demande du client, en plus de l'estimation initiale.

| Date | Évolution | Résultat |
|---|---|---|
| 12 octobre | Nouveau design d'après le modèle validé par le client (hero sombre, mosaïque de services numérotés, bloc clair, pied de page clair) | En ligne |
| 12 octobre | Contenus finaux du client (slogan, accroche, trois valeurs, sept services, à propos) et flotte finale de quatre véhicules avec photos détourées | En ligne |
| 13 octobre | Accroches de services plus percutantes, contenu et bouton d'action sur chaque service, conciergerie privée VIP à part, trois valeurs, numérotation réservée aux services | En ligne |
| 13 octobre | Séparation stricte du français et de l'anglais | En ligne |
| 13 octobre | Bouton « Voir les offres » visible, ronds du parcours qui se colorent, carte de Madagascar fidèle, section Destinations sans élément coupé | En ligne |
| 17 octobre | Nouveau logo fourni par le client et doré accentué sur tout le site | En ligne |
| 17 octobre | Gestion de toutes les images du site depuis l'administration (page Images du site) | En ligne |
| 22 octobre | Page Tarifs sans « À partir de », véhicule de la tuile flotte remonté pour ne plus recouvrir son nom | En ligne |

## User stories (extrait, par priorité)
1. En tant que visiteur, je demande un devis en moins de deux minutes (formulaire, WhatsApp).
2. En tant que visiteur, je découvre les services, la flotte et les destinations avec de grandes images.
3. En tant que visiteur anglophone, je consulte tout le site en anglais, sans mot français.
4. En tant qu'administrateur, je consulte et traite les demandes de devis (statuts, notes, export CSV).
5. En tant qu'administrateur, je modifie services, flotte, offres, destinations, partenaires, FAQ, témoignages et textes sans développeur.
6. En tant qu'administrateur, je remplace toutes les images du site (pages, menu, logos, flotte, services, destinations) depuis une seule page, avec des photos de n'importe quelle taille.
7. En tant qu'administrateur, je crée des comptes avec un rôle (administrateur ou éditeur).
8. En tant que responsable, je reçois un email à chaque nouvelle demande (si SMTP configuré).

## À venir (à décider avec le client)
- Configurer l'envoi des emails (paramètres SMTP).
- Remplacer les photos d'ambiance provisoires par des photos propres à l'entreprise (page Images du site).
- Faire relire la traduction anglaise des contenus finaux.
- Nom de domaine, pages légales, témoignages et réseaux sociaux.
- Changer le mot de passe administrateur provisoire avant le lancement officiel.

Le suivi tâche par tâche est dans `ESTIMATION-CHECKLIST.md`.
