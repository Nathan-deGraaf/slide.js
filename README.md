# slide.js

slide.js is a simple and customizable slider/carousel library for JavaScript.

## Features

- Easy to use
- Customizable
- Supports autoplay
- Pagination
- Responsive design

## Installation

You can install slide.js via npm:

```sh
npm install slide.js
```

## Usage
Include the slide.js CSS and JavaScript files in your project.

```sh
  <div class="slider" data-autoplay="false" data-paginate="true">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </div>
```

## JavaScript
The JavaScript file is automatically initialized on DOMContentLoaded, so you don't need to call any initialization function.

## Settings
You can customize the behavior of the slider using data attributes on the .slider element. Here are the available options:

| Option              | Type    | Default | Description                       |
|---------------------|---------|---------|-----------------------------------|
| data-autoplay       | boolean | false   | Enables or disables autoplay      |
| data-autoplay-speed | integer | 3000    | Speed of autoplay in milliseconds |
| data-paginate       | boolean | true    | Enables or disables pagination    |


This README provides clear and concise information on how to use and configure `slide.js`. If you have any additional changes or features to include, feel free to let me know!