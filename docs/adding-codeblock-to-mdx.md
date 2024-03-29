# Adding code block

We can use different themes (see https://prismjs.com/). List of themes (https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes)

```js
require('prismjs/themes/prism-tomorrow.css')
require('prismjs/themes/prism-okaidia.css')
require('prismjs/themes/prism-solarizedlight.css')
...
```

Trying to add code block to gatsby, but not working. To revert, we can uninstall the modules and remove the config in `gatsby-config.js` and the import in `gatsby-browser.js`.

# Install

```bash
# the latest (7.9) needs node > 18. So, stick to node 16 for now.
# https://www.npmjs.com/package/gatsby-remark-prismjs?activeTab=versions
yarn add gatsby-remark-prismjs@6.25.0

# This works with node 16
# https://www.npmjs.com/package/gatsby-transformer-remark?activeTab=versions
yarn add gatsby-transformer-remark@5.25.1 prismjs
```

Then, configure in `gatsby-config.js`

```js
{
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-prismjs',
        options: {
          ...
        }
      },
    ],
  },
},
```
