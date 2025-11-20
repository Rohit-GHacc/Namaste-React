import React from 'react'
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {Provider} from 'react-redux'
import appStore from '../../utils/appStore'
import {BrowserRouter} from 'react-router-dom'
import Header from '../Header'

it("Should render Header component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>);
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

})