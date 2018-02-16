## React Feather Icons

[![npm](https://img.shields.io/npm/v/react-feather.svg)](https://www.npmjs.com/package/react-feather)

#### Simply beautiful SVG icons as React components.
Designed by [colebemis](https://github.com/colebemis/) on a 24x24 grid with an emphasis on functionality, consistency and simplicity.

### Installation
    npm install react-feather --save

### Usage

```javascript
import { Camera } from 'react-feather';

class MyClass extends React.Component {
  render() {
    return <Camera />
  }
}
```
If you are using WebPack, you can import only one icon.
```javascript
import Camera from 'react-feather/dist/icons/camera';

class MyClass extends React.Component {
  render() {
    return <Camera />
  }
}
```
If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Camera = require('react-feather/dist/icons/camera').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Camera />
    );
  }
});
```
You can also include the whole icon pack:

```javascript
import * as Icon from 'react-feather';

class MyClass extends React.Component {
  render() {
    return <Icon.Camera />
  }
}
```
Icons can be configured with inline props:
```javascript
<Icon.AlertCircle color="red" size={48} />
```
