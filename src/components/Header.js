import { authActions } from "../store/Slicer/AuthSlicer";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const login = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {login && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
