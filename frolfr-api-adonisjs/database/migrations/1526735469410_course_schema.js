"use strict";

const Schema = use("Schema");

class CourseSchema extends Schema {
  up() {
    this.create("courses", table => {
      table.increments();
      table.string("name").notNull(),
        table.string("streetAddress").nullable(),
        table.string("city").nullable(),
        table.string("province").nullable(),
        table.string("postalCode").nullable(),
        table.string("country").nullable(),
        table.string("countryCode").nullable(),
        table.string("latLong").nullable(),
        table.timestamps();
    });
  }

  down() {
    this.drop("courses");
  }
}

module.exports = CourseSchema;
