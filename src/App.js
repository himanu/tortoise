import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="big">Type the Alphabet</div>
        <div>
          Typing Game to see how fast you type. Timer starts when you do :)
        </div>
      </div>
      <div className="whitepad"></div>
      <div className="timerScreen">
        <div className="timer">
          Time: 0.000s
        </div>
        <div>
          My Best Time: 5s!
        </div>
      </div>
      <div className="keyboard">
        <input className="typeBox" type="text" placeholder="Type Here"></input>
        <button className="resetBtn" type="button"> Reset </button>
      </div>
    </div>
  );
}

export default App;
