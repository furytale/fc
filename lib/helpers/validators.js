'use strict';

import * as ERRORS from '../constants/errors';

export const isTimeStamp = (timestamp) => ((new Date(timestamp)).getTime() > 0);
export const Length = (len) => (record, index) => {
    if (record[index].length > len) {
        throw new Error(`{ERRORS.VALIDATION_ERROR_LENGTH}: ${index}`);
    }
};
export const isRequired = (record, index) => {
    if (typeof record[index] === 'undefined') {
        throw new Error(`{ERRORS.MISSING_PROPERTY}: ${index}`);
    }
};
export const isEmpty = (record, index) => {
    if (!record[index]) {
        throw new Error(`{ERRORS.MISSING_PROPERTY}: ${index}`);
    }
};
export const isInteger = (record, index) => {
    if (!Number.isInteger(record[index])) {
        throw new Error(`{ERRORS.VALIDATION_ERROR_NOTINTEGER}: ${index}`);
    }
};
export const isString = (record, index) => {
    if (typeof record[index] !== 'string') {
        throw new Error(`{ERRORS.VALIDATION_ERROR_NOTSTRING}: ${index}`);
    }
};
export const isBool = (record, index) => {
    if (typeof record[index] !== 'boolean') {
        throw new Error(`{ERRORS.VALIDATION_ERROR_NOTBOOL}: ${index}`);
    }
};