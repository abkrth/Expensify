import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom'; 
// use BrowserRouter once to create the new router and use Route for every single page by giving the route and what is to be done on that route
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>       
            <Switch>     
                <PublicRoute path="/" component={LoginPage} exact={true} />        
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;