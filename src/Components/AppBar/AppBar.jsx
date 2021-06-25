import st from './AppBar.module.css';
import Container from '../Container';
import Navigation from '../Navigation';

const AppBar = () => {
  return (
    <header className={st.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
