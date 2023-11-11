import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import RoutesComp from './components/RoutesComp';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <RoutesComp />
        <Footer />
      </main>
    </div>
  );
}

export default App;
