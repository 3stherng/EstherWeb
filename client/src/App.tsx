import AppRoutes from './routes';
import { Container } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Container className="my-4">
        <AppRoutes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
