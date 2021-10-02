import React from 'react';
import Attendance from './Attendance/Attendance';

const scoreStyle = {
  backgroundColor: 'darkblue',
  fontSize: '30px',
  padding: '1rem',
  color: 'white',
};

export default function Score({
  team1 = 'Home Team',
  team2,
  score1,
  score2,
  attendance,
}) {
  // const { team1, team2, score2, score1 } = props;
  return (
    <p className="score" style={scoreStyle}>
      {team1} {score1} - {score2} {team2}
      <Attendance number={attendance} />
    </p>
  );
}
