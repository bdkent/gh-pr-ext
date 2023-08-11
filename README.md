# [GitHub PR Check Browser Extension](https://github.com/bdkent/gh-pr-ext/)

A fun little browser extension to add additional UI to the pull request page so you can understand check statuses.

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