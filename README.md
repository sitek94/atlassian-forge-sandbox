# Atlassian Forge Sandbox

## Resources

- [setting icons](https://developer.atlassian.com/platform/forge/custom-ui/#icons)
- [custom merge checks](https://support.atlassian.com/bitbucket-cloud/docs/set-up-and-use-custom-merge-checks/)
  - required checks are available only on premium plan (if you don't have it, it'll be _recommended_)
- accessing remote backend
  - [request headers](https://developer.atlassian.com/platform/forge/remote/essentials/#request-headers) that are added to requests by Forge
  - [verifying requests](https://developer.atlassian.com/platform/forge/remote/essentials/#verifying-remote-requests)
  - [example: forge app calling remote backend](https://bitbucket.org/atlassian/forge-remote-app/src/main/)
  - [example: remote backend](https://bitbucket.org/atlassian/forge-remote-nodejs/src/main/)
- [bitbucket rest api](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-pullrequests)
  - requests made with [requestBitbucket](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestbitbucket/) include `Authorization` header
- [manifest.yml](https://developer.atlassian.com/platform/forge/manifest-reference/)
  - [use environment variables in manifest](https://developer.atlassian.com/platform/forge/manifest-reference/variables/)
