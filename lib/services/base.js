'use strict';
import pgDao from '../dao/pg';

const dao = new pgDao();

export default class BaseService {
    model = {}
    constructor(model) {
        this.model = model;
    }

    save() {
        dao.createInsertQuery(this.model);
    }

    remove(shouldRewrite) {
        if(shouldRewrite) {
            return (model) => {
                dao.createRemoveQuery(model);
            }
        } else {
            dao.createRemoveQuery(this.model);
        }
    }
}