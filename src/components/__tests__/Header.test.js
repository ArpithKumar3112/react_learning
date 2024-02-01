import { Provider } from "react-redux"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../../utils/appStore"

describe("Header ",()=>{
    it("Should load Header Component with a login Button",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
        </BrowserRouter>)

        const loginButton =screen.getByRole("button",{name:"Login"});
        expect(loginButton).toBeInTheDocument();
    })

    it("Should change Login Button to Logout on Click",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
        </BrowserRouter>)

        const loginButton =screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton);
        const logoutButton=screen.getByRole("button",{name:"Logout"});
        expect(logoutButton).toBeInTheDocument();
    })
})