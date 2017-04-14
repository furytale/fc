'use strict';

import {serviceAccount, serviceUpdAccount} from '../services/account';

const data = {
    name: 'Alex',
    balance: 100,
    isNegative: false,
    currency: 'eur'
};

const service = serviceAccount(data);
service.save().then((result) => {
    console.log(`Insert operation, returned id: ${result.id}`);
});

// const service = serviceUpdAccount({id: 1});
// service.fetch();
// console.log(service.model);


