import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import store from "../../redux/store";
import "@testing-library/jest-dom";
import Header from "../../components/Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restautant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const recommendedContainer = screen.getByText("Recommended");
  expect(recommendedContainer).toBeInTheDocument();
});

test("should click add btn", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtn[0]);

  const addBtnVal = screen.getByText("1");
  expect(addBtnVal).toBeInTheDocument();
});

test("should render cart quantity from 0 to 1", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  expect(screen.getByText("🛒 1 items")).toBeInTheDocument();
});

test("should check complete flow", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });

  const addBtn = screen.getAllByText("ADD");
  fireEvent.click(addBtn[2]);

  expect(screen.getByText("🛒 2 items")).toBeInTheDocument();
});

test("should Cart component have 2 items", () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const cartitems = screen.getAllByTestId("cartitem");
  expect(cartitems.length).toBe(2);
});

test("should Cart component have 2 items", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  const cartitems = screen.getAllByTestId("cartitem");
  expect(cartitems.length).toBe(2);

  const addBtn = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addBtn[0]);

  const cartIcon = screen.getByText("🛒 3 items");
  expect(cartIcon).toBeInTheDocument();
});
