exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ first_name:'admin', last_name:'admin', email:'admin@rstraders.com', password:'admin', phone:'6472033511'})
      ]);
    });
};