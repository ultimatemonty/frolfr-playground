"use strict";

const Schema = use("Schema");

class RoundSchema extends Schema {
  up() {
    this.create("rounds", table => {
      table.increments();
      table
        .integer("course_id")
        .references("courses.id")
        .notNull();
      table.timestamps();
    });
  }

  down() {
    this.drop("rounds");
  }
}

module.exports = RoundSchema;
