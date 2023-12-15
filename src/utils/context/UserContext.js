import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({
  loggedInUser: "Annonymous User",
});

const UpdateUserContext = createContext({
  loggedInUser: "Annonymous User",
});

//custom hook
export const useUserContext = () => useContext(UserContext);
export const useUpdateUserContext = () => useContext(UpdateUserContext);

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState();

  const clickHandler = () => {
    const data = {
      name: "Poorva",
    };
    setUserName(data.name);
    console.log("clicked");
  };

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <UpdateUserContext.Provider value={{ clickHandler }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};
