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
| Bleu acier (accent) | `#8aa4bd` |
| Gris-bleu clair (fonds clairs) | `#eef2f7` |
| Blanc | `#ffffff` |

## Typographie
- Titres : Cormorant Garamond, léger, majuscules.
- Hero : même serif, très grand.
- Interface et textes : Inter (léger), étiquettes en majuscules espacées.

## Composants
- Boutons : toujours avec bordure fine, inversion de couleur au survol.
- Header transparent sur la photo, marine translucide et flou au scroll.
- Menu plein écran avec apparition échelonnée et image au survol.
- Mosaïque de services, catalogue de véhicules, explorateur de destinations avec carte, sections numérotées.
- Animations : apparition au scroll, parallax léger, curseur discret. Uniquement `transform` et `opacity`, désactivées si l'utilisateur préfère moins de mouvement.

## Wireframes
- `wireframes-desktop.svg` : page d'accueil sur ordinateur.
- `wireframes-mobile.svg` : page d'accueil sur téléphone.

## Éléments graphiques
Logo en deux versions (`public/img/logo.png` pour fond clair, `logo-light.png` pour fond sombre), icônes en traits fins (`app/components/Icon.vue`), photographies Unsplash (identifiants dans `app/utils/images.ts`).
