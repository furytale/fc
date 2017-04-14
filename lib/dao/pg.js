'use strict';

import bluebird from 'bluebird';

const options = {
    promiseLib: bluebird
};
const pgp = require('pg-promise')(options);
const db = pgp(process.env.DATABASE_URL);

export default class pgDao {
    constructor() { }

    createInsertQuery(model) {
        const {props, keys} = this._getParams(model.record);
        const query = `INSERT INTO ${model.instance}(${keys}) VALUES(${props}) RETURNING id`;
        console.log(query);
        return db.one(query);
    }

    createSelectQuery(model) {
        const whereQuery = this._getWhereQuery(model.record);
        const query = `SELECT * FROM ${model.instance} WHERE ${whereQuery}`;
        console.log(query);
        return db.any(query);
    }

    createRemoveQuery(model) {
        const query = `DELETE FROM ${model.instance} WHERE`;
    }

    _getWhereQuery(data) {
        const qp = [];
        Object.keys(data).forEach((index) => {
            qp.push(`"${index}" = '${data[index]}'`);
        });
        return qp.join(' AND ');
    }

    _getParams(data) {
        const props = [];
        const keys = [];
        Object.keys(data).forEach((index) => {
            props.push(`'${data[index]}'`);
            keys.push(`"${index}"`);
        });
        return {props: props.join(','), keys: keys.join(',')}
    }

    _getQProps(data) {
        return data.map((value, index) => `'${value}'`).join(',');
    }
}