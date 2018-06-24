"use strict";

const Model = use("Model");

class Round extends Model {
  static get table() {
    return "rounds";
  }

  static get primaryKey() {
    return "id";
  }

  course() {
    return this.hasOne("App/Models/Course");
  }

  users() {
    return this.belongsToMany("App/Models/User").pivotTable("user_rounds");
  }
}

module.exports = Round;
