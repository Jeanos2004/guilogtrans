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

export type Contact = {
  id:           string;
  nom:          string;
  email:        string;
  telephone:    string;
  organisation: string;
  typedemande:  'conseil' | 'formation' | 'partenariat' | 'autre';
  message:      string;
  lu:           boolean;
  createdAt?:    any;
};

export async function getContacts(): Promise<Contact[]> {
  const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Contact));
}

export async function addContact(data: Omit<Contact, 'id' | 'createdAt' | 'lu'>) {
  return addDoc(collection(db, 'contacts'), {
    ...data,
    lu: false,
    createdAt: serverTimestamp()
  });
}

export async function markContactAsRead(id: string) {
  return updateDoc(doc(db, 'contacts', id), {
    lu: true
  });
}

export async function deleteContact(id: string) {
  return deleteDoc(doc(db, 'contacts', id));
}
