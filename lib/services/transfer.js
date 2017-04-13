1. move balance from one account to another
   - add operation record
   - add transfer record
   - update accounts record balance

transfer operation accepts
   - 2 account ids, source and destination;
   - transfer amount;

transaction:
   1. check balance on source account
//   2. if negative - rollback
   3. if can transfer - > transfer;
    transfer:
       1. add operation record
       2. update source and destinations records in account;


AccountModel.updateBalance()
    .createTransfer()
    .addOperation()


1. Model methods
   - create ?
   - delete ?
   - updateTransactQuery
   - deleteTransactQuery
   - createTransactQuery
   - getTransactQuery


       transfer 100 usd from accId = 1 to accId = 2;

   db.tx(t => {
       return t.batch([
           t.one(AccountModel.updateTransactQuery(amount = 100usd, sourceId = 1 )),
           t.one('insert into events(code) values($1) returning id', 123)
       ]);
})

update account set amount = (select amount from account where id = sourceId) - 100 where id = sourceId returning id, amount;
id | amount
1  | -20


