export default class Store{
    constrouctor(){
        this.storage = [];
    }

    getItems = () => {
        return this.storage;
    };

    addItem = item => {
        this.storage.push(item);
    }
}