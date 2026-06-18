# Writing Custom Plugins

```js
const plugin = require("tailwindcss/plugin");
module.exports = plugin(function ({ addUtilities, addComponents, theme }) {
  addUtilities({ ".content-auto": { "content-visibility": "auto" } });
});
```
