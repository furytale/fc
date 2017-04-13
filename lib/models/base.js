'use strict';

export default class BaseModel {
    record = [];
    constructor(data, schema) {
        if(data) {
            this.setData(data, schema);
        }
    }

    setData(data, schema) {
        Object.keys(schema).forEach((index) => {
            if(!data[index]) {
                this.record[index] = schema[index].default;
            }

            if(schema[index].validator.length) {
                for(let validator of schema[index].validator) {
                    validator(data, index);
                }
            }
        });
        console.log(schema);
        console.log(data);
        console.log(this.record);
    }
}