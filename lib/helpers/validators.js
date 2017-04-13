'use strict';

import {VALIDATION_ERROR_LENGTH, MISSING_PROPERTY, VALIDATION_ERROR_NOTINTEGER,
    VALIDATION_ERROR_NOTSTRING, VALIDATION_ERROR_NOTBOOL} from '../constants/errors';

export const isTimeStamp = (timestamp) => ((new Date(timestamp)).getTime() > 0);
export const Length = (len) => (record, index) => {
    if (record[index].length > len) {
        throw new Error(`{VALIDATION_ERROR_LENGTH}: ${index}`);
    }
};
export const isRequired = (record, index) => {
    if (typeof record[index] === 'undefined') {
        throw new Error(`{MISSING_PROPERTY}: ${index}`);
    }
};
export const isEmpty = (record, index) => {
    if (!record[index]) {
        throw new Error(`{MISSING_PROPERTY}: ${index}`);
    }
};
export const isInteger = (record, index) => {
    if (!Number.isInteger(record[index])) {
        throw new Error(`{VALIDATION_ERROR_NOTINTEGER}: ${index}`);
    }
};
export const isString = (record, index) => {
    if (typeof record[index] !== 'string') {
        throw new Error(`{VALIDATION_ERROR_NOTSTRING}: ${index}`);
    }
};
export const isBool = (record, index) => {
    if (typeof record[index] !== 'boolean') {
        throw new Error(`{VALIDATION_ERROR_NOTBOOL}: ${index}`);
    }
};