import "@testing-library/jest-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("Should search ResList for Burger",async()=>{

    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
        ))
    
    const searchBtn=screen.getByRole("button",{name:"search"})
    const searchInput=screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"Burger"}})
    fireEvent.click(searchBtn)
    const cards=screen.getAllByTestId("resCard");
    expect(searchBtn).toBeInTheDocument();
    expect(cards.length).toBe(1);
})

it("Should filter top rated restaurants",async()=>{

    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
        ))
    
    const filterButton=screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(filterButton);
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1);
})