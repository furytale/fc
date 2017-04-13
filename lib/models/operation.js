'use strict';

import {isTimestamp, isInteger} from '../helpers/validators';
import BaseModel from './base';

const schema = {
    id: {
        validator: [isInteger],
        default: 0
    },
    timestamp: {
        validator: [isTimestamp],
        default: Date.now()
    }
};

class Operation extends BaseModel {
    constructor(data, schema) {
        super(data, schema);
    }
}

const data = {
    id: 1
};

const op = new Operation(data, schema);
console.log(op.record);
