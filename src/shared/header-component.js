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
