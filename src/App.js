import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Votes from './components/Votes';
import Contact from './components/Contact'
import Grade from './components/Grade'

function App() {
  let gr = {
    title: "Quiz",
    score: 9,
    total: 10
  };
  return (
    <div className="App">

      <Grade title="Worksheet" score={4} total={10} passing={false} />
      <Grade title={gr.title} score={gr.score} total={gr.total} passing={gr.score >= 6} />

      <Contact name="Tim Sr" age={63} />
      <Contact name="Tim Jr" age={32} />

      <Counter />
      <Timer />
      <Votes />

    </div>
  );
}

export default App;
