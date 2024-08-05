import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId, updateItemList) {
  const collectionReference = collection(db, "users", userId, "items");
  const itemsQuery = query(collectionReference);
  const querySnapshot = await getDocs(itemsQuery);
  const dbItemsList = [];
  querySnapshot.forEach((doc) => {
    let thisItem = {
      id: doc.id,
      ...doc.data(),
    };
    dbItemsList.push(thisItem);
  });
  updateItemList(dbItemsList);
}

export async function addItem(userId, newItemObj) {
  try {
    const collectionReference = collection(db, "users", userId, "items");
    const addedItemPromise = await addDoc(collectionReference, newItemObj);
    console.log(addedItemPromise.id);
    return addedItemPromise.id;
  } catch (error) {
    console.log(error);
  }
}
