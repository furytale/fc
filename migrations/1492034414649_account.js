exports.up = function(pgm) {
    var columns = {
        "name": {
            type: "char",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null
        },
        "balance": {
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
        "isnegative": {
            type: "boolean",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null,
            default: "false"
        },
        "currency": {
            type: "char",
            unique: false,
            primaryKey: false,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null,
            default: "usd"
        },
        "id": {
            type: "bigint",
            unique: true,
            primaryKey: true,
            notNull: true,
            check: null,
            references: null,
            onDelete: null,
            onUpdate: null,
        }
    };
    pgm.createTable('account', columns);
};

exports.down = function(pgm) {
    pgm.dropTable('account');
};
