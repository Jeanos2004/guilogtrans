import { firestore } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc
} from "firebase/firestore";
import { StudentProfile } from "./studentDb";

// === TYPES ===

export interface FormationDetails {
  presentation?: string;          
  objectifs?: string[];           
  prerequis?: string[];           
  publicCible?: string[];         
  programme?: {                   
    title: string;
    points: string[];
  }[];
  programmeUrl?: string;
  duree?: string;                 
  dateDebut?: string;             
  calendrier?: string;            
  horaires?: string;              
  statutInscription?: "Ouverte" | "Fermée"; 
  debouches?: string[];           
  planning?: { jour: string; horaire: string }[]; 
}

export interface ModuleItem {
  titre: string;
  outils: string[];
  prix?: number;           
  prixInscription?: number; 
  methodePaiement?: string;
  image?: string;
  details?: FormationDetails;     
}

export interface CategorieFormations {
  categorie: string;
  image?: string;
  modules: ModuleItem[];
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface InscriptionRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  requestType: string;
  domain: string;
  message: string;
  date: string;
  status: "En attente" | "Validé" | "Annulé";
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: "Non lu" | "Lu";
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  color: string;
  text: string;
  rating: number;
  active: boolean;
  type?: "standard" | "video";
  image?: string;    
  videoUrl?: string; 
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  dateAdded: string;
}

export interface SiteSettings {
  apprenantsForme: number;
  totalHeuresFormation: number;
  tauxSatisfaction: number;
  anneesExperience: number;
}

export interface AdminUser {
  uid: string;
  email: string;
  createdAt: string;
  status: "actif" | "suspendu";
}

// === UTILITIES ===

const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

function mapCategoryToKey(catName: string): string {
  const norm = catName.toLowerCase().trim();
  if (norm.includes('transport')) return 'transport';
  if (norm.includes('supply') || norm.includes('chain')) return 'supply-chain';
  if (norm.includes('douane') || norm.includes('transit')) return 'douane';
  if (norm.includes('securite') || norm.includes('sécurité')) return 'securite';
  return 'logistique'; 
}

const displayCategoryMap: Record<string, string> = {
  'logistique': 'Logistique',
  'transport': 'Transport',
  'supply-chain': 'Supply Chain',
  'douane': 'Douane',
  'securite': 'Sécurité'
};

// === DEFAULT DATA ===

const defaultArticles: Article[] = [
  {
    id: 1,
    title: "Démarrage de la session Gestion des Stocks & Approvisionnements",
    excerpt: "Retour sur le lancement de notre session de formation pratique réunissant les professionnels de plusieurs grandes entreprises de Conakry.",
    content: "Ce lundi a débuté au Cabinet Guilogtrans la session intensive sur la Gestion des Stocks et des Approvisionnements. Durant 5 jours, nos participants issus de secteurs variés (mines, BTP, commerce) vont acquérir des méthodologies concrètes pour optimiser leurs inventaires et piloter leurs flux sous la supervision de notre expert formateur.",
    date: "2026-06-15",
    author: "Direction",
    category: "Actualités",
    image: "/images/news_hero.png"
  },
  {
    id: 2,
    title: "Les tendances majeures de la logistique en Guinée pour 2026",
    excerpt: "Découvrez comment le développement des infrastructures portuaires et minières transforme la supply chain nationale.",
    content: "La logistique en Guinée connaît une profonde mutation. Avec l'essor des grands projets miniers (comme le projet Simandou) et la modernisation des infrastructures du Port Autonome de Conakry, les besoins en optimisation des transports et gestion de supply chain performante n'ont jamais été aussi élevés.",
    date: "2026-06-02",
    author: "Expert Guilogtrans",
    category: "Conseils",
    image: "/images/about.png"
  }
];

const defaultTestimonials: Testimonial[] = [
  {
    name: "Mamadou Diallo",
    role: "Responsable Transport & Logistique",
    initials: "MD",
    color: "bg-blue-100 text-blue-800",
    text: "La formation sur l'optimisation des routes et de la flotte de transport dispensée par Guilogtrans a permis à notre équipe de réduire de 15% nos coûts de carburant en seulement 3 mois.",
    rating: 5,
    active: true
  },
  {
    name: "Aissatou Sylla",
    role: "Gestionnaire de Stock",
    initials: "AS",
    color: "bg-green-100 text-green-800",
    text: "Une formation extrêmement pratique axée sur des cas concrets d'entrepôt. L'accompagnement post-formation m'a aidé à restructurer entièrement nos procédures d'inventaire.",
    rating: 5,
    active: true
  }
];

