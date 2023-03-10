import React from "react";
import { render, screen } from "@testing-library/react";

import DonationsPage from "../DonationsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders donations page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DonationsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("donations-datatable")).toBeInTheDocument();
    expect(screen.getByRole("donations-add-button")).toBeInTheDocument();
});
