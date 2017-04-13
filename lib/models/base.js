'use strict';

export default class BaseModel {
    record = [];
    constructor(data, schema) {
        if(data) {
            this.setData(data, schema);
        }
    }

    setData(data, schema) {
        this.record = data;
        Object.keys(schema).forEach((index) => {
            if(schema[index].validator.length) {
                for(let validator of schema[index].validator) {
                console.log(validator);
                    validator(data, index);
                }
            }
            if(!data[index] && typeof schema[index].default !== 'undefined') {
                this.record[index] = schema[index].default;
            }
        });
    }
}