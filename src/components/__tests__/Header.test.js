import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  //   const loginBtn = screen.getByText("Login");  //not recommended

  expect(loginBtn).toBeInTheDocument();
});

test("should render header component with cart items zero", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItems = screen.getByText("🛒 0 items");
  const cartItems = screen.getByText(/🛒/); //checking by regex

  expect(cartItems).toBeInTheDocument();
});

test("should change login btn to logout btn onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
