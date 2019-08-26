
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/kgarza/counter-usage-metrics)

[![npm version](https://badge.fury.io/js/counter-usage-metrics.svg)](https://badge.fury.io/js/counter-usage-metrics)
[![](https://data.jsdelivr.com/v1/package/npm/counter-usage-metrics/badge)](https://www.jsdelivr.com/package/npm/counter-usage-metrics)

# Counter Usage Metrics Web Component

TODO: Write a project description


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Installation



```html

<script src="https://unpkg.com/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/counter-usage-metrics/dist/counter-usage-metrics.min.js"></script>

```

## Usage


```html

<script src="https://unpkg.com/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/counter-usage-metrics/dist/counter-usage-metrics.min.js"></script>


<body>
  <counter-usage-metrics doi="10.7272/q6g15xs4"></counter-usage-metrics>
</body>


```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build --target wc --name data-metrics-badge 'src/components/DataMetricsBadge.vue'

npm publish

npm version patch -m "Upgrade to %s for reasons"
```

### Run your tests
```
yarn test:unit tests/
```

### Lints and fixes files
```
npm run lint
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
