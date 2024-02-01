import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardmock.json"
import "@testing-library/jest-dom"


it("should render RestaurantCard component with props Data",()=>{
    render(<RestaurantCard resName={MOCK_DATA.resName} cuisine="Biryani" stars={MOCK_DATA.stars} image ={MOCK_DATA.image} time={MOCK_DATA.time}/>);
    const name=screen.getByText("Burger King");
    expect(name).toBeInTheDocument();

})

it("should render RestaurantCard component with promoted label",()=>{
    RestaurantCardWithPromotedLAbel=withPromotedLabel(RestaurantCard);
    render(<RestaurantCardWithPromotedLAbel resName={MOCK_DATA.resName} cuisine="Biryani" stars={MOCK_DATA.stars} image ={MOCK_DATA.image} time={MOCK_DATA.time}/>);
    const name=screen.getByText("Burger King");
    expect(name).toBeInTheDocument();

})