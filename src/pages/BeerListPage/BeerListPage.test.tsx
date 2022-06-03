import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import BeerListPage from "./BeerListPage";

describe("Given a BeerLisPage component", () => {
  describe("When it's instanciated", () => {
    test("Then it should show a list item", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <BeerListPage />
          </Provider>
        </BrowserRouter>
      );
      const listItem = screen.getByRole("list");

      expect(listItem).toBeInTheDocument();
    });
  });
});