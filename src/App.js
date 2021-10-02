// import logo from './logo.svg';
import ResultsWrapper from './components/ResultsWrapper';
import Score from './components/Score';
import ReactPlayer from 'react-player';

import './App.css';

const scores = [
  {
    home: 'Man Utd',
    away: 'Liverpool',
    homeScore: 4,
    awayScore: 1,
    attendance: 65000,
  },
  {
    home: 'Man Utd',
    away: 'Chelsea',
    homeScore: 3,
    awayScore: 0,
    attendance: 32523,
  },
  {
    home: 'Man Utd',
    away: 'Man City',
    homeScore: 2,
    awayScore: 1,
    attendance: 75888,
  },
];

function App() {
  return (
    <div className="">
      <ReactPlayer url="https://youtu.be/dQw4w9WgXcQ?t=43" playing />
      <ResultsWrapper>
        {scores.map((score) => {
          return (
            <Score
              team1={score.home}
              score1={score.homeScore}
              team2={score.away}
              score2={score.awayScore}
              attendance={score.attendance}
            />
          );
        })}
      </ResultsWrapper>
    </div>
  );
}

export default App;
