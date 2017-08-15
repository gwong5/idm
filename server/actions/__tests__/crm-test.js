import test from 'ava'
import {findContactByEmails, addIdmToCrm} from '../crm'

test('findContactByEmails() takes a collection of emails and hands them to a util function', t => {
  t.true(typeof findContactByEmails === 'function', 'findContactByEmails is not a function')
})

test('addIdmToCrm() takes idmId and crmVid, and passes them to crm service', t => {
  t.true(typeof addIdmToCrm === 'function', 'addIdmToCrm is not a function')
})
