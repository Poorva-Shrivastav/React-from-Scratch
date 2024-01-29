import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page testcases", () => {
  test("Should load contact us Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button in Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name in Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    //assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes in the Contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox"); //All for multiple elements
    //   console.log(inputBoxes.length); //returns an array

    expect(inputBoxes.length).toBe(2);
  });
});
