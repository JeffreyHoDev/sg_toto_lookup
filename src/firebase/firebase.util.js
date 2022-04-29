import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"; 

import data from '../constant.json'


const firebaseConfig = {
    apiKey: data.FIREBASE_API_KEY,
    authDomain: data.FIREBASE_AUTH_DOMAIN,
    projectId: data.FIREBASE_PROJECT_ID,
    storageBucket: data.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: data.FIREBASE_MESSAGING_SENDER_ID,
    appId: data.FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);

const firebase_db = getFirestore(app);

export const queryData = async() => {
    const docRef = doc(firebase_db, "core_data", "individual_numbers");
    const docSnap = await getDoc(docRef)
    const data = await docSnap.data()
    
    return data

}


