import st from './Container.module.css';

function Container({ children }) {
  return <div className={st.container}>{children}</div>;
}

export default Container;
