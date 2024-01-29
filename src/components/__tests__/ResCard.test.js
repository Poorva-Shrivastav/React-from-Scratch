import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render ResCard component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restName = screen.getByText("Wow! Momo");

  expect(restName).toBeInTheDocument();
});
