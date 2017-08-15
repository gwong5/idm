import test from 'ava'
const worker = require('../userCreated')

test('worker synchronizes new user data with HubSpot', t => {
  t.true(typeof worker.start === 'function', 'worker.start is not a function')
  t.true(typeof worker.processUserCreated === 'function', 'worker.processUserCreated is not a function')
})
