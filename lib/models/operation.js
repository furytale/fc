class OperationRecord {

    // validators = {
    //     timestamp:[isTimestamp],
    //     id:[isInteger]
    // }

    params = {
        timestamp:Date.now(),
        id:0
    }

    constructor({timestamp = Date.now(), id = 1}) {

        console.log(timestamp);


        // forEach(this.validate, (func, index) => {
        //     if (func(index)) {
        //
        //     }
        // })


    }

    // set timestamp(timestamp) {
    //
    // }
    //
    // set id(id){
    //
    // }
}

class Operation extends OperationRecord {
    constructor(data = {}) {
        super(data);
    }

    create() {

    }


}

const op = new Operation({timestamp: 3});


1. ceate account operation
2.