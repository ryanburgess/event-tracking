Event Tracking (Google Analytics)
=============
 
## Install
```js
npm install event-tracking --save-dev
```
## Use
```js
var eventTracking = require('event-tracking')();
```

Add the class `click-tracking` to an element that needs a event tracked in Google Analytics. Add `data-action` and `data-label` attributes that will update the action and label for in Google Analytics events.
```html
<a href="#" class="click-tracking" data-action="Menu" data-label="Header menu open">Menu</a>
```

## Release History
* 1.0.1: Update documentation.
* 1.0.0: Initial release.
 
## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)