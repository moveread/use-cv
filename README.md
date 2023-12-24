# useCv
React + Typescript Hooks API for OpenCV.js

## Why

1. Lazy loading
2. Type defs -> awesome linting

## Usage

```jsx
// provider
import { OpenCvProiver } from 'use-cv';
function App() {
    return (
        <OpenCvProvider>
            <Component />
        </OpenCvProvider>
    )
}

// context hook
import { useOpenCv } from 'use-cv';
function Component() {
    const { cv } = useOpenCv();
}

// type defs
import { Mat } from 'use-cv';
```

## Example
`example` is a simple react app perspective transforming an image
- `cd example && npm start` to run locally

## Credits

- Type defs from [opencv-ts](https://www.npmjs.com/package/opencv-ts)
- Hooks API from [opencv-react](https://www.npmjs.com/package/opencv-react)

> Note: this package is not actively maintained. It is highly useful and hence we made it public. Feel free to clone, modify and republish.