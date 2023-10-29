import { fireEvent,screen,render } from "@testing-library/react";
import MOCK_DATA from "../utils/mockData/restaurantMenu.json";
import RestrauntMenu from "../Components/RestrauntMenu";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore/store";
import { act } from "react-dom/test-utils";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import Cart from '../Components/Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("CRISPY DAYS (SAVE UPTO 61%) (2)");
  expect(accordianHeader).toBeInTheDocument();
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
  const addBtns = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument()

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument()

  const clickCart = screen.getByRole("link",{name : "Cart (2 Items)"})
  fireEvent.click(clickCart)

  const cartData = screen.getAllByTestId("cartItem")
  expect(cartData.length).toBe(2)

  const clearCartButton = screen.getByRole("button",{name : "Clear Cart"})
  fireEvent.click(clearCartButton)

  expect(screen.getByText("Please Add Product In Cart, Your Cart is emplty")).toBeInTheDocument()
});
