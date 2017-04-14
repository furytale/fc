'use strict';
import pgDao from '../dao/pg';

const dao = new pgDao();

export default class BaseService {
    model = {}
    constructor(model) {
        this.model = model;
    }

    getModelData() {
        return this.model.record;
    }

    save() {
        return dao.createInsertQuery(this.model);
    }

    remove() {
        return dao.createRemoveQuery(this.model);
    }

    async findWith() {
        return await dao.createSelectQuery(this.model).then((result) => {
            return result;
        });
    }
}