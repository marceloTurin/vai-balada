'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('ballads', 'BalladController')
  .apiOnly()
  .middleware('auth')