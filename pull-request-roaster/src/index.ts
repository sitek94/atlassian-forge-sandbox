import api, { invokeRemote, route } from '@forge/api'
import { CheckEvent, ForgeContext } from './forge.types'
import { BitbucketPullRequest } from './bitbucket.types'

export const run = async (event: CheckEvent, context: ForgeContext) => {
  const workspaceUuid = event.workspace.uuid
  const repoUuid = event.repository.uuid
  const prId = event.pullrequest.id

  const prContext = `${workspaceUuid}/${repoUuid}/${prId}`
  console.log(`Received pull request event: ${prContext}`)

  // We use the fetch API to get the pull request from Bitbucket Cloud.
  // https://developer.atlassian.com/platform/forge/runtime-reference/product-fetch-api/
  const res = await api
    .asApp()
    .requestBitbucket(
      route`/2.0/repositories/${workspaceUuid}/${repoUuid}/pullrequests/${prId}`,
    )
  const pr: BitbucketPullRequest = await res.json()

  const { title, description } = pr

  const response = await invokeRemote('remote-backend-dev', {
    path: `/bitbucket`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true',
    },
    body: JSON.stringify({ title, description }),
  })
  const { success, message } = await response.json()

  const commentRes = await api
    .asApp()
    .requestBitbucket(
      route`/2.0/repositories/${workspaceUuid}/${repoUuid}/pullrequests/${prId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: {
            raw: success
              ? `Congrats, you finally got it BYKU! 💪`
              : `**Sorry brah!** 🤷\n\nBetter read this:\n[Pull Request Naming Conventions](https://namingconvention.org/git/pull-request-naming.html)`,
          },
        }),
      },
    )

  console.log(commentRes)

  console.log(await commentRes.text())

  console.log({ success, message })

  return { success, message }
}
