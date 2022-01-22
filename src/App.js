import logo from './logo.svg';
import './App.css';
import teams from "./teams.json"
import {Table} from "./components/Table"

function App() {
  console.log(teams)

  return (
    <div className="App">
      <header className="App-header">
        <Table teams={teams.sort((t1, t2) => t2.points - t1.points)}></Table>
      </header>
    </div>
  );
}

export default App;
