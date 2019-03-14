import { makeProfileDisplay } from '../src/shared/header-component.js';
const test = QUnit.test;

QUnit.module('PROFILE DISPLAY TESTS');

test('create profile-display template', assert => {
   //Arrange
   const expected = `
      <span class="profile-display">
         <img src="./assets/schwifty-mock-03.jpg" alt="Schwifty Art of Rick and Morty">
         <h2>Display Name</h2>
         <input type="button" value="Sign Out">
      </span>
   `;
   const user = {
      displayName: 'Display Name',
      photoURL: './assets/schwifty-mock-03.jpg'
   };
   //Act
   const result = makeProfileDisplay(user);
   //Assert
   assert.htmlEqual(result, expected);
});