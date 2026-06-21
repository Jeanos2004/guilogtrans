---

## COMPOSANTS À CRÉER / REFACTORISER

### Navbar
- Logo : icône cercle tricolore (rouge/or/vert) + texte "GUILOGTRANS" en gras noir
- Liens : Accueil / À propos / Services / Formations / Actualités / Contact
- CTA "Nous contacter" → `bg-rouge`
- Fond `bg-gray-900`, texte `text-gray-300`, lien actif `text-white`
- Sticky, hamburger mobile

### Footer
- Fond `bg-gray-900`
- Slogan tricolore "Disponibilité · Efficacité · Flexibilité"
- 3 colonnes : Liens rapides / Coordonnées / Réseaux sociaux
- Copyright : "© 2026 Cabinet Guilogtrans — Conakry, Guinée. Tous droits réservés."
- Bouton WhatsApp flottant fixe bottom-right `bg-[#25D366]`

### HeroSection
- Fond sombre `bg-gray-900` avec image overlay (entrepôt, formation, transport)
- Bande décorative tricolore (rouge/or/vert, 4px, horizontale) en haut ou en bas du hero
- Titre H1 : "Le Cabinet de Référence en Logistique & Transport en Guinée"
- Sous-titre : slogan tricolore animé
- CTA double : "Nos Formations" (`bg-rouge`) + "Demander un devis" (`bg-or text-gray-900`)
- 4 mini-icônes de transport (avion, camion, train, bateau — Lucide React) en bas du hero

### StatsSection
- Fond `bg-gray-900` (contraste avec les sections blanches/grises)
- 4 chiffres clés avec counter animation au scroll :
  - ✈ Modes de transport couverts : 4
  - 🎓 Formations dispensées : 50+
  - 🏢 Entreprises accompagnées : 30+
  - 👥 Apprenants formés : 500+
- Chiffres en `text-or` sur fond sombre

### ServicesSection
- 3 cartes sur `bg-white`
- **Conseil stratégique** → accent `border-t-4 border-rouge`
- **Études & Audit** → accent `border-t-4 border-or`
- **Formation professionnelle** → accent `border-t-4 border-vert`
- Icône Lucide par service + titre + description courte + lien CTA

### FormationCard
```ts
type FormationCard = {
  titre: string
  categorie: 'transport' | 'logistique' | 'supply-chain' | 'douane' | 'securite'
  duree: string
  tarif: number        // GNF
  prochaineSession: string
  slug: string
}
```
Mapping couleur par catégorie :
- transport → rouge
- logistique / supply-chain → or
- douane / securite → vert

### ContactForm
- Champs : Nom / Email / Téléphone / Organisation / Type (Conseil/Formation/Partenariat/Autre) / Message
- Validation : react-hook-form + zod
- Submit → `/api/contact`
- Toast succès/erreur

---

## API ROUTES

### `/api/contact/route.ts`
- Validation Zod
- Resend ou Nodemailer
- Email de confirmation utilisateur + notification cabinet

### `/api/formations/route.ts`
- GET : retourne `data/formations.ts`

---

## DONNÉES INITIALES

`data/formations.ts` — 6 formations réalistes :
```ts
[
  { id:'1', slug:'gestion-stocks', titre:'Gestion des stocks et approvisionnement',
    categorie:'logistique', duree:'5 jours', tarif:2500000,
    prochaineSession:'2026-07-15', formateur:'Expert Guilogtrans', actif:true },

  { id:'2', slug:'optimisation-routes', titre:'Optimisation des routes de transport',
    categorie:'transport', duree:'3 jours', tarif:1800000,
    prochaineSession:'2026-07-22', formateur:'Expert Guilogtrans', actif:true },

  { id:'3', slug:'reglementation-douaniere', titre:'Réglementation douanière & transit',
    categorie:'douane', duree:'4 jours', tarif:2200000,
    prochaineSession:'2026-08-05', formateur:'Expert Guilogtrans', actif:true },

  { id:'4', slug:'management-supply-chain', titre:'Management de la supply chain',
    categorie:'supply-chain', duree:'5 jours', tarif:3000000,
    prochaineSession:'2026-08-12', formateur:'Expert Guilogtrans', actif:true },

  { id:'5', slug:'securite-routiere', titre:'Sécurité routière et conduite professionnelle',
    categorie:'securite', duree:'2 jours', tarif:1200000,
    prochaineSession:'2026-08-19', formateur:'Expert Guilogtrans', actif:true },

  { id:'6', slug:'logistique-internationale', titre:'Logistique internationale & Incoterms',
    categorie:'logistique', duree:'3 jours', tarif:2000000,
    prochaineSession:'2026-09-02', formateur:'Expert Guilogtrans', actif:true },
]
```

