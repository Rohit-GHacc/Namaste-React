import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import {Provider} from 'react-redux'
import appStore from '../../utils/appStore';
import {withOpenLabel} from '../RestaurantCard';

it("should render RestaurantCard component with props data ",()=>{
    render(
        <Provider store = {appStore}>
            <RestaurantCard resData = {MOCK_DATA}/>
        </Provider>);

    const nameElement = screen.getByText("Domino's Pizza");
    expect(nameElement).toBeInTheDocument();
})

it("should render RestaurantCard component with Open Label",()=>{
    const RestaurantCardOpenComp = withOpenLabel(RestaurantCard);
    render(
        <Provider store = {appStore}>
            <RestaurantCardOpenComp resData = {MOCK_DATA}/>
        </Provider>);

    const openLabel = screen.getByText("Open")
    expect(openLabel).toBeInTheDocument();
})