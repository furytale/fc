'use strict';

import {isString, isRequired, Length, isInteger, isBool, isEmptyString} from '../helpers/validators';
import BaseModel from './base';

const schema = {
    name: {
        validator: [isRequired, isString, isEmptyString, Length(20)],
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
    }
};



export default class Account extends BaseModel {
    instance = 'account';
    constructor(data) {
        super(data, schema);
    }
};
