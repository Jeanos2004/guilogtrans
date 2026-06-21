import { 
  collection, 
  getDocs, 
  getDoc, 
  doc,
  addDoc, 
  updateDoc, 
  deleteDoc,
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Formation = {
  id:               string;
  slug:             string;
  titre:            string;
  categorie:        'transport' | 'logistique' | 'supply-chain' | 'douane' | 'securite';
  description:      string;
  objectifs:        string[];
  publicCible:      string;
  duree:            string;
  tarif:            number;           // en GNF
  formateur:        string;
  prochaineSession: any;              // Timestamp or Date or string
  programmeUrl:     string;           // URL Firebase Storage (PDF)
  actif:            boolean;
  createdAt?:        any;
  updatedAt?:        any;
};

export async function getFormations(actifOnly = true): Promise<Formation[]> {
  const q = actifOnly
    ? query(collection(db, 'formations'), where('actif', '==', true), orderBy('createdAt', 'desc'))
    : query(collection(db, 'formations'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Formation));
}

export async function getFormationBySlug(slug: string): Promise<Formation | null> {
  const q = query(collection(db, 'formations'), where('slug', '==', slug));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as Formation;
}

export async function addFormation(data: Omit<Formation, 'id' | 'createdAt' | 'updatedAt'>) {
  return addDoc(collection(db, 'formations'), {
    ...data, 
    createdAt: serverTimestamp(), 
    updatedAt: serverTimestamp()
  });
}

export async function updateFormation(id: string, data: Partial<Formation>) {
  return updateDoc(doc(db, 'formations', id), { 
    ...data, 
    updatedAt: serverTimestamp() 
  });
}

export async function deleteFormation(id: string) {
  return deleteDoc(doc(db, 'formations', id));
}
