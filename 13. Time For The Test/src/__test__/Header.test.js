const { render } = require("@testing-library/react");
import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Components/Header";
import appStore from "../utils/appStore/store";
import {BrowserRouter} from "react-router-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button',{name : 'Login'})
// const loginButton = screen.getByText('Login')
  expect(loginButton).toBeInTheDocument()
});


it("Should load Header Component with Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0 Items)")
  expect(cartItems).toBeInTheDocument()
});


it("Should load Header Component with Cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument()
});

it("Should Change to Login button after on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name : "Login"})
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole('button',{name : 'Logout'})
  expect(logoutButton).toBeInTheDocument()
});
