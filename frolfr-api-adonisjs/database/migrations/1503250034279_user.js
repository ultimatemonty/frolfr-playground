"use strict";

const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("username", 80).unique();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.string("first_name", 60);
      table.string("last_name", 60);
      table.string("city", 60);
      table.string("province", 60);
      table.string("country", 60);
      table.string("countryCode", 4);
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
