import { auth } from '../firebase.js';

export function makeProfileDisplay(user) {
   const html = `
      <span class="profile-display">
         <img src="${user.photoURL}" alt="Schwifty Art of Rick and Morty">
         <h2>${user.displayName}</h2>
         <input type="button" value="Sign Out">
      </span>
   `;
   const template = document.createElement('template');
   template.innerHTML = html;
   return template.content;
}

function makeStaticHeader() {
   const html = `
      <span class="header-container">
         <img src="./assets/schwifty-mock-03.jpg" alt="Schwifty Art of Rick and Morty">
         <h1>Rick and Morty</h1>
      </span>
    `;

   const template = document.createElement('template');
   template.innerHTML = html;
   return template.content;
}

const headerNode = document.getElementById('header');

export default function loadHeader(options) {

   const staticHeader = makeStaticHeader();
   headerNode.appendChild(staticHeader);
   
   if(options && options.skipAuth) {
      return;
   }

   const fullHeaderNode = headerNode.querySelector('.header-container');
   auth.onAuthStateChanged(user => {
      if(user) {
         const userDom = makeProfileDisplay(user);
         const signOutButton = userDom.querySelector('input');

         signOutButton.addEventListener('click', () => {
            auth.signOut();
         });
         fullHeaderNode.appendChild(userDom);
      } else {
         window.location = './auth.html';
      }
   });


}