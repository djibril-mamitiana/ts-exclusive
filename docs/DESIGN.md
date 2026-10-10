# Identité visuelle et interface

## Sources
- Visuel client TS EXCLUSIVE : logo, bleu marine et acier, bandeau des cinq piliers, carte de Madagascar, forme diagonale du hero.
- Modèle Detailing : mosaïque de services numérotés avec grands chiffres fins.
- Modèle Tesla : grands chiffres fins séparés par des pointillés, blocs image / texte alternés.
- Brief premium : minimalisme, photographie, typographie éditoriale, animations lentes.

## Palette
| Rôle | Couleur |
|---|---|
| Marine profond (fonds sombres) | `#07182e` |
| Marine (logo, boutons) | `#0c2646` |
| Bleu acier (accent principal, tuile 01) | `#4b7096` / `#8aa4bd` |
| Gris-bleu (tuile 03) | `#a7b5c6` |
| Gris clair (tuile 04) | `#c9d2de` |
| Ardoise (tuile 05) | `#33465e` |
| Fond clair des sections | `#e1e6ed` |
| Blanc | `#ffffff` |

Le doré n'est plus utilisé : l'accent est le bleu acier.

## Typographie
- Titres : Roboto fin (100 à 300), majuscules, espacement des lettres léger. Grands chiffres des tuiles en Roboto 100.
- Titres de tuiles et étiquettes : Roboto 500 à 700, majuscules espacées.
- Petits textes (tuiles, pied de page, citations) : Roboto Slab léger, comme sur le modèle.
- Touches malgaches (« Tonga soa », « Misaotra ») : Cormorant Garamond italique, en petit.

## Composants (modèle validé par le client, type « Detailing »)
- En-tête : logo à gauche, menu burger à droite, filet fin dessous (la barre de lecture le remplit). Plein et flouté au scroll.
- Hero : photo sombre teintée marine (voiture à gauche), titre fin en capitales à droite, lien vertical « Voir les offres », chiffres clés en bas.
- Mosaïque de services numérotés : tuile 01 bleu acier avec photo, 02 filaire avec dessin au trait, 03 gris-bleu avec photo en pied, 04 clair, 05 ardoise. Les services suivants passent en tuile pleine largeur.
- Bloc clair : tuile flotte (flèches pour parcourir les véhicules), tuile à propos, cadre téléphone.
- Pied de page clair : réseaux, deux colonnes, logo, barre du bas avec retour en haut.
- Coins : presque droits (8 px sur les tuiles, 6 px sur les boutons). Une seule variable à changer dans `app/assets/css/site4.css` (`--r-tile`, `--r-btn`, `--r-l`) pour durcir ou adoucir tout le site.
- Boutons : toujours avec bordure fine, inversion de couleur au survol.
- Menu plein écran avec apparition échelonnée et image au survol.
- Animations : rideau d'intro, rideau entre les pages, défilement fluide, titres mot à mot, apparition au scroll, parallax léger. Uniquement `transform` et `opacity`, désactivées si l'utilisateur préfère moins de mouvement.

## Wireframes
- `wireframes-desktop.svg` : page d'accueil sur ordinateur.
- `wireframes-mobile.svg` : page d'accueil sur téléphone.

## Éléments graphiques
Logo en deux versions (`public/img/logo.png` pour fond clair, `logo-light.png` pour fond sombre), icônes en traits fins (`app/components/Icon.vue`), photographies Unsplash et Pexels (identifiants dans `app/utils/images.ts`, photo du hero dans `public/img/hero-maybach.jpg`).
