'use strict';

export default class BaseModel {
    record = {};
    schema = {};
    constructor(data, schema) {
        if(data) {
            this.setSchema(data, schema);
        } else {
            this.schema = schema;
        }
    }

    setData(data) {
        Object.keys(this.schema).forEach((index) => {
            if(typeof data[index] !== 'undefined') {
                if(this.schema[index].parsers && this.schema[index].parsers.length) {
                    for(let parser of this.schema[index].parsers) {
                        data[index] = parser(data[index]);
                    }
                }
                if(this.schema[index].validator.length) {
                    for(let validator of this.schema[index].validator) {
                        validator(data, index);
                    }
                }
                this.record[index] = data[index];
            }
        });
    }

    setSchema(data, schema) {
        this.record = data;
        Object.keys(schema).forEach((index) => {
            if(data[index] && schema[index].parsers && schema[index].parsers.length) {
                for(let parser of schema[index].parsers) {
                    data[index] = parser(data[index]);
                }
            }

            if(schema[index].validator.length) {
                for(let validator of schema[index].validator) {
                    validator(data, index);
                }
            }
            if(!data[index] && typeof schema[index].default !== 'undefined') {
                this.record[index] = schema[index].default;
            }
        });
    }
}