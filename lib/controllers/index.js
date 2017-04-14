'use strict';

import accountService from '../services/account';

// const data = {
//     name: 'Alex',
//     balance: 100,
//     isNegative: false,
//     currency: 'eur'
// };

const data = {
    id: 1,
    name: 'test'
};

// accountService(data).save();
accountService(data).remove();

