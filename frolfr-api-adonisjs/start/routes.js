"use strict";

const Route = use("Route");

Route.post("/login", "AuthController.login");
Route.post("/register", "AuthController.register");

Route.resource("courses", "CourseController").apiOnly();
Route.resource("users", "UserController").apiOnly();
