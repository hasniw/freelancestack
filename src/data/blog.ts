export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Freelance en 2025 : les 10 outils indispensables pour bien démarrer",
    slug: "outils-indispensables-freelance-2025",
    excerpt: "Découvrez notre sélection des meilleurs outils pour lancer votre activité freelance sereinement en 2025.",
    content: `Se lancer en freelance, c'est excitant — mais aussi un peu flippant. Entre le choix du statut, la compta, la facturation et la recherche de clients, on peut vite se sentir perdu.

## 1. Un compte bancaire pro
**Shine** ou **Qonto** sont les deux leaders pour les freelances français. Shine est parfait pour les auto-entrepreneurs avec son accompagnement admin intégré. Qonto convient mieux si vous avez une société (SASU, EURL).

## 2. Un outil de comptabilité
**Indy** a révolutionné la compta des indépendants. Plus besoin d'expert-comptable pour les BNC — l'outil automatise tout, de la saisie à la liasse fiscale. Pour les micro-entrepreneurs, **Freebe** est une excellente alternative.

## 3. La facturation
**Tiime** propose une facturation 100% gratuite et illimitée. Sinon, **Pennylane** offre une solution complète qui intègre facturation et comptabilité.

## 4. L'assurance
La **RC Pro** est quasi-obligatoire. **Hiscox** propose des tarifs à partir de 11€/mois pour les métiers du numérique. Pour la mutuelle, **Alan** offre la meilleure expérience digitale.

## 5. Trouver des clients
**Malt** est incontournable en France. Pour les profils tech seniors, **Comet** propose des missions premium mieux rémunérées.

## 6-10. Productivité
**Notion** pour la gestion de projet, **Calendly** pour les RDV, et quelques autres outils qui feront la différence dans votre quotidien.

La clé : ne pas tout adopter d'un coup. Commencez par l'essentiel (banque + compta + facturation) puis ajoutez au fur et à mesure.`,
    date: "2025-01-15",
    author: "FreelanceStack",
    readTime: "8 min",
    tags: ["outils", "démarrage", "guide"],
  },
  {
    title: "Comparatif banques pro : Shine vs Qonto vs Tiime en 2025",
    slug: "comparatif-banques-pro-2025",
    excerpt: "Quelle banque pro choisir quand on est freelance ? On a comparé les 3 principales options.",
    content: `Choisir sa banque pro est l'une des premières décisions du freelance. Voici notre comparatif détaillé.

## Shine : le choix des auto-entrepreneurs
- **Prix** : 7,90€/mois (Basic) à 19,90€/mois (Premium)
- **Points forts** : Accompagnement admin, calcul des charges, aide URSSAF
- **Pour qui** : Auto-entrepreneurs qui veulent un tout-en-un simple

## Qonto : le choix des sociétés
- **Prix** : 9€/mois (Basic) à 249€/mois (Enterprise)
- **Points forts** : Multi-utilisateurs, cartes virtuelles, intégrations
- **Pour qui** : SASU, EURL, SAS qui ont besoin de fonctions avancées

## Tiime Business : le nouveau challenger
- **Prix** : 9€/mois
- **Points forts** : Facturation gratuite incluse, pré-comptabilité
- **Pour qui** : Ceux qui veulent combiner banque + facturation

## Notre verdict
- **Auto-entrepreneur solo** → Shine
- **Société / équipe** → Qonto
- **Budget serré** → Tiime (facturation offerte)

Les trois offrent un IBAN français, une carte Mastercard et une app mobile de qualité.`,
    date: "2025-01-28",
    author: "FreelanceStack",
    readTime: "6 min",
    tags: ["banque", "comparatif", "shine", "qonto"],
  },
  {
    title: "Auto-entrepreneur : comment gérer sa compta sans expert-comptable",
    slug: "compta-auto-entrepreneur-sans-expert",
    excerpt: "Pas besoin de payer 1500€/an d'expert-comptable en micro-entreprise. Voici comment faire.",
    content: `En micro-entreprise, la comptabilité est simplifiée. Vous n'avez légalement besoin que d'un livre des recettes et d'un registre des achats. Pourtant, beaucoup de freelances paient encore un expert-comptable.

## Ce que vous devez faire (et rien de plus)
1. **Tenir un livre des recettes** : date, client, montant, mode de paiement
2. **Conserver vos factures** émises et reçues pendant 10 ans
3. **Déclarer votre CA** mensuellement ou trimestriellement à l'URSSAF
4. **Déclarer vos revenus** annuellement aux impôts

## Les outils qui automatisent tout

### Freebe (14,90€/mois)
Conçu spécifiquement pour les micro-entrepreneurs. Facturation, suivi du CA, alertes de seuils TVA, et pré-remplissage des déclarations URSSAF.

### Indy (gratuit pour micro-entrepreneurs)
Le plan gratuit d'Indy couvre les besoins de base : catégorisation des opérations et suivi du CA.

### Shine (7,90€/mois)
Si vous prenez Shine comme banque pro, le suivi comptable est inclus : calcul des charges, aide à la déclaration, alertes de seuils.

## Les erreurs à éviter
- **Ne pas facturer la TVA** sans vérifier si vous avez dépassé le seuil
- **Mélanger compte perso et pro** (pas obligatoire sous 10K€ de CA, mais fortement recommandé)
- **Oublier la CFE** (cotisation foncière des entreprises, exonérée la 1ère année)

## Conclusion
Avec le bon outil (Freebe, Indy ou Shine), vous pouvez gérer votre micro-entreprise en moins de 30 minutes par mois.`,
    date: "2025-02-05",
    author: "FreelanceStack",
    readTime: "7 min",
    tags: ["comptabilité", "auto-entrepreneur", "guide"],
  },
  {
    title: "RC Pro freelance : est-ce obligatoire ? Combien ça coûte ?",
    slug: "rc-pro-freelance-obligatoire-prix",
    excerpt: "L'assurance RC Pro est-elle obligatoire pour les freelances ? On fait le point sur les obligations et les tarifs.",
    content: `La responsabilité civile professionnelle (RC Pro) est l'assurance la plus importante pour un freelance. Mais est-elle obligatoire ?

## Obligatoire ou pas ?
**Ça dépend de votre activité.** La RC Pro est obligatoire pour :
- Les professions réglementées (avocats, architectes, experts-comptables)
- Le BTP et les métiers du bâtiment
- Les agents immobiliers
- Les professionnels de santé

Pour les **développeurs, designers, consultants, rédacteurs** : elle n'est pas légalement obligatoire. **Mais elle est fortement recommandée.**

## Pourquoi la prendre même si elle n'est pas obligatoire
Un bug en production qui coûte 50K€ à votre client. Un conseil stratégique qui tourne mal. Une violation de données personnelles. Sans RC Pro, c'est votre patrimoine personnel qui est en jeu.

## Combien ça coûte ?
Chez **Hiscox**, référence du marché :
- **Développeur/consultant IT** : 11 à 30€/mois
- **Designer/créatif** : 15 à 35€/mois
- **Consultant marketing** : 12 à 25€/mois

Le prix dépend de votre CA, de votre activité et du niveau de couverture.

## Comment choisir ?
1. Vérifiez le **plafond d'indemnisation** (minimum 100K€ recommandé)
2. Regardez les **exclusions** (cyber-risques souvent en option)
3. Comparez la **franchise** (montant restant à votre charge)
4. Privilégiez un assureur qui connaît les **métiers du numérique**

**Hiscox** reste notre recommandation #1 pour les freelances tech. Souscription en 10 minutes, certificat immédiat.`,
    date: "2025-02-10",
    author: "FreelanceStack",
    readTime: "5 min",
    tags: ["assurance", "RC Pro", "obligations"],
  },
  {
    title: "Portage salarial vs micro-entreprise : que choisir en 2025 ?",
    slug: "portage-salarial-vs-micro-entreprise",
    excerpt: "Portage salarial ou micro-entreprise ? Les avantages, inconvénients et simulations pour bien choisir.",
    content: `C'est LA question que se posent tous les freelances au moment de choisir leur statut. Décortiquons les deux options.

## Micro-entreprise : la simplicité
### Avantages
- **Charges réduites** : 21,1% à 23,1% du CA (BNC)
- **Comptabilité ultra-simple** : livre de recettes uniquement
- **Création en 10 minutes** sur le site de l'URSSAF
- **Pas de TVA** sous le seuil de franchise (36 800€)

### Inconvénients
- **Pas de déduction de charges** (loyer, matériel, repas)
- **Plafond de CA** : 77 700€/an (prestations de services)
- **Pas d'assurance chômage**
- **Protection sociale minimale**

## Portage salarial : la sécurité
### Avantages
- **Statut salarié** : CDI, bulletins de paie, chômage
- **Mutuelle et prévoyance** incluses
- **Pas de plafond de CA**
- **Déduction des frais professionnels**

### Inconvénients
- **Coût total élevé** : ~50% du CA part en charges et frais de gestion
- **Frais de gestion** : 5 à 10% du CA (ITG, Jump)
- **CA minimum** souvent requis (3 000€/mois)

## Simulation : 5 000€ HT facturés
| | Micro-entreprise | Portage salarial |
|---|---|---|
| CA facturé | 5 000€ | 5 000€ |
| Charges sociales | -1 100€ | -2 250€ |
| Frais de gestion | 0€ | -400€ |
| Impôt estimé | -500€ | -350€ |
| **Net en poche** | **~3 400€** | **~2 000€** |

## Notre conseil
- **CA < 40K€/an** → Micro-entreprise (pas de doute)
- **CA 40-70K€/an** → Micro-entreprise si pas besoin de chômage
- **CA > 70K€/an** → Envisagez SASU ou portage selon vos besoins
- **Besoin de chômage** → Portage salarial (ITG, Jump)

Plateformes recommandées : **ITG** (leader historique) ou **Jump** (nouvelle génération, plus digital).`,
    date: "2025-02-14",
    author: "FreelanceStack",
    readTime: "9 min",
    tags: ["statut", "portage", "micro-entreprise"],
  },
  {
    title: "Comment trouver ses premiers clients freelance sur Malt et Comet",
    slug: "trouver-clients-malt-comet",
    excerpt: "Guide pratique pour optimiser vos profils Malt et Comet et décrocher vos premières missions.",
    content: `Les plateformes de freelancing sont le moyen le plus rapide de trouver vos premiers clients. Voici comment maximiser vos chances sur Malt et Comet.

## Malt : la plateforme généraliste

### Optimiser son profil
1. **Photo professionnelle** : les profils avec photo reçoivent 14x plus de vues
2. **Titre accrocheur** : "Développeur React Senior" > "Développeur web"
3. **Description orientée résultats** : parlez des problèmes que vous résolvez
4. **Portfolio** : ajoutez 3-5 projets concrets avec résultats mesurables
5. **TJM réaliste** : vérifiez les tarifs du marché sur la page Malt Data

### Les astuces qui font la différence
- Activez les **alertes missions** sur vos compétences clés
- Répondez aux missions dans les **2 premières heures**
- Demandez des **recommandations** à vos anciens collègues/clients
- Publiez des **articles** sur votre expertise (le blog Malt est bien référencé)

## Comet : la plateforme premium tech

### Comment être accepté
Comet est sélectif : environ 30% des candidatures sont acceptées.
- **3+ ans d'expérience** minimum dans votre domaine
- **Compétences recherchées** : React, Python, Data, Cloud, DevOps
- **TJM marché** : 400-800€/jour selon séniorité

### L'avantage Comet
- **Account manager dédié** qui vous présente les missions
- **Pré-négociation** : le TJM est souvent déjà validé côté client
- **Paiement à 30 jours** maximum (vs 60-90 en direct)

## Nos tips finaux
1. **Soyez sur les deux** : Malt pour le volume, Comet pour le premium
2. **Ne négligez pas LinkedIn** : 40% des missions freelance y transitent
3. **Fixez votre TJM et tenez-le** : brader ses prix crée un cercle vicieux
4. **Demandez des avis** après chaque mission — c'est votre meilleur marketing`,
    date: "2025-02-17",
    author: "FreelanceStack",
    readTime: "7 min",
    tags: ["clients", "malt", "comet", "missions"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
