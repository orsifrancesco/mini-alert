# mini-alert

Just a small javascript notification popup for ES6 and/or React.

![miniAlert](https://user-images.githubusercontent.com/6490641/82397164-b21fb780-9a47-11ea-95d1-070022ac1f40.gif "mini-alert")

## Installation

```bash
$ npm install mini-alert
```

## Examples

```jsx

  import miniAlert from 'mini-alert';
  import 'mini-alert/miniAlert.css';
  // import 'mini-alert/miniAlert.scss'; // <!-- SCSS file (optional)

  miniAlert({
    text: "Simple text!!"
  });

  function handleAlert() {
  
    miniAlert({
      overflow: true,         // <-- disable behind the alert
      autoremove: true,       // <-- automatic remove
      time: 500,              // <-- milliseconds
      size: 'large',          // <-- small, medium, large
      cartoon: true,          // <-- "cartoon effect" true/false
      limit: 4,               // <-- max alerts visible at the same time
      text: "Hello world!!"
    });

  }

  function App() {

    return (
      <div>
        <button onClick={handleAlert}>Click me!!</button>
      </div>
    );

  }

```

## Demo

[Just a example project where you can see miniAlert in action..](https://passwordonce.com)

## License

Licensed under MIT