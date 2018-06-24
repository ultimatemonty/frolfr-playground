"use strict";

const Database = use("Database");
const Round = use("App/Models/Round");
const Course = use("App/Models/Course");
const User = use("App/Models/User");

class RoundController {
  async index({ auth, request, response }) {
    const user = auth.user;
    const rounds = await user.rounds();
    return response.json({ rounds: rounds });
  }

  async store({ request, response }) {
    const roundInfo = request.only(["course_id", "users"]);
    let round = new Round();

    // ensure the course exists and throw an error if it does not
    const course = await Course.findOrFail(roundInfo.course_id);

    round.course_id = roundInfo.course_id;

    await round.save();

    // associate the round with each user
    await round.users().attach(roundInfo.users);

    return response.status(201).json(round);
  }

  async show() {}

  async update() {}

  async destroy() {}
}

module.exports = RoundController;
