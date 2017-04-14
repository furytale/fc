'use strict';

import AccountModel from '../models/account';
import BaseService from '../services/base';


class AccountService extends BaseService {
    constructor(model) {
        super(model)
    }

    remove() {
        console.log("Let' remove!!!!", this.model);
        this.model.record = {id: this.model.record.id};
        super.remove(true)(this.model);
    }
}

export default (data) => {
    const model = new AccountModel();
    model.setData({id: 1});
    return new AccountService(model);
}