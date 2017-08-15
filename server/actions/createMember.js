import config from 'src/config'
import graphQLFetcher from 'src/server/util/graphql'

export default async function createMember(id, inviteCode) {
  const values = {id, inviteCode}
  try {
    await graphQLFetcher(config.server.echo.baseURL)({
      mutation: `mutation($values: InputMember!) { createMember(values: $values) {
        id
        inviteCode
      }}`,
      variables: values,
    })
  } catch (error) {
    throw error
  }
}
