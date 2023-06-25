import './App.css';
import { useState } from 'react';

function randomNumber() { 
  return Math.floor(Math.random() * 8); 
}

const Button = (props) => <button onClick={props.handleClick}>{props.title}</button>

const Anecdotes = (props) => <div><h1>Quotes of the day</h1><p>"{props.anecdotes[props.num]}"</p><p className="votes">{props.votes} votes</p></div>

const AnecdoteHighestVote = (props) => {
  let highestVote = 0;
  props.votes.forEach(vote => {
    if (vote > highestVote) highestVote = vote;  
  });
  
  return(
    <><h1>Highest Voted Quote</h1><p>"{props.anecdotes[props.votes.indexOf(highestVote)]}"</p> <p className="votes">{props.votes[props.votes.indexOf(highestVote)]} votes</p></>
  );
}

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well."
  ]
  
  let randomAnecdote = randomNumber();
  let tempNum = 0;
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([
    0, 0, 0, 0, 0, 0, 0, 0
  ]);
  
  const handleButtonNext = () => {
    tempNum = anecdotes.indexOf(anecdotes[randomAnecdote]);
    randomAnecdote = randomNumber();
    while (randomAnecdote === tempNum) {
      randomAnecdote = randomNumber();
    } 
    setSelected(randomAnecdote);
  }
  
  const handleButtonVote = () => {
    let i = 0;
    const copy = votes.map(vote => {
      if (i === selected) {
        i++;
        return vote += 1;
       }
      else {
        i++;
        return vote;
       }
    });
    setVotes(copy);
  }
  
  
  return (
    <div className="flexboxColumn">
      < Anecdotes num={selected} anecdotes={anecdotes} votes={votes[selected]}/>
      <div className="flexboxRow">
        < Button title="Next Anecdote" handleClick={handleButtonNext} />
        < Button title="Vote" handleClick={handleButtonVote} />
      </div>
      < AnecdoteHighestVote anecdotes={anecdotes} votes={votes} />
    </div>
  );
}

export default App;
