'use strict';

import AccountModel from '../models/account';
import BaseService from '../services/base';


class AccountService extends BaseService {
    constructor(model) {
        super(model)
    }

    remove() {
        this.model.record = {id: this.model.record.id};
        super.remove(true)(this.model);
    }

    async fetch() {
        const accountData = await this.findWith();
        if (Object.keys(accountData).length) {
            this.model.setData(accountData[0]);
        }
    }
}

export const serviceAccount = (data) => {
    const model = new AccountModel(data);
    const service = new AccountService(model);
    return service;
};

export const serviceUpdAccount = (data) => {
    const model = new AccountModel();
    model.setData(data);
    const service = new AccountService(model);
    return service;
};
