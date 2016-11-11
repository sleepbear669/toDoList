import ToDoItem from './toDoItem';

var config = {
    apiKey: "AIzaSyBna5qqyCXl0ozTj9_CrEOFXygThsjb8Fg",
    authDomain: "flickering-inferno-1056.firebaseapp.com",
    databaseURL: "https://flickering-inferno-1056.firebaseio.com",
    storageBucket: "flickering-inferno-1056.appspot.com",
    messagingSenderId: "865509601909"
};

export default class FireBaseStore {
    constructor() {
        firebase.initializeApp(config);
        this.database = firebase.database();
    }

    on = (ref, event, callback) => {
        firebase.database().ref(ref).on(event, r => callback(r.val()));
    };

    addItem = (todo, handle)=> {
        const key = this.database.ref().child('todo').push().key;
        this.database.ref('todo/' + key).set(new ToDoItem(key, todo))
            .then(() => {
                if (handle)
                    handle();
            });
    }
}