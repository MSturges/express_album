
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', function(table) {
    table.increments(); // ID colum, increments automatically
    table.string('artist', 25);
    table.string('name', 20);
    table.string('genre', 12);
    table.boolean('explicit');
  })
};

exports.down = function(knex, Promise) {

};
