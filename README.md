Anime Fight Game
Un jeu de combat simple mettant en scène des personnages d'anime populaires. Sélectionnez deux combattants et découvrez qui remportera le duel basé sur leurs statistiques.
Description
Application web interactive permettant aux utilisateurs de faire combattre leurs personnages d'anime préférés. Le jeu inclut 12 personnages issus de séries populaires comme Naruto, Dragon Ball, One Piece, Bleach et d'autres, chacun avec des statistiques uniques et des rôles spécifiques.
Fonctionnalités
Système de Combat

12 personnages jouables avec des statistiques uniques (Force, Magie, Vitesse)
Calcul automatique du vainqueur basé sur la puissance totale
Interface de combat visuelle avec images des combattants
Résultats dynamiques avec affichage du gagnant

Interface Utilisateur

Système de filtres par type de personnage (DPS, Tank, Support)
Cartes interactives avec animations de survol
Sélection visuelle des combattants
Zone de combat dédiée avec logo VS

Types de Personnages

DPS - Personnages axés sur les dégâts
Tank - Personnages résistants avec beaucoup de points de vie
Support - Personnages polyvalents avec des capacités spéciales

Technologies Utilisées

HTML5 - Structure de l'application
CSS3 - Styling avec variables CSS et animations
JavaScript ES6 - Logique de jeu et interactivité
CSS Grid - Disposition responsive des cartes

Structure du Projet
anime-fight/
│
├── index.html          # Page principale
├── script.js          # Logique de jeu
├── style.css          # Styles et animations
└── image/             # Dossier contenant les assets
    ├── unnamed.png    # Logo du jeu
    ├── Versus.png     # Logo VS
    └── [personnages]  # Images des personnages
Installation et Utilisation
Prérequis

Navigateur web moderne
Serveur local (optionnel)

Lancement

Clonez ou téléchargez le projet
Ouvrez index.html dans votre navigateur
Ou servez via un serveur local pour une meilleure expérience

Comment Jouer

Utilisez les filtres pour naviguer entre les types de personnages
Cliquez sur deux personnages pour les sélectionner
Appuyez sur "Combattre" pour lancer le duel
Le résultat s'affiche automatiquement

Personnages Disponibles
Le jeu inclut des personnages emblématiques :

Naruto Uzumaki (Tank) - Rasengan
Goku (Support) - Kamehameha
Ichigo Kurosaki (DPS) - Getsugatenshao
Monkey D. Luffy (Tank) - Gear Fourth
Saitama (DPS) - Serious Punch
Aizen (DPS) - Cercueil Noir
Et 6 autres personnages avec leurs techniques spéciales

Système de Calcul
La puissance de chaque personnage est calculée selon la formule :
calculatePower = (force + magie + vitesse) * multiplicateurSpecial
Le multiplicateur spécial est actuellement fixé à 1.5 pour équilibrer les combats.
Responsive Design
L'interface s'adapte automatiquement aux différentes tailles d'écran :

Desktop - Grille optimale avec toutes les fonctionnalités
Tablette - Layout adapté pour écrans moyens
Mobile - Interface simplifiée et tactile

Fonctionnalités Techniques
Gestion des États

Suivi des personnages sélectionnés
Activation/désactivation du bouton de combat
Reset automatique après chaque combat

Animations CSS

Transitions fluides sur les cartes
Effets de survol avec transformations
Animations de sélection

Filtrage Dynamique

Système de filtres par type de personnage
Affichage/masquage dynamique des cartes
État actif des boutons de filtre

Améliorations Possibles

Système de points de vie et combat tour par tour
Animations de combat plus poussées
Sauvegarde des résultats de combat
Ajout de nouveaux personnages
Mode multijoueur
Effets sonores et musiques

Compatibilité

Chrome 70+
Firefox 65+
Safari 12+
Edge 79+

Contribution
Les contributions sont bienvenues pour :

Ajout de nouveaux personnages
Amélioration de l'équilibrage
Nouvelles fonctionnalités de combat
Optimisations de performance

Licence
Projet personnel à des fins éducatives. Les images et personnages appartiennent à leurs créateurs respectifs.
Auteur
Mathys P. - Développeur Web
Projet réalisé dans le cadre de l'apprentissage du développement web frontend.
