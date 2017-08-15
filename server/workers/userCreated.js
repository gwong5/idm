import {connect} from 'src/db'
import {findContactByEmails, addIdmToCrm} from 'src/server/actions/crm'
import createMember from 'src/server/actions/createMember'

const r = connect()

export function start() {
  const jobService = require('src/server/services/jobService')
  jobService.processJobs('userCreated', processUserCreated)
}

export async function processUserCreated(idmUser) {
  try {
    const contactVid = (await findContactByEmails(idmUser.emails)).vid

    console.log(`CRM Match Found: Syncing IDM user ${idmUser.id} with CRM contact ${contactVid}`)

    await r.table('users')
      .get(idmUser.id)
      .update({hubspotContactId: contactVid})

    await addIdmToCrm(idmUser.id, contactVid)
    await createMember(idmUser.id, idmUser.inviteCode)
  } catch (error) {
    throw new Error(`Attempt to sync user data with CRM for ${idmUser.name} failed.`)
  }
}
