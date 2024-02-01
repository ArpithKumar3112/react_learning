import "@testing-library/jest-dom"
import { act, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"

global.fetch=jest.fn(()=>{
    Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should load retaurant menu component",async()=>{
    await act(async()=>{
        render(<RestaurantMenu/>)
    })

    const AccordianHeader=screen.getAllByText("Cards")
})