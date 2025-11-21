import {render,screen} from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockRestList.json'
import React, {act} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { fireEvent } from '@testing-library/dom';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search restaurants list for burger input",async ()=>{
    await act(async()=> render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Body/>
            </Provider>
        </BrowserRouter>
    ));
    let cards = screen.getAllByTestId("res-card");
    expect(cards.length).toBe(20);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("search-input");
    
    fireEvent.change(searchInput, {target: {value: "burger"}});
    fireEvent.click(searchBtn);
    cards = screen.getAllByTestId("res-card");

    expect(cards.length).toBe(1);
})

//complete it =>   COMPLETED
it("Should filter top rated restaurants",async ()=>{
    await act(async()=> render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Body/>
            </Provider>
        </BrowserRouter>
    ));
    const cardsBeforeFilter = screen.getAllByTestId("res-card")
    expect(cardsBeforeFilter.length).toBe(20);

    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(filterBtn);
    expect(screen.getAllByTestId("res-card").length).toBe(7);
})