import {
  collection,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import db from "./index";

export const addItem = async (text, collectionName) => {
  const collectionRef = collection(db, collectionName);
  try {
    await addDoc(collectionRef, { text });
  } catch (e) {
    console.log(e);
  }
};

export const deleteItem = async (id, collectionName) => {
  const docRef = doc(db, collectionName, id);
  try {
    await deleteDoc(docRef);
  } catch (e) {
    console.log(e);
  }
};

export const updateItem = async (id, text, collectionName) => {
  const docRef = doc(db, collectionName, id);
  try {
    await setDoc(docRef, { text });
  } catch (e) {
    console.log(e);
  }
};
