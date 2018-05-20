'use strict'

const Database = use('Database');

class CourseController {
  async index () {
    return await Database.table('courses').select('*');
  }

  async store () {
  }

  async show () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = CourseController
