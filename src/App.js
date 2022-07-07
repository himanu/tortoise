import { useEffect, useState } from 'react';
import './App.css';
import { getBestTime, getIdx, getIpStr, getRandom20Char, getTimer } from './utils';
import useSound from 'use-sound';
import winningSound from './Souds/cheers.wav';

function App() {

  const [random20Char, setRandom20Char] = useState(getRandom20Char());
  const [idx, setIdx] = useState(getIdx());
  const [timer, setTimer] = useState(getTimer());
  const [ipStr, setIpStr] = useState(getIpStr());
  const [timeOutId, setTimeOutId] = useState(null);
  const [bestTime, setBestTime] = useState(getBestTime());
  const [result, setResult] = useState('');
  const [cheers, { stopCheers }] = useSound(winningSound);
  const [loose, { stopLoose }] = useSound();
  function handleIpChange(e) {
    if (idx === 0 && !timeOutId) {
      let id;
      id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.5);
      }, 500);
      setTimeOutId(id);
    }
    const typedChar = (e.target.value)[idx];
    console.log('Hi ', typedChar);
    if (typedChar === random20Char[idx]) {
      if (idx === 19) {
        if (!bestTime || timer < bestTime) {
          setResult('Success!')
          setBestTime(timer);
          localStorage.setItem('bestTime', timer);
          cheers();
        } else {
          setResult('Better luck next time');
        }
        console.log("Show winner screen");
        clearInterval(timeOutId);
        setTimeOutId(null);
      }
      setIdx((prevIdx) => prevIdx + 1);
      setIpStr((prevIpStr) => prevIpStr + typedChar);
    } else {
      setTimer((prevTimer) => prevTimer + 0.5)
    }
  }

  function handleResetBtn() {
    stopCheers();
    stopLoose();
    clearInterval(timeOutId);
    setRandom20Char(getRandom20Char());
    setIdx(0);
    setTimer(0);
    setIpStr('');
    setTimeOutId(null);
    setResult('');
  }

  useEffect(() => {
    return () => {
      if (timeOutId) {
        clearInterval(timeOutId);
      }
    }
  }, []);
  return (
    <div className="App">
      <div className="header">
        <div className="big">Type the Alphabet</div>
        <div>
          Typing Game to see how fast you type. Timer starts when you do :)
        </div>
      </div>
      <div className="whitepad">
        {idx <= 19 ? random20Char[idx] : result}
      </div>
      <div className="timerScreen">
        <div className="timer">
          Time: {idx <= 19 ? Math.floor(timer) : timer} s
        </div>
        <div>
          My Best Time: {bestTime ? bestTime + ' s' : 'NA'}
        </div>
      </div>
      <div className="keyboard">
        <input className="typeBox" type="text" placeholder="Type Here" value={ipStr} onChange={handleIpChange}></input>
        <button className="resetBtn" type="button" onClick={handleResetBtn}> {idx <= 19 ? 'Reset' : 'Replay'} </button>
      </div>
    </div>
  );
}

export default App;
