class AccountRecord {
    constructor() {}

    set name(name) {

    }
}

class Account extends AccountRecord{
    constructor(data) {
        if(data) {
            this.validate();
            this.name = data.name;
        }
    }

    set name(name) {

    }

    validate() {

    }

    add() {

    }
}

var data = {someDataToStore};
var account = new Account();
account.name = 'sdfsdf';
// account.add();


account.find();
account.fetchAll()
account.remove()