'use strict';

import {isString, isRequired, Length, isInteger, isBool} from '../helpers/validators';
import BaseModel from './base';

const schema = {
    name: {
        validator: [isString, isRequired, Length(20)],
        default: ''
    },
    balance: {
        validator: [isInteger, Length(20)],
        default: 0
    },
    isNegative: {
        validator: [isBool],
        default: true
    },
    currency: {
        validator: [isString, Length(3)],
        default: 'usd'
    },
    id: {
        validator: [isInteger],
        default: 0
    }
};



class Account extends BaseModel {
    constructor(data, schema) {
        super(data, schema);
    }
}

const data = {
    name: 'Alex',
    balance: 100,
    isNegative: false,
    currency: 'eur'
};

const acc = new Account(data, schema);
console.log(acc.record);
