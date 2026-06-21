import { 
  collection, 
  getDocs, 
  getDoc, 
  doc,
  addDoc, 
  updateDoc, 
  deleteDoc,
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Inscription = {
  id:             string;
  formationId:    string;
  formationTitre: string;
  nom:            string;
  email:          string;
  telephone:      string;
  organisation:   string;
  traite:         boolean;
  createdAt?:      any;
};

export async function getInscriptions(): Promise<Inscription[]> {
  const q = query(collection(db, 'inscriptions'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Inscription));
}

export async function addInscription(data: Omit<Inscription, 'id' | 'createdAt' | 'traite'>) {
  return addDoc(collection(db, 'inscriptions'), {
    ...data,
    traite: false,
    createdAt: serverTimestamp()
  });
}

export async function markInscriptionAsProcessed(id: string, traite = true) {
  return updateDoc(doc(db, 'inscriptions', id), {
    traite
  });
}

export async function deleteInscription(id: string) {
  return deleteDoc(doc(db, 'inscriptions', id));
}
