import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import Login from '../components/Login';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'
import Navbar from "../components/Navbar"
import Leaderboard from "../components/Leaderboard"

describe('App', () => {
    const store = createStore(reducer, middleware);
    it('Login Page will have all expected fields', () => {
        var component = render(
        <Provider store={store}>
        <Router>
        <Login />
        </Router>
        </Provider>
        );

        
        

        var firstNameInput = component.getByTestId('username-input')
        var lastNameInput = component.getByTestId('password-input')
        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();

        
    });
    it('Expect alert to show when receiving wrong login entry', () => {
        var component = render(
        <Provider store={store}>
        <Router>
        <Login />
        </Router>
        </Provider>
        );

        
        
        var button =component.getByTestId('submit-button') 
        fireEvent.click(button)
        var alert = component.getByTestId('alert')
        
        
        expect(alert).toBeInTheDocument();

        
    });
    it('Navbar will have all expected fields', () => {
        var component = render(
        <Provider store={store}>
        <Router>
        <Navbar />
        </Router>
        </Provider>
        );

        
        

        var home = component.getByTestId('home')
        var New = component.getByTestId('new')
        var lb = component.getByTestId('leaderboard')
        var logout = component.getByTestId('logout')
        expect(home).toBeInTheDocument();
        expect(New).toBeInTheDocument();
        expect(lb).toBeInTheDocument();
        expect(logout).toBeInTheDocument();
      

        
    });
    it('Navbar will have all expected fields', () => {
        var component = render(
        <Provider store={store}>
        <Router>
        <Leaderboard />
        </Router>
        </Provider>
        );

        
        

        var user = component.getByTestId('user')
        var created = component.getByTestId('created')
        var answered = component.getByTestId('answered')
        
        expect(user).toBeInTheDocument();
        expect(created).toBeInTheDocument();
        expect(answered).toBeInTheDocument();
        
      

        
    });
    })


