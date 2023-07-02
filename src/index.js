import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const MovieList=[
  {
    id:1,
    movieName:'AAAA',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'Tamil',
    duration:'2h 30m'
  },
  {
    id:2,
    movieName:'BBBB',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'English',
    duration:'2h 40m'
  },
  {
    id:3,
    movieName:'CCCC',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'Hindi',
    duration:'2h 20m'
  },
  {
    id:4,
    movieName:'DDDD',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'Tamil',
    duration:'2h 40m'
  },
  {
    id:5,
    movieName:'EEEE',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'Telugu',
    duration:'2h 20m'
  },
  {
    id:6,
    movieName:'FFFF',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'Telugu',
    duration:'2h 20m'
  },
  {
    id:7,
    movieName:'GGGG',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rNRs8pHOjOVhlNpwPoPnDrXT4H6eF3O4g&usqp=CAU',
    language:'Telugu',
    duration:'2h 20m'
  }
];


// ReactDOM.createRoot(document.getElementById('root')).root.render(<App />)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App MovieList={MovieList}/>
  </React.StrictMode>
);

