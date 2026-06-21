import { initializeApp } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

// To run this script:
// 1. Download service-account-key.json from Firebase Console
// 2. Set export FIREBASE_SERVICE_ACCOUNT_KEY=path_to_json or pass it as env
// 3. Run: npx ts-node scripts/seed-firestore.ts

const formations = [
  {
    slug: 'gestion-stocks',
    titre: 'Gestion des stocks et approvisionnement',
    categorie: 'logistique',
    description: "Développez une expertise dans la gestion rationnelle des stocks et la chaîne d'approvisionnement globale. Apprenez à optimiser les coûts de possession, éviter les ruptures et modéliser des plannings d'approvisionnement performants.",
    objectifs: [
      "Calculer et optimiser le stock de sécurité",
      "Concevoir des indicateurs de performance (rotation, couverture)",
      "Maîtriser les techniques d'inventaire physique",
      "Mettre en place une planification de réapprovisionnement sous Excel"
    ],
    publicCible: "Gestionnaires de stock, logisticiens, approvisionneurs, directeurs financiers, responsables de dépôt.",
    duree: '5 jours',
    tarif: 2500000,
    formateur: 'Expert Guilogtrans',
    prochaineSession: Timestamp.fromDate(new Date('2026-07-15')),
    programmeUrl: '',
    actif: true
  },
  {
    slug: 'optimisation-routes',
    titre: 'Optimisation des routes de transport',
    categorie: 'transport',
    description: "Optimisez la distribution physique de vos marchandises en réduisant les coûts opérationnels de transport. Cette formation pratique vous apprendra à planifier les tournées, choisir les bons prestataires et calculer le prix de revient kilométrique.",
    objectifs: [
      "Établir des plans de transport et schémas de distribution",
      "Optimiser les taux de remplissage des véhicules",
      "Utiliser des outils de cartographie pour planifier les tournées",
      "Réduire l'impact carbone et énergétique de la flotte"
    ],
    publicCible: "Responsables transport, répartiteurs de flotte, coordinateurs logistiques, transitaires.",
    duree: '3 jours',
    tarif: 1800000,
    formateur: 'Expert Guilogtrans',
    prochaineSession: Timestamp.fromDate(new Date('2026-07-22')),
    programmeUrl: '',
    actif: true
  },
  {
    slug: 'reglementation-douaniere',
    titre: 'Réglementation douanière & transit',
    categorie: 'douane',
    description: "Maîtrisez les procédures douanières à l'importation et à l'exportation en Guinée et dans l'espace CEDEAO. Évitez les litiges douaniers, apprenez à déclarer vos marchandises et déterminez l'espèce tarifaire (code SH).",
    objectifs: [
      "Déterminer l'origine, la valeur et l'espèce douanière d'un produit",
      "Maîtriser les étapes du dédouanement (Sydonia)",
      "Rédiger et contrôler les documents de transit import-export",
      "Anticiper et gérer les contentieux douaniers"
    ],
    publicCible: "Déclarants en douane, transitaires, responsables import-export, juristes d'entreprise.",
    duree: '4 jours',
    tarif: 2200000,
    formateur: 'Expert Guilogtrans',
    prochaineSession: Timestamp.fromDate(new Date('2026-08-05')),
    programmeUrl: '',
    actif: true
  },
  {
    slug: 'management-supply-chain',
    titre: 'Management de la supply chain',
    categorie: 'supply-chain',
    description: "Pilotez l'ensemble des flux physiques et d'information de l'entreprise, des fournisseurs aux clients finaux. Cette formation de haut niveau présente les meilleures pratiques de planification industrielle et commerciale (S&OP) et de pilotage logistique global.",
    objectifs: [
      "Cartographier les flux de la chaîne logistique (Value Stream Map)",
      "Aligner la logistique sur la stratégie générale de l'entreprise",
      "Mettre en œuvre des systèmes de mesure de performance globale",
      "Gérer les risques et la résilience de la supply chain"
    ],
    publicCible: "Directeurs logistiques, supply chain managers, cadres dirigeants, chefs de projets industriels.",
    duree: '5 jours',
    tarif: 3000000,
    formateur: 'Expert Guilogtrans',
    prochaineSession: Timestamp.fromDate(new Date('2026-08-12')),
    programmeUrl: '',
    actif: true
  },
  {
    slug: 'securite-routiere',
    titre: 'Sécurité routière et conduite professionnelle',
    categorie: 'securite',
    description: "Réduisez les risques d'accidents et optimisez la conduite professionnelle au sein de votre entreprise. Cette formation sensibilise aux règles de sécurité, à l'éco-conduite et à la gestion technique et préventive des véhicules de transport.",
    objectifs: [
      "Appliquer les règles fondamentales de la sécurité routière professionnelle",
      "Adopter les principes de l'éco-conduite (économie de carburant)",
      "Effectuer les contrôles préventifs obligatoires sur les véhicules",
      "Réagir efficacement en cas d'accident ou de panne sur la route"
    ],
    publicCible: "Chauffeurs professionnels, conducteurs de véhicules d'entreprise, gestionnaires de flotte.",
    duree: '2 jours',
    tarif: 1200000,
    formateur: 'Expert Guilogtrans',
    prochaineSession: Timestamp.fromDate(new Date('2026-08-19')),
    programmeUrl: '',
    actif: true
  },
  {
    slug: 'logistique-internationale',
    titre: 'Logistique internationale & Incoterms',
    categorie: 'logistique',
    description: "Maîtrisez les rouages du transport international de marchandises et appliquez correctement les règles Incoterms 2020. Choisissez le mode de transport adéquat (maritime, aérien, routier) et gérez les documents de transport associés.",
    objectifs: [
      "Choisir et appliquer l'Incoterm optimal pour chaque transaction",
      "Négocier et conclure les contrats de transport international",
      "Rédiger et valider les documents clés (Connaissement maritime, LTA, CMR)",
      "Souscrire les polices d'assurance transport appropriées"
    ],
    publicCible: "Acheteurs internationaux, logisticiens export, négociants, transitaires, banquiers documentaires.",
    duree: '3 jours',
    tarif: 2000000,
    formateur: 'Expert Guilogtrans',
    prochaineSession: Timestamp.fromDate(new Date('2026-09-02')),
    programmeUrl: '',
    actif: true
  }
];

