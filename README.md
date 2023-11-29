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

Types of Routing
-Client-side Routing
-Server-side Routing

Class Based Component
-super(props)
-Github user API - https://docs.github.com/en/rest/users?apiVersion=2022-11-28

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

-Why async callbacks cannot be used in useEffect
Let's understand the reasons why an asynchronous callback function cannot be called directly from a useEffect() hook. This is because the useEffect hook expects its effect function to return either a cleanup function or nothing at all. This is due to the useEffect() hook's callback function's asynchronous execution and lack of blocking. Therefore, we must follow a specific pattern if we want to call an asynchronous function inside the useEffect() hook.
