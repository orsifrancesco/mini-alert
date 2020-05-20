# mini-alert

Just a small notification popup!

![miniAlert](https://user-images.githubusercontent.com/6490641/82397164-b21fb780-9a47-11ea-95d1-070022ac1f40.gif "mini-alert")

## Installation

```bash
$ npm install mini-alert
```

## Example

```js

  import miniAlert from 'mini-alert';
  import 'mini-alert/miniAlert.css';

  miniAlert({
    text: "Simple text!!"
  });
  
  miniAlert({
    overflow: true,         // <-- you can't "interact" with the page until the alert disappear
    time: 500,              // <-- milliseconds
    autoremove: true,       // <-- automatic remove
    size: 'large',          // <-- small, medium, large
    cartoon: true,          // <-- "cartoon effect" true/false
    limit: 4,               // <-- max number of alerts visible in the same time
    text: "Hello world!!"
  });
```

## Demo

[Just a example project where you can see it in action..](https://passwordonce.com)

## License

Licensed under MIT