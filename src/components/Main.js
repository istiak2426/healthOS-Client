import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../components/protecteRoutes/PrivateRoute";
import AdminRoute from "../components/protecteRoutes/AdminRoute";
import Home from "./home/Home";
import Login from "./user/Login";
import Register from "./user/Register";
import ProductDetails from "./home/ProductDetails";
import Dashboard from "./user/Dashboard";
import AdminDashboard from "./admin/AdminDashboard";
import CreateCategory from "./admin/CreateCategory";
import CreateProduct from "./admin/CreateProduct";
import Customers from '../components/customers/Customers'

import Orders from '../components/orders/Orders'
import Transaction from "../components/transaction/Transaction";
import Shop from "../components/shop/Shop";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <PrivateRoute exact path="/user/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/customers">
          <Customers />
        </PrivateRoute>
        <PrivateRoute exact path="/orders">
          <Orders />
        </PrivateRoute>

        <PrivateRoute exact path="/transaction">
          <Transaction />
        </PrivateRoute>

        <PrivateRoute exact path="/shop">
          <Shop />
        </PrivateRoute>

        <AdminRoute exact path="/admin/dashboard">
          <AdminDashboard />
        </AdminRoute>
        <AdminRoute exact path="/create/category">
          <CreateCategory />
        </AdminRoute>
        <AdminRoute exact path="/create/product">
          <CreateProduct />
        </AdminRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Main;
