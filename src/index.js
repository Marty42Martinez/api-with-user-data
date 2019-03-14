import { auth } from './firebase.js';
import loadHeader from './shared/header-component.js';

auth.onAuthStateChanged(() => {
   console.log('did this work?');
   loadHeader();
});