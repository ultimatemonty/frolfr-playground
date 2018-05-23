'use strict'

const Route = use('Route')

Route.resource('courses', 'CourseController').apiOnly();