---

## SEO — `app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: {
    default: 'Cabinet Guilogtrans — Conseil, Étude & Formation | Logistique & Transport | Conakry, Guinée',
    template: '%s | Guilogtrans'
  },
  description: 'Cabinet de conseil, d\'étude et de formation spécialisé en logistique et transport à Conakry, Guinée. Disponibilité · Efficacité · Flexibilité.',
  keywords: ['logistique Guinée','formation transport Conakry','cabinet logistique','supply chain Guinée','Guilogtrans'],
  openGraph: {
    type: 'website', locale: 'fr_GN',
    url: 'https://guilogtrans.com',
    siteName: 'Cabinet Guilogtrans',
  }
}
```

---

## NETTOYAGE DU CLONE CFIG

Supprime ou remplace :
- Tout texte mentionnant "CFIG", "Centre de Formation et d'Ingénierie de Guinée"
- Couleurs CFIG (`#1A3A6E`, `#2A8BC4`) — remplacer par la nouvelle palette
- Images, assets et logos CFIG dans `/public`
- Données CFIG (formations, équipe, stats)
- Meta tags SEO CFIG

---

## CONTRAINTES

- TypeScript strict, zéro `any`
- Tailwind uniquement
- Server Components par défaut, `'use client'` uniquement si nécessaire
- `next/image` pour toutes les images
- `next/link` pour la navigation interne
- Accessibilité WCAG AA
- Le mot "Starlink" ne doit apparaître nulle part dans le projet

---

## DESIGN REFERENCE

