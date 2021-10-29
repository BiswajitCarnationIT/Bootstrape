import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Table } from 'react-bootstrap';
import TableComponent from './components/TableComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <Home/>
      <ButtonComponent/>
      <TableComponent/>
    </div>
  );
}

export default App;
