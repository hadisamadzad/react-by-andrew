import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Here is dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        Here is create expense
    </div>
);

const EditExpensePage = () => (
    <div>
        Here is edit expense
    </div>
);

const HelpPage = () => (
    <div>
        Here is help
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>-
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>-
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>-
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const NotFoundPage = () => (
    <div>
        Not Found - 404 => Go to <Link to="/">Home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));