import logo from './logo.svg';
import './App.css';
import Measurements from './components/Measurements/Measurements'
function App() {

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-auto mx-auto ">
            <Measurements />
        </div>
      </div>
    </div>
  );
}

export default App;
