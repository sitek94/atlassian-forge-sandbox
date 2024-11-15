import { invokeRemote } from '@forge/api'

export const run = async (event, context) => {
  const res = await invokeRemote('mi-corazon', {
    path: `/api/public/bitbucket?name=bitbucketbot`,
    method: 'GET',
  })

  console.log(res)

  const json = await res.json()

  console.log(json)

  return {
    success: false,
    message: `Pull request #${event.pullrequest.id} is not ready to be merged.`,
  }
}
