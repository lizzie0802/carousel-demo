import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from "./carousel";
function App() {
  const beforeChange = (current: number, next: number) => {
    console.log(current, next)
  }
  const afterChange = (current: number) => {
    console.log(current)
  }

  return (
    <div className="App">
      <Carousel width={100} beforeChange={beforeChange} afterChange={afterChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
