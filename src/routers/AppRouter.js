import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; 
// use BrowserRouter once to create the new router and use Route for every single page by giving the route and what is to be done on that route
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />           
            <Switch>             
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} exact={true} />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;