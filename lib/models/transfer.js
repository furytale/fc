'use strict';

import {isString, isRequired, isInteger, isTimestamp, notEqual} from '../helpers/validators';
import BaseModel from './base';

const schema = {
    timestamp: {
        validator: [isTimestamp],
        default: Date.now()
    },
    amount: {
        validator: [isInteger],
        default: 0
    },
    sourceAccount: {
        validator: [isRequired, isInteger, notEqual('destAccount')],
        default: 0
    },
    destAccount: {
        validator: [isRequired, isInteger, notEqual('sourceAccount')],
        default: 0
    },
    details: {
        validator: [isString],
        default: ''
    },
    operationId: {
        validator: [isRequired, isInteger],
        default: 0
    },
    sourceAccountBAT: {
        validator: [isRequired, isInteger],
        default: 0
    },
    destAccountBAT: {
        validator: [isRequired, isInteger],
        default: 0
    },
    id: {
        validator: [isInteger]
    }
};



class Transfer extends BaseModel {
    constructor(data, schema) {
        super(data, schema);
    }
}

const data = {
    timestamp:10100101231,
    amount:50,
    sourceAccount:123,
    destAccount:124,
    details:'asdada',
    operationId:12,
    sourceAccountBAT:500,
    destAccountBAT:450,
    id:3
};

const transfer = new Transfer(data, schema);
console.log(transfer.record);
