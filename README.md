# React Hot Loading Karma Testing Boilerplate

Boilerplate for react components with hot loader for development and karma for testing.
It includes webpack config for production builds and a separate folder for tests.
Karma runs tests in Safari by default. For other browsers please install the respective
karma launcher from npm and change the karma config file.

Key packages and support:
- eslint
- babel
- karma
- webpack
- react
- react-hot-loader

### Usage

- npm install

For development server

```
npm start
# Open http://localhost:3000
```

### Linting

ESLint with React on the src folder only.

```
npm run lint
```

### Testing

This will start karma in single run mode and execute them in Safari.

```
npm test
```

This will auto watch all files for changes and rerun the tests.
```
npm run test_watch
```

### Production

This will compile the entry point components defined in webpack.config.prod to a `build` folder.

```
npm run build
```