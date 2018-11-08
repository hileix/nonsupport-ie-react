# `NonsupportIE`

react for nonsupport IE browser, and give a reminder

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { NonsupportIE } from 'nonsupport-ie';

class App extends React.Component {
  render() {
    return (
      <NonsupportIE
        devMode
        reminder="app is not support IE, please use other modern browser."
      >
        <div>APP content</div>
      </NonsupportIE>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## API

| property |        propType         | required |         default         |                                   description                                    |
| :------: | :---------------------: | :------: | :---------------------: | :------------------------------------------------------------------------------: |
| devMode  |         `bool`          |    -     |          false          |       when `devMode` is true, you can write `reminder` without IE browser        |
| reminder | `string` \| `ReactNode` |    -     | 'app is not support IE' | give user a reminder to use other browser or give browser download link directly |
