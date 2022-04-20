import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { User } from './requests';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import AuctionIndexPage from './components/AuctionIndexPage'
import NewAuctionPage from './components/NewAuctionPage';
import NotFoundPage from './components/NotFoundPage';
import AuctionShowPage from './components/AuctionShowPage';
import WelcomePage from './components/WelcomePage';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser();
    }, []);

    

    const getCurrentUser = () => {
        return User.current().then((user) => {
            if (user?.id) {
                setUser(user);
                console.log(`current user ${user.email}`)
            }
        });
    };

    const onSignOut = () => {
        setUser(null);
    };

    return (
        <BrowserRouter>
            <NavBar currentUser={user} onSignOut={onSignOut} />

            <Switch>
                <Route exact path='/auctions' component={AuctionIndexPage} />
                <Route                     
                    path='/sign_in'
                    render={(routeProps) => (
                        <SignInPage {...routeProps} onSignIn={getCurrentUser} />
                    )}
                />
                <Route
                     
                    path='/sign_up'
                    render={(routeProps) => (
                        <SignUpPage {...routeProps} onSignUp={getCurrentUser} />
                    )}
                />
                <Route exact path='/welcome' component={WelcomePage} />
                <Route exact path='/auctions/:id' component={AuctionShowPage} />
                <Route
                     
                    exact
                    path='/new_auction'
                    component={NewAuctionPage}
                ></Route>
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
