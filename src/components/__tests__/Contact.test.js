import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Contact component should load properly", () => {
    render(<Contact/>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
});

test("Contact component should have two input fields and one button", ()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
})