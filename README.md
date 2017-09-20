# react-simple-line-icons

Simple react component for using [simple-line-icons](http://simplelineicons.com/) in React application.

## Installation
react-simple-line-icons is available as an [npm package](https://www.npmjs.com/package/react-simple-line-icons).

```sh
npm install react-simple-line-icons
```
or
```sh
yarn add react-simple-line-icons
```

## Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import SimpleLineIcon from 'react-simple-line-icons';

function App() {
  return (
    <SimpleLineIcon name="bulb" />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Options

Property	|Type	|Values  |  Description
|:---|:---|:---|:----
name |  String |  e.g. bulb |  the name of the icon, see [simple-line-icons](http://simplelineicons.com/) for list of all avaliable icons
color |  String |  e.g. white |  the color of the icon
size |  String | Large, Medium, Small | the size of the icon
style |  Object |   |  custom style object

## Support

Please [open an issue](https://github.com/shahafa/react-simple-line-icons/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/shahafa/react-simple-line-icons/compare/).

## License

This project is licensed under the terms of the
[MIT license](https://github.com/shahafa/react-simple-line-icons/blob/master/LICENSE)
