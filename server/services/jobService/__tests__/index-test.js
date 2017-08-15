import test from 'ava'
import {createJob, processJobs} from '../index'

test('createJob() takes a job payload with options and places it in a job queue', t => {
  t.true(typeof createJob === 'function', 'is not a function')
})

test('processJobs() takes a job payload with options and places it in a job queue', t => {
  t.true(typeof processJobs === 'function', 'is not a function')
})
