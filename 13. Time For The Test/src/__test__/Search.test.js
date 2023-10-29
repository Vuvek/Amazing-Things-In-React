
import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Components/Body";
import MOCK_DATA from "../utils/mockData/restaurantFood.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for Burger Text Input  ", async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const initialCards = screen.getAllByTestId("resCard")
  expect(initialCards.length).toBe(20)

  const searchButton = screen.getByRole("button",{name : "Search"})
  expect(searchButton).toBeInTheDocument()

  const searchInput = screen.getByTestId("searchInput")
  fireEvent.change(searchInput,{target : {value : "Chai"}})
  fireEvent.click(searchButton)

  const cards = screen.getAllByTestId("resCard")
  expect(cards.length).toBe(2)
});


it("Should Filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const initialCards = screen.getAllByTestId("resCard")
  expect(initialCards.length).toBe(20)

  const filterButton = screen.getByRole("button",{name : "Filter less 4 Rating"})
  fireEvent.click(filterButton) 
  const cards = screen.getAllByTestId("resCard")
  expect(cards.length).toBe(1)
});
