type BitbucketResource = {
  uuid: string
}

type PullRequestEvent = {
  id: number
}

/**
 * Merge checks are invoked by triggers.
 * https://developer.atlassian.com/platform/forge/manifest-reference/modules/bitbucket-merge-check/#triggers
 */
type Trigger = {
  type: 'pre-merge' | 'on-merge' | 'on-code-pushed'
}

export type CheckEvent = {
  workspace: BitbucketResource
  repository: BitbucketResource
  pullrequest: PullRequestEvent
  trigger: Trigger
}

export type ForgeContext = {
  installContext: string
  workspaceId: string
}

export type PullRequest = PullRequestEvent & {
  title: string
}

export type MergeCheckResponse = {
  success: boolean
  message?: string
}
