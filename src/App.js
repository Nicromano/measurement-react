import logo from './logo.svg';
import './App.css';
import Measurements from './components/Measurements/Measurements'
function App() {

  
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center minh-100">
        <div className="col-md-auto ">
            <Measurements />
        </div>
      </div>
    </div>
  );
}

export default App;
