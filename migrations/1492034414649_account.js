exports.up = function(pgm) {
    var columns = {
        "name": {
            type: "char(20)",
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
        "isNegative": {
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
            type: "char(3)",
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
    pgm.createTable('account', columns);
};

exports.down = function(pgm) {
    pgm.dropTable('account');
};
