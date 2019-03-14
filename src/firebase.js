var config = {
   apiKey: 'AIzaSyBcTjf8rq1TXKUnppvuMaBGg0mKxveJNds',
   authDomain: 'rick-morty-favorites.firebaseapp.com',
   databaseURL: 'https://rick-morty-favorites.firebaseio.com',
   projectId: 'rick-morty-favorites'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUser = db.ref('favorites-by-user');