const articles = [
  {
    slug: 'demarrage-session-gestion-stocks',
    titre: 'Démarrage de la session Gestion des Stocks & Approvisionnements',
    extrait: 'Retour sur le lancement de notre session de formation pratique réunissant les professionnels de plusieurs grandes entreprises de Conakry.',
    contenu: 'Ce lundi a débuté au Cabinet Guilogtrans la session intensive sur la Gestion des Stocks et des Approvisionnements. Durant 5 jours, nos participants issus de secteurs variés (mines, BTP, commerce) vont acquérir des méthodologies concrètes pour optimiser leurs inventaires et piloter leurs flux sous la supervision de notre expert formateur.',
    categorie: 'session',
    imageUrl: '',
    auteur: 'Direction',
    publie: true,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    slug: 'evolution-logistique-guinee-2026',
    titre: 'Les tendances majeures de la logistique en Guinée pour 2026',
    extrait: 'Découvrez comment le développement des infrastructures portuaires et minières transforme la supply chain nationale.',
    contenu: 'La logistique en Guinée connaît une profonde mutation. Avec l\'essor des grands projets miniers (comme le projet Simandou) et la modernisation des infrastructures du Port Autonome de Conakry, les besoins en optimisation des transports et gestion de supply chain performante n\'ont jamais été aussi élevés.',
    categorie: 'actualite',
    imageUrl: '',
    auteur: 'Expert Guilogtrans',
    publie: true,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  }
];

const testimonials = [
  {
    nom: 'Mamadou Diallo',
    fonction: 'Responsable Transport & Logistique',
    entreprise: 'Guinée Gold Mining',
    texte: 'La formation sur l\'optimisation des routes et de la flotte de transport dispensée par Guilogtrans a permis à notre équipe de réduire de 15% nos coûts de carburant en seulement 3 mois.',
    note: 5,
    actif: true,
    createdAt: Timestamp.now()
  },
  {
    nom: 'Aissatou Sylla',
    fonction: 'Gestionnaire de Stock',
    entreprise: 'SOGUIPAH',
    texte: 'Une formation extrêmement pratique axée sur des cas concrets d\'entrepôt. L\'accompagnement post-formation m\'a aidé à restructurer entièrement nos procédures d\'inventaire.',
    note: 5,
    actif: true,
    createdAt: Timestamp.now()
  }
];

async function seed() {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    console.log('⚠️ FIREBASE_SERVICE_ACCOUNT_KEY not set. Seeding skipped.');
    return;
  }
  
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    initializeApp({
      credential: {
        getAccessToken: () => Promise.resolve({ access_token: '', expires_in: 0 }),
        // ... standard firebase-admin init can load from JSON service account
      }
    });
    
    const db = getFirestore();
    
    console.log('Seeding formations...');
    for (const f of formations) {
      await db.collection('formations').add({
        ...f,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
    }
    
    console.log('Seeding articles...');
    for (const a of articles) {
      await db.collection('articles').add(a);
    }
    
    console.log('Seeding testimonials...');
    for (const t of testimonials) {
      await db.collection('temoignages').add(t);
    }
    
    console.log('✅ Firestore seed completed successfully.');
  } catch (error) {
    console.error('Error seeding Firestore:', error);
  }
}

seed();
