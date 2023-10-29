import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedComponent } from "../Components/RestaurantCard";
import mockData from "../utils/mockData/mock.json";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "../utils/context/userDataContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore/store";

it("Should render RestaurantCard component with Props Data", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContextProvider>
          <RestaurantCard foodItem={mockData} />
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText("Lavonne");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
  const PromotedLabel = withPromotedComponent(RestaurantCard)
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContextProvider>
          <PromotedLabel foodItem={mockData}/>
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText("Prmoted");
  expect(name).toBeInTheDocument();
});
