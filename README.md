
# Anime Fight Game

![Aperçu du jeu](screenshot.png)

Un jeu de combat simple mettant en scène des personnages d'anime populaires. Sélectionnez deux combattants et découvrez qui remportera le duel basé sur leurs statistiques.

## Description

Application web interactive permettant aux utilisateurs de faire combattre leurs personnages d'anime préférés. Le jeu inclut 12 personnages issus de séries populaires comme Naruto, Dragon Ball, One Piece, Bleach et d'autres, chacun avec des statistiques uniques et des rôles spécifiques.

## Fonctionnalités

### Système de Combat
- **12 personnages jouables** avec des statistiques uniques (Force, Magie, Vitesse)
- **Calcul automatique** du vainqueur basé sur la puissance totale
- **Interface de combat visuelle** avec images des combattants
- **Résultats dynamiques** avec affichage du gagnant

### Interface Utilisateur
- **Système de filtres** par type de personnage (DPS, Tank, Support)
- **Cartes interactives** avec animations de survol
- **Sélection visuelle** des combattants avec outline colorée
- **Zone de combat dédiée** avec logo VS animé

### Types de Personnages
- **DPS** - Personnages axés sur les dégâts élevés
- **Tank** - Personnages résistants avec beaucoup de points de vie
- **Support** - Personnages polyvalents avec des capacités spéciales

## Technologies Utilisées

- **HTML5** - Structure sémantique de l'application
- **CSS3** - Styling avec variables CSS, gradients et animations
- **JavaScript ES6** - Logique de jeu et interactions dynamiques
- **CSS Grid** - Disposition responsive des cartes de personnages

## Structure du Projet

```
anime-fight/
│
├── index.html          # Page principale du jeu
├── script.js          # Logique de jeu et événements
├── style.css          # Styles et animations CSS
└── image/             # Dossier contenant tous les assets
    ├── unnamed.png    # Logo principal du jeu
    ├── Versus.png     # Logo VS pour les combats
    ├── naruto.jpg     # Image de Naruto Uzumaki
    ├── ichigo.jpg     # Image d'Ichigo Kurosaki
    ├── luffy.jpg      # Image de Monkey D. Luffy
    ├── edward.png     # Image d'Edward Elric
    ├── saitama.jpg    # Image de Saitama
    ├── goku.jpg       # Image de Goku
    ├── Buu.jpg        # Image de Kid Buu
    ├── aizen.jpg      # Image d'Aizen
    ├── barbenoire.jpg # Image de Barbe Noire
    ├── bradley.jpg    # Image de Bradley
    ├── obito.jpg      # Image d'Obito
    └── meruem.jpg     # Image de Meruem
```

## Installation et Utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur local pour éviter les problèmes CORS (recommandé)

### Lancement
1. Clonez ou téléchargez le projet
```bash
git clone [votre-repo]/anime-fight
cd anime-fight
```

