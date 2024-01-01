import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
import { getStorage } from "firebase/storage"

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
      apiKey: "AIzaSyAt3633-J5Xf1wK3chhlOkb_pfe0ClIfgs",
      authDomain: "cashierfu-app.firebaseapp.com",
      projectId: "cashierfu-app",
      storageBucket: "cashierfu-app.appspot.com",
      messagingSenderId: "98957591375",
      appId: "1:98957591375:web:6c1d0d032b772f1c273b3a",
      measurementId: "G-03H4T0CDR3"
    }

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)

    return {
      provide: {
        analytics: analytics,
        auth: auth,
        firestore: firestore,
        storage: storage
      }
    }
})