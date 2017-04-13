'use strict';

import * as ERRORS from '../constants/errors';

export const isSet = (record, index) => {
    return (typeof record[index] !== 'undefined');
};

export const isNegative = (record, index) => {
    if (isSet(record, index) &&
        Number.isInteger(record[index]) &&
        record[index] < 0) {
        throw new Error(`{ERRORS.VALIDATION_ERROR_ISNEGATIVE}: ${index}`);
    }
};

export const isTimestamp = (record, index) => {
    if (!(new Date(record[index]).getTime() > 0)) {
        throw new Error(`{ERRORS.VALIDATION_ERROR_TIMESTAMP}: ${index}`);
    }
};
export const Length = (len) => (record, index) => {
    if (isSet(record, index) && record[index].length > len) {
        throw new Error(`{ERRORS.VALIDATION_ERROR_LENGTH}: ${index}`);
    }
};
export const isRequired = (record, index) => {
    if (!isSet(record, index)) {
        throw new Error(`{ERRORS.VALIDATION_MISSING_PROPERTY}: ${index}`);
    }
};
export const isEmptyString = (record, index) => {
    if (isSet(record, index) && (record[index] === "" || record[index] === null)) {
        throw new Error(`{ERRORS.VALIDATION_EMPTY_STRING}: ${index}`);
    }
};
export const isInteger = (record, index) => {
    if (isSet(record, index) && !Number.isInteger(record[index])) {
        throw new Error(`{ERRORS.VALIDATION_ERROR_NOTINTEGER}: ${index}`);
    }
};
export const isString = (record, index) => {
    if (isSet(record, index) && typeof record[index] !== 'string') {
        throw new Error(`{ERRORS.VALIDATION_ERROR_NOTSTRING}: ${index}`);
    }
};
export const isBool = (record, index) => {
    if (isSet(record, index) && typeof record[index] !== 'boolean') {
        throw new Error(`{ERRORS.VALIDATION_ERROR_NOTBOOL}: ${index}`);
    }
};