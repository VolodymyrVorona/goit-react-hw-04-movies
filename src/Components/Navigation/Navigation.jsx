import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import st from './Navigation.module.css';

const Navigation = () => (
  <nav className="nav">
    <ul className={st.NavList}>
      <li className={st.NavListItem}>
        <NavLink
          exact
          to={routes.home}
          className={st.NavLink}
          activeClassName={st.NavLink__active}
        >
          Home
        </NavLink>
      </li>
      <li className={st.NavListItem}>
        <NavLink
          to={routes.movies}
          className={st.NavLink}
          activeClassName={st.NavLink__active}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
