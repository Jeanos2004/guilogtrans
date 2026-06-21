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

export type Article = {
  id:          string;
  slug:        string;
  titre:       string;
  extrait:     string;
  contenu:     string;              // Markdown ou HTML
  categorie:   'session' | 'actualite' | 'partenariat' | 'evenement';
  imageUrl:    string;              // URL Firebase Storage
  auteur:      string;
  publie:      boolean;
  createdAt?:   any;
  updatedAt?:   any;
};

export async function getArticles(publieOnly = true): Promise<Article[]> {
  const q = publieOnly
    ? query(collection(db, 'articles'), where('publie', '==', true), orderBy('createdAt', 'desc'))
    : query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Article));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const q = query(collection(db, 'articles'), where('slug', '==', slug));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as Article;
}

export async function addArticle(data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) {
  return addDoc(collection(db, 'articles'), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function updateArticle(id: string, data: Partial<Article>) {
  return updateDoc(doc(db, 'articles', id), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function deleteArticle(id: string) {
  return deleteDoc(doc(db, 'articles', id));
}
