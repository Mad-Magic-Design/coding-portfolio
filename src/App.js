import './App.css';
import './styles/colors.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolio/>
     
    </div>
  );
}

export default App;
