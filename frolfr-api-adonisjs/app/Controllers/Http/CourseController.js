'use strict'

const Database = use('Database');
const Course = use('App/Models/Course');

class CourseController {
  async index ({response}) {
    let courses = await Course.all();
    return response.json({ courses: courses });
  }

  async store ({request, response}) {
    const courseInfo = request.only(['name']);
    let course = new Course();
    course.name = courseInfo.name;

    await course.save();
    return response.status(201).json(course);
  }

  async show ({params, response}) {
    return await Course.find(params.id);
  }

  async update ({request, response}) {
    const courseInfo = request.only(['name']);
    if (!course) {
      return response.status(404);
    }
  }

  async destroy ({params, response}) {
    let course = await Course.find(params.id);

    if (!course) {
      return response.status(404);
    }
    await course.delete();

    return response.status(204).json(null);
  }
}

module.exports = CourseController
