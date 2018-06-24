"use strict";

const Schema = use("Schema");

class UserRoundSchema extends Schema {
  up() {
    this.create("user_rounds", table => {
      table.increments();
      table
        .integer("user_id")
        .references("users.id")
        .notNull();
      table
        .integer("round_id")
        .references("rounds.id")
        .notNull();
    });
  }

  down() {
    this.drop("user_rounds");
  }
}

module.exports = UserRoundSchema;
