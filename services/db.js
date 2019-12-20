import { db } from './firebase';
import * as firebase from 'firebase';
import "firebase/firestore";

// User API
export const doCreateUser = (id, username, surname, email, phone, selectedOption) =>
db.collection('users').doc(id).set({
  name: username,
  surname: surname,
  email: email,
  phone: phone,
  provincia: selectedOption,
  id: id
  })

  export const getCreateUser = (email) =>
  db.collection('users').where(email, '==', email).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
  


// Other db APIs ...

async function addCar(id, setBrand, setModel, destacado, category, price, tags, kms, carYear, photo, longtext, provincia ) {
  const db = getDbInstance();
  db.collection('adv').doc()
  .set({
    id: id,
    brand: setBrand,
    model: setModel,
    destacado: destacado,
    category: category,
    kms: kms,
    photo: photo,
    year: carYear,
    tag: tags,
    price: price,
    description: longtext,
    location: provincia
    });
  }
  
async function addRequest(idCar, phone, email, text) {
  const db = getDbInstance();
  const comment = {
    phone: phone, 
    email: email,
    text: text
  };
  db.collection('adv').doc(idCar)
  .update({
    request: firebase.firestore.FieldValue.arrayUnion(comment)
  }); 
  }
  
function parseDoc(doc) {
  return {
    id: doc.id,
    ...doc.data()
  }
}

function getDbInstance() {
  if (!db || db._isTerminated) {
    db = firebase.firestore();
  }
  return db;
}
async function addFav(idUsr, idAdv) {
  const db = getDbInstance();
  db.collection('users').doc(idUsr)
  .update({
    favorites: firebase.firestore.FieldValue.arrayUnion(idAdv)
  }); 
}
async function removeFav(idUsr, idAdv) {
  const db = getDbInstance();
  db.collection('users').doc(idUsr)
  .update({
    favorites: firebase.firestore.FieldValue.arrayRemove(idAdv)
  }); 
}

async function getField(idUsr, field) {
  const db = getDbInstance();
  const result = await db.collection('users').doc(idUsr).get()
  .then(doc => {
     return doc.data()[field]
  }) 
  return result;
}


async function getItem(collection, itemId) {
  const db = getDbInstance();
  const document = await db.collection(collection).doc(itemId).get();
  if (document.exists) {
    return parseDoc(document);
  } 
  return null; 
}

async function getAll(collection) {
  const db = getDbInstance();
  const collectionData = await db.collection(collection).get();
  
  const results = [];
  collectionData.forEach((document) => {
    results.push(parseDoc(document));
  });

  return results;
}

async function getAdvUser(collection, field, itemId) {
  const db = getDbInstance();
  console.log(collection);
  console.log(field);
  console.log(itemId);
  const document = await db.collection(collection).where(field, '==', itemId);
  return document; 
}

async function getAllRealTime({ collection, filters, order, callback }) {
  const db = getDbInstance();
  const dbCollection = db.collection(collection);
  const collectionFiltered = dbCollection.where(filters.field, filters.condition, filters.value);
  const collectionOrdered = collectionFiltered.orderBy(order);
  const llamaACallBackWithData = (collectionData) => callback(collectionData)
  collectionOrdered.onSnapshot(llamaACallBackWithData)
}

async function addItem(collection, item) {
  const db = getDbInstance();
  const result = await db.collection(collection).add(item)
  return !!result.id;
}



async function addItemWithId(collection, item, id) {
  const db = getDbInstance();
  const result = await db.collection(collection).doc(id).set(item);
  return !result;
}

async function deleteItem(collection, itemId) {
  const db = getDbInstance();
  const result = await db.collection(collection).doc(itemId).delete();
  return !result;
}

export {
  getAll,
  addItem,
  getItem,
  addRequest,
  getField,
  removeFav,
  getAdvUser,
  addFav,
  addCar,
  getAllRealTime,
  deleteItem,
  addItemWithId
}