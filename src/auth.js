import { auth, usersRef } from './firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#auth-ui', {
   signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
   ],
   signInSuccessUrl: '/',
   callbacks: { 
      signInSuccessWithAuthResult(authResult) {
         const user = authResult.user;
         usersRef.child(user.uid)
            .set({
               userID: user.uid,
               displayName: user.displayName,
               photoURL: user.photoURL
            });
         return true;
      }
   }
});