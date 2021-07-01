import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import st from './SubNav.module.css';

const SubNav = () => {
  const { url } = useRouteMatch();
  const { state } = useLocation();
  return (
    <div>
      <NavLink
        to={{
          pathname: `${url}/cast`,
          state,
        }}
        className={st.subViews}
        activeClassName={st.active}
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state,
        }}
        className={st.subViews}
        activeClassName={st.active}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default SubNav;
