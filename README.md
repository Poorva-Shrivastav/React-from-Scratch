!!Logo used in this project is for learning purpose only. No commercial usage is intended.

https://react.dev/reference/react/createElement
https://react.dev/reference/react-dom/client/createRoot

https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

https://parceljs.org/
https://browserslist.dev/

https://babeljs.io/

For CORS issue - https://corsproxy.io/?

<!-- Food Ordering App -->

- Header
- - logo
- - Nav bar
- Body
- -Search Bar
- - Restaurantcontainer
- - Restaurant card
- - img
- - Name od restaurant, star rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Contact

<!--  -->

# Types of Routing

-Client-side Routing
-Server-side Routing

<!--  -->

- https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

<!--  -->

- Chunking/Dynamic Bundling/ Lazy Loading/ Code Splitting/ Dynamic Bundling - all same
- https://react.dev/reference/react/lazy

Free CORS Proxy Server

- https://allorigins.win/

Redux Toolkit

- create add button
- build store using "configureStore" & connect store to app using Provider
- create a slice - createSlice
- dispatch action from button
- call the reducer function
- combine all reducers together in store
- wrap app with provider and pass store to it
- subcribe to store using selector

# Types of testing

- Unit testing
- Integration testing
- End to end testing - e2e testing

# Setting up testing

- Install React testing library
- Install jest
- Install Babel dependencies
- Configure Babel under babel.config.js
- npx jest --init - JS DOM
- install jsdom library
- npm i -D @babel/preset-react to enable writing JSX in the test cases
- Include @babel/preset-react inside babel config file
- npm i -D @testing-library/jest-dom

-How fetch works => fetch("...").then(json => json).then(data => data)

1. fetch function returns us a Promise, that returns us a JSON.
2. This JSON is again a function that returns us a promise
3. when this promise resolves, it gives us data

-add "watch-test": "jest --watch" to package.json to make it run continously like npm start

- act comes from react-dom/test-utils
- it returns a promise, so we await for act.
- it is a function, which takes a callback fn, which is again an async fn
- this async fn, returns renders, which renders our component
