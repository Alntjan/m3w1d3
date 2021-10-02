import React from 'react';
import('./style.css')
// This component wraps around our scores,
// so the scores are its children
function ResultsWrapper(props) {
  return (
    <div className="results-container">
      <h1>Results</h1>
      {props.children}
    </div>
  );
}

export default ResultsWrapper;
