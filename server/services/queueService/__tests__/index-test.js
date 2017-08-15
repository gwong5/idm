import test from 'ava'
import {getQueue, emptyQueue} from '../index'

test('getQueue() retrieves job queue', t => {
  t.true(typeof getQueue === 'function', 'is not a function')
})

test('emptyQueue() empties job queue', t => {
  t.true(typeof emptyQueue === 'function', 'is not a function')
})
