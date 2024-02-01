import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact us Page TEst Case",()=>{
    test("should load contact us component",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading")
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("should load button inside contact component",()=>{
        render(<Contact/>);
        const button=screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("should load input name inside contact component",()=>{
        render(<Contact/>);
        const inputName=screen.getByPlaceholderText("name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    it("should load 2 input boxes inside contact component",()=>{
        render(<Contact/>);
        const inputBoxes=screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
})
