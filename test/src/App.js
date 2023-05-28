import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>   
     <Header />
      <main className="py-3" >
          <Body ></Body>
      </main>
      <Footer />
      </>
  );
}

export default App;
