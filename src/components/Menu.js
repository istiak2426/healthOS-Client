import { Link, withRouter } from "react-router-dom";
import { signOut, isAuthenticated, userInfo } from "../utils/auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "blue" };
  } else {
    return { color: "grey" };
  }
};



const Menu = ({ history }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>

        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/login")}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/register")}
                to="/register"
              >
                Register
              </Link>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, `/${userInfo().role}/dashboard`)}
                to={`/${userInfo().role}/dashboard`}
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, `/customers`)}
                to={`/customers`}
              >
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, `/orders`)}
                to={`/orders`}
              >
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, `/transaction`)}
                to={`/transaction`}
              >
                Transactions
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, `/shop`)}
                to={`/shop`}
              >
                Shop Overview
              </Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer", color: "grey" }}
                onClick={() => {
                  signOut(() => {
                    history.push("/login");
                  });
                }}
              >
                {" "}
                Log Out
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default withRouter(Menu);