2. Lancez un serveur local ou ouvrez directement `index.html`
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx live-server
```

### Comment Jouer
1. **Navigation** : Utilisez les filtres (Tous, DPS, Tank, Support) pour explorer les personnages
2. **Sélection** : Cliquez sur deux personnages différents pour les sélectionner
3. **Combat** : Le bouton "Combattre" s'active automatiquement avec 2 sélections
4. **Résultat** : Le vainqueur est déterminé par la puissance totale calculée

## Personnages Disponibles

### Tanks
- **Naruto Uzumaki** - Rasengan (Force: 85, Magie: 90, Vitesse: 99)
- **Monkey D. Luffy** - Gear Fourth (Force: 95, Magie: 70, Vitesse: 87)
- **Barbe Noire** - Black Hole (Force: 100, Magie: 100, Vitesse: 70)
- **Meruem** - Photon (Force: 100, Magie: 100, Vitesse: 100)

### DPS
- **Ichigo Kurosaki** - Getsugatenshao (Force: 97, Magie: 90, Vitesse: 96)
- **Saitama** - Serious Punch (Force: 100, Magie: 50, Vitesse: 95)
- **Aizen** - Cercueil Noir (Force: 90, Magie: 95, Vitesse: 100)
- **Obito** - Kamui (Force: 80, Magie: 100, Vitesse: 95)

### Support
- **Edward Elric** - Alchimie (Force: 75, Magie: 98, Vitesse: 80)
- **Goku** - Kamehameha (Force: 100, Magie: 100, Vitesse: 100)
- **Kid Buu** - Kamehameha Rose (Force: 90, Magie: 98, Vitesse: 100)
- **Bradley** - Ultimate Eye (Force: 85, Magie: 90, Vitesse: 90)

## Système de Calcul

La puissance de chaque personnage est calculée selon la formule :
```javascript
const power = (character) => {
    return (character.force + character.magie + character.vitesse) * 1.5;
}
```

Le multiplicateur de 1.5 équilibre les combats et rend les différences plus significatives.

## Fonctionnalités Techniques

### Gestion des États
- **Sélection multiple** : Maximum 2 personnages sélectionnables
- **Validation visuelle** : Outline rouge sur les cartes sélectionnées
- **Contrôles dynamiques** : Activation/désactivation du bouton combat
- **Reset automatique** : Remise à zéro après chaque combat

### Animations et Effets
- **Hover effects** : Transformation 3D des cartes au survol
- **Transitions fluides** : Animations CSS pour toutes les interactions
- **Feedback visuel** : Changements d'état en temps réel

### Système de Filtrage
- **Filtres par type** : Affichage conditionnel selon le rôle
- **État actif** : Indication visuelle du filtre sélectionné
- **Réinitialisation** : Retour à l'affichage complet avec "Tous"

## Design et Interface

### Thème Visuel
- **Palette rouge foncé** : Ambiance combat et anime
- **Cartes en gradient** : Effet visuel moderne
- **Typographie claire** : Lisibilité optimisée

### Responsive Design
- **Grid adaptative** : Colonnes auto-ajustées selon l'écran
- **Images optimisées** : Ratio 4:3 pour les vignettes personnages
- **Interface mobile** : Interactions tactiles supportées

## Améliorations Possibles

### Gameplay
- Système de points de vie et combats tour par tour
- Multiplicateurs par type (avantages/désavantages)
- Mode tournament avec plusieurs rounds
- Statistiques de victoires/défaites

### Interface
- Animations de combat plus élaborées
- Effets sonores et musiques d'ambiance
- Sauvegarde des préférences utilisateur
- Mode sombre/clair

### Contenu
- Ajout de nouveaux personnages d'anime
- Techniques spéciales avec effets uniques
- Arènes de combat différentes
- Système de niveaux et évolutions

## Compatibilité Navigateurs

- **Chrome** 70+ ✅
- **Firefox** 65+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅

## Performance

- **Chargement rapide** : Assets optimisés
- **Animations fluides** : Transitions CSS3
- **Code minimaliste** : JavaScript vanilla sans dépendances
- **Images optimisées** : Formats web standards

## Contribution

Les contributions sont bienvenues pour :
- **Nouveaux personnages** avec équilibrage des stats
- **Améliorations visuelles** et animations
- **Optimisations de code** et refactoring
- **Nouvelles fonctionnalités** de gameplay

### Guide de Contribution
1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/nouveau-personnage`)
3. Committez vos changements (`git commit -m 'Ajout de Vegeta'`)
4. Push sur la branche (`git push origin feature/nouveau-personnage`)
5. Ouvrez une Pull Request

## Licence

Projet personnel à des fins éducatives et de démonstration. Les images et personnages d'anime appartiennent à leurs créateurs respectifs et sont utilisés à des fins non commerciales.

## Auteur

**Mathys P.** - Développeur Web  
Projet réalisé dans le cadre de l'apprentissage du développement web frontend et de la manipulation du DOM.
