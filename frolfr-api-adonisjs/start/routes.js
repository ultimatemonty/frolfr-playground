'use strict'

const Route = use('Route')

Route.resource('courses', 'CoursesController').apiOnly();
