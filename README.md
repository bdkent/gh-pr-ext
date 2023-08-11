# [GitHub PR Check Browser Extension](https://github.com/bdkent/gh-pr-ext/)

A fun little browser extension to add additional UI to the pull request page so you can understand check statuses.

<img width="640" alt="Screenshot 2023-08-11 at 1 05 53 PM" src="https://github.com/bdkent/gh-pr-ext/assets/3629629/9bb56d64-2b31-4100-96f5-5ed70afdf990">



## Install

Find on browser add-on / extension stores.

- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/github-pr-check-status/)
- [Chrome Web Store](https://chrome.google.com/webstore/detail/ldddlenkajkonchccpkjapihmdgjgjop)

## Build

### Prerequisites

System must have the following installed:

- node
- yarn

### Directions

```shell
yarn install
yarn build
zip -r dist.zip dist/*
```

the generated `dist.zip` is the browser extension.
