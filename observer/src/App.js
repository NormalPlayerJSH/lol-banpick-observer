import ScoreBoard from "./components/ScoreBoard"
import BanPick from "./components/BanPick"
import './App.css';

function App() {
  return (
    <div className="App">
      <ScoreBoard></ScoreBoard>
      <div className="banpicks">
        <BanPick side="blue"></BanPick>
        <BanPick side="red"></BanPick>
      </div>
    </div>
  );
}

export default App;
