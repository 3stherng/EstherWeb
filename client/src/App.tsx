import NavigationBar from './components/Navbar';
import AppRoutes from './routes';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavigationBar />
      <Container className="my-4">
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
