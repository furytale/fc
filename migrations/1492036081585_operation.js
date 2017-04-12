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
    pgm.createTable('operation', columns);
};

exports.down = function(pgm) {
    pgm.dropTable('operation');
};