const defaultInscriptions: InscriptionRequest[] = [
  {
    id: "REG-9872",
    fullName: "Moussa Camara",
    email: "moussa.camara@example.gn",
    phone: "+224 622 11 22 33",
    company: "Société des Eaux de Guinée",
    requestType: "Formation en entreprise",
    domain: "Logistique",
    message: "Demande de formation sur la gestion des stocks pour notre équipe de dépôt.",
    date: "2026-06-18T14:32:00Z",
    status: "En attente"
  }
];

const defaultMessages: ContactMessage[] = [
  {
    id: "MSG-0091",
    fullName: "Kadiatou Diallo",
    email: "kadiatou.d@gmail.com",
    subject: "Demande de tarifs",
    message: "Bonjour, j'aimerais obtenir la grille tarifaire complète pour vos formations en logistique.",
    date: "2026-06-19T09:00:00Z",
    status: "Non lu"
  }
];

// === PUBLIC DATABASE API ===

export const db = {
  // Formations
  async getFormations(): Promise<CategorieFormations[]> {
    try {
      const snap = await getDocs(collection(firestore, "formations"));
      if (!snap.empty) {
        const flatList = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
        const categoriesMap: Record<string, any[]> = {};
        flatList.forEach(item => {
          const rawCat = item.categorie || 'logistique';
          const catName = displayCategoryMap[rawCat] || rawCat;
          if (!categoriesMap[catName]) {
            categoriesMap[catName] = [];
          }
          categoriesMap[catName].push({
            titre: item.titre,
            outils: item.outils || [],
            prix: item.tarif || 0,
            image: item.image || '',
            details: {
              presentation: item.description || '',
              objectifs: item.objectifs || [],
              publicCible: item.publicCible ? [item.publicCible] : [],
              duree: item.duree || '',
              dateDebut: item.prochaineSession 
                ? (typeof item.prochaineSession.toDate === 'function' 
                    ? item.prochaineSession.toDate().toLocaleDateString('fr-FR') 
                    : String(item.prochaineSession)) 
                : '',
              statutInscription: item.actif ? 'Ouverte' : 'Fermée',
              programmeUrl: item.programmeUrl || '',
            }
          });
        });
        return Object.keys(categoriesMap).map(catName => ({
          categorie: catName,
          modules: categoriesMap[catName]
        }));
      }
    } catch (error) {
      console.error("Error fetching formations from Firestore:", error);
    }
    return [];
  },

  async saveFormations(data: CategorieFormations[]): Promise<void> {
    try {
      const snap = await getDocs(collection(firestore, "formations"));
      const existingIds = snap.docs.map(d => d.id);
      
      const newIds: string[] = [];
      for (const cat of data) {
        for (const mod of cat.modules) {
          const slug = generateSlug(mod.titre);
          const id = slug;
          newIds.push(id);
          
          let dateObj = new Date();
          if (mod.details?.dateDebut) {
            const parsed = Date.parse(mod.details.dateDebut);
            if (!isNaN(parsed)) dateObj = new Date(parsed);
          }

          const flatFormation = {
            slug,
            titre: mod.titre,
            categorie: mapCategoryToKey(cat.categorie),
            description: mod.details?.presentation || '',
            objectifs: mod.details?.objectifs || [],
            publicCible: mod.details?.publicCible?.join('\n') || '',
            duree: mod.details?.duree || '',
            tarif: mod.prix || 0,
            formateur: 'Expert Guilogtrans',
            prochaineSession: dateObj,
            programmeUrl: mod.details?.programmeUrl || '',
            actif: mod.details?.statutInscription === 'Ouverte',
            updatedAt: new Date(),
            image: mod.image || ''
          };
          
          await setDoc(doc(firestore, "formations", id), flatFormation);
        }
      }
      
      for (const id of existingIds) {
        if (!newIds.includes(id)) {
          await deleteDoc(doc(firestore, "formations", id));
        }
      }
    } catch (error) {
      console.error("Error saving formations to Firestore:", error);
    }
  },

  // Articles / Blog
  async getArticles(): Promise<Article[]> {
    try {
      const snapshot = await getDocs(collection(firestore, "articles"));
      const list: Article[] = [];
      snapshot.forEach((d) => {
        list.push(d.data() as Article);
      });
      return list.sort((a, b) => b.id - a.id);
    } catch (error) {
      console.error("Error fetching articles from Firestore:", error);
    }
    return defaultArticles;
  },

  async saveArticles(data: Article[]): Promise<void> {
    try {
      const snapshot = await getDocs(collection(firestore, "articles"));
      const existingIds = snapshot.docs.map(d => d.id);
      const newIds = data.map(a => String(a.id));
      
      for (const id of existingIds) {
        if (!newIds.includes(id)) {
          await deleteDoc(doc(firestore, "articles", id));
        }
      }
      
      for (const article of data) {
        await setDoc(doc(firestore, "articles", String(article.id)), article);
      }
    } catch (error) {
      console.error("Error saving articles to Firestore:", error);
    }
  },

  // Inscriptions / Devis
  async getInscriptions(): Promise<InscriptionRequest[]> {
    try {
      const snapshot = await getDocs(collection(firestore, "inscriptions"));
      const list: InscriptionRequest[] = [];
      snapshot.forEach((d) => {
        list.push(d.data() as InscriptionRequest);
      });
      return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error("Error fetching inscriptions from Firestore:", error);
    }
    return defaultInscriptions;
  },

  async saveInscriptions(data: InscriptionRequest[]): Promise<void> {
    try {
      const snapshot = await getDocs(collection(firestore, "inscriptions"));
      const existingIds = snapshot.docs.map(d => d.id);
      const newIds = data.map(x => x.id);
      
      for (const id of existingIds) {
        if (!newIds.includes(id)) {
          await deleteDoc(doc(firestore, "inscriptions", id));
        }
      }
      
      for (const item of data) {
        await setDoc(doc(firestore, "inscriptions", item.id), item);
      }
    } catch (error) {
      console.error("Error saving inscriptions to Firestore:", error);
    }
  },

  async addInscription(request: Omit<InscriptionRequest, "id" | "date" | "status">): Promise<InscriptionRequest> {
    const newRequest: InscriptionRequest = {
      ...request,
      id: `REG-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString(),
      status: "En attente"
    };
    try {
      await setDoc(doc(firestore, "inscriptions", newRequest.id), newRequest);
    } catch (error) {
      console.error("Error adding inscription to Firestore:", error);
    }
    return newRequest;
  },

  // Contact Messages
  async getMessages(): Promise<ContactMessage[]> {
    try {
      const snapshot = await getDocs(collection(firestore, "messages"));
      const list: ContactMessage[] = [];
      snapshot.forEach((d) => {
        list.push(d.data() as ContactMessage);
      });
      return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error("Error fetching messages from Firestore:", error);
    }
    return defaultMessages;
  },

  async saveMessages(data: ContactMessage[]): Promise<void> {
    try {
      const snapshot = await getDocs(collection(firestore, "messages"));
      const existingIds = snapshot.docs.map(d => d.id);
      const newIds = data.map(x => x.id);
      
      for (const id of existingIds) {
        if (!newIds.includes(id)) {
          await deleteDoc(doc(firestore, "messages", id));
        }
      }
      
      for (const item of data) {
        await setDoc(doc(firestore, "messages", item.id), item);
      }
    } catch (error) {
      console.error("Error saving messages to Firestore:", error);
    }
  },

  async addMessage(msg: Omit<ContactMessage, "id" | "date" | "status">): Promise<ContactMessage> {
    const newMsg: ContactMessage = {
      ...msg,
      id: `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString(),
      status: "Non lu"
    };
    try {
      await setDoc(doc(firestore, "messages", newMsg.id), newMsg);
    } catch (error) {
      console.error("Error adding message to Firestore:", error);
    }
    return newMsg;
  },

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const docSnap = await getDoc(doc(firestore, "testimonials", "all"));
      if (docSnap.exists()) {
        return docSnap.data().list as Testimonial[];
      }
    } catch (error) {
      console.error("Error fetching testimonials from Firestore:", error);
    }
    return defaultTestimonials;
  },

  async saveTestimonials(data: Testimonial[]): Promise<void> {
    try {
      await setDoc(doc(firestore, "testimonials", "all"), { list: data });
    } catch (error) {
      console.error("Error saving testimonials to Firestore:", error);
    }
  },

  // Site Settings
  async getSettings(): Promise<SiteSettings> {
    try {
      const docSnap = await getDoc(doc(firestore, "settings", "global"));
      if (docSnap.exists()) {
        return docSnap.data() as SiteSettings;
      }
    } catch (error) {
      console.error("Error fetching settings from Firestore:", error);
    }
    return {
      apprenantsForme: 500,
      totalHeuresFormation: 1200,
      tauxSatisfaction: 95,
      anneesExperience: 5
    };
  },

  async saveSettings(data: SiteSettings): Promise<void> {
    try {
      await setDoc(doc(firestore, "settings", "global"), data);
    } catch (error) {
      console.error("Error saving site settings to Firestore:", error);
    }
  },

  // Admins
  async getAdmins(): Promise<AdminUser[]> {
    try {
      const snapshot = await getDocs(collection(firestore, "admins"));
      const list: AdminUser[] = [];
      snapshot.forEach((d) => {
        list.push(d.data() as AdminUser);
      });
      return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
      console.error("Error fetching admins from Firestore:", error);
    }
    return [];
  },

  async saveAdmin(admin: AdminUser): Promise<void> {
    try {
      await setDoc(doc(firestore, "admins", admin.uid), admin);
    } catch (error) {
      console.error("Error saving admin to Firestore:", error);
    }
  },

  async syncAdmin(uid: string, email: string): Promise<void> {
    try {
      const docRef = doc(firestore, "admins", uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          uid,
          email,
          createdAt: new Date().toISOString(),
          status: "actif"
        });
      }
    } catch (error) {
      console.error("Error syncing admin in Firestore:", error);
    }
  },

  // Gallery
  async getGallery(): Promise<GalleryItem[]> {
    try {
      const docRef = doc(firestore, "gallery", "all");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().items as GalleryItem[];
      }
    } catch (error) {
      console.error("Error fetching gallery from Firestore:", error);
    }
    return [];
  },

  async saveGallery(items: GalleryItem[]): Promise<void> {
    try {
      await setDoc(doc(firestore, "gallery", "all"), { items });
    } catch (error) {
      console.error("Error saving gallery to Firestore:", error);
      throw error;
    }
  },
  
  // Students
  async getStudents(): Promise<StudentProfile[]> {
    try {
      const snapshot = await getDocs(collection(firestore, "students"));
      const list: StudentProfile[] = [];
      snapshot.forEach((d) => {
        list.push(d.data() as StudentProfile);
      });
      return list.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    } catch (error) {
      console.error("Error fetching students from Firestore:", error);
    }
    return [];
  },

  async enrollStudent(uid: string, courseId: string): Promise<void> {
    try {
      const docRef = doc(firestore, "students", uid);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const profile = snap.data() as StudentProfile;
        if (!profile.enrolledCourses.includes(courseId)) {
          profile.enrolledCourses.push(courseId);
          await setDoc(docRef, profile);
        }
      }
    } catch (error) {
      console.error("Error enrolling student in Firestore:", error);
    }
  },

  // Database Initialization Helper with Auto-Seeding
  async init(): Promise<void> {
    try {
      const snap = await getDocs(collection(firestore, "formations"));
      
      const settingsRef = doc(firestore, "settings", "global");
      const settingsSnap = await getDoc(settingsRef);
      if (!settingsSnap.exists()) {
        await setDoc(settingsRef, {
          apprenantsForme: 500,
          totalHeuresFormation: 1200,
          tauxSatisfaction: 95,
          anneesExperience: 5
        });
      }

      if (snap.empty) {
        console.log("Firestore database is empty. Seeding default Guilogtrans data...");
        
        const defaultFormations = [
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
            prochaineSession: new Date('2026-07-15'),
            programmeUrl: '',
            actif: true,
            createdAt: new Date(),
            updatedAt: new Date()
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
            prochaineSession: new Date('2026-07-22'),
            programmeUrl: '',
            actif: true,
            createdAt: new Date(),
            updatedAt: new Date()
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
            prochaineSession: new Date('2026-08-05'),
            programmeUrl: '',
            actif: true,
            createdAt: new Date(),
            updatedAt: new Date()
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
            prochaineSession: new Date('2026-08-12'),
            programmeUrl: '',
            actif: true,
            createdAt: new Date(),
            updatedAt: new Date()
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
            prochaineSession: new Date('2026-08-19'),
            programmeUrl: '',
            actif: true,
            createdAt: new Date(),
            updatedAt: new Date()
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
            prochaineSession: new Date('2026-09-02'),
            programmeUrl: '',
            actif: true,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ];
        
        for (const f of defaultFormations) {
          await setDoc(doc(firestore, "formations", f.slug), f);
        }
        
        await setDoc(doc(firestore, "testimonials", "all"), { list: defaultTestimonials });
        
        for (const article of defaultArticles) {
          await setDoc(doc(firestore, "articles", String(article.id)), article);
        }
        
        for (const ins of defaultInscriptions) {
          await setDoc(doc(firestore, "inscriptions", ins.id), ins);
        }
        
        for (const msg of defaultMessages) {
          await setDoc(doc(firestore, "messages", msg.id), msg);
        }
        console.log("Firestore database successfully seeded with Guilogtrans default data!");
      }
    } catch (e) {
      console.warn("Could not check/initialize Firestore:", e);
    }
  }
};
