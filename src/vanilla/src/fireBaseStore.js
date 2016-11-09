var config = {
    apiKey: "AIzaSyBna5qqyCXl0ozTj9_CrEOFXygThsjb8Fg",
    authDomain: "flickering-inferno-1056.firebaseapp.com",
    databaseURL: "https://flickering-inferno-1056.firebaseio.com",
    storageBucket: "flickering-inferno-1056.appspot.com",
    messagingSenderId: "865509601909"
};

export default class FireBaseStore{
    constructor(){
        firebase.initializeApp(config);
        this.database = firebase.database();
    }

    getItems = () => {
        firebase.database().ref('todo/').on('value', function(value) {
            console.log(value.val());
        });
        return
    };

    addItem = item => {
        this.database.ref('todo/list').set(item);
    }
}