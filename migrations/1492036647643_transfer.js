exports.up = function(pgm) {
    var columns = {
        "timestamp": {
            type: "bigint",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "amount": {
            type: "bigint",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null,
            default: 0
        },
        "sourceAccount": {
            type: "char(20)",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "destAccount": {
            type: "char(20)",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "details": {
            type: "text",
            unique: false,
            primaryKey: false,
            notNull: false,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "operationId": {
            type: "bigint",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "sourceAccountBAT": {
            type: "bigint",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "destAccountBAT": {
            type: "bigint",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "id": {
            type: "bigserial",
            unique: true,
            primaryKey: true,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        }
    };
    pgm.createTable('transfer', columns);
};

exports.down = function(pgm) {
    pgm.dropTable('transfer');
};
