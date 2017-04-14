'use strict';

import bluebird from 'bluebird';

const options = {
    promiseLib: bluebird
};
const pgp = require('pg-promise')(options);
const db = pgp(process.env.DATABASE_URL);


export default class pgDao {
    constructor() {
    }

    createInsertQuery(model) {
        const {props, keys} = this.getParams(model.record);
        const query = `INSERT INTO ${model.instance}(${keys}) VALUES(${props}) RETURNING id`;
        console.log(query);
        db.one(query).then((result) => console.log(result));
    }

    createRemoveQuery(model) {
        console.log('dao says:', model.record);
    }

    getParams(data) {
        const props = [];
        const keys = [];


        Object.keys(data).forEach((index) => {
            props.push(`'${data[index]}'`);
            keys.push(`"${index}"`);
        });

        return {props: props.join(','), keys: keys.join(',')}
    }

    getQProps(data) {
        return data.map((value, index) => `'${value}'`).join(',');
    }
}