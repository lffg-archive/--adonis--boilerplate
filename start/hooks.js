'use strict'

/*
|--------------------------------------------------------------------------
| Hooks
|--------------------------------------------------------------------------
|
| For this file, check out the documentation:
| https://adonisjs.com/docs/4.0/ignitor#_hooks
|
*/

const { hooks } = require('@adonisjs/ignitor')
const moment = require('moment')

hooks.after.providersRegistered(() => {
  const View = use('View')

  /**
   * Adds a "currentTime" global method into the views:
   */
  View.global('now', () => {
    return Date.now()
  })

  /**
   * Adds a "Date" global alias into de views:
   */
  View.global('Date', (...args) => {
    return new Date(...args)
  })

  /**
   * Adds a moment.js global alias into the views:
   */
  View.global('moment', (...args) => {
    return moment(...args)
  })
})
