  import { initializeApp } from 'firebase/app';
  import { getFirestore, doc, getDoc, addDoc } from 'firebase/firestore'; 
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

  const config = {
    apiKey: "AIzaSyAZ0tX5atsf5X54bgdYZrKwNjoF-aAR61w",
    authDomain: "crwn-db-f3c3d.firebaseapp.com",
    projectId: "crwn-db-f3c3d",
    storageBucket: "crwn-db-f3c3d.appspot.com",
    messagingSenderId: "672272760378",
    appId: "1:672272760378:web:0be28985925eef5735bf03"
  };
  
  export const firebaseApp = initializeApp(config);
  export const db = getFirestore();
  
  
 export const auth = getAuth(); 
  
 const provider = new GoogleAuthProvider();

  /* provider.setCustomParameters({ prompt: 'select_account' }); */
  
  export const signInWithGoogle = () => signInWithPopup(auth, provider);



  export const getUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
      const db = getFirestore();
      
      const userProfile = auth.currentUser;
      
     
      /* if (userProfile !== null) {
        userProfile.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      } */
      
    
      return userProfile;
  };

  export default db;

