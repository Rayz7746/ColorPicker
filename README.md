# React Color Picker

A simple and interactive color picker application built with React that allows users to:
- Select colors from a predefined palette
- Choose custom colors using a color input
- Automatically adjusts text color for optimal contrast


## Technologies Used

- React (Functional Components)
- React Hooks (useState, useEffect)
- CSS Modules
- W3C Color Contrast Algorithm

## How It Works

The application uses the W3C color contrast algorithm to determine whether white or black text provides better contrast against the selected background color. The formula calculates the perceived brightness of the color:

``` javascript
brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
```

- Values > 128 use black text (#333)

- Values ≤ 128 use white text (#fff)