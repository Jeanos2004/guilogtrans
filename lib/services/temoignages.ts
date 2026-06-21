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

export type Temoignage = {
  id:         string;
  nom:        string;
  fonction:   string;
  entreprise: string;
  texte:      string;
  note:       number;             // 1-5
  actif:      boolean;
  createdAt?:  any;
};

export async function getTemoignages(actifOnly = true): Promise<Temoignage[]> {
  const q = actifOnly
    ? query(collection(db, 'temoignages'), where('actif', '==', true), orderBy('createdAt', 'desc'))
    : query(collection(db, 'temoignages'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Temoignage));
}

export async function addTemoignage(data: Omit<Temoignage, 'id' | 'createdAt'>) {
  return addDoc(collection(db, 'temoignages'), {
    ...data,
    createdAt: serverTimestamp()
  });
}

export async function updateTemoignage(id: string, data: Partial<Temoignage>) {
  return updateDoc(doc(db, 'temoignages', id), data);
}

export async function deleteTemoignage(id: string) {
  return deleteDoc(doc(db, 'temoignages', id));
}
