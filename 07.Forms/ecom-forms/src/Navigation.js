import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import ProductList from './product-list';
import ProductPage from './product-page';
import ErrorPage from './error-page';
import ChekoutPage from './checkout-page';

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={ProductList} />
                <Route path='/product/:id' component={ProductPage} />
                <Route path='/checkout' component={ChekoutPage} />
                <Route component={ErrorPage} />
                {/* <Route path='/product/test' component={ProductPage} /> */}
            </Switch>
        </Router>
    )
}

export default Navigation