[📎 Image du design jointe — utilise-la comme référence principale pour le layout, les proportions et l'ambiance. Adapte fidèlement avec la palette tricolore ci-dessus.]

---

## ORDRE D'EXÉCUTION

1. `tailwind.config.ts` — nouvelle palette rouge/or/vert
2. `app/layout.tsx` — metadata + fonts + layout global
3. `Navbar` + `Footer` + bouton WhatsApp flottant
4. Page Accueil complète — Hero, Stats, Services, Formations preview, CTA final
5. `data/formations.ts` + page Catalogue Formations
6. `data/services.ts` + page Services
7. Formulaire Contact + API Route
8. Page À propos
9. Page Actualités
10. Espace Admin

Commence par l'étape 1 et 2. Montre le code complet de chaque fichier modifié.

## BASE DE DONNÉES — FIREBASE (déjà utilisé dans le template CFIG)

Ce projet utilise déjà Firebase. Conserve la configuration existante et adapte-la
pour Guilogtrans. Ne migre PAS vers Supabase ou PostgreSQL.

### lib/firebase.ts — à vérifier / adapter
```ts
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

export const db      = getFirestore(app)
export const auth    = getAuth(app)
export const storage = getStorage(app)
```

---

### COLLECTIONS FIRESTORE

#### `formations/{formationId}`
```ts
type Formation = {
  id:               string
  slug:             string
  titre:            string
  categorie:        'transport' | 'logistique' | 'supply-chain' | 'douane' | 'securite'
  description:      string
  objectifs:        string[]
  publicCible:      string
  duree:            string
  tarif:            number           // en GNF
  formateur:        string
  prochaineSession: Timestamp
  programmeUrl:     string           // URL Firebase Storage (PDF)
  actif:            boolean
  createdAt:        Timestamp
  updatedAt:        Timestamp
}
```

#### `articles/{articleId}`
```ts
type Article = {
  id:          string
  slug:        string
  titre:       string
  extrait:     string
  contenu:     string              // Markdown ou HTML
  categorie:   'session' | 'actualite' | 'partenariat' | 'evenement'
  imageUrl:    string              // URL Firebase Storage
  auteur:      string
  publie:      boolean
  createdAt:   Timestamp
  updatedAt:   Timestamp
}
```

#### `contacts/{contactId}`
```ts
type Contact = {
  id:           string
  nom:          string
  email:        string
  telephone:    string
  organisation: string
  typedemande:  'conseil' | 'formation' | 'partenariat' | 'autre'
  message:      string
  lu:           boolean             // pour le dashboard admin
  createdAt:    Timestamp
}
```

#### `inscriptions/{inscriptionId}`
```ts
type Inscription = {
  id:           string
  formationId:  string
  formationTitre: string
  nom:          string
  email:        string
  telephone:    string
  organisation: string
  traite:       boolean
  createdAt:    Timestamp
}
```

#### `temoignages/{temoignageId}`
```ts
type Temoignage = {
  id:        string
  nom:       string
  fonction:  string
  entreprise: string
  texte:     string
  note:      number             // 1-5
  actif:     boolean
  createdAt: Timestamp
}
```

---

### FIRESTORE SECURITY RULES

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Formations et articles : lecture publique, écriture admin
    match /formations/{id} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /articles/{id} {
      allow read: if resource.data.publie == true;
      allow write: if request.auth != null;
    }

    // Contacts et inscriptions : écriture publique (formulaires), lecture admin
    match /contacts/{id} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    match /inscriptions/{id} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Témoignages : lecture publique actifs, gestion admin
    match /temoignages/{id} {
      allow read: if resource.data.actif == true;
      allow write: if request.auth != null;
    }
  }
}
```

---

### SERVICES FIRESTORE — lib/services/

Crée ces fichiers de service (Server-side avec firebase-admin pour les
Server Components, client SDK pour les Client Components) :

#### `lib/services/formations.ts`
```ts
import { collection, getDocs, getDoc, doc,
         addDoc, updateDoc, deleteDoc,
         query, where, orderBy, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export async function getFormations(actifOnly = true) {
  const q = actifOnly
    ? query(collection(db,'formations'), where('actif','==',true), orderBy('createdAt','desc'))
    : query(collection(db,'formations'), orderBy('createdAt','desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getFormationBySlug(slug: string) {
  const q = query(collection(db,'formations'), where('slug','==',slug))
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { id: d.id, ...d.data() }
}

export async function addFormation(data: Omit<Formation,'id'|'createdAt'|'updatedAt'>) {
  return addDoc(collection(db,'formations'), {
    ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp()
  })
}

export async function updateFormation(id: string, data: Partial<Formation>) {
  return updateDoc(doc(db,'formations',id), { ...data, updatedAt: serverTimestamp() })
}

export async function deleteFormation(id: string) {
  return deleteDoc(doc(db,'formations',id))
}
```

Applique le même pattern pour `articles.ts`, `contacts.ts`, `inscriptions.ts`, `temoignages.ts`.

---

### API ROUTES (simplifiées grâce à Firebase)

#### `app/api/contact/route.ts`
```ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const schema = z.object({
  nom:          z.string().min(2),
  email:        z.string().email(),
  telephone:    z.string().min(8),
  organisation: z.string().optional(),
  typedemande:  z.enum(['conseil','formation','partenariat','autre']),
  message:      z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = schema.parse(await req.json())
    await addDoc(collection(db,'contacts'), {
      ...body, lu: false, createdAt: serverTimestamp()
    })
    // Optionnel : envoi email via Resend
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Données invalides' }, { status: 400 })
  }
}
```

#### `app/api/inscription/route.ts`
Même pattern — écrit dans la collection `inscriptions/`.

---

### FIREBASE STORAGE — PDFs & Images

Pour l'upload des PDFs de programme dans l'espace admin :
```ts
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'

export async function uploadPDF(file: File, formationSlug: string) {
  const storageRef = ref(storage, `formations/${formationSlug}/programme.pdf`)
  await uploadBytes(storageRef, file)
  return getDownloadURL(storageRef)
}

export async function uploadImage(file: File, path: string) {
  const storageRef = ref(storage, path)
  await uploadBytes(storageRef, file)
  return getDownloadURL(storageRef)
}
```

---

### SEED DATA — Script d'initialisation Firestore

Crée `scripts/seed-firestore.ts` pour pré-remplir la base :
```ts
import { initializeApp } from 'firebase-admin/app'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'

// Lance avec : npx ts-node scripts/seed-firestore.ts

const formations = [
  {
    slug: 'gestion-stocks',
    titre: 'Gestion des stocks et approvisionnement',
    categorie: 'logistique',
    duree: '5 jours',
    tarif: 2500000,
    prochaineSession: Timestamp.fromDate(new Date('2026-07-15')),
    actif: true,
    // ... autres champs
  },
  // ... 5 autres formations
]

async function seed() {
  const db = getFirestore()
  for (const f of formations) {
    await db.collection('formations').add({
      ...f,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
  }
  console.log('✅ Firestore seedé avec succès')
}

seed()
```

---

### .env.local — Variables à configurer

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Pour le seed et les opérations admin côté serveur
FIREBASE_SERVICE_ACCOUNT_KEY=   # JSON stringifié
```