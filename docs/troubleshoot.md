# Troubleshoot

## 1. Assets including js files are not loading

https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/

We need to add `pathPrefix` to `gatsby-config.js`. Then, use this build script, `gatsby build --prefix-paths`.

```js
module.exports = {
  pathPrefix: '/reponame',
}
```

## 2. Fonts weren't loading correctly

In the global style, we had to update the src url with `fonts/FredokaOne/FredokaOne-Regular.ttf` instead of `../fonts/...` or `/fonts/`. Then, the app start getting the fonts with the right url path including the prefixed path. Otherwise, it was trying to load the fonts from base URL.
